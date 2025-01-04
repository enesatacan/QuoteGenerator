const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function tweet() {
  window.open(
    "http://twitter.com/intent/tweet?text=" + quote.innerHTML,
    "Tweet Window",
    "width=600, height=400"
  );
}
getQuote(apiUrl);
