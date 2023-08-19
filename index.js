const inputEl = document.querySelector('#input');
const infoText = document.querySelector("#info-text");
const meaningContainer = document.querySelector("#meaning-container");
const title = document.querySelector("#title");
const meaning = document.querySelector("#meaning");

async function fetchAPI(word) {

    try {

        // infoText.style.display = "block";

        // infoText.innerText = `Searching the meaning of "${word}"`      
       
        
        // const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        // const result = await fetch(url).then((res)=> res.json());

        // infoText.style.display = "none";
        // meaningContainer.style.display = "block";
        // title.innerText = result[0].word;
        // meaning.innerText = result[0].meanings[0].definitions[0].definition;

        
         //refactored response with axios
        infoText.style.display = "block";

        infoText.innerText = `Searching the meaning of "${word}"`

        const response = await axios.get((`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`), (res)=> res.json());        

        infoText.style.display = "none";
        meaningContainer.style.display = "block";

        return  title.innerText = response.data[0].word, meaning.innerText = response.data[0].meanings[0].definitions[0].definition;
       
    } catch (error) {
        console.log(error);
    }
      
}

inputEl.addEventListener("keyup", (e)=>{
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
        
    }
})