var author = ["--Frank Sinatra",
    "--Wayne Gretzy",
    "--Elbert Hubbard",
    "--Epictetus",
    "--Nelson Mandela"];

var quotes = [
    "The best revenge is massive success.",
    "You miss 100% of the shots you don't take.",
"Do not take life too seriously. You will not get out alive.",
"It's not what happens to you, but how you react to it that matters.",
"Resentment is like drinking poison and waiting for your enemies to die."];



    function randomValue()
    {

      num= Math.floor(Math.random() * (quotes.length - 0 )) ;

           
                // console.log(quotes[num]);
                // console.log(author[num]);


document.getElementById("caption").innerHTML=
            `
            <p class="quote">${quotes[num]}</p>
            <p class="quoteAuthor">${author[num]}</p>


            `;

    }
   
    
    