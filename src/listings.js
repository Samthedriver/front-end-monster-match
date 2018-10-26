function renderListing(obj) {
  let costume = costumes.find((elem) => {return elem.id === obj.costume_id})
  let owner = users.find((elem) => {return elem.id === costume.user_id})

  let listingsRow = document.querySelector('#listingsRow')

  let infoCard = document.createElement('card');
  infoCard.classList.add('listingCard')

  let listingHeader = document.createElement('div')
  listingHeader.classList.add('cardHeader')
  listingHeader.innerText = `Rent ${costume.name}`
  infoCard.appendChild(listingHeader)

  let cardText = document.createElement('p')
  cardText.innerText = `\nRenter: ${owner.username}\n\nDescription: ${obj.description}\n\nStatus: ${obj.status}`;
  infoCard.appendChild(cardText)

  listingsRow.appendChild(infoCard)
}

function renderRentalsToReturn()
{
  listings.forEach(listing =>
  {
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
