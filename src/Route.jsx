import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/HomeArl';
import { AlertProvider } from './contexts/AlertContext';
import AlertaSucesso from './pages/Components/Alert';

export default function Rotas() {
    return (
        <AlertProvider>
                        <AlertaSucesso />

            <Routes>
                <Route path="/parques" element={<App />} />
                <Route path="/" element={<Home />} />
            </Routes>
            </AlertProvider>
     
    );
}