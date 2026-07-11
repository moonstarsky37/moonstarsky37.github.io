/* main.js — 渲染與互動引擎（無相依、無建置） */
(function () {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let LANG = localStorage.getItem("lang") || "en";
  const t = (obj) => (typeof obj === "string" ? obj : (obj && (obj[LANG] || obj.en || obj.zh)) || "");

  /* ---------- i18n ---------- */
  function applyI18n() {
    document.documentElement.lang = LANG === "zh" ? "zh-Hant" : "en";
    document.documentElement.dataset.lang = LANG;
    if (I18N["doc.title"]) document.title = t(I18N["doc.title"]);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (I18N[key]) el.textContent = t(I18N[key]);
    });
    document.getElementById("langBtn").textContent = t(I18N["lang.toggle"]);
  }

  /* ---------- Hero stats ---------- */
  function renderStats() {
    const wrap = document.getElementById("stats");
    wrap.innerHTML = "";
    STATS.forEach((s) => {
      const d = document.createElement("div");
      d.className = "stat reveal";
      d.innerHTML = `<b data-v="${s.v}" data-prefix="${s.prefix || ""}" data-suffix="${s.suffix || ""}">${(s.prefix || "") + s.v + (s.suffix || "")}</b><span></span>`;
      d.querySelector("span").textContent = t(s.label);
      wrap.appendChild(d);
    });
    if (!reduced) countUpWhenVisible(wrap);
  }

  function countUpWhenVisible(wrap) {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const b = e.target.querySelector("b");
        const end = parseFloat(b.dataset.v), pre = b.dataset.prefix, suf = b.dataset.suffix;
        const t0 = performance.now(), dur = 1100;
        (function tick(now) {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          b.textContent = pre + Math.round(end * eased) + suf;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }, { threshold: 0.6 });
    wrap.querySelectorAll(".stat").forEach((s) => io.observe(s));
  }

  /* ---------- 卡片 ---------- */
  function cardHTML(p) {
    const nums = (p.metrics || []).slice(0, 3).map(
      (m) => `<div><b>${t(m.v)}</b><span>${t(m.label)}</span></div>`
    ).join("");
    const thumb = p.thumb ? `<img class="c-thumb" src="${p.thumb}" alt="" loading="lazy">` : "";
    return `
      <span class="c-open" aria-hidden="true">↗</span>
      ${thumb}
      <div class="c-meta"><span class="c-icon">${p.icon || "◆"}</span><span>${t(p.org)}・${p.period}</span></div>
      <h3>${t(p.title)}</h3>
      <p>${t(p.desc)}</p>
      ${nums ? `<div class="c-nums">${nums}</div>` : ""}`;
  }

  function makeCard(p) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "card reveal" + (p.featured ? " featured" : "");
    el.dataset.tags = (p.tags || []).join(",");
    el.dataset.id = p.id;
    el.innerHTML = cardHTML(p);
    el.addEventListener("click", () => openModal(p));
    return el;
  }

  /* ---------- 高度帶 ---------- */
  function renderBands() {
    const host = document.getElementById("bands");
    host.innerHTML = "";
    BANDS.forEach((b) => {
      const sec = document.createElement("section");
      sec.className = "band";
      sec.id = "band-" + b.id;
      sec.dataset.alt = b.alt;
      sec.dataset.name = t(b.title);
      sec.innerHTML = `
        <div class="band-head reveal">
          <span class="band-alt">${b.alt}</span>
          <h2><span class="bicon">${b.icon}</span><span class="btitle"></span></h2>
        </div>
        <p class="band-sub reveal"></p>
        <div class="grid"></div>`;
      sec.querySelector(".btitle").textContent = t(b.title);
      sec.querySelector(".band-sub").textContent = t(b.sub);
      const grid = sec.querySelector(".grid");
      PROJECTS.filter((p) => p.band === b.id).forEach((p) => grid.appendChild(makeCard(p)));
      host.appendChild(sec);
      if (b.id === "core") {
        host.appendChild(document.getElementById("flowTpl").content.cloneNode(true));
      }
    });
  }

  /* ---------- 更多作品 ---------- */
  function renderMore() {
    const grid = document.getElementById("moreGrid");
    grid.innerHTML = "";
    PROJECTS.filter((p) => p.band === "more").forEach((p) => grid.appendChild(makeCard(p)));
  }

  /* ---------- 篩選 ---------- */
  let activeTag = "all";
  function renderFilters() {
    const wrap = document.getElementById("filterChips");
    wrap.innerHTML = "";
    TAGS.forEach((tag) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (tag.id === activeTag ? " active" : "");
      b.textContent = t(tag.label);
      b.addEventListener("click", () => {
        activeTag = tag.id;
        wrap.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
        b.classList.add("active");
        applyFilter();
      });
      wrap.appendChild(b);
    });
  }
  function applyFilter() {
    document.querySelectorAll(".card").forEach((c) => {
      const tags = (c.dataset.tags || "").split(",");
      c.classList.toggle("hide", activeTag !== "all" && !tags.includes(activeTag));
    });
  }

  /* ---------- 時間軸／技能／獎項 ---------- */
  function renderTimeline() {
    const ol = document.getElementById("timelineList");
    ol.innerHTML = "";
    TIMELINE.forEach((n) => {
      const li = document.createElement("li");
      li.className = "reveal";
      li.innerHTML = `<span class="y">${n.y}</span><span class="t"></span>`;
      li.querySelector(".t").textContent = t(n.t);
      ol.appendChild(li);
    });
  }
  function renderSkills() {
    const host = document.getElementById("skillGroups");
    host.innerHTML = "";
    SKILLS.forEach((g) => {
      const d = document.createElement("div");
      d.className = "skillgroup reveal";
      d.innerHTML = `<h3></h3><div class="chips">${g.items.map((i) => `<i>${i}</i>`).join("")}</div>`;
      d.querySelector("h3").textContent = t(g.g);
      host.appendChild(d);
    });
  }
  function renderHonors() {
    const ul = document.getElementById("honorList");
    ul.innerHTML = "";
    HONORS.forEach((h) => {
      const li = document.createElement("li");
      li.className = "reveal";
      li.textContent = t(h.t);
      ul.appendChild(li);
    });
  }

  /* ---------- Modal ---------- */
  const modal = document.getElementById("modal");
  let lastFocus = null;
  function openModal(p) {
    lastFocus = document.activeElement;
    document.getElementById("mIcon").textContent = p.icon || "◆";
    document.getElementById("mOrg").textContent = t(p.org);
    document.getElementById("mPeriod").textContent = p.period;
    document.getElementById("mTitle").textContent = t(p.title);
    document.getElementById("mDetail").textContent = t(p.detail);
    const mImgs = document.getElementById("mImgs");
    mImgs.innerHTML = (p.images || []).map((src) => {
      const s = typeof src === "string" ? { src } : src;
      return `<figure><img src="${s.src}" alt="${s.alt || ""}" loading="lazy">${s.cap ? `<figcaption>${t(s.cap)}</figcaption>` : ""}</figure>`;
    }).join("");
    mImgs.style.display = (p.images && p.images.length) ? "" : "none";
    const mM = document.getElementById("mMetrics");
    mM.innerHTML = (p.metrics || []).map((m) => `<div><b>${t(m.v)}</b><span>${t(m.label)}</span></div>`).join("") || `<span style="color:var(--ink-3)">—</span>`;
    document.getElementById("mStack").innerHTML = (p.stack || []).map((s) => `<i>${s}</i>`).join("");
    const linkSec = document.getElementById("mLinkSec");
    const mL = document.getElementById("mLinks");
    if (p.links && p.links.length) {
      linkSec.style.display = "";
      mL.innerHTML = p.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${t(l.label)} ↗</a>`).join("");
    } else linkSec.style.display = "none";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-x").focus();
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  modal.addEventListener("click", (e) => { if (e.target.dataset.close !== undefined && e.target.hasAttribute("data-close")) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  /* ---------- 高度尺＋進度條 ---------- */
  const altValue = document.getElementById("altValue");
  const altName = document.getElementById("altName");
  function watchAltitude() {
    const sections = [...document.querySelectorAll(".band"), document.getElementById("timeline")];
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        const alt = e.target.dataset.alt, name = e.target.dataset.name;
        if (alt) { altValue.textContent = alt; altName.textContent = name; }
        else { altValue.textContent = "—"; altName.textContent = t(I18N["nav.timeline"]); }
      });
    }, { rootMargin: "-40% 0px -50% 0px" });
    sections.forEach((s) => s && io.observe(s));
  }
  const bar = document.querySelector("#descentBar i");
  function onScrollProgress() {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
    if (bar) bar.style.width = (p * 100).toFixed(2) + "%";
  }

  /* ---------- 星空 ---------- */
  function stars() {
    const cv = document.getElementById("stars");
    const ctx = cv.getContext("2d");
    let w, h, pts = [];
    function resize() {
      w = cv.width = innerWidth; h = cv.height = innerHeight;
      pts = Array.from({ length: Math.min(160, (w * h) / 9000) }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3, tw: Math.random() * Math.PI * 2,
        sp: 0.004 + Math.random() * 0.01
      }));
    }
    resize(); addEventListener("resize", resize);
    function frame() {
      const fade = Math.max(0, 1 - scrollY / (innerHeight * 1.4)); // 下降後星空淡出
      ctx.clearRect(0, 0, w, h);
      if (fade > 0.01) {
        pts.forEach((p) => {
          p.tw += p.sp * 16;
          const a = (0.35 + 0.65 * Math.abs(Math.sin(p.tw))) * fade;
          ctx.globalAlpha = a;
          ctx.fillStyle = "#dfe9ff";
          ctx.beginPath();
          ctx.arc(p.x, p.y + scrollY * 0.12 % h, p.r, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.globalAlpha = 1;
      }
      if (!reduced) requestAnimationFrame(frame);
    }
    if (reduced) { // 靜態一幀
      const fade = 1; ctx.clearRect(0, 0, w, h);
      pts.forEach((p) => { ctx.globalAlpha = 0.6 * fade; ctx.fillStyle = "#dfe9ff"; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); });
    } else frame();
  }

  /* ---------- reveal ---------- */
  function reveals() {
    if (reduced) { document.querySelectorAll(".reveal").forEach((r) => r.classList.add("in")); return; }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((r) => io.observe(r));
  }

  /* ---------- render all ---------- */
  function renderAll() {
    applyI18n();
    renderStats();
    renderBands();
    renderMore();
    renderFilters();
    applyFilter();
    renderTimeline();
    renderSkills();
    renderHonors();
    watchAltitude();
    reveals();
  }

  document.getElementById("langBtn").addEventListener("click", () => {
    LANG = LANG === "zh" ? "en" : "zh";
    localStorage.setItem("lang", LANG);
    renderAll();
  });

  document.getElementById("lastUpdated").textContent = document.lastModified.split(" ")[0] || "2026";

  addEventListener("scroll", onScrollProgress, { passive: true });
  stars();
  renderAll();
})();
