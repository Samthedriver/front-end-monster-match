function loginOrNewUser()
{
  // let rowDiv = document.createElement('div');

  // rowDiv.class="row";
  // rowDiv.className="btn btn-secondary";

  // let header = document.createElement('btn');
  // header.class = "col-md-4";
  // header.className = "btn btn-secondary";
  // header.innerText = "Monster Match";


  // let loginBtn = document.createElement('btn');
  // loginBtn.id = "loginBtn";
  // loginBtn.class = "col-md-4";
  // loginBtn.innerHTML = `<button type="button" class="btn btn-secondary">Login</button>`;
  document.getElementById('loginBtn').addEventListener('click', addLoginBtnListener);

  // let newUserBtn = document.createElement('btn');
  // newUserBtn.id = "newUserBtn";
  // newUserBtn.class = "col-md-4";
  // newUserBtn.innerHTML = `<button type="button" class="btn btn-secondary">New User</button>`;
  document.getElementById('newUserBtn').addEventListener('click', addNewUserBtnListener);

  // rowDiv.appendChild(header);
  // rowDiv.appendChild(loginBtn);
  // rowDiv.appendChild(newUserBtn);
  // welcomeContainer.appendChild(rowDiv);
  welcomeContainer.style.display = 'block';
}

function addLoginBtnListener()
{
  event.preventDefault();
  welcomeContainer.style.display = 'none';

  loginContainer.style.display = 'block';

  let loginForm = document.createElement('form');
  loginForm.id="login_form";
  loginForm.class = "col-md-6";
  loginForm.innerHTML = `<div class="form-group">
    <input type="text" class="form-control" id="login_input" placeholder="Enter Username">
  </div>
  <button type="submit" id="loginFormBtn" class="btn btn-secondary">Login</button>`;
  loginContainer.appendChild(loginForm);

  let loginFormBtn = document.getElementById('loginFormBtn');
  loginFormBtn.addEventListener('click', addloginFormBtnListener);
  loginDivInit = true;

}

function addloginFormBtnListener()
{
  event.preventDefault();
  welcomeContainer.style.display = 'none';
  let username = document.getElementById('login_input').value;

  loginUser(username);

}

function loginUser(username)
{
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

        displayUserOptions();
      });
}

function displayUserOptions()
{
  loginContainer.style.display = 'none';
  let container = document.getElementById('optionsContainer');
  if(optionsCntainer.style.display === 'none')
  {
    optionsCntainer.style.display = 'block';
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

  optionsCntainer.appendChild(rowDiv);
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
  optionsContainer.style.display = "none";
  welcomeContainer.style.display = "block";
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
  welcomeContainer.style.display = 'none';

  if(newUserContainer.style.display === 'none')
  {
    newUserContainer.style.display = 'block';
    return;
  }

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
  <button type="button" id="newUserFormBtn" class="btn btn-secondary">Create User</button>`;
  container.appendChild(loginForm);

  let newUserFormBtn = document.getElementById('newUserFormBtn');
  newUserFormBtn.addEventListener('click', addCreateNewUserBtnListener);

}

function addCreateNewUserBtnListener(event)
{
  event.preventDefault()
  //assuming username is unique in DB and users global array
  Controller.postUser(event)
  document.getElementById('newUserContainer').style.display = 'none';
  document.getElementById('optionsContainer').style.display = 'block';
}
