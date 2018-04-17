/*===========
VARIABLES
===========*/

const getJokesBtn = document.querySelector('.get-jokes');
const number = document.getElementById('number');
const ulJokes = document.querySelector('.jokes');

/*===========
FUNCTIONS
===========*/

function getJokes(e) {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number.value}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = '';

      if (response.type === 'success') {
        for (let joke of response.value) {
          output += `<li>${joke.joke}</li>`
        }
      } else {
        output += `<li>Something went wrong</li>`;
      }

      ulJokes.innerHTML = output;

    }
  }

  xhr.send();

  e.preventDefault();
}

/*================
EVENT LISTENERS
================*/

getJokesBtn.addEventListener('click', getJokes);