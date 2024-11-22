import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Stopwatch from './Components/Stopwatch';
function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/stopwatch' element={<Stopwatch /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App;
