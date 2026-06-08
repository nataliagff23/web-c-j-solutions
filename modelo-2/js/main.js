/* ============================================================
   C&J SOLUTIONSFL — MAIN JS
   Pure vanilla, IIFE, no ES modules
   ============================================================ */
(function () {
  "use strict";

  /* ─── SAFE WRAPPER ───────────────────────────────────── */
  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "]", e); }
  }

  /* ─── SPLASH ─────────────────────────────────────────── */
  function initSplash() {
    var splash = document.getElementById("splash");
    if (!splash) return;
    // CSS handles the fade-out at 3s; JS is the safety net
    setTimeout(function () {
      splash.style.opacity = "0";
      splash.style.pointerEvents = "none";
      setTimeout(function () { splash.style.display = "none"; }, 700);
    }, 3600);
  }

  /* ─── CUSTOM CURSOR ──────────────────────────────────── */
  function initCursor() {
    if (matchMedia("(hover: none)").matches) return;
    var dot = document.querySelector(".cursor-dot");
    var ring = document.querySelector(".cursor-ring");
    var cursor = document.querySelector(".cursor");
    if (!dot || !ring) return;

    var dx = 0, dy = 0, rx = 0, ry = 0;
    var firstMove = false;

    window.addEventListener("mousemove", function (e) {
      dx = e.clientX; dy = e.clientY;
      dot.style.left = dx + "px";
      dot.style.top = dy + "px";
      if (!firstMove) {
        firstMove = true;
        rx = dx; ry = dy;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        cursor.classList.add("is-ready");
      }
    });

    function animRing() {
      rx += (dx - rx) * 0.12;
      ry += (dy - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(animRing);
    }
    animRing();

    document.querySelectorAll("a, button, .service-card, .showcase-card").forEach(function (el) {
      el.addEventListener("mouseover", function () { ring.classList.add("is-hovering"); });
      el.addEventListener("mouseout", function () { ring.classList.remove("is-hovering"); });
    });
  }

  /* ─── NAV ────────────────────────────────────────────── */
  function initNav() {
    var nav = document.getElementById("nav");
    var hamburger = document.querySelector(".nav-hamburger");
    var mobile = document.querySelector(".nav-mobile");
    if (!nav) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }, { passive: true });

    if (hamburger && mobile) {
      hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("open");
        mobile.classList.toggle("open");
        document.body.style.overflow = mobile.classList.contains("open") ? "hidden" : "";
      });
      mobile.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          hamburger.classList.remove("open");
          mobile.classList.remove("open");
          document.body.style.overflow = "";
        });
      });
    }

    // Smooth anchor scroll
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  }

  /* ─── COUNTER ANIMATION ──────────────────────────────── */
  function initCounters() {
    var counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.dataset.count, 10);
        var suffix = el.dataset.suffix || "";
        var duration = 1800;
        var start = performance.now();

        function tick(now) {
          var progress = Math.min((now - start) / duration, 1);
          var ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(ease * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.3 });

    counters.forEach(function (el) { obs.observe(el); });
  }

  /* ─── SCROLL REVEALS ─────────────────────────────────── */
  function initReveals() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    // Safety net — reveal everything after 6s
    var safetyTimer = setTimeout(function () {
      els.forEach(function (el) {
        if (!el.dataset.split) el.classList.add("is-visible");
      });
    }, 6000);

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.04 });

    els.forEach(function (el) {
      if (!el.dataset.split) obs.observe(el);
    });
  }

  /* ─── DRAGGABLE SHOWCASE ─────────────────────────────── */
  function initShowcaseDrag() {
    var track = document.querySelector(".showcase-scroll");
    if (!track) return;
    var isDown = false, startX = 0, scrollLeft = 0;

    track.addEventListener("mousedown", function (e) {
      isDown = true;
      track.classList.add("dragging");
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    window.addEventListener("mouseup", function () {
      isDown = false;
      track.classList.remove("dragging");
    });
    track.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - track.offsetLeft;
      var walk = (x - startX) * 1.8;
      track.scrollLeft = scrollLeft - walk;
    });
  }

  /* ─── FORM HANDLING ──────────────────────────────────── */
  function initForm() {
    var form = document.getElementById("quote-form");
    var success = document.getElementById("form-success");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector(".form-submit");
      if (btn.classList.contains("sending")) return;

      btn.classList.add("sending");
      btn.textContent = "Sending...";

      // Simulate submission (replace with Formspree/Netlify action in production)
      setTimeout(function () {
        form.style.display = "none";
        if (success) success.style.display = "block";
      }, 1800);
    });
  }

  /* ─── MESH GRADIENT MOUSE REACTION ───────────────────── */
  function initMeshMouse() {
    var mesh = document.querySelector(".hero-mesh");
    if (!mesh) return;
    var tx = 15, ty = 30;

    window.addEventListener("mousemove", function (e) {
      var x = (e.clientX / window.innerWidth) * 100;
      var y = (e.clientY / window.innerHeight) * 100;
      tx += (x - tx) * 0.04;
      ty += (y - ty) * 0.04;
      mesh.style.background =
        "radial-gradient(ellipse 70% 60% at " + tx + "% " + ty + "%, rgba(244,122,31,0.22) 0%, transparent 60%)," +
        "radial-gradient(ellipse 50% 40% at " + (100-tx) + "% " + (100-ty) + "%, rgba(244,122,31,0.12) 0%, transparent 60%)," +
        "radial-gradient(ellipse 80% 80% at 50% 120%, rgba(244,122,31,0.08) 0%, transparent 60%)";
    }, { passive: true });
  }

  /* ─── MARQUEE DUPLICATION ────────────────────────────── */
  function initMarquee() {
    var track = document.querySelector(".marquee-track");
    if (!track) return;
    // Items already duplicated in HTML for seamless loop
  }

  /* ─── BOOT ───────────────────────────────────────────── */
  function boot() {
    safe(initSplash, "splash");
    safe(initCursor, "cursor");
    safe(initNav, "nav");
    safe(initCounters, "counters");
    safe(initReveals, "reveals");
    safe(initShowcaseDrag, "showcase");
    safe(initForm, "form");
    safe(initMeshMouse, "mesh");
    safe(initMarquee, "marquee");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

})();
