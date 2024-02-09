// Collapsible mechanisom //

const collapsibles = document.querySelectorAll(".collaps-btn");

collapsibles.forEach((items) => {

    items.addEventListener("click", function(){
    items.parentElement.parentElement.classList.toggle("collapsible--expanded");
    })

});