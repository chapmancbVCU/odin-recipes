import './App.css'
import Deserts from './components/Deserts';
import Dinner from './components/Dinner';
import Footer from './components/Footer';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
function App() {

    return (
        <HashRouter>
            <div className="App">
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/dinner" element={<Dinner />} />
                    <Route path="/deserts" element={<Deserts />} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    )
}

export default App
