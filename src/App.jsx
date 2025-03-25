import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Router.jsx/Login';
import Employee from './Router.jsx/Employee';
import Admin from './Router.jsx/Admin';
import Register from './Router.jsx/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contractor from './Router.jsx/Contractor';
import Super_admin from './Router.jsx/Super_admin';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />  
          <Route path='/register' element={<Register/>} />      
          <Route path='/admin/*' element={<Admin/>}/>
          <Route path='/employee/*' element={<Employee/>}/>
          <Route path='/contractor/*'element={<Contractor/>}/>
          <Route path='/super_admin/*'element={<Super_admin/>}/>
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;