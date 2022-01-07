//Variables

const modal=document.querySelector('.modal'),
      btn = document.querySelector('.btn'),
      closeM = document.querySelector('.close');


btn.addEventListener('click', openModal);
closeM.addEventListener('click', closeModal);
// modal.addEventListener('click', closeModal);

// Open Modal

function openModal(e){
    e.preventDefault();
    modal.style.display = "block";

}

// Close Modal

function closeModal(e){
    modal.style.display = "none";
}