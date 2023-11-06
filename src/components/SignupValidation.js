function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{12,}$/

    if (values.firstName === "") {
        error.firstName = "Please fill up this field"
    }
    else {
        error.firstName = ""
    }

    if (values.lastName === "") {
        error.lastName = "Please fill up this field"
    }
    else {
        error.lastName = ""
    }

    if (values.birthDate === "") {
        error.birthDate = "Please fill up this field"
    }
    else {
        error.birthDate = ""
    }

    if (values.gender === "") {
        error.gender = "Please fill up this field"
    }
    else {
        error.gender = ""
    }

    if (values.email === "") {
        error.email = "Please fill up this field"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Invalid Email Format"
    }
    else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Please fill up this field"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Invalid Password Format"
    }
    else {
        error.password = ""
    }

    // if (values.secondPassword !== values.firstPassword) {
    //     error.secondPassword = "Password Doesn't Match"
    // }
    // else {
    //     error.secondPassword = ""
    // }


    return error;
}

export default Validation;