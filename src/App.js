import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import { RapidApiProvider } from './context/rapidApi/RapidApiContext';
function App() {
  return (
    <RapidApiProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About /> } />
              <Route path='/notfound' element={<NotFound /> } />
              <Route path='/*' element={<NotFound /> } />

            </Routes>

          </main>

          <Footer />
        
        </div>

      </Router>
    </RapidApiProvider>
    
  );
}

export default App;
