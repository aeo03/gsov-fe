import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './LoginForm/LoginForm';
import Order from './OrderForm/OrderForm';
import './App.css';
function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/orders" element={<Order />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;
