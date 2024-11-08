function accordion() {
    let btnacc = document.querySelectorAll(".order--item .btns");
    console.log("btnacc :>> ", btnacc);
    function removeactive() {
      btnacc.forEach(function (item, index) {
        item.classList.remove("active");
        var panel = item.nextElementSibling;
        panel.style.maxHeight = null;
      });
    }
    btnacc.forEach(function (item, index) {
      item.addEventListener("click", function (e) {
        console.log(1);
        var panel = item.nextElementSibling;
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          panel.style.maxHeight = null;
        } else {
          removeactive();
          this.classList.toggle("active");
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        }
        // removeactive();
      });
    });
  }
  accordion();