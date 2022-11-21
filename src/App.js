import React from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage";
import { Route, Routes} from 'react-router-dom'
import Accomodation from "./pages/Accomodation";
import Account from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";

function App() {  
  
  return (
    <>
    <AuthContextProvider>
      <Navbar />
        <Routes>          
          <Route path='/' exact element={<Landingpage />} />
          <Route path='/accomodation' element={<Accomodation />} />
          <Route path='/account' element={<Account />} />
        </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
