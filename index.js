// STEP 1: IN THIS ASSIGNMENT, THINK ABOUT THE RELATIONSHIP BETWEEN HTML AND JS FOR YOUR SEARCH. LOOK INSIDE OF YOUR HTML FILE AS WELL FOR THIS -- YOU WILL NEED A FUNCTION THAT WILL HANDLE YOUR CHANGE EVENT AS A TIP. INSIDE OF THIS SEARCH FUNCTION, YOU WILL NEED TO CREATE A CARD(S) THAT WILL DISPLAY THE SEARCH TERM YOU PROVIDED THROUGH THE MIRRIAM WEBSTER COLLEGIATE DICTIONARY API. LETS DO THIS!!!!
function searchWord(val) {
  function dictionaryCard(data) {
    function checkIfNull(str) {
      if(str) {
        return str;
      }
      return '';
    }
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
      console.log(response);
      console.log(response.data);
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

// STEP 2: USE AXIOS AND SEND A GET REQUEST TO THE FOLLOWING:

// https://www.dictionaryapi.com/api/v3/references/collegiate/json/volume?key=blah

// where 'volume' is the search term word you are providing and where 'blah' is the api key provided to you on signup for the api.

// STEP 3: CREATE A FUNCTION THAT WILL ACCEPT THIS DATA FROM THE API AND CREATE A COMPONENT THAT RETURNS A DOM ELEMENT STRUCTURE OF YOUR CHOOSING FROM THE DATA:

// STEP 4: PASS THE DATA, CREATING A NEW COMPONENT FOR EACH WORD, AND ADD IT TO THE DOM

// STEP 5: NOW THAT THIS COMPONENT IS HERE, MAKE ANOTHER COMPONENT FOR THE TRANSLATIONS AND ITS SEARCH FUNCTION. MAKE AN APPROPRIATE GET REQUEST FROM THE SPANISH DICTIONARY API. IF YOU ARE UNSURE HOW TO FIND THIS LOOK AT THE DOCUMENTATION FOR THE API. ADD THIS COMPONENT TO THE DOM AS WELL.
