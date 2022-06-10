

 blog = document.getElementById('blogs')
 button = document.getElementById('btn')
 
 
 
 button.addEventListener('click', () => {
     blog.classList.remove('hidden')
 })
 
 
 
 
 async function post(){
     let response=await fetch();
     let result=await response.json();
 }


