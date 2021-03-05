const openingBtn = document.querySelector('.sidebar__hamburger');
const closingBtn = document.querySelector('.sidebar__close');
const sidebar = document.querySelector('.sidebar');
slides = document.querySelectorAll('.fade-slider__item');

const openSidebar = () => {
    sidebar.classList.toggle('sidebar--opened');
}
openingBtn.addEventListener('click',openSidebar);
closingBtn.addEventListener('click',openSidebar);

const slider =() =>{
    let index = 0;
    setInterval(function () {
        slides[index].style.opacity = "0";
        if (index + 1 < slides.length) {
            index++;
        }else {
            index = 0;
        }
        slides[index].style.opacity = "1";
    },2500)
}
slider();

const elem = document.querySelector('.products__list');
const iso = new Isotope( elem, {
    // options
    itemSelector: '.products__item',
    percentPosition: true,
    fitRows: {
        gutter: 0
    },
    filter: '.popular'
})

const changeFilter =()=>{
    const controlls = document.querySelectorAll(".filter__link");
    const activeClass = "filter__item--active";
    controlls.forEach(function(control) {
        control.addEventListener("click", function(e) {
            e.preventDefault();
            const filterName = control.getAttribute('data-filter');
            controlls.forEach(function(link) {
                link.closest(".filter__item").classList.remove(activeClass);
            })
            control.closest(".filter__item").classList.add(activeClass);
            iso.arrange({
                filter: `.${filterName}`
            });
        })
    })
}
changeFilter();