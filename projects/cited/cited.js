let cited = {
  'William Shakespeare' : 'A rose by any other name would smell as sweet.',
  'William Shakespeare' : 'All that glitters is not gold.',
  'William Shakespeare' : 'All the worlds a stage, and all the men and women merely players.',
  'John Kennedy' : 'Ask not what your country can do for you; ask what you can do for your country.',
  'the Bible' : 'Ask, and it shall be given you; seek, and you shall find.',
  'Rhett Butler (character)' : 'Frankly, my dear, I dont give a damn.',
  'Thomas Edison' : 'Genius is one percent inspiration and ninety-nine percent perspiration.',
}

let buttonGen = document.querySelector('#button-generation');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomCited() {
  let randomCited = Object.keys(cited)[getRandomInt(Object.keys(cited).length)];
  return randomCited;
}

function getRandomQuote(randomCited) {
  return cited[randomCited];
}

function displayQuote() {
  let randomCited = getRandomCited();
  let randomQuote = getRandomQuote(randomCited);
  let randomCitedElemnt = document.querySelector('#random-cited');
  let randomQuotesElemnt = document.querySelector('#random-quote');


  randomCitedElemnt.innerHTML = randomCited;
  randomQuotesElemnt.innerHTML = `&ldquo;${randomQuote}&rdquo;`;
}


window.onload = displayQuote;


buttonGen.addEventListener('click', displayQuote);

function copy() {

  let copyText = document.querySelector('#random-quote').innerText;

  navigator.clipboard.writeText(copyText).then(function() {
    
    
  }).catch(function(error) {
   
   return 'error copy'
  });
}
