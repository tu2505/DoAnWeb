// Hàm onClick cho nút Delete Item
function deleteItem(itemId) {
  console.log(`deleteItem called with ID: ${itemId}`);

  // Kiểm tra đầu vào
  if (!itemId) {
    console.error("Invalid item ID!");
    return;
  }

  // Hiển thị hộp thoại xác nhận trước khi xóa
  const confirmDelete = confirm("Are you sure you want to delete this item?");

  if (confirmDelete) {
    // Tìm phần tử trong DOM
    const itemElement = document.querySelector(`tr[data-item-id="${itemId}"]`);
    if (itemElement) {
      console.log("Item element found in DOM:", itemElement);

      // Gửi yêu cầu xóa tới server
      fetch(`/api/items/${itemId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            alert("Item successfully deleted.");
            // Xóa mục khỏi giao diện
            itemElement.remove();
          } else {
            console.error("Failed to delete item on the server.");
            alert("Failed to delete the item.");
          }
        })
        .catch((error) => {
          console.error("Error during fetch:", error);
          alert("An error occurred. Please try again later.");
        });
    } else {
      console.warn("Item element not found in DOM.");
      alert("Item not found.");
    }
  } else {
    console.log("Deletion canceled by the user.");
  }
}
