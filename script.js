// Used in index.html to build the icon grid
if (document.getElementById("gameGrid")) {
  fetch("games.json")
    .then(res => res.json())
    .then(data => {
      const grid = document.getElementById("gameGrid");
      data.forEach((game, index) => {
        const tile = document.createElement("div");
        tile.className = "game-tile";
        tile.innerHTML = `<img src="${game.image}" alt="${game.title}" title="${game.title}" />`;
        tile.onclick = () => {
          window.location.href = `game.html?id=${index}`;
        };
        grid.appendChild(tile);
      });
    });
}