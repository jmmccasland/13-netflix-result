export default function fillInResult(resultEl, data) {
  // movieTitle
  const movieTitle = resultEl.querySelector('.results__top--info-title');
  movieTitle.innerText = data.show_title;

  // movieGenre
  const movieGenre = resultEl.querySelector('.results__top--info-genre');
  movieGenre.innerText = data.category;

  // movieRating
  const movieRating = resultEl.querySelector('.results__top--info-rating');
  movieRating.innerHTML = `${data.rating} <span class='fa fa-star'></span>`;

  // movieImg
  const movieImg = resultEl.querySelector('.results__top--img');
  movieImg.src = data.poster;

  // movieSummary
  const movieSummary = resultEl.querySelector('.results__bottom--summary-description');
  movieSummary.innerText = data.summary;

  // movieActors
  const movieActors = resultEl.querySelector('.results__bottom--actors-list');
  movieActors.innerText = data.show_cast;

  return resultEl;
}
