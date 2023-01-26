const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#ced4da';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else {
        body.style.background = '#212529'; 
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})

// First - get everything inside the input

// getElementById = "input" / and store it in const
const inputEl = document.getElementById("input");

function fetchAPI(word){
    console.log(word);
}

// add an event listener to get everything inside the input
inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    };
})