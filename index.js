// STEP 1: IN THIS ASSIGNMENT, THINK ABOUT THE RELATIONSHIP BETWEEN HTML AND JS FOR YOUR SEARCH. LOOK INSIDE OF YOUR HTML FILE AS WELL FOR THIS -- YOU WILL NEED A FUNCTION THAT WILL HANDLE YOUR CHANGE EVENT AS A TIP. INSIDE OF THIS SEARCH FUNCTION, YOU WILL NEED TO CREATE A CARD(S) THAT WILL DISPLAY THE SEARCH TERM YOU PROVIDED THROUGH THE MIRRIAM WEBSTER COLLEGIATE DICTIONARY API. LETS DO THIS!!!!
function searchWord(val) {
  function dictionaryCard(data) {
    // Create your elements
    const newCard = document.createElement('div'),
      newId = document.createElement('p'),
      newSrc = document.createElement('p'),
      newStems = document.createElement('p'),
      newShortDef = document.createElement('p'),
      newDefDate = document.createElement('p')

    // Set your content
    newId.textContent = `Id: ${data.meta.id}`;
    newSrc.textContent = `Source: ${data.meta.src}`;
    newStems.textContent = `Stems: ${data.meta.stems.map(element => " " + element)}`;
    newShortDef.textContent = `Definitions: ${data.shortdef.map(element => ' ' + element)}`;
    newDefDate.textContent = `Date of Origin: ${data.date}`;

    // Creature a structure DOM
    newCard.appendChild(newId);
    newCard.appendChild(newSrc);
    newCard.appendChild(newStems);
    newCard.appendChild(newShortDef);
    newCard.appendChild(newDefDate);

    // Apply any styles or classes HERE
    newCard.classList.add('card');

    // Event handlers
    return newCard;
  }

  // This is the card
  const cards = document.querySelector('.cards');

  let cardInfo = [];

  axios
    .get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${val}?key=e5867ba3-6990-42c4-a680-e9e0709c9c60`)
    .then( response => {
      // console.log(response);
      console.log(response.data);
      removeCard();
      response.data.forEach(element => {
        cardInfo.push(element);
      })
      cardInfo.forEach(element => {
        cards.appendChild(dictionaryCard(element));
      })
    })
    .catch(error => {
      console.log('the data was not returned', error);
    })

    // THIS IS A COMMENT
}

function removeCard() {
  let elements = document.querySelectorAll('.card');
  elements.forEach(el => el.remove());
}

function searchSpanishWord(val) {
  function spanishCard(data) {

    //Create Elements
    const newCard = document.createElement('div'),
      newId = document.createElement('p'),
      newSrc = document.createElement('p'),
      newStems = document.createElement('p'),
      newShortDef = document.createElement('p')
    // Set your content
    newId.textContent = `Id: ${data.meta.id}`;
    newSrc.textContent = `Source: ${data.meta.src}`;
    newStems.textContent = `Stems: ${data.meta.stems.map(element => element)}`;
    newShortDef.textContent = `Definitions: ${data.shortdef.map(element => ' ' + element)}`;
    // Create the structure and append to the DOM
    newCard.appendChild(newId);
    newCard.appendChild(newSrc);
    newCard.appendChild(newStems);
    newCard.appendChild(newShortDef);
    // Apply styles and classes here
    newCard.classList.add('spanishCard');
    // Event Handler
    return newCard;
  }

  const spanishCards = document.querySelector('.spanishCards');
  let spanishCardInfo = [];

  axios
    .get(`https://www.dictionaryapi.com/api/v3/references/spanish/json/${val}?key=94262e67-155d-4509-839a-896e030e5316`)
    .then(response => {
      // console.log(response, "SPANISH RESPONSE");
      // console.log(response.data, "SPANISH RESPONSE.DATA");
      removeSpanishCard();
      response.data.forEach(element => {
        spanishCardInfo.push(element);
      })
      spanishCardInfo.forEach(element => {
        spanishCards.appendChild(spanishCard(element));
      })
    })
    .catch(error => {
      console.log('the data was not returned', error);
    });
}

function removeSpanishCard() {
  let elements = document.querySelectorAll('.spanishCard');
  elements.forEach(el => el.remove());
}
