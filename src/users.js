function loginOrNewUser()
{
  let container = document.getElementById('welcomeContainer');

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
  let welcomeDiv = document.getElementById('welcomeContainer');
  // debugger;
  // if(welcomeDiv.style.display === 'block')
  // {
     welcomeDiv.style.display = 'none';
  // }
  // else
  // {
  //
  // }

  let container = document.getElementById('loginContainer');
  container.style.display = 'block';

  // if(loginDivInit)
  // {
  //   container.style.display = 'block';
  //   welcomeDiv.style.display = 'none';
  //   document.getElementById('login_form').reset();
  //   return;
  // }

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
  loginDivInit = true;

}

function addloginFormBtnListener()
{
  event.preventDefault();
  document.getElementById('welcomeContainer').style.display = 'none';
  let username = document.getElementById('login_input').value;

  loginUser(username);

}

function loginUser(username)
{
  let container = document.getElementById('loginContainer');
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
  document.getElementById('loginContainer').style.display = 'none';
  let container = document.getElementById('optionsContainer');
  if(container.style.display === 'none')
  {
    container.style.display = 'block';
    return;
  }

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
  logoutBtn.addEventListener('click', addLogoutBtnListener);

}

function addLogoutBtnListener()
{
  event.preventDefault();
  loggedInUser = {};
  console.log("in logout listener");
  document.getElementById('optionsContainer').style.display = "none";
  document.getElementById('welcomeContainer').style.display = "block";
}

function addCreateCostumeBtnListener()
{
  event.preventDefault();
  renderCostumeForm();
}

function addNewUserBtnListener()
{
  event.preventDefault();

  //hiding welcome Div
  document.getElementById('welcomeContainer').style.display = 'none';

  let container = document.getElementById('newUserContainer');
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

  let newUserFormBtn = document.getElementById('newUserFormBtn');
  newUserFormBtn.addEventListener('click', addCreateNewUserBtnListener);
}

function addCreateNewUserBtnListener()
{
  //assuming username is unigue and
  console.log('should attempt to post new user data');
  document.getElementById('newUserContainer').style.display = 'none';
  document.getElementById('optionsContainer').style.display = 'block';
}
