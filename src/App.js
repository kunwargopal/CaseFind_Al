
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Dashboards from './components/pages/Home';
import Login from './components/pages/Login';

import AllUsers from './components/pages/AllUsers';
import AllPdf from './components/pages/AllPdf';
import AddPdf from './components/pages/AddPdf';
import EditPdf from './components/pages/EditPdf';






function App() {
  return (
    <>
      <HashRouter>

        <Routes>
          <Route exact path='/' element={< Login />} />
          <Route path='/dashboard' element={< Dashboards />} />
   
          <Route path='/AllPdf' element={< AllPdf />} />
          <Route path='/AllUsers' element={< AllUsers />} />
          <Route path='/AddPdf' element={< AddPdf />} />
          <Route path='/EditPdf' element={< EditPdf />} />


         
        </Routes>
      </HashRouter>
      <HelmetProvider>
        <Helmet>
          <script src="assets/vendor/libs/jquery/jquery.js"></script>
          <script src="assets/vendor/libs/popper/popper.js"></script>
          <script src="assets/vendor/js/bootstrap.js"></script>
          <script src="assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

          <script src="assets/vendor/libs/hammer/hammer.js"></script>
          <script src="assets/vendor/libs/i18n/i18n.js"></script>
          <script src="assets/vendor/libs/typeahead-js/typeahead.js"></script>

          <script src="assets/vendor/js/menu.js"></script>

          <script src="assets/vendor/libs/cleavejs/cleave.js"></script>
          <script src="assets/vendor/libs/cleavejs/cleave-phone.js"></script>
          <script src="assets/vendor/libs/moment/moment.js"></script>
          <script src="assets/vendor/libs/flatpickr/flatpickr.js"></script>
          <script src="assets/vendor/libs/select2/select2.js"></script>

          <script src="assets/js/main.js"></script>

          <script src="assets/js/form-layouts.js"></script>
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default App;
