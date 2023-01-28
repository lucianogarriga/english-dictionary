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

async function fetchAPI(word){
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    //we can request from the API - so we can have the result
    //we create a const and we call it result
    
    //fetch(const url) -- after the fetching we want to wait for the (response)
    //we get the response and we want to convert this response to a JSON file with a Js method
    const result = await fetch(url).then((res)=>res.json());
    //Always have to use AWAIT when we are fetching data from API
    //An then, we need to change the function from normal to async function
    console.log(result);
}

// add an event listener to get everything inside the input
inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    };
})