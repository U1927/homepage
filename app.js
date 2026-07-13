const content = window.SITE_CONTENT;

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setAttribute(selector, attribute, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute(attribute, value);
  });
}

function renderContent() {
  const { profile, hero, about } = content;

  setText("[data-site-name]", profile.name);
  setText("[data-name]", profile.name);
  setText("[data-role]", profile.role);
  setText("[data-status]", profile.status);
  setText("[data-hero-line-1]", hero.line1);
  setText("[data-hero-line-2]", hero.line2);
  setText("[data-intro]", hero.intro);
  setText("[data-about-title]", about.title);
  setText("[data-year]", new Date().getFullYear());

  setAttribute("[data-github-link]", "href", profile.github);
  setAttribute("[data-avatar]", "src", profile.avatar);

  document.querySelector("[data-about-copy]").innerHTML = about.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  document.querySelector("[data-principles]").innerHTML = about.principles
    .map((principle, index) => `<li><span>0${index + 1}</span>${principle}</li>`)
    .join("");

  const primaryCta = document.querySelector('.hero-actions .button-primary');
  primaryCta.href = "#about";
  primaryCta.innerHTML = '了解我 <i data-lucide="arrow-down-right"></i>';
}

function updateThemeIcon() {
  const icon = document.querySelector("[data-theme-icon]");
  if (!icon) return;
  icon.setAttribute("data-lucide", document.documentElement.dataset.theme === "dark" ? "sun" : "moon");
  window.lucide?.createIcons();
}

function initTheme() {
  const toggle = document.querySelector("[data-theme-toggle]");
  toggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    updateThemeIcon();
  });
}

function initHeader() {
  const header = document.querySelector("[data-header]");
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 16);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

renderContent();
initTheme();
initHeader();
updateThemeIcon();
