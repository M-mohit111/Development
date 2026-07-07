const form = document.querySelector('form')
form.addEventListener('submit',(event)=>{
    // console.log(event)
    event.preventDefault();
    const data = new FormData(form);
    console.log(data.keys())
})