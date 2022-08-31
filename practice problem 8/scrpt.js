const loadPlayer = (search) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`;
  fetch(url)
   .then(res => res.json())
   .then(data => displayPlayer(data.player))
}
const displayPlayer = (player) => {
  const playerContainer = document.getElementById('player-container');
  playerContainer.innerHTML= ``;
    player.forEach(element => {
      const {strThumb,strPlayer,idPlayer,idTeam,strBirthLocation} = element;
      const playerDiv = document.createElement('div');
      playerDiv.classList.add('player');
      playerDiv.innerHTML = `
      <img class="imgee" src="${strThumb ? strThumb : 'No Picture'}" alt="">
      <h4>Player Name : ${strPlayer}</h4>
      <h4>Player Team : ${idTeam}</h4>
      <p>Player's Location : ${strBirthLocation}</p>
      <button onclick="displayPlayerDetails('${strPlayer.idPlayer}')">Player Details</button>
      `;
      playerContainer.appendChild(playerDiv);
      // console.log(element);
  
  });
}

const searchPlayer = () => { 
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value ;
  loadPlayer(searchText);
  searchField.value = "";
  // console.log('searchinng', searchText);
 
}

const displayPlayerDetails = (strPlayer,idPlayer) => {
  
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p= ${idPlayer}`;

  fetch(url)
   .then(res => res.json())
   .then(data => console.log(data))
  // console.log(url);
}
 
// loadPlayer("m")