let container = document.getElementById('container')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức chính quy để kiểm tra định dạng email

setTimeout(() => {
    container.classList.add('sign-in')
}, 200)

document.addEventListener('DOMContentLoaded', () => {
    let modal = document.getElementById('modal');
    let loginBtn = document.getElementById('login-btn');
    let signUpBtn = document.getElementById('btn-signUp');

    modal.style.display = 'none';

    // Hàm toggle giữa sign-in và sign-up
    toggle = () => {
        container.classList.toggle('sign-in');
        container.classList.toggle('sign-up');
    };

    // Ẩn modal khi người dùng bấm bên ngoài modal
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Hiển thị modal sau khi nhấn nút đăng nhập
    loginBtn.addEventListener('click', (e) => {
        var userName = document.getElementById('signInUserName');
        var password = document.getElementById('signInPass');
        toggleError(userName);
        toggleError(password);
        checkEmail(userName);

        if (userName?.value !== "" && password?.value !== "" && checkEmail(userName) === true) {
            // showSuccessModal('Bạn đã đăng nhập thành công!');
            showSignInModal(userName.value, password.value);
        }


    });

    signUpBtn.addEventListener('click', (e) => {
        var userName = document.getElementById('signUpUserName');
        var email = document.getElementById('signUpEmail');
        var password = document.getElementById('signUpPass');
        var confirmPass = document.getElementById('signUpConfirmPass');

        toggleError(userName);
        checkEmail(email);
        toggleError(password);
        toggleError(confirmPass);

        if (userName?.value !== "" && password?.value !== "" && checkEmail(email) === true) {
            showSignUpModal();
        } else {
            console.log('wtf');
        }
    });

});

function showSignInModal(email, password) {
    var modal = document.getElementById('modal');
    var modalIcon = document.getElementById('modal-icon');
    var modalMessage = document.getElementById('modal-message');
    var closeBtn = document.getElementById('modal-closeBtn');
    var isSuccess = false;
    var isAdmin = false;

    if (email === 'admin@gmail.com' && password === 'admin') {
        isAdmin = true;
        isSuccess = true;
    }
    else if (email === 'nhanvien@gmail.com' && password === 'nhanvien') {
        isAdmin = false;
        isSuccess = true;
    }
    else
        isSuccess = false;

    //Tắt show error
    document.querySelectorAll('.error-login').forEach(element => {
        element.style.display = 'none';
    });

    if (isSuccess) {
        modalIcon.src = 'img/icons8-yes-240.png';
        //Check dang nhap admin hay kach hang
        if (isAdmin) {
            modalMessage.textContent = 'Đăng nhập thành công với tư cách admin';
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';

                //Chuyển hướng người dùng
                window.location.href = 'admin.html';
                //Lưu giá trị vào local storage
                localStorage.setItem('userName', 'Admin Tú');


            });
        } else {
            modalMessage.textContent = 'Đăng nhập thành công';
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';

                //Chuyển hướng người dùng
                //Lưu giá trị vào local storage
                localStorage.setItem('userName', 'Nguyễn Văn A');

                window.location.href = 'index.html';

            });
        }
        modal.style.display = 'block';

    } else {

        modalIcon.src = 'img/icons8-cancel-240.png';
        modalMessage.textContent = 'Tài khoản hoặc mật khẩu không đúng vui lòng thử lại!!!';
        modal.style.display = 'block';

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';

        });

    }
}

function showSignUpModal() {
    //Tắt show error
    document.querySelectorAll('.error-signUp').forEach(element => {
        element.style.display = 'none';
    });
    var modal = document.getElementById('modal');
    var modalIcon = document.getElementById('modal-icon');
    var modalMessage = document.getElementById('modal-message');
    var closeBtn = document.getElementById('modal-closeBtn');

    modal.style.display = 'block';

    modalIcon.src = 'img/icons8-yes-240.png';
    modalMessage.textContent = 'Đăng ký thành công';
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';

        //Chuyển hướng người dùng
        window.location.href = 'dangnhap.html';

    });

}

function toggleError(input) {
    const errorElement = input.nextElementSibling;
    if (input.value === "") {
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function checkEmail(input) {
    if (!emailPattern.test(input.value)) {
        input.nextElementSibling.style.display = 'block';
        input.nextElementSibling.innerText = 'Không đúng định dạng gmail';
        return false;
    }
    return true;
}



