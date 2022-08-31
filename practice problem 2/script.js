
const loadData = () => {
  const url = 'https://jsonplaceholder.typicode.com/comments' ;
  fetch(url)
    .then(res => res.json())
    .then (data => displayData(data))
}
const displayData = (data) => {
  const dataContainer = document.getElementById('data-container');
  data.forEach(x => {
    const dataDiv = document.createElement('p');
    dataDiv.innerText = x.name;
    dataContainer.appendChild(dataDiv);
  });
 
}