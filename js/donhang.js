// function accordion() {
//   // Chọn tất cả các phần tử .btns trong mỗi .order--item
//   let btnacc = document.querySelectorAll(".order--item .btns");

//   // Hàm đóng tất cả các bảng
//   function closeAllPanels() {
//       btnacc.forEach(function (item) {
//           item.classList.remove("active");
//           let panel = item.nextElementSibling; // Tìm bảng ngay sau nút
//           if (panel && panel.classList.contains("order-table")) {
//               panel.style.maxHeight = null; // Đóng bảng
//           }
//       });
//   }

//   // Thêm sự kiện click cho mỗi nút
//   btnacc.forEach(function (item) {
//       item.addEventListener("click", function () {
//           let panel = item.nextElementSibling; // Bảng mà nút này điều khiển

//           // Kiểm tra trạng thái hiện tại của bảng
//           if (item.classList.contains("active")) {
//               item.classList.remove("active"); // Đóng bảng
//               panel.style.maxHeight = null;
//           } else {
//               closeAllPanels(); // Đóng tất cả các bảng
//               item.classList.add("active"); // Mở bảng hiện tại
//               panel.style.maxHeight = panel.scrollHeight + "px"; // Mở rộng bảng
//           }
//       });
//   });
// }

// // Khởi tạo accordion
// accordion();


// document.addEventListener("DOMContentLoaded", function () {
//     function accordion() {
//         // Lấy tất cả các phần tử có class "btns"
//         let btns = document.querySelectorAll(".btns");

//         // Hàm đóng tất cả các bảng
//         function closeAllPanels() {
//             btns.forEach(function (btn) {
//                 btn.classList.remove("active");
//                 let table = btn.parentElement.querySelector(".order-table");
//                 if (table) {
//                     table.classList.remove("open");
//                 }
//             });
//         }

//         // Gắn sự kiện click cho mỗi nút
//         btns.forEach(function (btn) {
//             btn.addEventListener("click", function () {
//                 let table = btn.parentElement.querySelector(".order-table");

//                 // Kiểm tra nếu bảng tồn tại
//                 if (!table) return;

//                 // Nếu bảng đang mở thì đóng nó
//                 if (table.classList.contains("open")) {
//                     table.classList.remove("open");
//                     btn.classList.remove("active");
//                     console.log('Dong')
//                 } else {
//                     // Đóng tất cả các bảng trước khi mở bảng hiện tại
//                     closeAllPanels();
//                     table.classList.add("open");
//                     btn.classList.add("active");
//                 }
//             });
//         });
//     }

//     // Khởi chạy accordion
//     accordion();
// });



