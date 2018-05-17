const order = [];
const finalOrder = [];
const cost = [];

$(".ingredient").on("click", function(e) {
  e.preventDefault();
  if($(this).data("selected") === false) {
    $(this).data("selected", true);
    $(this).removeClass("has-background-warning");
    $(this).addClass("has-background-success");
    order.push($(this).data("name"));
    cost.push($(this).data("price"));
  } else {
    $(this).data("selected", false);
    $(this).removeClass("has-background-success");
    $(this).addClass("has-background-warning");
    order.splice(order.indexOf($(this).data("name")), 1);
    cost.splice(cost.indexOf($(this).data("price")), 1);
  }
  updateOrder(order, cost);
});

$("#submit").on("click", function(e) {
  e.preventDefault;
  let name = $("#name").val().trim();
  if(name.length === 0) {
    alert("YOU MUST SUBMIT A NAME");
  } else if(order.indexOf("Meat") !== -1 && order.indexOf("Veggie") !== -1) {
    alert("Please pick just one patty type");
  } else if(order.indexOf("Meat") === -1 && order.indexOf("Veggie") === -1){
    alert("You have to at least select a patty type");
  } else {
    finalOrder.push(name);
    if(order.indexOf("Meat") !== -1) {
      finalOrder.push(order[order.indexOf("Meat")]);
    } else {
      finalOrder.push(order[order.indexOf("Veggie")]);
    }
    if(order.indexOf("Lettuce") !== -1) {
      finalOrder.push(1);
    } else {
      finalOrder.push(0);
    }
    if(order.indexOf("Tomato") !== -1) {
      finalOrder.push(1);
    } else {
      finalOrder.push(0);
    }
    if(order.indexOf("Onion") !== -1) {
      finalOrder.push(1);
    } else {
      finalOrder.push(0);
    }
    if(order.indexOf("Pickles") !== -1) {
      finalOrder.push(1);
    } else {
      finalOrder.push(0);
    }
    if(order.indexOf("Bacon") !== -1) {
      finalOrder.push(1);
    } else {
      finalOrder.push(0);
    }
    if(order.indexOf("Cheese") !== -1) {
      finalOrder.push(1);
    } else {
      finalOrder.push(0);
    }
    if(order.indexOf("Ketchup") !== -1) {
      finalOrder.push(1);
    } else {
      finalOrder.push(0);
    }
    if(order.indexOf("Mustard") !== -1) {
      finalOrder.push(1);
    } else {
      finalOrder.push(0);
    }
    if(order.indexOf("BBQ") !== -1) {
      finalOrder.push(1);
    } else {
      finalOrder.push(0);
    }
    let finalPrice = cost.reduce((a, b) => {
      return a + b;
    });
    finalOrder.push(finalPrice.toFixed(2));
    let final = new Order(finalOrder);
    sendOrder(final);
  }
});

sendOrder = (order) => {
  $.post("/api/orders", order, data => {
    console.log(data);
  });
}

updateOrder = (ingredients, prices) => {
  $("#order").html("");
  let totalCost = prices.reduce((a, b) => {
    return a + b;
  });
  $("#price").html("$" + totalCost.toFixed(2));
  ingredients.forEach(ingredient => {
    let newIngredient = $("<li class='is-size-5'></li>");
    newIngredient.append(ingredient);
    $("#order").append(newIngredient);
  });
}

class Order {
  constructor(stuff) {
    this.name = stuff[0];
    this.patty_type = stuff[1];
    this.has_lettuce = stuff[2];
    this.has_tomato = stuff[3];
    this.has_onion = stuff[4];
    this.has_pickles = stuff[5];
    this.has_bacon = stuff[6];
    this.has_cheese = stuff[7];
    this.has_ketchup = stuff[8];
    this.has_mustard = stuff[9];
    this.has_bbq = stuff[10];
    this.price = stuff[11];
  }
}