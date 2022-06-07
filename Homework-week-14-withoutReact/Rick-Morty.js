fetch("https://rickandmortyapi.com/api/episode")
  .then((response) => response.json())
  .then((data) => episodeCards(data.results));

function episodeCards(episodes) {
  const episodeContainer = document.querySelector("#EpisodesGroup");
  console.log(episodes);
  episodes.forEach((episode) => {
    episodeContainer.innerHTML =
      episodeContainer.innerHTML +
      `<div class="card">
      <figure><img src="./images/rickandmortyepisodeimg.jpg"
        <figcaption><h2>Name : ${episode.name}</h2>
        <h4>Date:${episode.air_date}</h4>
        </figcaption>
        <button><h3>View Characters</h3></button>
      </figure>
      `;
  });
}
