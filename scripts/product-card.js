const changeColor  =()=>{
    const colors = document.querySelectorAll(".shirt-customize__color-circle");
    const activeClass = "shirt-customize__color-circle--active";
    const shirts = document.querySelectorAll(".card-container__shirt");
    //const shirtsActiveClass = document.querySelectorAll("card-container__shirt--active");
    const changeShirtClass =(addClass)=>{
        shirts.forEach(function(link) {
            link.closest(".card-container__shirt").classList.remove("card-container__shirt--active");
        })
        //shirts.closest(".card-container__shirt").classList.remove(shirtsActiveClass);
        shirts[addClass].classList.add("card-container__shirt--active");
    }
    colors.forEach(function(color) {
        color.addEventListener("click", function() {
            if (color.classList.contains("white-shirt")){
                changeShirtClass(1);
            }else if (color.classList.contains("green-shirt")){
                changeShirtClass(2);
            }else if (color.classList.contains("blue-shirt")){
                changeShirtClass(3);
            }else if (color.classList.contains("red-shirt")){
                changeShirtClass(4);
            }else if (color.classList.contains("black-shirt")){
                changeShirtClass(0);
            }
            colors.forEach(function(link) {
                link.closest(".shirt-customize__color-circle").classList.remove(activeClass);
            })
            color.closest(".shirt-customize__color-circle").classList.add(activeClass);
        })
    })
}
changeColor();


const changeFunction  =(itemClass,classActive)=>{
    const items = document.querySelectorAll(itemClass);
    const activeClass = classActive;
    items.forEach(function(item) {
        item.addEventListener("click", function() {
            items.forEach(function(object) {
                object.closest(itemClass).classList.remove(activeClass);
            })
            item.closest(itemClass).classList.add(activeClass);
        })
    })
}
changeFunction(".shirt-customize__size-square","shirt-customize__size-square--active");//change size
//changeFunction(".shirt-customize__color-circle","shirt-customize__color-circle--active");//change color