function checkSignIn() {
    var userName = localStorage.getItem('userName');
    var dropdownUserNameElements = document.getElementsByClassName('dropdown-userName');
    console.log(dropdownUserNameElements);

    if (userName !== null) {
        
        if (dropdownUserNameElements.length > 0) {
            document.getElementsByClassName('dropdown')[0].style.display='block';
            dropdownUserNameElements[0].innerText = `Xin chào, ${userName}`;
            btnSignIn=document.getElementsByClassName('btn-signIn')[0].style.display='none';
        }
    } else {
        document.getElementsByClassName('btn-signIn')[0].style.display='block';
    }
}

function handleLogout() {
    localStorage.removeItem('userName');
    window.location.href='/index.html';
}

checkSignIn();

document.getElementById('logoutBtn').addEventListener('click', handleLogout);