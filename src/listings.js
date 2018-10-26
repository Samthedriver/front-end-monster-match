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
      while(rentalReturnsContainer.firstChild)
      {
        rentalReturnsContainer.removeChild(rentalReturnsContainer.firstChild);
      }

      let row = document.createElement('row');

      listings.forEach(listing =>
        {
          console.log("Im in the listings forEach of render Rentals");

          if(listing.user === loggedInUser)
          {
            let div = document.createElement('div');
            div.innerHTML = `<div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <a id=`${listing.id}Return` ref="#" class="card-link">Return Costume</a>
              </div>
            </div>`;

            row.appendChild(div);
            let link = document.getElementById(`${listing.id}Return`);
            link.addEventListener('click', addReturnLinkListener);
          }
        });
      rentalReturnsContainer.appendChild(row);
}

function addReturnLinkListener()
{
  console.log('click on return costume link');
}
