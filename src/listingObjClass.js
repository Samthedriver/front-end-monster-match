class Listing {
  constructor(data) {
    this.costume_id = data.costume_id
    this.description = data.description
    this.status = data.status
    
    // Requests are not sent via backend controller yet
    this.requests = data.requests
  }
}
