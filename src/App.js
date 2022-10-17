/* eslint-disable react/jsx-pascal-case */
import React from 'react';

// Importing html.js
import Apple_header from './Components/html/Header/Apple-header';
import Apple_footer from './Components/html/Footer/Apple-footer';
import { Routes, Route } from 'react-router-dom';
import SectionsCompiler from './Components/html/Section For Home_Page/SectionsCompiler';
import ProductPage from './Components/Apple iphones repical Images/ProductPage'
import Mac from './Components/html/Section for Mac_Page/Mac';
import Ipad from './Components/html/Sections complimations/Ipad';
import Watch from './Components/html/Sections complimations/Watch';
import Tv from './Components/html/Sections complimations/Tv';
import Music from './Components/html/Sections complimations/Music';
import Support from './Components/html/Sections complimations/Support';
import Search from './Components/html/Sections complimations/Search';
import Cart from './Components/html/Sections complimations/Cart';
import NoMatch from './Components/html/No Match Section/NoMatch';
import AppleIphonesSection from './Components/Apple iphones repical Images/AppleIphonesSection';

const App = () => {
  return (
    <nav className="outer_wrapper">
      <div className="Head">
        <Apple_header />
      </div>

      <div className='Routes_wrapper'>
        <Routes>

          <Route index element={<SectionsCompiler />} />
          <Route path="/mac/" element={<Mac />} />
          <Route path="/iphone/" element={<AppleIphonesSection />} />
          <Route path="/iphone/:pid" element={<ProductPage />} />
          <Route path="/ipad/" element={<Ipad />} />
          <Route path="/watch/" element={<Watch />} />
          <Route path="/tv/" element={<Tv />} />
          <Route path="/music/" element={<Music />} />
          <Route path="/support/" element={<Support />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/abebe" element={"Abebe Ketfo bela"} />
          <Route path="*" element={<NoMatch />} />

        </Routes>
      </div>

      <div className="Foot">
        <Apple_footer />
      </div>
    </nav>
  )
}




export default App;



// +  Deploy complete!

// Project Console: https://console.firebase.google.com/project/apple-react-fc6ab/overview
// Hosting URL: https://apple-react-fc6ab.web.app