function accordion() {
  // Chọn tất cả các phần tử .btns trong mỗi .order--item
  let btnacc = document.querySelectorAll(".order--item .btns");

  // Hàm đóng tất cả các bảng
  function closeAllPanels() {
      btnacc.forEach(function (item) {
          item.classList.remove("active");
          let panel = item.nextElementSibling; // Tìm bảng ngay sau nút
          if (panel && panel.classList.contains("order-table")) {
              panel.style.maxHeight = null; // Đóng bảng
          }
      });
  }

  // Thêm sự kiện click cho mỗi nút
  btnacc.forEach(function (item) {
      item.addEventListener("click", function () {
          let panel = item.nextElementSibling; // Bảng mà nút này điều khiển

          // Kiểm tra trạng thái hiện tại của bảng
          if (item.classList.contains("active")) {
              item.classList.remove("active"); // Đóng bảng
              panel.style.maxHeight = null;
          } else {
              closeAllPanels(); // Đóng tất cả các bảng
              item.classList.add("active"); // Mở bảng hiện tại
              panel.style.maxHeight = panel.scrollHeight + "px"; // Mở rộng bảng
          }
      });
  });
}

// Khởi tạo accordion
accordion();


