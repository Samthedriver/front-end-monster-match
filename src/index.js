let loggedInUser = {};
let welcomeContainer = {};
let loginContainer = {};
let newUserContainer = {};
let optionsContainer = {};
let costumeFormContainer = {};
let listingsContainer = {};
let rentalReturnsContainer = {};
let rentalListingsRendered = false;
var users
var costumes
var listings





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
  listingsContainer = document.getElementById('listingsContainer');
  rentalReturnsContainer = document.getElementById('rentalReturnsContainer');

  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'none';
  costumeFormContainer.style.display = 'none';
  listingsContainer.style.display = 'none';
  rentalReturnsContainer.style.display = 'none';

  addWelcomeContainerListeners();
  addOptionsContainerListeners();
  addLoginContainerListeners();
  addNewUserContainerListeners();
  displayWelcomeContainer();
  renderCostumeForm();

  // loginOrNewUser(); Cannot find function
  Promise.all([Controller.getAllCostumes(), Controller.getAllUsers()])
  .then(() => {
    Controller.getAllListings()
  })


}

function addNewUserContainerListeners()
{
  let newUserBtn = document.getElementById('newUserFormBtn');
  newUserFormBtn.addEventListener('click', addNewUserFormBtnListener);
}

function addNewUserFormBtnListener(event)
{
  event.preventDefault();
  //create new user();
  //logged in screen - optionsContainer view
  Controller.postUser(event)
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

  let viewListingsBtn = document.getElementById('viewListingsBtn');
  viewListingsBtn.addEventListener('click', addViewListingsBtnListeners);

  let viewRentalsBtn = document.getElementById('viewRentalsBtn');
  viewRentalsBtn.addEventListener('click', addViewRentalsBtnListener);

}

function addViewListingsBtnListeners()
{
  displayListingsContainer();
}

function addViewRentalsBtnListener()
{
  displayRentalReturnsContainer();
  if(rentalListingsRendered === false)
  {
    renderRentalsToReturn();
  }
}

function displayListingsContainer()
{
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'block';
  costumeFormContainer.style.display = 'none';
  listingsContainer.style.display = 'block';
  rentalReturnsContainer.style.display = 'none';
}

function displayRentalReturnsContainer()
{
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'block';
  costumeFormContainer.style.display = 'none';
  listingsContainer.style.display = 'none';
  rentalReturnsContainer.style.display = 'block';
}

function displayOptionsContainer()
{
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'block';
  costumeFormContainer.style.display = 'none';
  listingsContainer.style.display = 'none';
  rentalReturnsContainer.style.display = 'none';
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
  listingsContainer.style.display = 'none';
  rentalReturnsContainer.style.display = 'none';
}

function displayNewUserContainer()
{
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'block';
  optionsContainer.style.display = 'none';
  costumeFormContainer.style.display = 'none';
  listingsContainer.style.display = 'none';
  rentalReturnsContainer.style.display = 'none';
}

function displayLoginContainer()
{
  welcomeContainer.style.display = 'none';
  loginContainer.style.display = 'block';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'none';
  costumeFormContainer.style.display = 'none';
  listingsContainer.style.display = 'none';
  rentalReturnsContainer.style.display = 'none';
}

function displayWelcomeContainer()
{
  welcomeContainer.style.display = 'block';
  loginContainer.style.display = 'none';
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'none';
  costumeFormContainer.style.display = 'none';
  listingsContainer.style.display = 'none';
  rentalReturnsContainer.style.display = 'none';
}
