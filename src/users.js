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

function addLogoutBtnListener()
{
  event.preventDefault();
  loggedInUser = {};
  console.log("in logout listener");
  welcomeUser();
}

function addCreateCostumeBtnListener()
{
  event.preventDefault();
  renderCostumeForm();
}

function addNewUserBtnListener()
{
  event.preventDefault();

  welcomeContainer.style.display = 'none';

  newUserContainer.style.display = 'block';

  let newUserFormBtn = document.getElementById('newUserFormBtn');
  newUserFormBtn.addEventListener('click', addCreateNewUserBtnListener);
}

function addCreateNewUserBtnListener()
{
  event.preventDefault();
  //assuming username is unigue and
  console.log('should attempt to post new user data');
  newUserContainer.style.display = 'none';
  optionsContainer.style.display = 'block';
}
