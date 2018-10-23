class Costume {
  constructor(obj) {
    this.name = obj.name
    this.size = obj.size
    this.category = obj.category
    this.theme = obj.theme
    this.parts = obj.parts
    this.spookiness = obj.spookiness
    this.gender = obj.gender
    this.img_url = obj.img_url
  }

  makeValuesReadable() {

    // Format Gender
    switch(this.gender) {
      case "m":
        this.gender = "Male"
        break;
      case "f":
        this.gender = "Female"
        break;
      case "unisex":
        this.gender = "Unisex"
        break;
    }

    // Format Size
    switch(this.size) {
      case "s":
        this.size = "Small"
        break;
      case "m":
        this.size = "Medium"
        break;
      case "l":
        this.size = "Large"
        break;
      case "child":
        this.size = "Child"
        break;
    }

    // Format Category
    this.category = this.category.charAt(0).toUpperCase() + this.category.slice(1)

    // Format Theme
    switch(this.theme) {
      case "prof":
        this.theme = "Professional"
        break;
      case "monster":
        this.theme = "Monster"
        break;
      case "animal":
        this.theme = "Animal"
        break;
      case "Celeb":
        this.theme = "Celebrity"
        break;
      case "char":
        this.theme = "Character"
        break;
      case "pun":
        this.theme = "Pun"
        break;
    }

    // Format Parts
    if (this.parts === "access") {
      this.parts = "Accessory"
    } else {
      this.parts = this.parts.charAt(0).toUpperCase() + this.parts.slice(1)
    }
  }
}
