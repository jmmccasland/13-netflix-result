export default function fillInResult(element, data) {
  // Creates result element witnin card
  const resultEl = document.querySelector('.card__results');

  // appends all the result contents to resultEl
  resultEl.innerHtml = `
  <div class="results__top">
    <div class="results__top--info">
      <h2 class="results__top--info-title"></h2>
      <h4 class="results__top--info-genre"></h4>
      <h3 class="results__top--info-rating"></h3>
    </div>

    <img src="" alt="" class="results__top-img">
  </div>

  <div class="results__bottom">
    <div class="results__bottom--summary">
      <h3 class"results__bottom--summary-title"></h3>
      <p class="results__bottom--summary-description"></p>

      <h3 class"results__bottom--actors-title"></h3>
      <p class="results__bottom--actors-list"></p>
    </div>
  </div>
  `;

  // movieTitle
  const movieTitle = resultEl.querySelector('.results__top--info-title');
  movieTitle.innerText = data.show_title;

  // movieGenre
  const movieGenre = resultEl.querySelector('.results__top--info-genre');
  movieGenre.innerText = data.catagory;

  // movieRating
  const movieRating = resultEl.querySelector('.results__top--info-rating');
  movieRating.innerHTML = `#${data.rating} <span class='fa fa-star'></span>`;

  // movieImg
  const movieImg = resultEl.querySelector('.results__top--info-img');
  movieImg.src = data.poster;

  // movieSummary
  const movieSummary = resultEl.querySelector('.results__bottom--summary-description');
  movieSummary.innerText = data.summary;

  // movieActors
  const movieActors = resultEl.querySelector('.results__bottom--actors-list');
  movieActors.innerText = data.show_cast;

  return resultEl;
}
