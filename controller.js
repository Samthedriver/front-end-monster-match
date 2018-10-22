class Controller {
const costumes_url = `http://localhost:8000/`
  static getAllCostumes(){
    fetch(costumes_url)
  }
}
