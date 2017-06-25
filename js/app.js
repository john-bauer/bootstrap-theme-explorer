let myThemes = [];
let myCDNs = [];
let currentTheme = 0;

/* Fetching */
fetchThemes = () => {
  fetch('https://bootswatch.com/api/3.json')
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

/*remove old cdn and append new*/
addCDN = (currentTheme) => {
  document.querySelector('#cdn').setAttribute('href', myCDNs[currentTheme]);
}

addThemeName = (currentTheme) => {
  document.querySelector('#themeName').innerHTML = myThemes[currentTheme];
}

/* click handlers */
document.querySelector('#backward').onclick = () =>{
  currentTheme--;
  addCDN(currentTheme);
  addThemeName(currentTheme);
}

document.querySelector('#forward').onclick = () =>{
  currentTheme ++;
  addCDN(currentTheme);
  addThemeName(currentTheme);
}

