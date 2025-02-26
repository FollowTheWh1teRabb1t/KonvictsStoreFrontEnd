import React, { useState, useEffect } from 'react';
import { Container, CarouselImage, NavigationButtons } from './styles';
import Button from '../../components/button/button.jsx';
import NavBar from '../../components/navBar/navBar.jsx';
import InputData from '../../components/input/input.jsx';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import iconVideogame from '../../assets/iconVideogame.png';
import banner from '../../assets/banner.jpg';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';

const images = [banner, banner1, banner2];

export default function Banner({ onFilterCategory, onSearch, searchQuery, scrollToProducts }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container>
      <CarouselImage src={images[currentImageIndex]} alt={`Banner ${currentImageIndex + 1}`} />
      <NavigationButtons>
        <button onClick={goToPreviousImage}>
          <FaArrowLeft size={20} />
        </button>
        <button onClick={goToNextImage}>
          <FaArrowRight size={20} />
        </button>
      </NavigationButtons>

      <Button className='buttonTitle' title="Confira os nossos produtos!" Icon={iconVideogame} onClick={scrollToProducts} />
      <NavBar className='navBar' onFilterCategory={onFilterCategory} />
      <div className="inputBox">
        <InputData
          placeholder="Pesquise seu produto..."
          value={searchQuery}
          onChange={onSearch}
        />
      </div>
    </Container>
  );
}
