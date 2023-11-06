function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{12,}$/

    if (values.email === "") {
        error.email = "Please fill up this field"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Invalid Email"
    }
    else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Please fill up this field"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Invalid Password"
    }
    else {
        error.password = ""
    }

    return error;
}

export default Validation;