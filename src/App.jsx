import { Route, Routes, useLocation } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './components/Narbar';
import AdminNavbar from './components/AdminNarbar';
import Signup from './Pages/Signup';
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import FindTrain from "./Pages/FindTrain";
import Reservation from "./Pages/Reservation";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import AdminD from "./Pages/Admin";
import Station from "./Pages/Station";
import Admin from "./Pages/Admin";
import AddTrain from "./Pages/Admin/AddTrain";
import TrainSchedule from "./Pages/Admin/TrainSchedule"
function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();

  const [adminEmail, setAdminEmail] = useState("");
  const [adminName, setAdminName] = useState("");
  const [currentAdmin, setCurrentAdmin] = useState(null);

  // Check if the current route is under the '/admin' path
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="app">
      {/* Conditionally render Navbar or AdminNavbar based on the route */}
      {isAdminRoute ? (
        <AdminNavbar
          currentAdmin={currentAdmin}
          setCurrentAdmin={setCurrentAdmin}
        />
      ) : (
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            <Login
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route path="/find-train" element={<FindTrain />} />
        <Route
          path="/reservation"
          element={<Reservation currentUser={currentUser} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard currentUser={currentUser} />}
        />
        <Route
          path="/admin-dashboard"
          element={<AdminD currentAdmin={currentAdmin} />}
        />
        <Route
          path="/contact"
          element={<Contact currentUser={currentUser} />}
        />
        <Route
          path="/station"
          element={<Station currentUser={currentUser} />}
        />
        <Route
          path="/admin"
          element={
            <Admin
              adminEmail={adminEmail}
              setAdminEmail={setAdminEmail}
              adminName={adminName}
              setAdminName={setAdminName}
              currentAdmin={currentAdmin}
              setCurrentAdmin={setCurrentAdmin}
            />
          }
        />
        <Route
          path="/admin-add-train"
          element={<AddTrain currentAdmin={currentAdmin} />}
        />
        <Route
          path="/admin-train-schedule"
          element={<TrainSchedule currentAdmin={currentAdmin} />}
        />
      </Routes>
    </div>
  );
}

export default App;