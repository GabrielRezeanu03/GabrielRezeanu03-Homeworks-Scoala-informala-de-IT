function loadJokes() {
  return fetch("https://api.icndb.com/jokes/random/5")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      if (response.type === "success") {
        return response.value;
      }
    });
}

function addJoke(container, jokeObj) {
  console.log(jokeObj);
  var pNode = document.createElement("p");
  pNode.innerText = jokeObj.joke;
  container.appendChild(pNode);
}

function onWindowLoad() {
  var jokes = loadJokes();
  var jokeContainer = document.querySelector("#joke-container");
  jokes.then(function (response) {
    response.forEach((joke) => {
      addJoke(jokeContainer, joke);
    });
  });
}
window.addEventListener("load", onWindowLoad);
