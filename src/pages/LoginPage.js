import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Validation from "../components/LoginValidation";
import axios from 'axios'

function LoginPage() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();



    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if (
            errors.email === "" &&
            errors.password === ""
        ) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === "Success") {
                        navigate('/')
                    } else {
                        alert("Email or Password does not exist")
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="section-type-form2">
            <h1 className="title-form">LOGIN</h1>
            <form className="pages-row" action="" onSubmit={handleSubmit}>
                <div className="pages-col-12">
                    <label
                        className="label-form"
                        htmlFor="email"
                    >E-mail</label>
                </div>
                <div className="pages-col-12">
                    <input
                        type="email"
                        name='email'
                        placeholder="E-MAIL"
                        className="input-form"
                        onChange={handleInput} />
                    {errors.email && <span className="input-error">{errors.email}</span>}
                </div>
                <div className="pages-col-12">
                    <label
                        className="label-form"
                        htmlFor="password"
                    >Password</label>
                </div>
                <div className="pages-col-12">
                    <input
                        type="password"
                        name='password'
                        placeholder="PASSWORD"
                        className="input-form"
                        onChange={handleInput} />
                    {errors.password && <span className="input-error">{errors.password}</span>}
                </div>
                <div className="pages-col-12">
                    <button className="button-input-form" type="submit">LOGIN TO MY ACCOUNT</button>
                </div>
            </form>
            <div className="pages-row">
                <div className="pages-col-6">
                    <p className="link-back">Don't have an account? <Link to='/signup'>Sign-up here</Link></p>
                </div>
                <div className="pages-col-6" style={{ textAlign: 'right', }}>
                    <p className="link-back">Go back to <Link to='/'>Home</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
