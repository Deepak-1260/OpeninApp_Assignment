import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home_page';
import LoginScreen from './LoginScreen';

function App() {
  return (
   <Router>
     <Routes>
      <Route path="/" element={<LoginScreen/>}/>
      <Route path="/home" element={<Home/>} />
    </Routes>
  </Router>
  );
}

export default App;
