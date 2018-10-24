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

  let loginFormBtn = document.getElementById('loginFormBtn');
  loginFormBtn.addEventListener('click', addloginFormBtnListener);

}

function addloginFormBtnListener()
{
  event.preventDefault();
  let username = document.getElementById('login_input').value;
  let container = document.getElementById('topContainer');
  console.log(username);

  let found = false;
  fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
      .then(data => {

        data.forEach(user =>
        {
          if(username === user['username'])
          {
            found = true;
            loggedInUser = user;
            return true;
          }
        });
        console.log(data);
        if(!found)
        {
          alert('Username invalid, please enter a valid username.');
          return;
        }
        while(container.firstChild)
        {
          container.removeChild(container.firstChild);
        };

        displayUserOptions();
      });
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

  let logoutBtn = document.getElementById('logoutBtn');
  createCostumeBtn.addEventListener('click', addLogoutBtnListener);

}

function addLogoutBtnListener()
{
  event.preventDefault();
  loggedInUser = {};
  let container = document.getElementById('topContainer');
  container.style.display = "none";
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

  container.appendChild(newUserForm);

  let newUserLoginBtn = document.getElementById('newUserFromBtn');
  newUserFormBtn.addEventListener('click', addNewUserBtnListener);
}
