/**
 * Peg Animate — Animation engine for Peg Design System
 * Reads declarative attributes on slide elements and plays entrance animations.
 * Compatible with deck-stage.js slidechange events.
 */
(function () {
  const PegAnimate = {
    /**
     * Initialize the animation engine.
     * @param {string|HTMLElement} deckSelector - CSS selector or element for deck-stage
     * @param {Object} options
     */
    init(deckSelector, options = {}) {
      const deck = typeof deckSelector === 'string'
        ? document.querySelector(deckSelector)
        : deckSelector;
      if (!deck) return;

      this._deck = deck;
      this._options = Object.assign({
        reducedMotion: false,
        defaultEasing: 'var(--ease-reveal, cubic-bezier(0.2, 0.65, 0.2, 1))',
        defaultDuration: 820,
      }, options);

      // Listen for slide changes
      deck.addEventListener('slidechange', (e) => {
        const { slide, index, reason } = e.detail;
        if (slide) this.play(slide, index);
      });

      const playActive = () => {
        const activeSlide = deck.querySelector('[data-deck-active]');
        if (!activeSlide) return false;
        const idx = Array.from(deck.children).indexOf(activeSlide);
        this.play(activeSlide, idx);
        return true;
      };

      const playWhenReady = () => requestAnimationFrame(playActive);
      if (deck.hasAttribute('data-fonts-pending')) {
        const observer = new MutationObserver(() => {
          if (deck.hasAttribute('data-fonts-pending')) return;
          observer.disconnect();
          playWhenReady();
        });
        observer.observe(deck, { attributes: true, attributeFilter: ['data-fonts-pending'] });
      } else {
        playWhenReady();
      }
    },

    /**
     * Play entrance animations for a slide.
     * @param {HTMLElement} slide
     * @param {number} index
     */
    play(slide, index) {
      if (!slide || !this._canMove()) return;

      // 1. Build animations (entrance effects)
      const buildEls = slide.querySelectorAll('[data-peg-animate], .build');
      buildEls.forEach((el) => this._animateBuild(el));

      // 2. Count-up animations
      const countEls = slide.querySelectorAll('[data-peg-count], .count');
      countEls.forEach((el) => this._animateCount(el));

      const barEls = slide.querySelectorAll('[data-peg-bar], .bar-fill, .progress-fill');
      barEls.forEach((el) => this._animateDataBar(el));

      // 4. Special slide-specific animations (e.g., depeg SVG)
      this._playSpecialAnimations(slide, index);
    },

    /** Check if animations should run (visible, not noscale, not reduced-motion) */
    _canMove() {
      if (!this._deck) return false;
      return document.visibilityState === 'visible' &&
        !this._deck.hasAttribute('noscale') &&
        !matchMedia('(prefers-reduced-motion:reduce)').matches;
    },

    /** Animate a single build element */
    _animateBuild(el) {
      // Determine animation type
      const type = el.getAttribute('data-peg-animate') ||
        (el.classList.contains('build') ? 'fade-up' : null);
      if (!type) return;

      // Determine delay
      let delay = 0;
      if (el.hasAttribute('data-peg-delay')) {
        delay = parseInt(el.getAttribute('data-peg-delay'), 10);
      } else if (el.classList.contains('build')) {
        // Backward compat: .build.d1 .build.d2 etc.
        delay = this._delayFromClass(el);
      }

      // Stagger: if parent has data-peg-stagger, add incremental delay
      const stagger = el.parentElement?.getAttribute('data-peg-stagger');
      if (stagger && !el.hasAttribute('data-peg-delay')) {
        const siblings = Array.from(el.parentElement.children)
          .filter(c => c.hasAttribute('data-peg-animate') || c.classList.contains('build'));
        const idx = siblings.indexOf(el);
        if (idx >= 0) delay += parseInt(stagger, 10) * idx;
      }

      if (type === 'letter-spring') {
        this._animateLetters(el, delay);
        return;
      }

      const keyframes = this._keyframesForType(type);
      if (!keyframes) return;

      const duration = parseInt(el.getAttribute('data-peg-duration'), 10) || this._options.defaultDuration;
      const easing = el.getAttribute('data-peg-easing') || this._options.defaultEasing;

      el.animate(keyframes, { duration, delay, easing, fill: 'backwards' });
    },

    /** Get delay from .build.dN class */
    _delayFromClass(el) {
      if (el.classList.contains('d1')) return 80;
      if (el.classList.contains('d2')) return 200;
      if (el.classList.contains('d3')) return 320;
      if (el.classList.contains('d4')) return 440;
      if (el.classList.contains('d5')) return 560;
      return 0;
    },

    _animateLetters(el, delay) {
      if (!el.dataset.pegLettersReady) {
        const text = el.textContent;
        el.dataset.pegLettersText = text;
        el.textContent = '';
        Array.from(text).forEach((char) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.display = 'inline-block';
          span.style.whiteSpace = 'pre';
          el.appendChild(span);
        });
        el.dataset.pegLettersReady = 'true';
      }

      const duration = parseInt(el.getAttribute('data-peg-duration'), 10) || 720;
      const stagger = parseInt(el.getAttribute('data-peg-letter-stagger'), 10) || 34;
      const easing = el.getAttribute('data-peg-easing') || 'cubic-bezier(0.34, 1.56, 0.64, 1)';

      Array.from(el.children).forEach((span, index) => {
        span.animate([
          { opacity: 0, transform: 'translateY(0.72em) rotate(3deg)' },
          { opacity: 1, transform: 'none' }
        ], { duration, delay: delay + index * stagger, easing, fill: 'backwards' });
      });
    },

    /** Return keyframes for animation type */
    _keyframesForType(type) {
      switch (type) {
        case 'fade-up':
          return [
            { opacity: 0, transform: 'translateY(22px)' },
            { opacity: 1, transform: 'none' }
          ];
        case 'scale-in':
          return [
            { opacity: 0, transform: 'scale(0.8)' },
            { opacity: 1, transform: 'none' }
          ];
        case 'blur-in':
          return [
            { opacity: 0, filter: 'blur(8px)' },
            { opacity: 1, filter: 'none' }
          ];
        case 'reveal-right':
          return [
            { opacity: 0, transform: 'translateX(30px)' },
            { opacity: 1, transform: 'none' }
          ];
        default:
          return null;
      }
    },

    /** Animate a count-up element */
    _animateCount(el) {
      const to = parseFloat(el.dataset.to ?? el.dataset.pegCountTo ?? '0');
      const from = parseFloat(el.dataset.from ?? el.dataset.pegCountFrom ?? '0');
      const dec = parseInt(el.dataset.dec ?? el.dataset.pegCountDec ?? '0', 10);
      const pre = el.dataset.pre ?? el.dataset.pegCountPre ?? '';
      const suf = el.dataset.suf ?? el.dataset.pegCountSuf ?? '';
      const dur = parseInt(el.dataset.cdur ?? el.dataset.pegCountDur ?? '900', 10);
      const delay = parseInt(el.dataset.cdelay ?? el.dataset.pegCountDelay ?? '0', 10);

      const fmt = (v) => pre + v.toLocaleString('en-US', {
        minimumFractionDigits: dec, maximumFractionDigits: dec
      }) + suf;

      const t0 = performance.now() + delay;
      el.textContent = fmt(from);

      const frame = (now) => {
        let t = (now - t0) / dur;
        if (t < 0) { requestAnimationFrame(frame); return; }
        if (t >= 1) { el.textContent = fmt(to); return; }
        const e = 1 - Math.pow(1 - t, 3); // ease-out cubic
        el.textContent = fmt(from + (to - from) * e);
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    },

    _animateDataBar(el) {
      const vertical = el.getAttribute('data-peg-bar') === 'vertical';
      const duration = parseInt(el.getAttribute('data-peg-bar-duration'), 10) || 1100;
      const delay = parseInt(el.getAttribute('data-peg-bar-delay'), 10) || 120;
      const easing = el.getAttribute('data-peg-bar-easing') || 'cubic-bezier(0.2, 0.65, 0.2, 1)';
      const from = vertical ? 'inset(100% 0 0 0)' : 'inset(0 100% 0 0)';

      el.animate(
        [{ clipPath: from }, { clipPath: 'inset(0 0 0 0)' }],
        { duration, delay, easing, fill: 'backwards' }
      );
    },

    /** Special per-slide animations (depeg SVG, etc.) */
    _playSpecialAnimations(slide, index) {
      // Slide 15 (0-indexed 14) — depeg chart
      if (index === 14) {
        const q = (s) => slide.querySelector(s);

        const drop = q('#s14-drop') || q('#s9-drop');
        if (drop) {
          drop.animate(
            [{ strokeDashoffset: 1200 }, { strokeDashoffset: 0 }],
            { duration: 1400, delay: 450, easing: 'cubic-bezier(0.5,0,0.6,1)', fill: 'backwards' }
          );
        }

        const fall = (el, d) => el && el.animate(
          [{ opacity: 0, transform: 'translateY(-24px)' }, { opacity: 1, transform: 'none' }],
          { duration: 720, delay: d, easing: 'cubic-bezier(0.2,0.65,0.2,1)', fill: 'backwards' }
        );
        fall(q('#s14-usdc') || q('#s9-usdc'), 1050);
        fall(q('#s14-ust') || q('#s9-ust'), 1550);

        const fade = (el, d) => el && el.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          { duration: 600, delay: d, fill: 'backwards' }
        );
        fade(q('#s14-label-usdc') || q('#s9-label-usdc'), 1200);
        fade(q('#s14-label-ust') || q('#s9-label-ust'), 1700);
      }
    },
  };

  // Export for both browser and module contexts
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = PegAnimate;
  } else {
    window.PegAnimate = PegAnimate;
  }
})();