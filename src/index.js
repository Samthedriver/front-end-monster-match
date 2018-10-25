let loggedInUser = {};
let welcomeContainer = {};
let loginContainer = {};
let newUserContainer = {};
let optionsContainer = {};
let costumeFormContainer = {};
var costumes;
var users;


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
  costumeFormContainer = document.getElementById('costumeFormContainer');
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'none';
  costumeFormContainer.style.display = 'none';

  addWelcomeContainerListeners();
  addOptionsContainerListeners();
  addLoginContainerListeners();
  addNewUserContainerListeners();
  displayWelcomeContainer();
  Controller.getAllCostumes();
  renderCostumeForm();

}

function addNewUserContainerListeners()
{
  let newUserBtn = document.getElementById('newUserFormBtn');
  newUserFormBtn.addEventListener('click', addNewUserFormBtnListener);
}

function addNewUserFormBtnListener()
{
  event.preventDefault();
  //create new user();
  //logged in screen - optionsContainer view
  displayOptionsContainer();
}

function addLoginContainerListeners()
{
  let loginBtn = document.getElementById('loginFormBtn');
  loginFormBtn.addEventListener('click', addloginFormBtnListener);
}

function addloginFormBtnListener()
{
  event.preventDefault();
  let username = document.getElementById('login_input').value;
  loginUser(username);
}

function addOptionsContainerListeners()
{
  let createCostumeBtn = document.getElementById('createCostumeBtn');
  createCostumeBtn.addEventListener('click', addCreateCostumeBtnListener);

  let logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', addLogoutBtnListener);
}

function displayOptionsContainer()
{
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'block';
  costumeFormContainer.style.display = 'none';
}

function addWelcomeContainerListeners()
{
  document.getElementById('loginBtn').addEventListener('click', addLoginBtnListener);
  document.getElementById('newUserBtn').addEventListener('click', addNewUserBtnListener);
}

function addLoginBtnListener()
{
  event.preventDefault();
  displayLoginContainer();
}

function addNewUserBtnListener()
{
  event.preventDefault();
  displayNewUserContainer();
}

function displayCostumeFormContainer()
{
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'none';
  costumeFormContainer.style.display = 'block';
}

function displayNewUserContainer()
{
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'block';
  optionsContainer.style.display = 'none';
  costumeFormContainer.style.display = 'none';
}

function displayLoginContainer()
{
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'block';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'none';
  costumeFormContainer.style.display = 'none';
}

function displayWelcomeContainer()
{
  welcomeContainer.style.display = 'block';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'none';
  costumeFormContainer.style.display = 'none';
}
