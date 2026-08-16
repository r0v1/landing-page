/* ─── Translations ───────────────────────────────────────────────────────── */

function applyTranslations(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        const parts = key.split(".");
        let node = translations;
        parts.forEach(p => node = node[p]);
        el.textContent = node[lang];
    });

    document.title = translations.meta.title[lang];
}

/* ─── Header height → CSS var + body padding ─────────────────────────────── */

function adjustAnchors() {
    const header = document.querySelector(".header");
    if (!header) return;
    const h = header.offsetHeight;
    document.body.style.paddingTop = h + "px";
    document.documentElement.style.setProperty("--header-height", h + "px");
}

/* ─── Fade-in on scroll (Intersection Observer) ──────────────────────────── */

function initFadeIn() {
    const els = document.querySelectorAll(".section, .hero");

    /* If JS is fast enough, show the hero immediately without delay */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); /* animate once only */
            }
        });
    }, {
        threshold: 0.08          /* trigger when 8 % of the section is visible */
    });

    els.forEach(el => observer.observe(el));
}

/* ─── Active nav link on scroll ──────────────────────────────────────────── */

function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav a");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(a => a.classList.remove("active-nav"));
                const active = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
                if (active) active.classList.add("active-nav");
            }
        });
    }, {
        rootMargin: "-30% 0px -60% 0px"   /* trigger when section is in the middle third */
    });

    sections.forEach(s => observer.observe(s));
}

/* ─── Language switcher ──────────────────────────────────────────────────── */

function setLang(lang) {
    applyTranslations(lang);
    adjustAnchors();
    ["fr", "es", "de", "en"].forEach(l => {
        document.getElementById("switch-" + l).classList.toggle("active", lang === l);
    });
}

/* ─── Init ───────────────────────────────────────────────────────────────── */

window.addEventListener("load", () => {
    applyTranslations("fr");
    adjustAnchors();
    initFadeIn();
    initActiveNav();
});

window.addEventListener("resize", adjustAnchors);

document.getElementById("switch-fr").addEventListener("click", () => setLang("fr"));
document.getElementById("switch-es").addEventListener("click", () => setLang("es"));
document.getElementById("switch-de").addEventListener("click", () => setLang("de"));
document.getElementById("switch-en").addEventListener("click", () => setLang("en"));
