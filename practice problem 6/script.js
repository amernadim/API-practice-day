const loadData = () => {
  const url = 'https://randomuser.me/api/?results=50';
   fetch(url)
   .then(res => res.json())
   .then(data => displayData(data.results))
}

const displayData = data => {
  const userContainer = document.getElementById('user-container');
  data.forEach(x => {
    const userDiv = document.createElement('div');
    userDiv.innerHTML= `
    <img src="${x.picture.thumbnail}" alt="">
    <p>City : ${x.location.city}</p>
    <p>Street : ${x.location.street.name}</p>
    <p>Coordinates : ${x.location.coordinates.latitude}</p>
    <p>Time Zone : ${x.location.timezone.description}</p> 
    `;
    userContainer.appendChild(userDiv);
    
    console.log(x.location.street.name);
  })
}

loadData()