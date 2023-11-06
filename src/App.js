import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div className='background-image-color'>
        <div className="background-gradient">
          <div className="home-container-fluid">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/news' element={<NewsPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
