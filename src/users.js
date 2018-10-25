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

function addCreateNewUserBtnListener(event)
{
  event.preventDefault()
  //assuming username is unique in DB and users global array
  Controller.postUser(event)
  document.getElementById('newUserContainer').style.display = 'none';
  document.getElementById('optionsContainer').style.display = 'block';
}
