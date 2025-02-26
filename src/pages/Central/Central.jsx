import React, { useState } from "react";
import { FormContainer }from './styles'
import Header from '../../components/header/header'
import gamer from '../../assets/gamer.png'
import mouse from '../../assets/mouse.png'



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  return (
    
    <section>
        <Header/>
        <FormContainer>
        <img className="gamer" src={gamer} alt="gamer" />
        <h2>CENTRAL DE ATENDIMENTO</h2>
        <p>Se preferir, entre em contato direto através do e-mail: <a href="mailto::lplpfwr@gmail.com">konvictsGamerStore@email.com</a></p>
        
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />

            <div className="row">
            <input type="text" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="city" placeholder="Cidade" value={formData.city} onChange={handleChange} required />
            <input type="text" name="state" placeholder="Estado" value={formData.state} onChange={handleChange} required />
            </div>

            <textarea name="message" placeholder="Mensagem" rows="5" value={formData.message} onChange={handleChange} required />

            <button type="submit">ENVIAR</button>
        </form>
        <img className="mouse" src={mouse}></img>
        </FormContainer>
    </section>
  );
};

export default ContactForm;
