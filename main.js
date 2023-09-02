const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
};

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
};

var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

const accordionItems = document.querySelectorAll('.labs__accordion-item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.labs__accordion-header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.labs__accordion-content')
    const accordionIcon = item.querySelector('.labs__accordion-icon i')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
        accordionIcon.classList.replace('fa-minus', 'fa-plus') 
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
        accordionIcon.classList.replace('fa-plus', 'fa-minus') 
    }
}

const accordionCoursesItems = document.querySelectorAll('.students__courses-item');

accordionCoursesItems.forEach((item) => {
    const accordionCoursesHeader = item.querySelector('.students__courses-item-header');

    accordionCoursesHeader.addEventListener('click', () => {
        const openCoursesItem = document.querySelector('.accordion-courses-open');

        toggleCoursesItem(item);

        if (openCoursesItem && openCoursesItem !== item) {
            toggleCoursesItem(openCoursesItem);
        }
    })
})

const toggleCoursesItem = (item) => {
    const accordionCoursesContent = item.querySelector('.students__courses-subitem')
    const accordionCoursesIcon = item.querySelector('.students__courses-item-icon i')

    if (item.classList.contains('accordion-courses-open')) {
        accordionCoursesContent.removeAttribute('style')
        item.classList.remove('accordion-courses-open')
        accordionCoursesIcon.classList.replace('fa-minus', 'fa-plus') 
    } else {
        accordionCoursesContent.style.height = accordionCoursesContent.scrollHeight + 'px'
        item.classList.add('accordion-courses-open')
        accordionCoursesIcon.classList.replace('fa-plus', 'fa-minus') 
    }
}

