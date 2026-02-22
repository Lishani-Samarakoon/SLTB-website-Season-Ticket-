import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Apply from './pages/Apply';
import FillApplication from './pages/FillApplication';
import MyTickets from './pages/MyTickets';
import Payment from './pages/Payment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/fill-application" element={<FillApplication />} />
      <Route path="/tickets" element={<MyTickets />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
