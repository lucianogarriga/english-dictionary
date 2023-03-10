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
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fetchAPI(word){
    
    try {
        infoTextEl.style.display = "block";
        meaningContainerEl.style.display = "none";
        infoTextEl.innerText = `Searching the meaning of "${word}"`

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res)=>res.json());
        console.log(result);

        if(result.title){ 
            infoTextEl.style.display = "none";
            meaningContainerEl.style.display = "block";
            
            audioEl.style.display = "none";
            titleEl.innerText = word;
            meaningEl.innerText = "Not Available";
        } else {
            infoTextEl.style.display = "none";
            meaningContainerEl.style.display = "block";  

            audioEl.style.display = "inline-flex";
            titleEl.innerText = result[0].word;
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
            audioEl.src = result[0].phonetics[0].audio;
        }
    
    } catch (error) {
        console.log(error);
        infoTextEl.innerText = `An error happened, try again later`
    }
    
}

// add an event listener to get everything inside the input
inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    };
})