function loginOrNewUser()
{
  let container = document.getElementById('topContainer');
  let rowDiv = document.createElement('div');

  rowDiv.class="row";
  rowDiv.className="btn btn-secondary";

  let header = document.createElement('btn');
  header.class = "col-md-4";
  header.className = "btn btn-secondary";
  header.innerText = "Monster Match";

  let loginBtn = document.createElement('btn');
  loginBtn.id = "loginBtn";
  loginBtn.class = "col-md-4";
  loginBtn.innerHTML = `<button type="button" class="btn btn-secondary">Login</button>`;
  loginBtn.addEventListener('click', addLoginBtnListener);

  let newUserBtn = document.createElement('btn');
  newUserBtn.id = "newUserBtn";
  newUserBtn.class = "col-md-4";
  newUserBtn.innerHTML = `<button type="button" class="btn btn-secondary">New User</button>`;
  newUserBtn.addEventListener('click', addNewUserBtnListener);

  rowDiv.appendChild(header);
  rowDiv.appendChild(loginBtn);
  rowDiv.appendChild(newUserBtn);
  container.appendChild(rowDiv);
}

function addLoginBtnListener()
{
  event.preventDefault();

  let container = document.getElementById('topContainer');
  while(container.firstChild)
  {
    container.removeChild(container.firstChild);
  };

  let loginForm = document.createElement('form');
  loginForm.id="login_form";
  loginForm.class = "col-md-6";
  loginForm.innerHTML = `<div class="form-group">
    <input type="text" class="form-control" id="login_input" placeholder="Enter Username">
  </div>
  <button type="submit" id="loginFormBtn" class="btn btn-secondary">Login</button>`;
  container.appendChild(loginForm);
  // let loginInput = document.createElement('input');
  // loginInput.id="login_input"
  // loginInput.type="text"
  // loginInput.placeholder = "Enter Username"
  //
  // let loginFormBtn = document.createElement('input');
  // loginFormBtn.id ="loginFormBtn"
  // loginFormBtn.type="submit"
  // loginFormBtn.value="Login";
  let loginFormBtn = document.getElementById('loginFormBtn');
  loginFormBtn.addEventListener('click', addloginFormBtnListener);

  // loginForm.appendChild(loginInput);
  // loginForm.appendChild(loginFormBtn);
  // container.appendChild(loginForm);
}

function addloginFormBtnListener()
{
  event.preventDefault();
  let username = document.getElementById('login_input').value;
  let container = document.getElementById('topContainer');

  while(!(loginUser(username)))
  {
    alert('Username invalid, please enter a valid username.');
  };

  while(container.firstChild)
  {
    container.removeChild(container.firstChild);
  };

  displayUserOptions();

}

function loginUser()
{
  return true;
}

function displayUserOptions()
{
  let container = document.getElementById('topContainer');
  while(container.firstChild)
  {
    container.removeChild(container.firstChild);
  };
  let rowDiv = document.createElement('div');
  rowDiv.innerHTML = `<div class="container">
    <div class="row">
      <div class="col-sm">
        <button type="button" id="createCostumeBtn" class="btn btn-secondary">Create a costume</button>
      </div>
      <div class="col-sm">
        <button type="button" id="viewCostumeBtn" class="btn btn-secondary">View your costumes</button>
      </div>
      <div class="col-sm">
        <button type="button" id="logoutBtn" class="btn btn-secondary">Logout</button>
      </div>
    </div>
  </div>`;

  container.appendChild(rowDiv);
  let createCostumeBtn = document.getElementById('createCostumeBtn');
  createCostumeBtn.addEventListener('click', addCreateCostumeBtnListener);

}

function addCreateCostumeBtnListener()
{
  event.preventDefault();
  renderCostumeForm();
}

function addNewUserBtnListener()
{
  event.preventDefault();
  let container = document.getElementById('topContainer');
  let loginBtn = document.getElementById('loginBtn');
  let newUserBtn = event.currentTarget;
  loginBtn.parentNode.removeChild(loginBtn);
  newUserBtn.parentNode.removeChild(newUserBtn);

  let loginForm = document.createElement('form');
  loginForm.id="login_form";
  loginForm.class = "col-md-6";
  loginForm.innerHTML = `<div class="form-group">
    <input type="text" class="form-control" id="newUserFirstName" placeholder="First Name">
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="newUserLastName" placeholder="Last Name">
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="newUserUserName" placeholder="Username">
  </div>
  <button type="submit" id="newUserFormBtn" class="btn btn-secondary">Create User</button>`;
  container.appendChild(loginForm);

  // let newUserForm = document.createElement('form');
  // newUserForm.id="newUser_form";
  //
  // let newUserFirstName = document.createElement('input');
  // newUserFirstName.id="newUserFirstName"
  // newUserFirstName.type="text"
  // newUserFirstName.placeholder = "First Name"
  //
  // let newUserLastName = document.createElement('input');
  // newUserLastName.id="newUserLastName"
  // newUserLastName.type="text"
  // newUserLastName.placeholder = "Last Name"
  //
  // let newUserUserName = document.createElement('input');
  // newUserUserName.id="newUserUserName"
  // newUserUserName.type="text"
  // newUserUserName.placeholder = "User Name"
  //
  // let newUserFormBtn = document.createElement('input');
  // newUserFormBtn.id ="newUserFormBtn"
  // newUserFormBtn.type="submit"
  // newUserFormBtn.value="Create User";

  // newUserForm.appendChild(newUserFirstName);
  // newUserForm.appendChild(newUserLastName);
  // newUserForm.appendChild(newUserUserName);
  // newUserForm.appendChild(newUserFormBtn);
  container.appendChild(newUserForm);

  let newUserLoginBtn = document.getElementById('newUserFromBtn');
  newUserFormBtn.addEventListener('click', addNewUserBtnListener);
}
