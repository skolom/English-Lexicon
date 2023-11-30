const inputEl = document.querySelector('#input');
const infoText = document.querySelector("#info-text");
const meaningContainer = document.querySelector("#meaning-container");
const title = document.querySelector("#title");
const meaning = document.querySelector("#meaning");
const audioEl = document.querySelector("#audio");

 
async function fetchAPI(word) {  
    
    try {
        
    
    
    // refactored response with axios
        infoText.style.display = "block";

        infoText.innerText = `Searching the meaning of "${word}"`

        const rsp = await axios.get((`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`));        

        if ((rsp.data[0].title)) {

            meaningContainer.style.display = "block";
            infoText.style.display = "none";
            title.innerText = word; 
            meaning.innerText = "N/A";
            audioEl.style.display = "none";
            
        } else {
            
            infoText.style.display = "none";
            meaningContainer.style.display = "block";
            audioEl.style.display = "inline-flex";    
            title.innerText = rsp.data[0].word; 
            meaning.innerText = rsp.data[0].meanings[0].definitions[0].definition;
            audioEl.src = rsp.data[0].phonetics[0].audio;
            
        }

        // infoText.style.display = "none";
        // meaningContainer.style.display = "block";

        // title.innerText = rsp.data[0].word, 
        // meaning.innerText = rsp.data[0].meanings[0].definitions[0].definition;

        

    } catch (error) {
        console.log(error);
        infoText.innerText = `an error occured`;
    }
        
    }
    

    
    inputEl.addEventListener("keyup", (e)=>{
        if (e.target.value && e.key === "Enter") {
            fetchAPI(e.target.value)
            
        }
    })

 


// async function fetchAPI(word) {

//     try {

//         infoText.style.display = "block";

//         infoText.innerText = `Searching the meaning of "${word}"`      
       
        
//         const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
//         const result = await axios.get((url).then((res)=> res.json()));

//         infoText.style.display = "none";
//         meaningContainer.style.display = "block";
//         title.innerText = result[0].word;
//         meaning.innerText = result[0].meanings[0].definitions[0].definition;

//     } catch (error) {
//         console.log(error); 
//     }
      
//         inputEl.addEventListener("keyup", (e)=>{
//             if (e.target.value && e.key === "Enter") {
//                 fetchAPI(e.target.value)
                
//             }
//         })
//     }    

