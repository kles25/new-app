import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Validation from "../components/SignupValidation";
import axios from 'axios'


function SignupPage() {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        gender: '',
        email: '',
        password: '',
        // secondPassword: '',
    })
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        gender: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if (
            errors.firstName === "" &&
            errors.lastName === "" &&
            errors.birthDate === "" &&
            errors.gender === "" &&
            errors.email === "" &&
            errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/login');
                })
                .catch(err => console.log(err));
        }

    }

    return (
        <div className="section-type-form">
            <h1 className="title-form">REGISTRATION</h1>
            <form className="pages-row" action="" onSubmit={handleSubmit}>
                <div className="pages-col-12">
                    <label
                        className="label-form"
                        htmlFor="firstName"
                    >First Name</label>
                </div>
                <div className="pages-col-12">
                    <input
                        type="text"
                        name='firstName'
                        placeholder="FIRST NAME"
                        className="input-form"
                        onChange={handleInput} />
                    {errors.firstName && <span className="input-error">{errors.firstName}</span>}
                </div>
                <div className="pages-col-12">
                    <label
                        className="label-form"
                        htmlFor="lastName"
                    >Last Name</label>
                </div>
                <div className="pages-col-12">
                    <input
                        type="text"
                        name="lastName"
                        placeholder="LAST NAME"
                        className="input-form"
                        onChange={handleInput} />
                    {errors.lastName && <span className="input-error">{errors.lastName}</span>}
                </div>
                <div className="pages-col-12">
                    <label
                        className="label-form"
                        htmlFor="birthDate"
                    >Birthdate</label>
                </div>
                <div className="pages-col-12">
                    <input
                        type="date"
                        name="birthDate"
                        className="input-form"
                        onChange={handleInput} />
                    {errors.birthDate && <span className="input-error">{errors.birthDate}</span>}
                </div>
                <div className="pages-col-12">
                    <label
                        className="label-form"
                        htmlFor="gender"
                    >Gender</label>
                </div>
                <div className="pages-col-12">
                    <select name="gender" className="input-form" onChange={handleInput}>
                        <option value="">SELECT YOUR GENDER</option>
                        <option value="Male">MALE</option>
                        <option value="Female">FEMALE</option>
                        <option value="Prefer not to answer">PREFER NOT TO ANSWER</option>
                    </select>
                    {errors.gender && <span className="input-error">{errors.gender}</span>}
                </div>
                <div className="pages-col-12">
                    <label
                        className="label-form"
                        htmlFor="email"
                    >E-mail</label>
                </div>
                <div className="pages-col-12">
                    <input
                        type="email"
                        name="email"
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
                        name="password"
                        placeholder="PASSWORD"
                        className="input-form"
                        onChange={handleInput} />
                    <span className="input-note">Must contain 0-9 digits, lowercase a-z, uppercase A-Z with atleast 12 characters length </span><br />
                    {errors.password && <span className="input-error">{errors.password}</span>}
                </div>
                {/* <div className="pages-col-12">
                    <label className="label-form">Confirm Password</label>
                </div>
                <div className="pages-col-12">
                    <input
                        type="password"
                        name="secondPassword"
                        placeholder="CONFIRM PASSWORD"
                        className="input-form"
                        onChange={handleInput} />
                    {errors.secondPassword && <span className="input-error">{errors.secondPassword}</span>}
                </div> */}
                <div className="pages-col-12">
                    <button className="button-input-form" type="submit">CREATE MY ACCOUNT</button>
                </div>
            </form>
            <div className="pages-row">
                <div className="pages-col-6">
                    <p className="link-back">Have an account? <Link to='/login'>Sign-in here</Link></p>
                </div>
                <div className="pages-col-6" style={{ textAlign: 'right', }}>
                    <p className="link-back">Go back to <Link to='/'>Home</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;
