import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Header from '../../components/header/header.jsx';
import Card from '../../components/card/card.jsx';
import Banner from '../../components/banner/banner.jsx';
import { Container } from './styles';
import CartSidebar from '../../components/cartSideBar/cartSidebar.jsx';
import Footer from '../../components/footer/footer.jsx';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Referência para a área dos produtos
  const productsSectionRef = useRef(null);


  // Função para buscar produtos da API
  const fetchProducts = async (search = '', page = 1) => {
    setLoading(true);
    try {
      const offset = (page - 1) * 8;
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${search}&offset=${offset}&limit=8`);
      setProducts(response.data.results);
      setTotalPages(Math.ceil(response.data.paging.total / 8));
    } catch (error) {
      console.error('Erro ao buscar produtos', error);
      setError('Erro ao carregar produtos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts('notebook', currentPage);
  }, [currentPage]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedSearchQuery.trim() === '') {
      fetchProducts('notebook', currentPage);
    } else {
      fetchProducts(debouncedSearchQuery, currentPage);
    }
  }, [debouncedSearchQuery, currentPage]);

  const handleFilterCategory = (category) => {
    fetchProducts(category, 1);
    setCurrentPage(1);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.find(item => item.id === product.id);
      return isItemInCart ? prevCart : [...prevCart, product];
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productToRemove.id));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Função para rolar até a seção dos produtos
  const scrollToProducts = () => {
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <Header onCartClick={toggleCart} />
      <Banner 
        onFilterCategory={handleFilterCategory} 
        onSearch={handleSearch} 
        searchQuery={searchQuery}
        scrollToProducts={scrollToProducts} // Passa a função para o Banner
      />

      {loading ? (
        <p className='carregando'>Carregando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="cardArea" ref={productsSectionRef} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', background: 'black' }}>
          {products.length > 0 ? (
            products.map(product => (
              <Card
                key={product.id}
                productId={product.id}
                title={product.title}
                price={product.price}
                img={product.thumbnail}
                onAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <p>Nenhum produto disponível</p>
          )}
        </div>
      )}

      <div className="pagination">
        <button className='back' onClick={goToPreviousPage} disabled={currentPage === 1}>Anterior</button>
        <span>Página {currentPage} de {totalPages}</span>
        <button className='next' onClick={goToNextPage} disabled={currentPage === totalPages}>Próxima</button>
      </div>

      <CartSidebar
        isOpen={isCartOpen}
        cartItems={cart}
        totalAmount={totalAmount}
        onClose={toggleCart}
        onRemoveItem={handleRemoveFromCart}
      />
      <Footer />
    </Container>
  );
}
