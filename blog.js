const toogler = document.getElementById('toogler');
const box = document.getElementById('box');



toogler.addEventListener("click",() => {
box.classList.remove('sm:hidden');
toogler.classList.add('hidden');
})





