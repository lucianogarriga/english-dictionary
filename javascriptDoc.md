# **JAVASCRIPT DOCS** 
## A) Fetch - API - Async - Await

<br>

To give functionality to the input, first we get everything inside the input.


1) We must create a function fetchAPI.  
In params, it receive the word that the user will give.

```js
    function fetchAPI(word){
```
2) We create a const which takes the url.
```js
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
```
3) We can request from the API, so we can have the result.  
We create a const and we call it result
```js 
    const result;
    //fetch(url) => after the fetching we want to wait for the response (res)
    const result = fetch(url).then((res));
    //we get the response and we want to convert this response to a JSON file with a Js method
    const result = fetch(url).then((res)=>res.json());
```
4) Always have to use **AWAIT** when we are **fetching data from API**.  
```js
    const result = await fetch(url).then((res)=>res.json());
```
5) And then, we need to change the function from normal to **ASYNC** function

```js
    async function fetchAPI(word){
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        const result = await fetch(url).then((res)=>res.json());

        console.log(result);
    }
```

## B) TRY - CATCH

Another things we need to do when we are fetching data => Use **Try and Catch** statement.

```js
    try {
        
    } catch (error) {
        
    }
```

**TRY-CATCH helps to get the possible errors from the API request**  
<br>
We need to cut everything and put it inside the try

```js
    try {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res)=>res.json());
        console.log(result);

    } catch (error) {
        console.log(error);
    }
```
If an error happens => this try-catch it gets the error and show it.

## C) InnerText

We want to change the inner text of 'info-text' ID. 

```js
    infoTextEl.innerText = `Searching the meaning of "${word}"`;
```
After the results comes, we set the display of this info text element to **NONE**.

```js
        infoTextEl.style.display = "none"
```
Then, we need to bring it back to the normal display when we are requesting again.
So we put it before the request, and we change the display to block there.

```js
        infoTextEl.style.display = "block";
```

Then we need to bring the element called 'meaning-container' too.  
We do that getting the element by ID. 

```js
    const meaningContainerEl = document.getElementById("meaning-container"); 
```
We need to show the display block after the result comes. So, we have to put after that. 

```js
    meaningContainerEl.style.display = "block";
```

<br> 

## D) Event Listener - Keyup - FetchAPI  
<br>

1) We take the HTML element by ID 
```js
    // getElementById = "input" / and store it in const
    const inputEl = document.getElementById("input");
```
2) Add an event listener to get everything inside the input
```js
    inputEl.addEventListener("keyup", (e)=>{
        if(e.target.value && e.key === "Enter"){
            fetchAPI(e.target.value)
        };
    })
```
<br> 

## E) Title & Meaning of Word (getElementById / innerText)

After we get the result, we need to take the HTML element by ID of "title" and "meaning" of each words.

```js
    const titleEl = document.getElementById("title");
    const meaningEl = document.getElementById("meaning");
```
Then, we need to put into the try of async function, the titleEl into the result.  
Here, we put into an array, where we want to get the title [0] first.   
Then, we want the meaning.   
The first position in the result [0], and the first in meanings too [0], and then we need the first definition [0] into definitions.

```js
    titleEl.innerText = result[0].word;  
    meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
```

## F) Audio Element

We need to bring the audio element, so we create another constant.

```js
    const audioEl = document.getElementById("audio");
```

We need to change the Audio 'src' to the one that we get from the API.

```js
    audioEl.src = result[0].phonetics[0].audio;
```
Then, we want to prevent the situation when we type something that doesn't have any meaning. 

So we create a condition (after the result comes).

```js 
if(result.title){
    //we need set the display of meaningContainer to block at the top
    meaningContainerEl.style.display = "block";
    titleEl.innerText = word;
    //the words you typed (this is the vote we are getting from the input)
    meaningEl.innerText = "N/A";
    //for meaning = Not available
    audioEl.style.display = "none";
    //we change the display to none
} else {
    //we bring everything to the 'else' condition
    //all the data that we bring from the API
    infoTextEl.style.display = "none";
    meaningContainerEl.style.display = "block";  
    
    //As we set the display of the audio to none, 
    //we need to bring it back to the normal
    audioEl.style.display = "inline-flex";
    titleEl.innerText = result[0].word;
    meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;
}

```

<br>
