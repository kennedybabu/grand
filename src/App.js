import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage";
import { Route, Routes} from 'react-router-dom'
import Accomodation from "./pages/Accomodation";


function App() {
  
  return (
    <>
      <Navbar />
        <Routes>          
          <Route path='/' exact element={<Landingpage />} />
          <Route path='/accomodation' element={<Accomodation />} />
        </Routes>
    </>
  );
}

export default App;
