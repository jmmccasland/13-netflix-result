import 'whatwg-fetch';
import fillInResult from './fill-in-result';


// Search Variables
const searchInput = document.querySelector('.card__search-input');
const searchBtn = document.querySelector('.card__search-btn');
const searchResult = document.querySelector('.card__results');

  function searchForTitle(name) {
    fetch(`http://netflixroulette.net/api/api.php?title=${name}`)
      .then((res) => {
        return res.json();
      }).then((data) => {
        fillInResult(searchResult, data);
      });
  }

searchBtn.addEventListener('click', () => {
  searchForTitle(searchInput.value);
});
