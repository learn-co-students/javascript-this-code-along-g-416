//create an Object
var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles"
}

//create a constructor to create sandwich objects
function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
}

//plus create an object with a function on it.
var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles",
  name: "peanut butter and jelly",
  serve: function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

//if we want to make this function a constructor we can do
function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.serve = function() {
    console.log("here's your" + this.name + ", enjoy!")
  }
}

var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"], "rectangle");

blt.serve()

var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");
// add name to the blt before serving
blt.name = "BLT";
blt.serve();
