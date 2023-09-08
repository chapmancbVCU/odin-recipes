/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import './App.css'
import Breakfast from './components/Breakfast';
import Desserts from './components/Desserts';
import Dinner from './components/Dinner';
import Footer from './components/Footer';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Recipe from './components/Recipe';

/**
 * Renders the App.
 * @returns Renders HTMLDivElement containing the App.
 */
function App() {

    return (
        <HashRouter>
            <div className="App">
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/breakfast" element={<Breakfast />} />
                    <Route path="/dinner" element={<Dinner />} />
                    <Route path="/desserts" element={<Desserts />} />
                    <Route path="/recipe/:id" element={<Recipe />} />
                </Routes>
                {/* <Footer /> */}
            </div>
        </HashRouter>
    )
}

export default App
