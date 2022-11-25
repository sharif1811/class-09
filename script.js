let modal = document.getElementById("modal");
let openModal = document.getElementById("open-modal");
let closeModal = document.getElementById("close-modal");

openModal.addEventListener("click",function(){
    modal.classList.add("show")
})
closeModal.addEventListener("click",closem);
function closem(){
    modal.classList.remove("show")
}