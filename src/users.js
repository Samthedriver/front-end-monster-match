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

        displayOptionsContainer();
      });
}

function addLogoutBtnListener()
{
  event.preventDefault();
  loggedInUser = {};
  console.log("in logout listener");
  displayWelcomeContainer();
}

function addCreateCostumeBtnListener()
{
  event.preventDefault();
  displayCostumeFormContainer();
}

function addNewUserBtnListener()
{
  event.preventDefault();

  welcomeContainer.style.display = 'none';

  newUserContainer.style.display = 'block';

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

    displayCostumeFormContainer();
}

function addCreateNewUserBtnListener(event)
{
  event.preventDefault()
  //assuming username is unique in DB and users global array
  Controller.postUser(event)
  document.getElementById('newUserContainer').style.display = 'none';
  document.getElementById('optionsContainer').style.display = 'block';
}
