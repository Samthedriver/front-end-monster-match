class Controller {

  // Check whether this var is available within each fetch method
  costumes_url: "http://localhost:3000/costumes",

  // Event.target is used to get form params in all methods, this will likely change

  // Any event passed in method call should be ignored
  static getAllCostumes(){
    fetch(this.costumes_url)
    .then(res => res.json())
    .then(json => {
      json.forEach(obj => {
        console.log(obj)
        renderCostume(obj)
      })
    })
  }

  // Confirm that the costume var is available within the fetch call
  static postCostume(event){
    let costume = event.target

    fetch(this.costumes_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "user_id": costume.user_id,
        "gender": costume.gender,
        "size": costume.size,
        "costume_type": costume.costume_type,
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

  static patchCostume(event){
    let costume = event.target
    let patch_url = `${this.costumes_url}/${costume.id}`

    fetch(patch_url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "user_id": costume.user_id,
        "gender": costume.gender,
        "size": costume.size,
        "costume_type": costume.costume_type,
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

  // Check that method resolves without requiring headers or body
  static deleteCostume(event) {
    let costume = event.target
    let delete_url = `${this.costumes_url}/${costume.id}`

    fetch(delete_url, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(json => console.log)
  }

}
