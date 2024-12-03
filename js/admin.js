var data = [];

function add() {
  var item_name = document.getElementById("cart__product__item").value;
  item_price = document.getElementById("cart__price").value;
  item_quantity = document.getElementById("cart__quantity").value;

  var item = {
    Name: item_name,
    price: item_price,
    quantity: item_quantity,
  };
  data.push(item);
}

function deleteItem() {
  document.getElementById("item").remove("active");
}
