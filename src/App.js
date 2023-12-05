import logo from './logo.svg';
import './App.css';
import Page from './pages/Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';


function App() {
  return (
   <div>
    <BrowserRouter>
        <Routes>
          <Route
            path='/dashboard'
            element={
              <div>
                <Dashboard />
              </div>
            }
          />
          <Route path='*' element={<Page />} />
        </Routes>
      </BrowserRouter>
  
   </div>
  );
}

export default App;
