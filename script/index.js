'use strict';

const sectionHeroEl = document.querySelector('.section__header');
const sectionAboutEl = document.querySelector('.section-about');
const sectionProjectTt = document.querySelector('.section__project-title');
const sectionGallery = document.querySelector('.section__project');
const sectionFeature = document.querySelector('.section__feature');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document
        .querySelector('.sticky__main-nav')
        .classList.add('sticky__fixed');
      //   sectionAboutEl.classList.add('margun-top');
    }
    if (ent.isIntersecting) {
      document
        .querySelector('.sticky__main-nav')
        .classList.remove('sticky__fixed');
      //   sectionAboutEl.classList.remove('margun-top');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-150px',
  }
);
obs.observe(sectionHeroEl);

const obsAboutTt = new IntersectionObserver(
  function (entry) {
    const ent = entry[0];

    if (ent.isIntersecting) {
      console.log('hi');
      document.querySelector('.sliding-from-left').classList.add('scrolled');
      document
        .querySelector('.sliding-from-left-bar')
        .classList.add('scrolled');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '150px',
  }
);
obsAboutTt.observe(sectionFeature);

const obsfreture = new IntersectionObserver(
  function (entry) {
    const ent = entry[0];

    if (ent.isIntersecting) {
      document.querySelectorAll('.feature-box').forEach(el => {
        el.classList.add('feature-box__roted');
      });
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-50px',
  }
);
obsfreture.observe(sectionAboutEl);

const obsAbout = new IntersectionObserver(
  function (entry) {
    const ent = entry[0];

    if (ent.isIntersecting) {
      document
        .querySelector('.about__main--container')
        .classList.add('about__main--animation');
      document
        .querySelector('.graph-container')
        .classList.add('about__main--animation');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '250px',
  }
);
obsAbout.observe(sectionProjectTt);

const obsproject = new IntersectionObserver(
  function (entry) {
    const ent = entry[0];

    if (ent.isIntersecting) {
      document
        .querySelector('.section__title-project')
        .classList.add('scrolled');
      document.querySelector('.header-bar-project').classList.add('scrolled');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-40px',
  }
);
obsproject.observe(sectionGallery);

const obsproject_main = new IntersectionObserver(
  function (entry) {
    const ent = entry[0];

    if (ent.isIntersecting) {
      document.querySelector('.gallery').classList.add('gallery__animation');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-100px',
  }
);
obsproject_main.observe(sectionGallery);

/////////////////////////////

const links = document.querySelectorAll('.scroll_nav');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    if (href !== '#' && href.startsWith('#')) {
      console.log(href);

      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
