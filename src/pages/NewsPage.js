import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NewsPage() {
    return (
        <div className='background-image-color'>
            <div className="background-gradient">
                <div className="home-container-fluid">
                    <Header></Header>
                    <div className="section-type-whole">NEWS</div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}

export default NewsPage;
