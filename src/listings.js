function renderListing(obj) {
  let listingsContainer = document.querySelector('div#listingsContainer')
  let rowDiv = document.createElement('row');

  let infoCard = document.createElement('div');
  infoCard.classList.add('col')

  let costume = costumes.find(elem => {return elem.id === obj.costume_id})
  let owner = users.find(elem => {return elem.id === obj.user_id})
  infoCard.innerText = `Listing for ${costume.name}\nRenter: ${owner.name}\nDescription: ${obj.description}\nStatus: ${obj.status}`;

  rowDiv.appendChild(infoCard);
  listingsContainer.appendChild(rowDiv);
}

function renderRentalsToReturn()
{
  listings.forEach(listing =>
  {
    debugger
    if(listing.user === loggedInUser)
    {
      let card = document.createElement('card');
      card.classList += 'costumeCard';

      let imageCard = document.createElement('img');
      imageCard.src = obj['img_url'];
      imageCard.className = "card-mg-top";

      let cardHeader = document.createElement('div');
      cardHeader.className = "card-header";
      cardHeader.innerText = `${obj['name']}`;

      let infoCard = document.createElement('p');
      infoCard.className = 'card-text';
      infoCard.innerText = `Gender: ${obj['gender']}\nSize: ${obj['size']}\nBody Part: ${obj['parts']}\nCategory: ${obj['category']}\nTheme: ${obj['theme']}\nSpookiness: ${obj['spookiness']}`;

      card.appendChild(cardHeader);
      card.appendChild(imageCard);
      card.appendChild(infoCard);

      rentalRetunsContainer.appendChild(card);
    }

  });

}
