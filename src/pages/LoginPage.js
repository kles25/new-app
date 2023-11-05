import React from "react";

function LoginPage() {
    return (
        <div className='background-image-color'>
            <div className="background-gradient">
                <div className="home-container-fluid">
                    <div className="section-type-form2">
                        <h1 className="title-form">LOGIN</h1>
                        <form className="pages-row" action="">
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
                                <input type="submit" defaultValue="submit" className="button-input-form" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
