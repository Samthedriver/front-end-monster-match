let loggedInUser = {};
let welcomeContainer = {};
let loginContainer = {};
let newUserContainer = {};
let optionsContainer = {};
<<<<<<< HEAD
var costumes;
var users;
=======
var users
var costumes
>>>>>>> 786c96fcab01dc99a5c0f2899be6f3b1d9e44338


document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  init();
});

function init()
{
  welcomeContainer = document.getElementById('welcomeContainer');
  loginContainer = document.getElementById('loginContainer');
  newUserContainer = document.getElementById('newUserContainer');
  //optionsContainer = document.getElementById('optionsContainer');
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  //optionsContainer.style.display = 'none';

  addWelcomeContainerListeners();
  addOptionsContainerListeners();
  addLoginContainerListeners();
  welcomeUser();
  Controller.getAllCostumes();
<<<<<<< HEAD

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

function displayUserOptions()
{
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  //optionsContainer.style.display = 'block';
}

function addWelcomeContainerListeners()
{
  document.getElementById('loginBtn').addEventListener('click', addLoginBtnListener);
  document.getElementById('newUserBtn').addEventListener('click', addNewUserBtnListener);
}

function addLoginBtnListener()
{
  event.preventDefault();
  displayLogin();
}

function displayLogin()
{
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'block';
  newUserContainer.style.display = 'none';
  //optionsContainer.style.display = 'none';
}

function welcomeUser()
{
  welcomeContainer.style.display = 'block';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  //optionsContainer.style.display = 'none';
}
=======
  Controller.getAllUsers()
});
>>>>>>> 786c96fcab01dc99a5c0f2899be6f3b1d9e44338
