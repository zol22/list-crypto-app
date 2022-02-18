import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home';
import Coin from './Coin';
/*  Deploy it to firebase
  npm install -g firebase-tools
  firebase login
  firebase init
  build
  npm run build
  firebase deploy

*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="coin/:id" element={<Coin />}/> {/* Each individual coin information detail*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
