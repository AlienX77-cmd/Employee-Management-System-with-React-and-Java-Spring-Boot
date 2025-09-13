import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import { FooterComponent } from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <div className="mt-4">
          <Routes>
            {/*  http://localhost:3000 */}
            <Route path="/" element={<ListEmployeeComponent />} />
            {/*  http://localhost:3000/employees */}
            <Route path="/employees" element={<ListEmployeeComponent />} />
            {/*  http://localhost:3000/add-employee */}
            <Route path="/add-employee" element={<EmployeeComponent />} />
            {/*  http://localhost:3000/add-employee/1 */}
            <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
