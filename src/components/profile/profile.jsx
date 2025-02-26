import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext.jsx';
import { Container, ProfileImage, PlaceHolderIcon } from './styles.js';
import axios from 'axios';

export default function Profile() {
    const { user, token, setUser } = useAuth();
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        if (user && user.profileImage) {
            const imageUrl = `${user.profileImage}?t=${Date.now()}`;
            setProfileImage(imageUrl); // Atualização: Definindo a imagem completa com timestamp
            console.log("Imagem de perfil definida:", imageUrl); // Log para verificar URL
        }
    }, [user]);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleImageUpload(e.target.files[0]);
        }
    };

    const handleImageUpload = async (imageFile) => {    
        const formData = new FormData();
        formData.append('profileImage', imageFile);
        
        const baseUrl = 'http://localhost:5001';

        try {
            const response = await axios.post(`${baseUrl}/auth/upload-profile-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
            
            const newProfileImage = `${baseUrl}${response.data.profileImage}`;
            setProfileImage(`${newProfileImage}?t=${Date.now()}`);
            console.log('Imagem de perfil atualizada:', newProfileImage);

            // Atualiza o contexto do usuário
            setUser((prevUser) => ({
                ...prevUser,
                profileImage: newProfileImage
            }));

        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
        }
    };

    return (
        <Container>
            <label htmlFor="imageUpload" style={{ cursor: 'pointer' }}>
                {profileImage ? (
                    <ProfileImage src={profileImage} alt="Profile" /> 
                ) : (
                    <PlaceHolderIcon />
                )}
            </label>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="imageUpload"
                onChange={handleImageChange}
            />
        </Container>
    );
}
