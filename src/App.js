
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Room } from './pages/Room/Room';

function App() {
  return (<>
    {/* <p>Header</p> */}
    <Routes >
      <Route path="/" element={<Home/>}></Route>
      <Route path="/room/:roomId" element={<Room/>}></Route>
    </Routes>



  </>

  );
}

export default App;
