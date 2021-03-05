const changeSize  =()=>{
    const sizes = document.querySelectorAll(".shirt-customize__size-square");
    const activeClass = "shirt-customize__size-square--active";
    sizes.forEach(function(size) {
        size.addEventListener("click", function() {
            sizes.forEach(function(link) {
                link.closest(".shirt-customize__size-square").classList.remove(activeClass);
            })
            size.closest(".shirt-customize__size-square").classList.add(activeClass);
        })
    })
}
changeSize();

const changeColor  =()=>{
    const colors = document.querySelectorAll(".shirt-customize__color-circle");
    const activeClass = "shirt-customize__color-circle--active";
    colors.forEach(function(color) {
        color.addEventListener("click", function() {
            colors.forEach(function(link) {
                link.closest(".shirt-customize__color-circle").classList.remove(activeClass);
            })
            color.closest(".shirt-customize__color-circle").classList.add(activeClass);
        })
    })
}
changeColor();