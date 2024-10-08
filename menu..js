//inspirat https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/

document.addEventListener('DOMContentLoaded', () => {
    const usernameEl = document.querySelector('#full-name');
    const emailEl = document.querySelector('#email-address');
    const commentEl = document.querySelector('#comment-text');
    const form = document.querySelector('#comment');

    // Validarea numelui
    const checkUsername = () => {
        let valid = false;
        const min = 3, max = 25;
        const username = usernameEl.value.trim();

        if (!isRequired(username)) {
            showError(usernameEl, 'Username cannot be blank.');
        } else if (!isBetween(username.length, min, max)) {
            showError(usernameEl, `Username must be between ${min} and ${max} characters.`);
        } else {
            showSuccess(usernameEl);
            valid = true;
        }
        return valid;
    };

    // Validarea comentariului
    const checkComment = () => {
        let valid = false;
        const min = 20, max = 250; // Poți ajusta max la un număr mai mare pentru comentarii
        const comment = commentEl.value.trim();

        if (!isRequired(comment)) {
            showError(commentEl, 'Comment cannot be blank.'); // Corectat mesajul
        } else if (!isBetween(comment.length, min, max)) {
            showError(commentEl, `Comment must be between ${min} and ${max} characters.`); // Corectat mesajul
        } else {
            showSuccess(commentEl);
            valid = true;
        }
        return valid;
    };

    // Validarea email-ului
    const checkEmail = () => {
        let valid = false;
        const email = emailEl.value.trim();
        
        if (!isRequired(email)) {
            showError(emailEl, 'Email cannot be blank.');
        } else if (!isEmailValid(email)) {
            showError(emailEl, 'Email is not valid.');
        } else {
            showSuccess(emailEl);
            valid = true;
        }
        return valid;
    };

    // Verificarea validității email-ului
    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    // Funcții de validare
    const isRequired = value => value === '' ? false : true;
    const isBetween = (length, min, max) => length < min || length > max ? false : true;

    // Afișarea mesajelor de eroare
    const showError = (input, message) => {
        const formField = input.parentElement;
        formField.classList.remove('success');
        formField.classList.add('error');

        const error = formField.querySelector('small');
        error.textContent = message;
    };

    // Afișarea mesajelor de succes
    const showSuccess = (input) => {
        const formField = input.parentElement;
        formField.classList.remove('error');
        formField.classList.add('success');

        const error = formField.querySelector('small');
        error.textContent = '';
    };

    // Trimiterea formularului
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Previne trimiterea formularului

        // Validarea câmpurilor
        let isUsernameValid = checkUsername(),
            isEmailValid = checkEmail(),
            isCommentValid = checkComment();

        let isFormValid = isUsernameValid && isEmailValid && isCommentValid;

        // Trimiterea datelor la server dacă formularul este valid
        if (isFormValid) {
            const formData = {
                fullName: usernameEl.value.trim(),
                email: emailEl.value.trim(),
                comment: commentEl.value.trim(),
            };

            fetch('your-server-endpoint', { // Înlocuiește cu URL-ul serverului tău
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Afișează un mesaj de succes sau alte acțiuni după trimiterea cu succes
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    });

    // Funcția debounce pentru validare în timp real
    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                fn.apply(null, args);
            }, delay);
        };
    };

    // Validare în timp real
    form.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'full-name':
                checkUsername();
                break;
            case 'email-address':
                checkEmail();
                break;
            case 'comment-text':
                checkComment();
                break;
        }
    }));
});
