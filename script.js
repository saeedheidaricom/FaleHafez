const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('poem');
const authorText = document.getElementById('author');
const shareBtn = document.getElementById('share');
const newQuoteBtn = document.getElementById('new-fal');
const loader = document.getElementById('loader');
const title = document.getElementById('title');
const audioArtist = document.getElementById('audioArtist');
const audioArtist1 = document.getElementById('audioArtist1');
const audioArtist2 = document.getElementById('audioArtist2');
const mp3Url = document.getElementById('mp3Url');
const mp3Url1 = document.getElementById('mp3Url1');
const mp3Url2 = document.getElementById('mp3Url2');


let apiQuotes = [];

// Loading Spinner Shown
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Remove Loading Spinner
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote
function newQuote() {
    loading();
    title.innerText = apiQuotes.title;
    quoteText.innerHTML = apiQuotes.htmlText;
    audioArtist.innerText = apiQuotes.recitations[0].audioArtist;
    mp3Url.src = apiQuotes.recitations[0].mp3Url;
    audioArtist1.innerText = apiQuotes.recitations[1].audioArtist;
    mp3Url1.src = apiQuotes.recitations[1].mp3Url;
    audioArtist2.innerText = apiQuotes.recitations[2].audioArtist;
    mp3Url2.src = apiQuotes.recitations[2].mp3Url;

    complete();
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://api.ganjoor.net/api/ganjoor/hafez/faal';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        loading();
    }
}

// Tweet Quote
function sharePoem() {
    `${navigator.clipboard.writeText(quoteText.textContent + "\n saeedhedari.com")}`

}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuotes);
shareBtn.addEventListener('click', sharePoem);

// On Load
getQuotes();

