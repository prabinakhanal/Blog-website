const toogler = document.getElementById('toogler');
const box = document.getElementById('box');
const search=document.getElementById('search')



toogler.addEventListener("click",() => {
box.classList.remove('sm:hidden');
toogler.classList.add('hidden');
})



search.addEventListener("input",(e)=>{
const value=e.target.value
console.log(value)

})

