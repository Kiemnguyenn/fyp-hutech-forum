import React, { useState } from 'react';
import './Comments.css';

import { useNavigate } from 'react-router-dom'

import { FaHeart } from "react-icons/fa";

const Comments = ({ comment, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(
    comment.text.replace(`${comment.userName} `, '')
  );

  const handleEdit = () => {
    onEdit(comment.id, `${comment.userName} ${editedText}`);
    setIsEditing(false);
  };

  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex-container">
      <div className="left-side">
      <img onClick={()=>{navigate('/personal', {replace:true})}}
             className='homepage-personal-page'
             src="Yone.jpg" 
             alt="Avatar"></img>
      </div>
      {isEditing ? (
        <div className="right-side">
          <textarea className='comment-textarea'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          /><br/>
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div className="right-side">
          <p>
            <span style={{ fontWeight: 'bold' }}>{comment.userName}</span>
            {` ${editedText}`}
          </p>
          <FaHeart className='FaHeart' 
          onClick={handleClick}
          style={{ color: isLiked ? 'DeepPink' : 'Black' }}/>
          <button className='bt-comments'onClick={() => setIsEditing(true)}>Edit</button>
          <button className='bt-comments'onClick={() => onDelete(comment.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Comments;