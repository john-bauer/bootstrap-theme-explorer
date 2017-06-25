/* URL */
const URL = 'https://bootswatch.com/api/3.json';

/* themes */
let myThemes = [];

/* cdn's */
let myCDNs = [];
/* Variables */

/* Fetching */
fetchThemes = () => {
  fetch(URL)
  .then(function(data){
    data.json()
    .then(function(response) {
      for (let i = 0; i < response.themes.length; i++){
        myThemes.push (response.themes[i].name);
        myCDNs.push (response.themes[i].css);
      }
    });
  });
}

fetchThemes();

console.log(myThemes);
console.log(myCDNs);

moveForward = () => {
  
}

moveBackwards = () => {

}


/* click handlers */