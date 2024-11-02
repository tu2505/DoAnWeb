let container = document.getElementById('container')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức chính quy để kiểm tra định dạng email


toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

document.addEventListener('DOMContentLoaded', () => {
    let modal = document.getElementById('success-modal');
    let closeBtn = document.querySelector('.close-btn');
    let loginBtn = document.getElementById('login-btn');
    let signUpBtn=document.getElementById('btn-signUp');

    var userName=document.getElementById('signInUserName').value;
    var password=document.getElementById('signInPass').value;

    console.log(modal.querySelectorAll('.error-login'));

    modal.style.display='none'; 

    // Hàm toggle giữa sign-in và sign-up
    toggle = () => {
        container.classList.toggle('sign-in');
        container.classList.toggle('sign-up');
    };

    // Đóng modal khi người dùng bấm nút "X"
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';

        //Chuyển hướng người dùng
        window.location.href = 'index.html';

    });

    // Ẩn modal khi người dùng bấm bên ngoài modal
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Hiển thị modal sau khi nhấn nút đăng nhập
    loginBtn.addEventListener('click', (e) => {
        var userName=document.getElementById('signInUserName');
        var password=document.getElementById('signInPass');
        toggleError(userName);
        toggleError(password);

        if(userName?.value!==""&&password?.value!==""){

            //Lưu giá trị vào local storage
            localStorage.setItem('userName',userName?.value);

            showSuccessModal('Đăng nhập thành công!');
        }
        
    
    });

    signUpBtn.addEventListener('click',(e)=>{
        var userName=document.getElementById('signUpUserName');
        var email=document.getElementById('signUpEmail');
        var password=document.getElementById('signUpPass');
        var confirmPass=document.getElementById('signUpConfirmPass');

        toggleError(userName);
        toggleError(email);
        toggleError(password);
        toggleError(confirmPass);
        
        if (!emailPattern.test(email)){ 
            email.nextElementSibling.style.display = 'block';
            email.nextElementSibling.innerText = 'Không đúng định dạng gmail';
        }

    });
    
});

// Hiển thị modal sau khi đăng nhập thành công
function showSuccessModal(message) {

    //Tắt show error
    document.querySelectorAll('.error-login').forEach(element => {
        element.style.display = 'none';
    });

    let modal = document.getElementById('success-modal');
    modal.querySelector('p').textContent = message; // Cập nhật thông báo
    modal.style.display = 'block';
}

// Hiển thị modal sau khi đăng nhập thành công
function showSignUpSuccessModal(message) {

    //Tắt show error
    document.querySelectorAll('.error-signUp').forEach(element => {
        element.style.display = 'none';
    });

    let modal = document.getElementById('success-modal');
    modal.querySelector('p').textContent = message; // Cập nhật thông báo
    modal.style.display = 'block';
}

function toggleError(input) {
    const errorElement = input.nextElementSibling;
    if (input.value === "") {
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

