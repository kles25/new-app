import React from "react";

function SignupPage() {
    return (
        <div className='background-image-color'>
            <div className="background-gradient">
                <div className="home-container-fluid">
                    <div className="section-type-form">
                        <h1>REGISTRATION</h1>
                        <form className="pages-row" action="">
                            <div className="pages-col-12">
                                <label className="label-form">First Name</label>
                            </div>
                            <div className="pages-col-12">
                                <input type="text" placeholder="First Name" className="input-form" />
                            </div>
                            <div className="pages-col-12">
                                <label className="label-form">Last Name</label>
                            </div>
                            <div className="pages-col-12">
                                <input type="text" placeholder="Last Name" className="input-form" />
                            </div>
                            <div className="pages-col-12">
                                <label className="label-form">Birthdate</label>
                            </div>
                            <div className="pages-col-12">
                                <input type="date" className="input-form" />
                            </div>
                            <div className="pages-col-12">
                                <label className="label-form">Gender</label>
                            </div>
                            <div className="pages-col-12">
                                <input type="radio" name="gender" value="male" className="input-form" />Male<br />
                                <input type="radio" name="gender" value="female" className="input-form" />Female<br />
                                <input type="radio" name="gender" value="other" className="input-form" />Other
                            </div>
                            <div className="pages-col-12">
                                <label className="label-form">E-mail</label>
                            </div>
                            <div className="pages-col-12">
                                <input type="email" placeholder="E-mail" className="input-form" />
                            </div>
                            <div className="pages-col-12">
                                <label className="label-form">Password</label>
                            </div>
                            <div className="pages-col-12">
                                <input type="password" placeholder="Password" className="input-form" />
                            </div>
                            <div className="pages-col-12">
                                <label className="label-form">Confirm Password</label>
                            </div>
                            <div className="pages-col-12">
                                <input type="password" placeholder="Confirm Password" className="input-form" />
                            </div>
                            <div className="pages-col-12">
                                <input type="submit" defaultValue="submit" className="button-input-form" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;
