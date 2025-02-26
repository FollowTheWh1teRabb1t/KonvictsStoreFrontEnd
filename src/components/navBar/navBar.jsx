import React from 'react';
import { Container } from './styles'
import {FaLaptop, FaMobileAlt, FaMouse, FaKeyboard, FaCog } from 'react-icons/fa';


export default function NavBar({ onFilterCategory }) {
    return (
        <Container>
                <FaLaptop className='icon' size={50} onClick={() => onFilterCategory('notebook')}/>
                <FaMobileAlt className='icon' size={50} onClick={() => onFilterCategory('celular')}/>
                <FaMouse className='icon' size={50} onClick={() => onFilterCategory('mouse')}/>
                <FaKeyboard className='icon' size={50} onClick={() => onFilterCategory('teclado')}/>
                <FaCog  className='icon' size={50} onClick={() => onFilterCategory('informática')}/>
        </Container>
    )
}