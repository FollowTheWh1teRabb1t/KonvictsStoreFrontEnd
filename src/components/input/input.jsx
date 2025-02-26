import React from 'react';
import { Input } from './styles.js';

export default function InputData({type = 'text', placeholder, value, onChange }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}  // O valor vem do estado searchQuery no HomePage
      onChange={onChange}  // Atualiza o estado searchQuery
    />
  );
}
