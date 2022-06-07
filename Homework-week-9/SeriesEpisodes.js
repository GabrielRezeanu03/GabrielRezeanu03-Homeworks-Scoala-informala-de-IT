fetch("https://rickandmortyapi.com/api/character")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    response.results.forEach((character) => {
      console.log(character);
      createCharach(character);
    });
  });

function createCharach(character) {
  var figureItem = document.createElement("figure");
  var divChild = document.createElement("div");
  var divImgChild = document.createElement("div");
  figureItem.appendChild(divChild);
  figureItem.appendChild(divImgChild);
  divChild.innerText = character.name;
  var img = document.createElement("img");
  img.src = character.image;
  divImgChild.appendChild(img);
  var container = document.querySelector("#second-container");
  container.appendChild(figureItem);
}

fetch("https://rickandmortyapi.com/api/episode")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    response.results.forEach(function (episode) {
      createEpisode(episode);
    });
  });

function createEpisodeContent(text) {
  var elem = document.createElement("div");
  elem.innerText = text;
  return elem;
}

function createEpisode(episode) {
  var episodeContainer = document.createElement("ul");
  var episodeName = createEpisodeContent(episode.name);
  var episodeNumber = createEpisodeContent(episode.episode);
  var episodeAirDate = createEpisodeContent(episode.air_date);
  episodeContainer.appendChild(episodeName);
  episodeContainer.appendChild(episodeNumber);
  episodeContainer.appendChild(episodeAirDate);
  episodesContainer.appendChild(episodeContainer);
}

var episodesContainer = document.querySelector("#first-container");
