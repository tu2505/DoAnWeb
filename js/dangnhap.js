let container = document.getElementById('container')

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
        showSignInModal();
    });

    signUpBtn.addEventListener('click', (e) => {
        showSignUpModal();
    });

});

function showSignInModal() {
    var modal = document.getElementById('modal');
    var modalIcon = document.getElementById('modal-icon');
    var modalMessage = document.getElementById('modal-message');
    var closeBtn = document.getElementById('modal-closeBtn');

    modalIcon.src = 'img/icons8-yes-240.png';
    modalMessage.textContent = 'Đăng nhập thành công';
    modal.style.display = 'block';
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        //Chuyển hướng người dùng
        window.location.href = 'signInIndex.html';
    });

    

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
        window.location.href = 'signInIndex.html';

    });

}



