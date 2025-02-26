import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/authContext';  // Importando useAuth
import { CartProvider } from './context/cartContext';  // Importando o CartProvider
import { GlobalStyles } from './styles/GlobalStyles';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Checkout from './pages/Checkout/Checkout';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import Info from './pages/Info/Info'
import Central from './pages/Central/Central'

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AuthProvider>
                <CartProvider> 
                    <Router>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/create" element={<CreateAccount />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path='/info' element={<Info />} />
                            <Route path='/central' element={<Central/>}/>
                            <Route path="*" element={<NotFound />} /> 
                        </Routes>
                    </Router>
                </CartProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}
