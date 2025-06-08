import React from 'react';
import './styles/Card.css';
import { useNavigate } from 'react-router-dom';
import EditPage from '../pages/EditPage';

const Card = ({memeName,imgUrl}) => {

  const navigate = useNavigate();

  return (
    <div className='meme-card-container'>
    <div className='meme-card'>
        <img className='meme-card-image' src={imgUrl} alt={memeName} />
        
    </div>
    <button className='meme-card-edit-button' onClick={() => navigate(`/edit?url=${imgUrl}`) }>Edit</button>
    </div>
  )
};

export default Card;