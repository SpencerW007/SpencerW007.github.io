window.addEventListener('load', getQuote);
const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote)

const endpoint = 'https://favqs.com/api/qotd'



async function getQuote() {
    //console.log('test click worked')
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    //console.log(json_response);
    console.log(json_response['quote']);
    //.then(text => text.text());
    //console.log(text['message']);
    displayQuote(json_response['quote']['body']+ '---- This quote was said by ' + json_response['quote']['author']);
}

function displayQuote(x) {
    //const quoteBox = document.querySelector('#js-quote-text');
    //console.log('display quote working');
    //const textMessage = document.createTextNode(x);
    
    //quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = x;
}