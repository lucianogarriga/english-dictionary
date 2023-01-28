# English Dictionary

The following repository shares a project whose functionality is an English dictionary.  
<br>

It is based on html, css and javascript.

<!-- > Por último podemos ver la carpeta [java](https://github.com/lucianogarriga/fundamentals/tree/main/java) -->
  
<br>

## **JAVASCRIPT DOCS** - DOM - fetch - API - async - await

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
    //fetch(url) => after the fetching we want to wait for the response (res)
    //we get the response and we want to convert this response to a JSON file with a Js method
    const result = fetch(url).then((res)=>res.json());
```
4) Always have to use AWAIT when we are fetching data from API.  
```js
    const result = await fetch(url).then((res)=>res.json());
```
5) And then, we need to change the function from normal to **ASYNC** function

```js
    const inputEl = document.getElementById("input");

    async function fetchAPI(word){
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        const result = await fetch(url).then((res)=>res.json());

        console.log(result);
    }
```
## EVENT LISTENER - KEYUP - fetchAPI  
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

## I invite you to try this wonderful dictionary, and if you like it, share it so that we can all learn in a simple and fun way.

<br>

## [To go to the website, click this link!](https://lucianogarriga.github.io/english-dictionary/)
https://lucianogarriga.github.io/english-dictionary/  
<br>   

### *I hope it will be useful to learn a little more!*

<br>

## You can find me in the following networks: 
<br>

- [LinkedIn](https://www.linkedin.com/in/lucianogarriga)
- [E-mail](lucianomgarriga@gmail.com)
- [Twitter](https://twitter.com/luchogarriga)