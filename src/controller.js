class Controller {

  // Check whether this var is available within each fetch method

  // costumes_url = "http://localhost:3000/api/v1/ecostumes"
  // users_url = "http://localhost:3000/api/v1/users"

  // Event.target is used to get form params in all methods, this will likely change

  // Any event passed in method call should be ignored
  static getAllCostumes(){
    return fetch("http://localhost:3000/api/v1/costumes")
    .then(res => res.json())
    .then(json => {
      costumes = json.map(costume => {
        let obj = new Costume(costume)
        obj.makeValuesReadable()
        renderCostume(obj)
        return obj
      })
      })
    }


  // Confirm that the costume var is available within the fetch call
  static postCostume(event){
    let children = event.target.parentElement.parentElement.children

    debugger
    return fetch("http://localhost:3000/api/v1/costumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "user_id": loggedInUser.id,
        "gender": children[1].children[0].value,
        "size": children[2].children[0].value,
        "category": children[3].children[0].value,
        "spookiness": children[4].children[0].value,
        "theme": children[5].children[0].value,
        "parts": children[6].children[0].value,
        "img_url": children[7].children[0].value,
        "name": children[0].children[0].value
      })
    })
    .then(res => res.json())
    .then(json => {
      let obj = new Costume(json)
      obj.makeValuesReadable()
      renderCostume(obj)
      return obj
    })
  }

  // static patchCostume(event){
  //   let costume = event.target
  //   let patch_url = `http://localhost:3000/api/v1/costumes/${costume.id}`
  //
  //   fetch(patch_url, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       "user_id": costume.user_id,
  //       "gender": costume.gender,
  //       "size": costume.size,
  //       "category": costume.category,
  //       "spookiness": costume.spookiness,
  //       "theme": costume.theme,
  //       "parts": costume.parts,
  //       "img_url": costume.img_url,
  //       "name": costume.name
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(json => console.log)
  // }
  //
  // // Check that method resolves without requiring headers or body
  // static deleteCostume(event) {
  //   let costume = event.target
  //   let delete_url = `${this.costumes_url}/${costume.id}`
  //
  //   fetch(delete_url, {
  //     method: "DELETE"
  //   })
  //   .then(res => res.json())
  //   .then(json => console.log)
  // }
  //
  // // Get request for a user and return if username exists
  // static getUser(event) {
  //   let user = event.target
  //   let get_url = `${this.users_url}/${user.id}`
  //
  //   fetch(get_url)
  //   .then(res => res.json())
  //   .then(json => console.log)
  // }
  //

  static getAllUsers() {
    return fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
    .then(json => {
      users = json.map(user => {
        return new User(user)
      })
    })
  }

  static postUser(event) {
    let formFields = event.target.parentElement.querySelectorAll('div.form-group input')
    let user = {
      "firstname": formFields[0].value,
      "lastname": formFields[1].value,
      "username": formFields[2].value
    }
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "firstname": user.firstname,
        "lastname": user.lastname,
        "username": user.username
      })
    })
    .then(res => res.json())
    .then(json => {
      users.push(new User(json))
      loggedInUser.firstname = json.firstname
      loggedInUser.lastname = json.lastname
      loggedInUser.username = json.username
    })
  }

  static getAllListings() {
    fetch("http://localhost:3000/api/v1/listings")
    .then(res => res.json())
    .then(json => {
      $('#listingsContainer').removeClass('hidden')
      listings = json.map(listing => {
        console.log(listing)
        let obj = new Listing(listing)
        renderListing(obj)
        return obj
      })
    })
  }

  static postListing(event) {

    // parse event data to be added to request body
    let listing = event

    fetch('http://localhost:3000/api/v1/listings', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "costume_id": listing.costume_id,
        "description": listing.description,
      })
    })
  }

}
