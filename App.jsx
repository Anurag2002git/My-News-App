import React from 'react'
import Navbar from './News_App/Navbar'
import Footer from './News_App/Footer'
import Home from './News_App/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import react, {useState} from 'react'

const App = () => {
  const [language, setLanguage] = useState("hi")

  const changeLanguage = (data)=>{
    setLanguage({language : data})
  }

  return (
    <div className='min-w-full'>
      <BrowserRouter>
        <Navbar setLanguage = {setLanguage}  language = {language} />

        <Routes>
          <Route path="/" element={<Home language={language} q="All" />} />
          <Route path="/all" element={<Home language={language} q="All" />} />
          <Route path="/politics" element={<Home language={language} q="Politics" />} />
          <Route path="/science" element={<Home language={language} q="Science" />} />
          <Route path="/education" element={<Home language={language} q="Education" />} />
          <Route path="/entertainment" element={<Home language={language} q="Entertainment" />} />
          <Route path="/jokes & comedy" element={<Home language={language} q="Jokes & Comedy" />} />
          <Route path="/technology" element={<Home language={language} q="Technology" />} />
          <Route path="/crime" element={<Home language={language} q="Crime" />} />
          <Route path="/sports" element={<Home language={language} q="Sports" />} />
          <Route path="/cricket" element={<Home language={language} q="Cricket" />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
