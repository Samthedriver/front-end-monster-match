let loggedInUser = {};
let loginDivInit = false;


document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  init();
});

function init()
{
  loginOrNewUser();
  Controller.getAllCostumes();

}
