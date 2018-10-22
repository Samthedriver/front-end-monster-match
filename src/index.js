document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  init();
});

function init()
{
  loginOrNewUser();
  Controller.getAllCostumes();
}

function renderCostume()
{
  console.log("Im in render costume.");
}

function loginOrNewUser()
{
  let container = document.getElementById('topContainer');
  let loginBtn = document.createElement('btn');
  loginBtn.id = "loginBtn";
  loginBtn.innerText = "Login";
  loginBtn.addEventListener('click', addLoginBtnListener);
  let newUserBtn = document.createElement('btn');
  newUserBtn.id = "newUserBtn";
  newUserBtn.innerText = "New User";
  newUserBtn.addEventListener('click', addNewUserBtnListener);
  container.appendChild(loginBtn);
  container.appendChild(newUserBtn);
}

function addLoginBtnListener()
{
  event.preventDefault();

  let container = document.getElementById('bottomContainer');
  let loginBtn = event.currentTarget;
  let newUserBtn = document.getElementById('newUserBtn');
  loginBtn.parentNode.removeChild(loginBtn);
  newUserBtn.parentNode.removeChild(newUserBtn);

  let loginForm = document.createElement('form');
  loginForm.id="login_form";
  let loginInput = document.createElement('input');
  loginInput.id="login_input"
  loginInput.type="text"
  loginInput.placeholder = "Enter Username"
  let loginFormBtn = document.createElement('input');
  loginFormBtn.id ="loginFormBtn"
  loginFormBtn.type="submit"
  loginFormBtn.value="Login";
  loginForm.appendChild(loginInput);
  loginForm.appendChild(loginFormBtn);
  container.appendChild(loginForm);
}

function addNewUserBtnListener()
{
  event.preventDefault();
  let container = document.getElementById('topContainer');
  let loginBtn = document.getElementById('loginBtn');
  let newUserBtn = event.currentTarget;
  loginBtn.parentNode.removeChild(loginBtn);
  newUserBtn.parentNode.removeChild(newUserBtn);

  let newUserForm = document.createElement('form');
  newUserForm.id="newUser_form";
  let newUserFirstName = document.createElement('input');
  newUserFirstName.id="newUserFirstName"
  newUserFirstName.type="text"
  newUserFirstName.placeholder = "First Name"

  let newUserLastName = document.createElement('input');
  newUserLastName.id="newUserLastName"
  newUserLastName.type="text"
  newUserLastName.placeholder = "Last Name"

  let newUserUserName = document.createElement('input');
  newUserUserName.id="newUserUserName"
  newUserUserName.type="text"
  newUserUserName.placeholder = "User Name"

  let newUserFormBtn = document.createElement('input');
  newUserFormBtn.id ="newUserFormBtn"
  newUserFormBtn.type="submit"
  newUserFormBtn.value="Create User";
  newUserForm.appendChild(newUserFirstName);
  newUserForm.appendChild(newUserLastName);
  newUserForm.appendChild(newUserUserName);
  newUserForm.appendChild(newUserFormBtn);
  container.appendChild(newUserForm);
}
