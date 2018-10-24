let loggedInUser = {};
let loginDivInit = false;
var users
var costumes


document.addEventListener('DOMContentLoaded', () => {
  loginOrNewUser();
  Controller.getAllCostumes();
  Controller.getAllUsers()
});
