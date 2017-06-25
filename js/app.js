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


addCDN = (currentTheme) => {
  console.log('adding a new theme!')
}


/* click handlers */
// window.onload = () =>{
  let currentTheme = -1;
  document.querySelector('#backward').onclick = () =>{
    console.log('backwards was pushed');
    currentTheme--;
    console.log(currentTheme);
    addCDN(currentTheme);
  }

  document.querySelector('#forward').onclick = () =>{
    console.log('forward was pushed');
    currentTheme ++;
    console.log(currentTheme);
    addCDN(currentTheme);
  }
// }
