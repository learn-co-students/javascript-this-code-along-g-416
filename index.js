const app = "I don't do much."
var pbj={
    bread: "white",
    ingredients: ["peanut butter","jelly"],
    cut: "triangles"
}

function Sandwich(bread, ingredients, cut) {
    this.bread = bread;
    this.ingredients = ingredients;
    this.cut = cut;
    this.serve = function() {
        console.log("here's your " + this.name + ", enjoy!");
      }
  }


  var pbj = {
    bread: "white",
    ingredients: ["peanut butter", "jelly"],
    cut: "triangles",
    name: "peanut butter and jelly",
    serve: function() {
      console.log("here's your " + this.name + ", enjoy!");
    }
  }

  pbj.serve()