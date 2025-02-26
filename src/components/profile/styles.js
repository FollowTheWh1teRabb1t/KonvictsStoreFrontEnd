import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    width: 100px;
    padding: 10px;

    /* Responsividade */
    @media (max-width: 768px) {
        width: 80px;
        padding: 5px;
    }

    @media (max-width: 480px) {
        width: 70px;
        padding: 5px;
    }
`;

export const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 10px;

    /* Responsividade */
    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 480px) {
        width: 70px;
        height: 70px;
    }
`;

export const PlaceHolderIcon = styled(FaUserCircle)`
    width: 50px;
    height: 50px;
    color: #ccc; 
    margin-top: 10px;

    /* Responsividade */
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 480px) {
        width: 35px;
        height: 35px;
    }
`;

export const UploadButton = styled.button`
    padding: 6px;
    background-color: #4caf50;
    color: white;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }

    /* Responsividade */
    @media (max-width: 768px) {
        font-size: 12px;
        padding: 4px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
        padding: 4px;
    }
`;
