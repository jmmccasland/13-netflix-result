import 'whatwg-fetch';
import fillInResult from './fill-in-result';


// Search Variables
const searchInput = document.querySelector('.card__search-input');
const searchBtn = document.querySelector('.card__search-btn');
const searchResult = document.querySelector('.card__results');


  fetch(`http://netflixroulette.net/api/api.php?title=Attack%20on%20titan`)
    .then((res) => {
      return res.json();
    }).then((data) => {
      fillInResult(searchResult, data);
    });

//
// searchBtn.addEventListener('click', () => {
//   searchForTitle(searchInput.value);
// });
