function renderCostume(obj)
{
  let bottomContainer = document.getElementById('costumeRow');

  let card = document.createElement('card');
  card.classList += 'costumeCard';

  let imageCard = document.createElement('img');
  imageCard.src = obj['img_url'];
  imageCard.className = "card-mg-top";

  let cardHeader = document.createElement('div');
  cardHeader.innerText = `${obj['name']}`;
  cardHeader.classList += ' cardHeader'
  // cardHeader.class.add('cardHeader')

  let infoCard = document.createElement('p');
  infoCard.className = 'card-text';
  infoCard.innerText = `Gender: ${obj['gender']}\nSize: ${obj['size']}\nBody Part: ${obj['parts']}\nCategory: ${obj['category']}\nTheme: ${obj['theme']}\nSpookiness: ${obj['spookiness']}`;

  card.appendChild(cardHeader);
  card.appendChild(imageCard);
  card.appendChild(infoCard);

  bottomContainer.appendChild(card);
}

function formSubmitBtnListener(event) {
  form = event.target.parentNode
  console.log(form)
  displayOptionsContainer();
}

function renderCostumeForm() {
  event.preventDefault()

  // How will user_id be passed in form?
  // Shouldn't some of these inputs be dropdowns with pre-determined values? How to implement?

  let costumeFormDiv = $('#costumeFormContainer')[0] // The zero is here to return the DOM object within the returned jquery object

  // <div class="container-fluid" id="newUserContainer">
  //   <div class="form col-md-6" id = "login_form">
  //     <div class="form-group">
  //       <input type="text" class="form-control" id="newUserFirstName" placeholder="First Name">
  //     </div>
  //     <div class="form-group">
  //       <input type="text" class="form-control" id="newUserLastName" placeholder="Last Name">
  //     </div>
  //     <div class="form-group">
  //       <input type="text" class="form-control" id="newUserUserName" placeholder="Username">
  //     </div>
  //     <button type="button" id="newUserFormBtn" class="btn btn-secondary">Create User</button>
  //   </div>
  // </div>

  let form = document.createElement('div')
  form.id = 'costumeForm'
  form.class = "form col-md-6"
  form.className = "btn btn secondary"
  costumeFormDiv.appendChild(form)

  let div1 = document.createElement('div')
  div1.class = "form-group"
  div1.className = "btn btn secondary"
  // CREATE NAME TEXT INPUT FIELD
  let name = document.createElement('input')
  name.id = "newCostumeName"
  name.class = "form-control"
  name.type = "text"
  name.placeholder = "Costume Name"

  div1.appendChild(name)
  form.appendChild(div1)

  let div2 = document.createElement('div')
  div2.class = "form-group"
  div2.className = "btn btn secondary"
  // CREATE GENDER DROPDOWN
  let gender = document.createElement('select')
  gender.id = "newCostumeGender"
  gender.type = "select"
  gender.class = "form-control"
  gender.className = "btn btn secondary"

  // Adding optional values (m f unisex)
  let genderOption1 = document.createElement('option')
  let genderOption2 = document.createElement('option')
  let genderOption3 = document.createElement('option')
  genderOption1.value = "m"
  genderOption1.innerText = "Male"
  genderOption2.value = "f"
  genderOption2.innerText = "Female"
  genderOption3.value = "unisex"
  genderOption3.innerText = "Unisex"

  // Append options to gender dropdown form
  gender.appendChild(genderOption1)
  gender.appendChild(genderOption2)
  gender.appendChild(genderOption3)

  div2.appendChild(gender)
  form.appendChild(div2)

  let div3 = document.createElement('div')
  div3.class = "form-group"
  div3.className = "btn btn secondary"
  // CREATE SIZE DROPDOWN
  let size = document.createElement('select')
  size.id = "newCostumeSize"
  size.type = "select"

  // Adding optional values (s m l child)
  let sizeOption1 = document.createElement('option')
  let sizeOption2 = document.createElement('option')
  let sizeOption3 = document.createElement('option')
  let sizeOption4 = document.createElement('option')
  sizeOption1.value = "s"
  sizeOption1.innerText = "Small"
  sizeOption2.value = "m"
  sizeOption2.innerText = "Medium"
  sizeOption3.value = "l"
  sizeOption3.innerText = "Large"
  sizeOption4.value = "child"
  sizeOption4.innerText = "Child"

  // Append options to size dropdown form
  size.appendChild(sizeOption1)
  size.appendChild(sizeOption2)
  size.appendChild(sizeOption3)
  size.appendChild(sizeOption4)

  div3.appendChild(size)
  form.appendChild(div3)

  // CREATE TYPE DROPDOWN
  let category = document.createElement('select')
  category.id = "newCostumeType"
  category.type = "select"

  let div4 = document.createElement('div')
  div4.class = "form-group"
  div4.className = "btn btn secondary"
  // Adding optional values (casual cosplay sexy funny scary)
  let categoryOption1 = document.createElement('option')
  let categoryOption2 = document.createElement('option')
  let categoryOption3 = document.createElement('option')
  let categoryOption4 = document.createElement('option')
  let categoryOption5 = document.createElement('option')
  categoryOption1.value = "casual"
  categoryOption1.innerText = "Casual"
  categoryOption2.value = "cosplay"
  categoryOption2.innerText = "Cosplay"
  categoryOption3.value = "sexy"
  categoryOption3.innerText = "Sexy"
  categoryOption4.value = "funny"
  categoryOption4.innerText = "Funny"
  categoryOption5.value = "scary"
  categoryOption5.innerText = "Scary"

  // Append options to category dropdown form
  category.appendChild(categoryOption1)
  category.appendChild(categoryOption2)
  category.appendChild(categoryOption3)
  category.appendChild(categoryOption4)
  category.appendChild(categoryOption5)


  div4.appendChild(category)
  form.appendChild(div4)


  let div5 = document.createElement('div')
  div5.class = "form-group"
  div5.className = "btn btn secondary"

  // CREATE SPOOKINESS DROPDOWN
  let spookiness= document.createElement('select')
  spookiness.id = "newCostumeSpookiness"
  spookiness.type = "select"
  // Adding optional values (1..5)
  let spookinessOption1 = document.createElement('option')
  let spookinessOption2 = document.createElement('option')
  let spookinessOption3 = document.createElement('option')
  let spookinessOption4 = document.createElement('option')
  let spookinessOption5 = document.createElement('option')
  spookinessOption1.value = 1
  spookinessOption1.innerText = "1"
  spookinessOption2.value = 2
  spookinessOption2.innerText = "2"
  spookinessOption3.value = 3
  spookinessOption3.innerText = "3"
  spookinessOption4.value = 4
  spookinessOption4.innerText = "4"
  spookinessOption5.value = 5
  spookinessOption5.innerText = "5"

  // Append options to spookiness dropdown form
  spookiness.appendChild(spookinessOption1)
  spookiness.appendChild(spookinessOption2)
  spookiness.appendChild(spookinessOption3)
  spookiness.appendChild(spookinessOption4)
  spookiness.appendChild(spookinessOption5)


  div5.appendChild(spookiness)
  form.appendChild(div5)


  // CREATE THEME DROPDOWN
  let theme = document.createElement('select')
  theme.id = "newCostumeTheme"
  theme.type = "select"
  theme.className="btn btn secondary"
  let div6 = document.createElement('div')
  div6.class = "form-group"
  div6.className = "btn btn secondary"

  // Adding optional values (prof monster animal celeb char pun)
  let themeOption1 = document.createElement('option')
  let themeOption2 = document.createElement('option')
  let themeOption3 = document.createElement('option')
  let themeOption4 = document.createElement('option')
  let themeOption5 = document.createElement('option')
  let themeOption6 = document.createElement('option')
  themeOption1.value = "prof"
  themeOption1.innerText = "Professional"
  themeOption2.value = "monster"
  themeOption2.innerText = "Monster"
  themeOption3.value = "animal"
  themeOption3.innerText = "Animal"
  themeOption4.value = "celebrity"
  themeOption4.innerText = "Celebrity"
  themeOption5.value = "character"
  themeOption5.innerText = "Character"
  themeOption6.value = "pun"
  themeOption6.innerText = "Pun"

  // Append options to theme dropdown form
  theme.appendChild(themeOption1)
  theme.appendChild(themeOption2)
  theme.appendChild(themeOption3)
  theme.appendChild(themeOption4)
  theme.appendChild(themeOption5)
  theme.appendChild(themeOption6)

  div6.appendChild(theme)
  form.appendChild(div6)


  // CREATE PARTS DROPDOWN
  let parts = document.createElement('select')
  parts.id = "newCostumeParts"
  parts.type = "select"
  let div7 = document.createElement('div')
  div7.class = "form-group"
  div7.className = "btn btn secondary"

  // Adding optional values (whole feet legs chest head access)
  let partsOption1 = document.createElement('option')
  let partsOption2 = document.createElement('option')
  let partsOption3 = document.createElement('option')
  let partsOption4 = document.createElement('option')
  let partsOption5 = document.createElement('option')
  let partsOption6 = document.createElement('option')
  let partsOption7 = document.createElement('option')
  partsOption1.value = "whole"
  partsOption1.innerText = "Whole"
  partsOption2.value = "chest"
  partsOption2.innerText = "Chest"
  partsOption3.value = "legs"
  partsOption3.innerText = "Legs"
  partsOption4.value = "head"
  partsOption4.innerText = "Head"
  partsOption5.value = "hands"
  partsOption5.innerText = "Hands"
  partsOption6.value = "feet"
  partsOption6.innerText = "Feet"
  partsOption7.value = "access"
  partsOption7.innerText = "Accessory"

  // Append options to parts dropdown form
  parts.appendChild(partsOption1)
  parts.appendChild(partsOption2)
  parts.appendChild(partsOption3)
  parts.appendChild(partsOption4)
  parts.appendChild(partsOption5)
  parts.appendChild(partsOption6)
  parts.appendChild(partsOption7)

  div7.appendChild(spookiness)
  form.appendChild(div7)


  // CREATE IMAGE TEXT FIELD
  let image = document.createElement('input')
  image.id = "newCostumeImage"
  image.class = "form-control"
  image.type = "text"
  image.type = "text"
  image.placeholder = "Costume Image URL"

  let div8 = document.createElement('div')
  div8.class = "form-group"
  div8.className = "btn btn secondary"

  div8.appendChild(image)
  form.appendChild(div8)


  // CREATE SUBMIT BUTTON
  // Hypothesis: No event listener needed, the form will follow the action attr
  let submitBtn = document.createElement('input')
  submitBtn.type = 'button'
  submitBtn.value = 'Create New Costume'
  submitBtn.className="btn btn-secondary";
  let div9 = document.createElement('div')
  div9.class = "form-group"
  div9.className = "btn btn secondary"


  submitBtn.addEventListener('click', formSubmitBtnListener)

  div9.appendChild(submitBtn)
  form.appendChild(div9)

}
