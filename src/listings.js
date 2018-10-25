function renderListing(obj) {
  let listingsContainer = document.querySelector('div#listingsContainer')
  let rowDiv = document.createElement('row');

  let infoCard = document.createElement('div');
  infoCard.classList.add('col')
  infoCard.classList.add('listingRow')

  let costume = costumes.find((elem) => {return elem.id === obj.costume_id})
  let owner = users.find((elem) => {return elem.id === obj.user_id})
  infoCard.innerText = `Listing for ${costume.name}\nRenter: ${costume.user_id}\nDescription: ${obj.description}\nStatus: ${obj.status}`;

  rowDiv.appendChild(infoCard);
  listingsContainer.appendChild(rowDiv);
}