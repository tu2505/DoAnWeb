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

function confirmDelete(id) {
  const result = confirm("Bạn có chắc muốn xóa không?");
  if (result) {
      alert("Đã xóa thành công!");
      document.getElementById(id).style.display = "none";
  } else {
      alert("Hủy bỏ xóa.");
  }
}

function confirmUpdate() {
  const result = confirm("Bạn có muốn cập nhật?");
  if (result) {
      alert("Cập nhật thành công!");
      window.location.href='/admin_nguoidung_1.html';
  } else {
      alert("Hủy bỏ cập nhật.");
  }
}

function confirmAdd() {
  const result = confirm("Bạn có muốn thêm người dùng này?");
  if (result) {
      alert("Thêm thành công!");
      window.location.href='/admin_nguoidung_1.html';
  } else {
      alert("Hủy bỏ thành công.");
  }
}


