import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

import Employees from './components/employees/Employees';
import EmployeeCreate from './components/employees/EmployeeCreate';
import EmployeeList from './components/employees/EmployeeList';
import EmployeeImports from './components/employees/EmployeeImports';
import EmployeeAwardsList from './components/employees/AwardsList';
import EmployeeNoticeList from './components/employees/NoticeList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/employees" element={<Employees/>}>
          <Route path="create" element={<EmployeeCreate/>}></Route>
          <Route path="list" element={<EmployeeList/>}></Route>
          <Route path="imports" element={<EmployeeImports/>}></Route>
          <Route path="awards" element={<EmployeeAwardsList/>}></Route>
          <Route path="notice" element={<EmployeeNoticeList/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
