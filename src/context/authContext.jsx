import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Quando o token existir, tentamos buscar as informações do usuário
    if (token) {
      axios
        .get('http://localhost:5001/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data.user); // Dados do usuário
        })
        .catch((error) => {
          console.error('Erro ao carregar perfil do usuário:', error);
          localStorage.removeItem('token'); // Remove o token em caso de erro
          setToken(null); // Limpa o estado de token
          setUser(null); // Limpa os dados do usuário
        })
        .finally(() => setLoading(false)); // Finaliza o loading
    } else {
      setLoading(false); // Se não houver token, termina o loading sem fazer requisição
    }
  }, [token]); // Dependência do token para recarregar os dados do usuário

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5001/auth/login', {
        email,
        password,
      });
      const { token, userData } = response.data; // Supondo que o backend retorna 'token' e 'userData'

      // Armazenando o token no localStorage
      localStorage.setItem('token', token);
      setToken(token);
      setUser(userData); // Armazena os dados do usuário
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
