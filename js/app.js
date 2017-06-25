let myThemes = [];
let myCDNs = [];
let currentTheme = -1;

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
  if (currentTheme > myCDNs.length || currentTheme < 0){
    return
  } else {
  document.querySelector('#cdn').setAttribute('href', myCDNs[currentTheme]);
  }
}


/* click handlers */
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

