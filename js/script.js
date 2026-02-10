// Translation data
const translations = {
  ru: {
    title: "QA Engineer — Даниил Бабарин",
    headerTitle: "QA-инженер",
    nav: {
      home: "Главная",
      about: "Про меня",
      experience: "Образование/Опыт",
      skills: "Мои навыки",
      contact: "Контакты",
    },
    hero: {
      kicker: "Качество — моя зона ответственности",
      name: "Даниил Бабарин",
      subtitle:
        "QA Engineer. Специализация: web, mobile и backend тестирование",
      portfolio: "Портфолио",
      contact: "Связаться",
    },
    about: {
      title: "Обо мне",
      description:
        "Выстраиваю процессы тестирования в команде, внедряю автоматизацию и повышаю осознанность бизнеса в вопросах качества.",
      competencies: "Ключевые компетенции",
      competenciesList: [
        "Работа с требованиями",
        "Разработка тестовой документации",
        "Web, mobile и backend тестирование",
        "Определение показателей качества и отчетности",
        "Автоматизация тестирования API (Python)",
      ],
      tools: "Навыки",
    },
    experience: {
      title: "Опыт",
      description:
        "Работаю на стыке бизнеса и инженерии. Мыслю как пользователь, тестирую как инженер.",
      education: "Образование",
      educationInstitution: "Военно-космическая академия им. А.Ф.Можайского",
      educationSpecialty:
        "Специальность: Геоинформационные системы и технологии",
      educationPeriod: "2013 — 2018",
      workExperience: "Опыт работы",
      workInstitution: "МО РБ",
      workPosition: "Инженер, старший инженер",
      workPeriod: "2018 — 2026",
      workDescription:
        "Работа с WeGIS-приложениями. Тестирование десктопных и web-приложений в сфере геинформационных систем",
      courses: "Курсы",
      coursesList: [
        "Курсы Вадима Ксендзова",
        'ОНЛАЙН-КУРС "ТЕСТИРОВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ"',
        "Курсы Артема Русова",
        'ОНЛАЙН-КУРС "ТЕСТИРОВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ. УРОВЕНЬ PRO"',
        'РУП "Национальный центр обмена трафика"',
        'КУРС "БЕЗОПАСНОСТЬ КОРПОРАТИВНЫХ ИНФОРМАЦИОННЫХ СЕТЕЙ"',
      ],
      coursesPeriods: ["2020 — 2022", "2025", "2023"],
      internship: "Стажировка / Коммерческая практика",
      internshipInstitutions: [
        "Курсы Вадима Ксендзова",
        'Практика "SandBox Web"',
        "Capital.com",
        "Коммерческая практика",
        "Qmedia.by",
        "Коммерческая практика",
      ],
      internshipPeriods: [
        "ноябрь-декабрь 2025",
        "январь 2026 - по наст.вр.",
        "январь 2026 - по наст.вр.",
        "февраль 2026 - по наст.вр."
      ],
      internshipDescriptions: [
        "Практика по тестированию веб-приложения. Работа с тестовой документацией, участие в Ad-hoc тестировании.  Использование DevTools и написание  SQL-запросов.",
        "Тестирование веб-приложения. Работа с тестовой документацией, участие в Ad-hoc тестировании. Использование DevTools.",
        "Тестирование REST API (интеграция 1С с сайтом vtapt.by). Работа с требованиями, тестовой документацией, баг-репортами. Написание автотестов в Postman",
        "Тестирование REST API (интеграция 1С с сайтом vtapt.by). Работа с требованиями, тестовой документацией, баг-репортами. Написание автотестов в Postman",
      ],
    },
    skills: {
      title: "Мои навыки",
      description:
        "Выберите инструмент, чтобы увидеть детальную информацию о навыках работы с ним.",
      manualTesting: "Ручное тестирование",
      automation: "Автоматизированное тестирование",
      languages: "Владение языками",
      languagesList: [
        { name: "Русский", level: "Родной" },
        { name: "Английский", level: "B1" },
      ],
      hardSkills: "Hard Skills",
      hardSkillsList: [
        "Теория тестирования",
        "Техники тест-дизайна",
        "Ведение тестовой документации",
        "Agile/Scrum методологии",
        "TMS",
        "Клиент-серверная архитектура",
        "Тестирование веб-приложений",
        "Монолиты и микросервисы",
        "Мобильное тестирование",
        "Базы данных",
        "Linux",
        "Git и система контроля версий",
        "CI/CD интеграция",
        "Docker и контейнеризация",
        "Python",
        "Автоматизация тестирования",
        "AI-инструменты",
      ],
      softSkills: "Soft Skills",
      softSkillsList: [
        "Коммуникация",
        "Командная работа",
        "Решение проблем",
        "Критическое мышление",
        "Адаптивность",
      ],
    },
    contact: {
      title: "Свяжитесь со мной",
      description: "Свяжитесь со мной через любую из указанных платформ.",
      linkedin: "LinkedIn",
      telegram: "Telegram",
      gmail: "Gmail",
      github: "Github",
    },
    footer: `© ${new Date().getFullYear()} Даниил Бабарин. QA Engineer.`,
    modalClose: "Закрыть окно",
  },
  en: {
    title: "QA Engineer — Daniil Babarin",
    headerTitle: "QA Engineer",
    nav: {
      home: "Home",
      about: "About",
      experience: "Education/Experience",
      skills: "My Skills",
      contact: "Contacts",
    },
    hero: {
      kicker: "Quality is my responsibility",
      name: "Daniil Babarin",
      subtitle: "QA Engineer. Specialization: web, mobile and backend testing",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      description:
        "I build testing processes, implement automation, and increase business awareness of quality issues.",
      competencies: "Key Competencies",
      competenciesList: [
        "Requirement management",
        "Test documentation development",
        "Web, mobile, backend testing",
        "Setting quality and reporting metrics",
        "Automated API testing (Python)",
      ],
      tools: "Skills",
    },
    experience: {
      title: "Experience",
      description:
        "I work at the intersection of business and engineering. I think like a user, test like an engineer.",
      education: "Education",
      educationInstitution: "Military Space Academy by A.F. Mozhaysky",
      educationSpecialty:
        "Specialty: Geographic Information Systems and Technologies",
      educationPeriod: "2013 — 2018",
      workExperience: "Work Experience",
      workInstitution: "MD of the Republic of Belarus",
      workPosition: "Engineer, Senior Engineer",
      workPeriod: "2018 — 2026",
      workDescription:
        "Working with WeGIS-applications. Testing of desktop and web applications in the field of GIS",
      courses: "Courses",
      coursesList: [
        "Vadim Ksendzov Courses",
        'ONLINE COURSE "SOFTWARE TESTING"',
        "Artem Rusov Courses",
        'ONLINE COURSE "SOFTWARE TESTING. PRO LEVEL"',
        'RUP "National Traffic Exchange Center"',
        'COURSE "CORPORATE INFORMATION NETWORK SECURITY"',
      ],
      coursesPeriods: ["2020 — 2022", "2025", "2023"],
      internship: "Internship / Commercial Practice",
      internshipInstitutions: [
        "Vadim Ksendzov Courses",
        'Practice "SandBox Web"',
        "Capital.com",
        "Commercial Practice",
        "Qmedia.by",
        "Commercial Practice",
        "Naura",
        "Commercial Practice",
      ],
      internshipPeriods: [
        "November-December 2025",
        "January 2026 - present",
        "January 2026 - present",
        "Fabruary 2026 - present",
      ],
      internshipDescriptions: [
        "Web application testing practice. Working with test cases, bug reports, participation in Ad-hoc testing.",
        "Web application testing. Working with test cases, bug reports, participation in Ad-hoc testing.",
        "Testing the REST API (1S integration with vtapt.by site). Working with requirements, test documentation, bug reports. Working in Postman and DevTools",
        "Web application testing. Working with test cases, bug reports, participation in Ad-hoc testing.",
      ],
    },
    skills: {
      title: "My Skills",
      description:
        "Select a tool to see detailed information about my skills with it.",
      manualTesting: "Manual Testing",
      automation: "Test Automation",
      languages: "Languages",
      languagesList: [
        { name: "Russian", level: "Native" },
        { name: "English", level: "B1" },
      ],
      hardSkills: "Hard Skills",
      hardSkillsList: [
        "SQL and relational DBs",
        "API testing (REST, GraphQL)",
        "Security testing",
        "Performance testing",
        "CI/CD integration",
        "Docker and containerization",
        "Git and version control",
        "Agile/Scrum methodologies",
      ],
      softSkills: "Soft Skills",
      softSkillsList: [
        "Communication",
        "Teamwork",
        "Problem solving",
        "Critical thinking",
        "Adaptability",
        "Time management",
        "Mentoring",
        "Leadership",
      ],
    },
    contact: {
      title: "Contact Me",
      description: "Contact me through any of the platforms listed.",
      linkedin: "LinkedIn",
      telegram: "Telegram",
      gmail: "Gmail",
      github: "Github",
      instagram: "Instagram",
    },
    footer: `© ${new Date().getFullYear()} Daniil Babarin. QA Engineer.`,
    modalClose: "Close",
  },
};

// Section navigation functionality
let currentSectionIndex = 0;
const sections = ["home", "about", "experience", "cases", "contact"];
const sectionElements = sections.map((id) => document.getElementById(id));

function showSection(index, shouldScroll = true) {
  // Update navigation active state
  const navLinks = document.querySelectorAll(".main-header__link");
  navLinks.forEach((link, i) => {
    link.classList.toggle("active", i === index);
  });

  // Scroll to target section
  if (sectionElements[index]) {
    if (shouldScroll) {
      sectionElements[index].scrollIntoView({ behavior: "smooth" });
    }
    currentSectionIndex = index;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize first section without scrolling
  showSection(0, false);

  // Hero section button navigation
  const heroButtons = document.querySelectorAll(".hero__cta .btn");
  heroButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = button.getAttribute("href").substring(1);
      const sectionIndex = sections.indexOf(targetId);
      if (sectionIndex !== -1) {
        showSection(sectionIndex);
      }
    });
  });

  // Language switching functionality
  let currentLang = localStorage.getItem("language") || "ru";

  const langToggle = document.getElementById("lang-toggle");
  const htmlElement = document.documentElement;

  const updateLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem("language", lang);
    htmlElement.lang = lang;

    // Update button text
    langToggle.textContent = lang === "ru" ? "EN" : "RU";

    // Update page title
    document.title = translations[lang].title;

    // Update header title
    const headerTitle = document.querySelector(".main-header__title");
    if (headerTitle) headerTitle.textContent = translations[lang].headerTitle;

    // Update navigation
    const navLinks = document.querySelectorAll(".main-header__link");
    navLinks[0].textContent = translations[lang].nav.home;
    navLinks[1].textContent = translations[lang].nav.about;
    navLinks[2].textContent = translations[lang].nav.experience;
    navLinks[3].textContent = translations[lang].nav.skills;
    navLinks[4].textContent = translations[lang].nav.contact;

    // Update hero section
    const heroKicker = document.querySelector(".hero__kicker");
    if (heroKicker) heroKicker.textContent = translations[lang].hero.kicker;
    const heroName = document.querySelector(".hero h1");
    if (heroName) heroName.textContent = translations[lang].hero.name;
    const heroSubtitle = document.querySelector(".hero__subtitle");
    if (heroSubtitle)
      heroSubtitle.textContent = translations[lang].hero.subtitle;
    const heroButtons = document.querySelectorAll(".hero__cta .btn");
    if (heroButtons.length >= 2) {
      heroButtons[0].textContent = translations[lang].hero.portfolio;
      heroButtons[1].textContent = translations[lang].hero.contact;
    }

    // Update about section
    const aboutTitle = document.querySelector("#about .section__header h2");
    if (aboutTitle) aboutTitle.textContent = translations[lang].about.title;
    const aboutDesc = document.querySelector("#about .section__header p");
    if (aboutDesc) aboutDesc.textContent = translations[lang].about.description;
    const aboutComp = document.querySelector("#about .card h3");
    if (aboutComp)
      aboutComp.textContent = translations[lang].about.competencies;

    const competenciesList = document.querySelector("#about .list");
    if (competenciesList) {
      competenciesList.innerHTML = "";
      translations[lang].about.competenciesList.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        competenciesList.appendChild(li);
      });
    }

    const aboutTools = document.querySelector("#about .card--accent h3");
    if (aboutTools) aboutTools.textContent = translations[lang].about.tools;

    // Update experience section
    const expTitle = document.querySelector("#experience .section__header h2");
    if (expTitle) expTitle.textContent = translations[lang].experience.title;
    const expDesc = document.querySelector("#experience .section__header p");
    if (expDesc)
      expDesc.textContent = translations[lang].experience.description;

    const experienceCards = document.querySelectorAll(".experience-card");

    if (experienceCards[0]) {
      const h3 = experienceCards[0].querySelector("h3");
      const inst = experienceCards[0].querySelector(
        ".experience-card__institution",
      );
      const spec = experienceCards[0].querySelector(
        ".experience-card__specialty",
      );
      const period = experienceCards[0].querySelector(
        ".experience-card__period",
      );
      if (h3) h3.textContent = translations[lang].experience.education;
      if (inst)
        inst.textContent = translations[lang].experience.educationInstitution;
      if (spec)
        spec.textContent = translations[lang].experience.educationSpecialty;
      if (period)
        period.textContent = translations[lang].experience.educationPeriod;
    }

    if (experienceCards[1]) {
      const h3 = experienceCards[1].querySelector("h3");
      const inst = experienceCards[1].querySelector(
        ".experience-card__institution",
      );
      const pos = experienceCards[1].querySelector(
        ".experience-card__position",
      );
      const period = experienceCards[1].querySelector(
        ".experience-card__period",
      );
      const desc = experienceCards[1].querySelector(
        ".experience-card__description",
      );
      if (h3) h3.textContent = translations[lang].experience.workExperience;
      if (inst)
        inst.textContent = translations[lang].experience.workInstitution;
      if (pos) pos.textContent = translations[lang].experience.workPosition;
      if (period) period.textContent = translations[lang].experience.workPeriod;
      if (desc)
        desc.textContent = translations[lang].experience.workDescription;
    }

    if (experienceCards[2]) {
      const h3 = experienceCards[2].querySelector("h3");
      if (h3) h3.textContent = translations[lang].experience.courses;
      const coursesList = experienceCards[2].querySelectorAll(
        ".experience-card__course",
      );
      translations[lang].experience.coursesList.forEach((course, index) => {
        if (coursesList[index]) coursesList[index].textContent = course;
      });
      const coursesPeriods = experienceCards[2].querySelectorAll(
        ".experience-card__period",
      );
      translations[lang].experience.coursesPeriods.forEach((period, index) => {
        if (coursesPeriods[index]) coursesPeriods[index].textContent = period;
      });
    }

    if (experienceCards[3]) {
      const h3 = experienceCards[3].querySelector("h3");
      if (h3) h3.textContent = translations[lang].experience.internship;
      const internshipInstitutions = experienceCards[3].querySelectorAll(
        ".experience-card__institution",
      );
      translations[lang].experience.internshipInstitutions.forEach(
        (inst, index) => {
          if (internshipInstitutions[index])
            internshipInstitutions[index].textContent = inst;
        },
      );
      const internshipPeriods = experienceCards[3].querySelectorAll(
        ".experience-card__period",
      );
      translations[lang].experience.internshipPeriods.forEach(
        (period, index) => {
          if (internshipPeriods[index])
            internshipPeriods[index].textContent = period;
        },
      );
      const internshipDescriptions = experienceCards[3].querySelectorAll(
        ".experience-card__description",
      );
      translations[lang].experience.internshipDescriptions.forEach(
        (desc, index) => {
          if (internshipDescriptions[index])
            internshipDescriptions[index].textContent = desc;
        },
      );
    }

    // Update skills section
    const skillsTitle = document.querySelector("#cases .section__header h2");
    if (skillsTitle) skillsTitle.textContent = translations[lang].skills.title;
    const skillsDesc = document.querySelector("#cases .section__header p");
    if (skillsDesc)
      skillsDesc.textContent = translations[lang].skills.description;

    const skillsCategories = document.querySelectorAll(".skills-category");
    if (skillsCategories[0]) {
      const h3 = skillsCategories[0].querySelector("h3");
      if (h3) h3.textContent = translations[lang].skills.manualTesting;
    }
    if (skillsCategories[1]) {
      const h3 = skillsCategories[1].querySelector("h3");
      if (h3) h3.textContent = translations[lang].skills.automation;
    }
    if (skillsCategories[2]) {
      const h3 = skillsCategories[2].querySelector("h3");
      if (h3) h3.textContent = translations[lang].skills.languages;

      const languageBadges =
        skillsCategories[2].querySelectorAll(".skill-badge");
      translations[lang].skills.languagesList.forEach((langItem, index) => {
        if (languageBadges[index]) {
          const nameSpan =
            languageBadges[index].querySelector(".skill-badge__name");
          const levelSpan = languageBadges[index].querySelector(
            ".skill-badge__level",
          );
          if (nameSpan) nameSpan.textContent = langItem.name;
          if (levelSpan) levelSpan.textContent = langItem.level;
        }
      });
    }

    if (skillsCategories[3]) {
      const h3 = skillsCategories[3].querySelector("h3");
      if (h3) h3.textContent = translations[lang].skills.hardSkills;
      const hardSkillsList = skillsCategories[3].querySelector(".skills-list");
      if (hardSkillsList) {
        hardSkillsList.innerHTML = "";
        translations[lang].skills.hardSkillsList.forEach((skill) => {
          const div = document.createElement("div");
          div.className = "skill-badge";
          div.textContent = skill;
          hardSkillsList.appendChild(div);
        });
      }
    }

    if (skillsCategories[4]) {
      const h3 = skillsCategories[4].querySelector("h3");
      if (h3) h3.textContent = translations[lang].skills.softSkills;
      const softSkillsList = skillsCategories[4].querySelector(".skills-list");
      if (softSkillsList) {
        softSkillsList.innerHTML = "";
        translations[lang].skills.softSkillsList.forEach((skill) => {
          const div = document.createElement("div");
          div.className = "skill-badge";
          div.textContent = skill;
          softSkillsList.appendChild(div);
        });
      }
    }

    // Update contact section
    const contactTitle = document.querySelector("#contact .section__header h2");
    if (contactTitle)
      contactTitle.textContent = translations[lang].contact.title;
    const contactDesc = document.querySelector("#contact .section__header p");
    if (contactDesc)
      contactDesc.textContent = translations[lang].contact.description;

    const contactItems = document.querySelectorAll(
      ".contact-item .contact-item__label",
    );
    if (contactItems[0])
      contactItems[0].textContent = translations[lang].contact.linkedin;
    if (contactItems[1])
      contactItems[1].textContent = translations[lang].contact.telegram;
    if (contactItems[2])
      contactItems[2].textContent = translations[lang].contact.gmail;
    if (contactItems[3])
      contactItems[3].textContent = translations[lang].contact.github;
    if (contactItems[4] && translations[lang].contact.instagram) {
      contactItems[4].textContent = translations[lang].contact.instagram;
    }

    // Update footer
    const footerP = document.querySelector(".footer p");
    if (footerP) footerP.textContent = translations[lang].footer;

    // Update modal close button aria-label
    const modalClose = document.querySelector(".modal__close");
    if (modalClose)
      modalClose.setAttribute("aria-label", translations[lang].modalClose);
  };

  // Initialize language on page load
  updateLanguage(currentLang);

  // Language toggle event listener
  langToggle.addEventListener("click", () => {
    const newLang = currentLang === "ru" ? "en" : "ru";
    updateLanguage(newLang);
  });

  // Бургер-меню
  const burgerBtn = document.getElementById("burger-btn");
  const mainNav = document.getElementById("main-nav");

  if (burgerBtn && mainNav) {
    burgerBtn.addEventListener("click", () => {
      const isOpen = burgerBtn.getAttribute("aria-expanded") === "true";
      burgerBtn.setAttribute("aria-expanded", !isOpen);
      mainNav.classList.toggle("is-open");
    });

    // Навигация по разделам
    const navLinks = mainNav.querySelectorAll(".main-header__link");
    navLinks.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(index);
        burgerBtn.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("is-open");
      });
    });

    // Закрытие меню при клике вне его
    document.addEventListener("click", (e) => {
      if (
        !mainNav.contains(e.target) &&
        !burgerBtn.contains(e.target) &&
        mainNav.classList.contains("is-open")
      ) {
        burgerBtn.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("is-open");
      }
    });
  }

  // Skills data for tools (translated)
  const skillsData = {
    ru: {
      postman: [
        "Создание и настройка коллекций API-запросов",
        "Написание автоматизированных тестов в Postman",
        "Работа с переменными окружений и глобальными переменными",
        "Настройка pre-request и test scripts",
        "Интеграция с CI/CD через Newman",
        "Тестирование REST и GraphQL API",
        "Парсинг и валидация ответов",
        "Создание mock-серверов для тестирования",
      ],
      jira: [
        "Создание и управление тест-кейсами",
        "Настройка workflow и бизнес-процессов",
        "Создание дашбордов и отчетов",
        "Работа с фильтрами JQL (Jira Query Language)",
        "Управление спринтами и релизами",
        "Настройка полей и схем проектов",
        "Интеграция с инструментами тестирования",
        "Анализ метрик и создание отчетов",
      ],
      TestIT: [
        "Создание тест-планов и тест-сьютов",
        "Организация тест-кейсов по приоритетам",
        "Запуск тестов и отслеживание результатов",
        "Генерация отчетов о прохождении тестов",
        "Интеграция с баг-трекерами",
        "Настройка тестовых окружений",
        "Работа с milestones и релизами",
        "Экспорт и импорт тест-кейсов",
      ],
      charles: [
        "Захват и анализ HTTP/HTTPS трафика",
        "Модификация запросов и ответов",
        "Работа с breakpoints и conditional breakpoints",
        "Создание и использование Map Remote/Local",
        "Throttling для симуляции медленных сетей",
        "Перехват и модификация мобильного трафика",
        "Работа с SSL Proxying",
        "Анализ производительности приложения",
      ],
      playwright: [
        "Написание end-to-end тестов на JavaScript/TypeScript",
        "Работа с селекторами и ожиданиями",
        "Тестирование веб-приложений на разных браузерах",
        "Создание скриншотов и видео тестов",
        "Параллельное выполнение тестов",
        "Работа с файлами и загрузками",
        "Тестирование API и мобильных веб-приложений",
        "Интеграция с CI/CD pipeline",
      ],
      selenium: [
        "Написание автоматизированных тестов на Java/Python",
        "Работа с WebDriver и различными браузерами",
        "Использование паттернов Page Object Model",
        "Создание надежных ожиданий (explicit waits)",
        "Работа с iframe, окнами и алертами",
        "Параллельное выполнение через Selenium Grid",
        "Интеграция с TestNG/JUnit",
        "Управление тестовыми данными",
      ],
      cypress: [
        "Написание тестов с использованием Cypress",
        "Отладка тестов в реальном времени",
        "Работа с командами и запросами",
        "Тестирование API с использованием cy.request",
        "Создание кастомных команд",
        "Работа с fixtures и тестовыми данными",
        "Интеграция с CI/CD",
        "Тестирование приложений с реальным временем",
      ],
      jmeter: [
        "Создание тестовых планов для нагрузочного тестирования",
        "Настройка Thread Groups и параметров нагрузки",
        "Работа с Samplers, Listeners и Assertions",
        "Создание параметризованных запросов",
        "Анализ результатов через графики и отчеты",
        "Распределенное тестирование",
        "Настройка сценариев для разных типов нагрузок",
        "Интеграция с CI/CD для непрерывного тестирования",
      ],
      python: [
        "Написание скриптов для автоматизации тестирования",
        "Работа с библиотеками requests, pytest, selenium",
        "Применение принципов ООП и паттернов проектирования (Page Object)",
        "Обработка и валидация данных (JSON, XML, CSV)",
        "Работа с виртуальными окружениями и пакетными менеджерами",
        "Интеграция тестов в CI/CD пайплайны",
      ],
      httpx: [
        "Выполнение асинхронных HTTP-запросов",
        "Тестирование REST API с высокой производительностью",
        "Работа с сессиями, cookies и аутентификацией",
        "Обработка таймаутов и повторных запросов",
        "Использование context managers для управления соединениями",
        "Интеграция с asyncio и pytest-asyncio",
      ],
      pydantic: [
        "Определение схем данных через модели Pydantic",
        "Валидация входящих и исходящих данных API",
        "Автоматическая конвертация типов данных",
        "Использование Field для настройки правил валидации",
        "Работа с вложенными моделями и списками объектов",
        "Настройка кастомных валидаторов",
      ],
      pytest: [
        "Разработка гибкой архитектуры тестов на базе фикстур",
        "Параметризация тестов для расширения тестового покрытия",
        "Использование маркеров для фильтрации запусков",
        "Работа с плагинами (pytest-xdist, pytest-cov, pytest-html)",
        "Настройка конфигурационных файлов pytest.ini и conftest.py",
        "Создание читаемых assertions с подробным выводом ошибок",
      ],
      allure: [
        "Генерация интерактивных и наглядных отчетов",
        "Использование аннотаций (@allure.step, @allure.title, @allure.issue)",
        "Прикрепление скриншотов, логов и файлов к результатам тестов",
        "Организация тестов по фичам и историям (Epics, Features, Stories)",
        "Настройка Severity уровней для багов и тестов",
        "Интеграция Allure Report в Jenkins/GitHub Actions",
      ],
      "ci/cd": [
        "Настройка пайплайнов в GitHub Actions / GitLab CI",
        "Автоматизация запуска тестов при Push и Pull Request",
        "Управление секретами и переменными окружения",
        "Настройка параллельного запуска тестов",
        "Сбор и хранение артефактов (отчетов, логов)",
        "Уведомления о результатах прогонов в Telegram/Slack",
      ],
      sql: [
        "Написание сложных запросов (JOIN, GROUP BY, HAVING)",
        "Работа с оконными функциями и подзапросами",
        "Проектирование и нормализация баз данных",
        "Оптимизация производительности запросов и индексация",
        "Работа с PostgreSQL, MySQL и SQLite",
        "Миграции баз данных",
      ],
      git: [
        "Управление ветками и использование Gitflow",
        "Решение конфликтов при слиянии и Rebase",
        "Работа с GitHub, GitLab и Bitbucket",
        "Настройка Git Hooks для автоматизации",
        "Cherry-pick и работа с Stash",
        "Аудит истории изменений",
      ],
      docker: [
        "Создание и оптимизация Dockerfile",
        "Оркестрация контейнеров через Docker Compose",
        "Работа с томами (Volumes) для хранения данных",
        "Настройка сетей между контейнерами",
        "Деплой приложений в контейнерах",
        "Мониторинг ресурсов контейнеров",
      ],
      bash: [
        "Написание shell-скриптов для автоматизации рутины",
        "Работа с файловой системой и правами доступа",
        "Потоковая обработка текста (grep, sed, awk)",
        "Настройка серверного окружения",
        "Автоматизация деплоя и бэкапов",
        "Работа с SSH и удаленным управлением",
      ],
      devtools: [
        "Глубокий анализ сетевых запросов (Network tab)",
        "Инспекция и модификация DOM/CSS в реальном времени",
        "Отладка JavaScript через Breakpoints",
        "Анализ производительности (Performance & Lighthouse)",
        "Работа с хранилищами LocalStorage, SessionStorage, Cookies",
        "Эмуляция мобильных устройств и различных скоростей сети",
      ],
      proxyman: [
        "Перехват HTTP/HTTPS трафика на macOS, iOS и Android",
        "Использование Breakpoints для изменения данных на лету",
        "Настройка Map Remote и Map Local",
        "Скриптинг на JavaScript для сложной модификации запросов",
        "Повтор и редактирование запросов",
        "Анализ Protobuf и JSON ответов",
      ],
      communication: [
        "Написание понятной технической документации",
        "Грамотное составление баг-репортов и отчетов",
        "Умение аргументированно отстаивать свою позицию",
        "Эффективное взаимодействие с разработчиками и заказчиками",
        "Проведение демо и презентаций результатов тестирования",
        "Активное слушание и предоставление конструктивной обратной связи",
      ],
      teamwork: [
        "Участие во всех Scrum-ритуалах (Daily, Planning, Grooming, Retro)",
        "Обмен опытом и менторинг коллег",
        "Кросс-функциональное взаимодействие внутри команды",
        "Помощь команде в достижении целей спринта",
        "Работа в распределенных и мультикультурных командах",
        "Соблюдение командных договоренностей и процессов",
      ],
      problem_solving: [
        "Анализ корневых причин дефектов (Root Cause Analysis)",
        "Поиск нестандартных путей решения технических проблем",
        "Умение декомпозировать сложные задачи",
        "Оперативное реагирование на критические инциденты",
        "Предложение и внедрение улучшений в процессы QA",
        "Анализ рисков и разработка планов по их минимизации",
      ],
      adaptability: [
        "Быстрое погружение в новые проекты и доменные области",
        "Освоение новых инструментов и технологий под задачи проекта",
        "Гибкость при изменении приоритетов и требований",
        "Готовность к работе в условиях неопределенности",
        "Постоянное самообучение и профессиональное развитие",
        "Эффективная работа в разных методологиях (Agile, Waterfall)",
      ],
    },
    en: {
      postman: [
        "Creating and configuring API request collections",
        "Writing automated tests in Postman",
        "Working with environment and global variables",
        "Setting up pre-request and test scripts",
        "Integration with CI/CD through Newman",
        "Testing REST and GraphQL APIs",
        "Parsing and validating responses",
        "Creating mock servers for testing",
      ],
      jira: [
        "Creating and managing test cases",
        "Configuring workflow and business processes",
        "Creating dashboards and reports",
        "Working with JQL filters (Jira Query Language)",
        "Managing sprints and releases",
        "Configuring project fields and schemes",
        "Integration with testing tools",
        "Analyzing metrics and creating reports",
      ],
      testrail: [
        "Creating test plans and test suites",
        "Organizing test cases by priorities",
        "Running tests and tracking results",
        "Generating test execution reports",
        "Integration with bug trackers",
        "Setting up test environments",
        "Working with milestones and releases",
        "Exporting and importing test cases",
      ],
      charles: [
        "Capturing and analyzing HTTP/HTTPS traffic",
        "Modifying requests and responses",
        "Working with breakpoints and conditional breakpoints",
        "Creating and using Map Remote/Local",
        "Throttling to simulate slow networks",
        "Intercepting and modifying mobile traffic",
        "Working with SSL Proxying",
        "Analyzing application performance",
      ],
      playwright: [
        "Writing end-to-end tests in JavaScript/TypeScript",
        "Working with selectors and expectations",
        "Testing web applications across different browsers",
        "Creating screenshots and test videos",
        "Parallel test execution",
        "Working with files and downloads",
        "Testing APIs and mobile web applications",
        "Integration with CI/CD pipeline",
      ],
      selenium: [
        "Writing automated tests in Java/Python",
        "Working with WebDriver and different browsers",
        "Using Page Object Model patterns",
        "Creating reliable waits (explicit waits)",
        "Working with iframes, windows and alerts",
        "Parallel execution through Selenium Grid",
        "Integration with TestNG/JUnit",
        "Managing test data",
      ],
      cypress: [
        "Writing tests using Cypress",
        "Real-time test debugging",
        "Working with commands and requests",
        "API testing using cy.request",
        "Creating custom commands",
        "Working with fixtures and test data",
        "CI/CD integration",
        "Testing real-time applications",
      ],
      jmeter: [
        "Creating test plans for load testing",
        "Configuring Thread Groups and load parameters",
        "Working with Samplers, Listeners and Assertions",
        "Creating parameterized requests",
        "Analyzing results through graphs and reports",
        "Distributed testing",
        "Setting up scenarios for different load types",
        "Integration with CI/CD for continuous testing",
      ],
      python: [
        "Writing scripts for test automation",
        "Working with requests, pytest, selenium libraries",
        "Applying OOP principles and design patterns (Page Object)",
        "Processing and validating data (JSON, XML, CSV)",
        "Working with virtual environments and package managers",
        "Integrating tests into CI/CD pipelines",
      ],
      httpx: [
        "Executing asynchronous HTTP requests",
        "Testing REST APIs with high performance",
        "Working with sessions, cookies, and authentication",
        "Handling timeouts and retries",
        "Using context managers for connection management",
        "Integration with asyncio and pytest-asyncio",
      ],
      pydantic: [
        "Defining data schemas via Pydantic models",
        "Validating incoming and outgoing API data",
        "Automatic data type conversion",
        "Using Field for custom validation rules",
        "Working with nested models and lists of objects",
        "Configuring custom validators",
      ],
      pytest: [
        "Developing flexible test architecture based on fixtures",
        "Parametrizing tests to expand test coverage",
        "Using markers to filter test runs",
        "Working with plugins (pytest-xdist, pytest-cov, pytest-html)",
        "Configuring pytest.ini and conftest.py files",
        "Creating readable assertions with detailed error output",
      ],
      allure: [
        "Generating interactive and visual reports",
        "Using annotations (@allure.step, @allure.title, @allure.issue)",
        "Attaching screenshots, logs, and files to test results",
        "Organizing tests by Features and Stories (Epics, Features, Stories)",
        "Setting Severity levels for bugs and tests",
        "Integrating Allure Report into Jenkins/GitHub Actions",
      ],
      "ci/cd": [
        "Configuring pipelines in GitHub Actions / GitLab CI",
        "Automating test execution on Push and Pull Request",
        "Managing secrets and environment variables",
        "Configuring parallel test execution",
        "Collecting and storing artifacts (reports, logs)",
        "Notifications of run results in Telegram/Slack",
      ],
      sql: [
        "Writing complex queries (JOIN, GROUP BY, HAVING)",
        "Working with window functions and subqueries",
        "Database design and normalization",
        "Query performance optimization and indexing",
        "Experience with PostgreSQL, MySQL and SQLite",
        "Database migrations",
      ],
      git: [
        "Branch management and Gitflow workflow",
        "Resolving merge and rebase conflicts",
        "Working with GitHub, GitLab and Bitbucket",
        "Configuring Git Hooks for automation",
        "Cherry-pick and Stash usage",
        "Audit of change history",
      ],
      docker: [
        "Creating and optimizing Dockerfiles",
        "Container orchestration via Docker Compose",
        "Working with Volumes for data persistence",
        "Configuring container networking",
        "Deploying applications in containers",
        "Monitoring container resources",
      ],
      bash: [
        "Writing shell scripts for routine automation",
        "Working with filesystem and permissions",
        "Stream processing with grep, sed, awk",
        "Server environment configuration",
        "Automation of deployments and backups",
        "Working with SSH and remote management",
      ],
      devtools: [
        "Deep analysis of network requests (Network tab)",
        "Real-time DOM/CSS inspection and modification",
        "JavaScript debugging with Breakpoints",
        "Performance analysis (Performance & Lighthouse)",
        "Working with LocalStorage, SessionStorage, Cookies",
        "Emulating mobile devices and network throttling",
      ],
      proxyman: [
        "Intercepting HTTP/HTTPS traffic on macOS, iOS and Android",
        "Using Breakpoints to modify data on the fly",
        "Configuring Map Remote and Map Local",
        "JavaScript scripting for complex request modification",
        "Replaying and editing requests",
        "Analyzing Protobuf and JSON responses",
      ],
      communication: [
        "Writing clear technical documentation",
        "Properly composing bug reports and reports",
        "Ability to argue and defend your position",
        "Effective interaction with developers and stakeholders",
        "Conducting demos and presentations of test results",
        "Active listening and providing constructive feedback",
      ],
      teamwork: [
        "Participation in all Scrum rituals (Daily, Planning, Grooming, Retro)",
        "Knowledge sharing and mentoring colleagues",
        "Cross-functional interaction within the team",
        "Helping the team achieve sprint goals",
        "Working in distributed and multicultural teams",
        "Compliance with team agreements and processes",
      ],
      problem_solving: [
        "Root Cause Analysis of defects",
        "Finding non-standard ways to solve technical problems",
        "Ability to decompose complex tasks",
        "Prompt response to critical incidents",
        "Proposing and implementing QA process improvements",
        "Risk analysis and development of mitigation plans",
      ],
      adaptability: [
        "Fast immersion in new projects and domain areas",
        "Mastering new tools and technologies for project tasks",
        "Flexibility when priorities and requirements change",
        "Readiness to work in conditions of uncertainty",
        "Constant self-learning and professional development",
        "Effective work in different methodologies (Agile, Waterfall)",
      ],
    },
  };

  // Модальное окно для навыков
  const modal = document.getElementById("tool-modal");
  const modalTitle = document.getElementById("tool-modal-title");
  const modalList = document.getElementById("tool-modal-list");
  const modalCloseBtns = document.querySelectorAll("[data-modal-close]");

  const openModal = (toolName, skills) => {
    modalTitle.textContent = toolName;
    modalList.innerHTML = "";

    skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      modalList.appendChild(li);
    });

    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  // Обработчики для кнопок закрытия
  modalCloseBtns.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });

  // Закрытие по Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });

  // Делегирование событий для кликов на навыки
  document.body.addEventListener("click", (e) => {
    const item = e.target.closest("[data-tool]");
    if (!item) return;

    const tool = item.dataset.tool;
    let toolName;

    if (item.classList.contains("skill-item")) {
      const nameEl = item.querySelector(".skill-item__name");
      toolName = nameEl ? nameEl.textContent : item.dataset.tool;
    } else {
      // Для чипов и бейджей берем текст самого элемента, очищая от лишних пробелов и уровней
      toolName = item.textContent.trim().split("\n")[0].split("  ")[0];
    }

    const skills = skillsData[currentLang][tool];

    if (skills) {
      openModal(toolName, skills);
    }
  });

  const highlightValues = document.querySelectorAll(
    ".highlight__value[data-target]",
  );
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const animateValue = (element, target) => {
    if (prefersReducedMotion) {
      element.textContent = target;
      return;
    }

    const duration = 1200;
    const startValue = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(startValue + eased * (target - startValue));
      element.textContent = value;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id);
          if (index !== -1) {
            const navLinks = document.querySelectorAll(".main-header__link");
            navLinks.forEach((link, i) => {
              link.classList.toggle("active", i === index);
            });
            currentSectionIndex = index;
          }
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "-50% 0px -50% 0px",
    },
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) navObserver.observe(el);
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const targetValue = Number(element.dataset.target);
          animateValue(element, targetValue);
          obs.unobserve(element);
        }
      });
    },
    { threshold: 0.6 },
  );

  highlightValues.forEach((value) => observer.observe(value));

  // Отслеживание пересечения лупы и жуков
  const magnifier = document.querySelector(".magnifier");
  const bugs = document.querySelectorAll(".bug:not(.magnifier)");

  if (magnifier && bugs.length > 0) {
    const checkIntersection = () => {
      const magnifierRect = magnifier.getBoundingClientRect();
      const magnifierCenter = {
        x: magnifierRect.left + magnifierRect.width / 2,
        y: magnifierRect.top + magnifierRect.height / 2,
      };

      let foundBug = false;

      bugs.forEach((bug) => {
        const bugRect = bug.getBoundingClientRect();
        const bugCenter = {
          x: bugRect.left + bugRect.width / 2,
          y: bugRect.top + bugRect.height / 2,
        };

        const distance = Math.sqrt(
          Math.pow(magnifierCenter.x - bugCenter.x, 2) +
            Math.pow(magnifierCenter.y - bugCenter.y, 2),
        );

        // Радиус пересечения (сумма радиусов лупы и жука)
        const intersectionRadius = (magnifierRect.width + bugRect.width) / 2;

        if (distance < intersectionRadius * 0.8) {
          foundBug = true;
        }
      });

      if (foundBug) {
        magnifier.classList.add("found");
      } else {
        magnifier.classList.remove("found");
      }

      requestAnimationFrame(checkIntersection);
    };

    checkIntersection();
  }
});
