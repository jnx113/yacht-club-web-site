let mainPhoto = document.querySelector(".main-photo");
let galleryList = document.querySelectorAll(".gallery-list-item a");
for(let selectedPhoto of galleryList){
    selectedPhoto.onclick = function(evt){
        evt.preventDefault();
        mainPhoto.src = selectedPhoto.href;
        let currentItem = document.querySelector(".gallery-list-item .active")
        currentItem.classList.remove("active");
        selectedPhoto.classList.add("active");
    };
}