const emailInput = document.getElementById('gmail');
    const emailError = document.getElementById('email-error');
    const loginBtn = document.querySelector('.container button');
    const firstName = document.getElementById('firstName');

    loginBtn.addEventListener('click', () => {

        const email = emailInput.value.trim();

        if (!email.includes('@')) {
            emailError.style.display = 'block';
            emailInput.style.border = "2px solid red";
            return;
        }

        // Если всё ок
        emailError.style.display = 'none';
        emailInput.style.border = "none";

        localStorage.setItem('username', name);

        window.location.href = "index.html"; 
    });