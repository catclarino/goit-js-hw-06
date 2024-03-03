const submitForm = document.querySelector('.login-form')


submitForm.addEventListener('submit', handlerSubmit)

function handlerSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget
    if (email.value === "" || password.value === "") {
        return alert('Please fill all fields!')
    }

    console.log(`Email: ${email.value} \n Password: ${password.value}`);
    event.currentTarget.reset()

}

