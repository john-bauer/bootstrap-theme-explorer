/* URL */
const URL = 'https://bootswatch.com/api/3.json';


/* Variables */




/* Fetching */
fetchThemes = (i) => {
  fetch(URL)
  .then(function(data){
    data.json()
    .then(function(response) {
      console.log(response.themes[i]);
    });
  });
}

getNames = (i) => {
  fetchThemes(i);
}

let i = 0;


getNames(i);