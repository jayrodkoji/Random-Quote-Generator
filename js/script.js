// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, colorChange, false);
document.getElementById('loadQuote').addEventListener("click", colorChange, false);

//Create Quote
var quotes = [];

//Create Object outline.
function myQuotes(quote, source, citation, year, tags) {
  {
    this.quote = quote,
    this.source = source,
    this.citation = citation,
    this.year = year,
    this.tags = tags
  }
}

//Create Objects.
quotes[0] = new myQuotes("To be or not to be", "William", "Hamlet", 1991, "Inspiration");
quotes[1] = new myQuotes("Question with boldness", "Jefferson", "New York", "Philosophy");
quotes[2] = new myQuotes("Do or do not, there is no try", "Yoda", "Space", 3010, "Motivation");

  var used = [];

//Generates random number to select and return single object.
function getRandomQuote() {
  var min = 0;
  var max = quotes.length;
  var randomNumber = Math.floor((Math.random() * (max-min)) + min);
  used.push(randomNumber);
  console.log(used);
  return quotes[randomNumber];
}

//Inputs keys values into HTML code and inputs it into HTML.
function printQuote() {
  var selectedQuote = getRandomQuote();
  var newHTML = "";
  newHTML += '<p class="quote">' + selectedQuote.quote + '</p>' +
             '<p class="source">' + selectedQuote.source;
  if (selectedQuote.citation != undefined) {
          newHTML +=  '<span class="citation">' + selectedQuote.citation + '</span>';
        };
  if (selectedQuote.year != undefined) {
          newHTML +=  '<span class="year">' + selectedQuote.year + '</span>'
        };
  if (selectedQuote.tags != undefined) {
          newHTML +=  '<span class="year">' + selectedQuote.tags + '</span>'
        };
        newHTML += '</p>';
        document.getElementById('quote-box').innerHTML = newHTML;
};

//Generates random color and imputs it into backgrounds.
function colorChange() {
  var characters = '0123456789ABCDEF';
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
  document.getElementById('loadQuote').style.backgroundColor = color;
  document.getElementById('addQuote').style.backgroundColor = color;
}
