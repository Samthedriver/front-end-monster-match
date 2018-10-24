let loggedInUser = {};
let loginDivInit = false;
let welcomeContainer = {};
let loginContainer = {};
let newUserContainer = {};
let optionsContainer = {};


document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  init();
});

function init()
{
  welcomeContainer = document.getElementById('welcomeContainer');
  loginContainer = document.getElementById('loginContainer');
  newUserContainer = document.getElementById('newUserContainer');
  optionsContainer = document.getElementById('optionsContainer');
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'none';

  loginOrNewUser();
  Controller.getAllCostumes();

}
