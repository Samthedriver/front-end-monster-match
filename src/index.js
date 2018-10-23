document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  init();
});

function init()
{
  loginOrNewUser();
  Controller.getAllCostumes();


  // Will remove costume form from init() after testing
  renderCostumeForm();
}
