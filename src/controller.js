class Controller {

  // Check whether this var is available within each fetch method

  // costumes_url = "http://localhost:3000/api/v1/ecostumes"
  // users_url = "http://localhost:3000/api/v1/users"

  // Event.target is used to get form params in all methods, this will likely change

  // Any event passed in method call should be ignored
  static getAllCostumes(){
    fetch("http://localhost:3000/api/v1/costumes")
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
    let costume = event

    fetch("http://localhost:3000/api/v1/costumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "user_id": costume.user_id,
        "gender": costume.gender,
        "size": costume.size,
        "category": costume.category,
        "spookiness": costume.spookiness,
        "theme": costume.theme,
        "parts": costume.parts,
        "img_url": costume.img_url,
        "name": costume.name
      })
    })
    .then(res => res.json())
    .then(json => console.log)
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
    fetch("http://localhost:3000/api/v1/users")
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
    .then(json => console.log)
  }

}
