import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/Home/About/AboutUs';
import Contact from './Pages/Home/Contact/Contact';
import AddPackage from './Pages/Package/AddPackage/AddPackage';
import AllServices from './Pages/Services/AllServices/AllServices';
import PrivateRoute from './Pages/Login/Route/PrivateRoute';
import OrderNow from './Pages/Order/OrderNow';
import MyOrder from './Pages/Order/MyOrder';
import AllOrder from './Pages/Order/AllOrder';
import NotFound from './Pages/NotFound/NotFound';
import DetailsVeiw from './Pages/Order/DetailsVeiw';

function App() {
  return (

    <div className="flex flex-col min-h-screen font-poppins">


      <AuthProvider>
        <Router>

          <Routes>

            <Route path="/home" element={<Home />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>

            <Route path="/aboutUs" element={<AboutUs />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
            <Route path="/addServices" element={<AddPackage />}>
            </Route>
            <Route path="/details" element={<DetailsVeiw />}>
            </Route>
            <Route path="/allServices" element={<AllServices />}>
            </Route>
            <Route path="/ordernow/:servicesId" element={<PrivateRoute>
              <OrderNow />
            </PrivateRoute>}></Route>
            <Route path="/myorder" element={<PrivateRoute>
              <MyOrder />
            </PrivateRoute>}></Route>
            <Route path="/allOrder" element={<PrivateRoute>
              <AllOrder />
            </PrivateRoute>}></Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="*" element={<NotFound />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>

          </Routes>

        </Router>
      </AuthProvider>

    </div>

  );
}

export default App;
