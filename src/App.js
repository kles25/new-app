import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";


import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div className='background-image-color'>
        <div className="background-gradient">
          <div className="home-container-fluid">
            <Header></Header>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/news' element={<NewsPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
