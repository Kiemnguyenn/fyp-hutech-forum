import React, { useState } from 'react';
import './CommentForm.css';

const CommentForm = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra xem có nội dung trong newComment hay không
    if (newComment.trim() === '') {
      return; // Ngăn chặn hành động thêm comment nếu không có nội dung
    }

    onAddComment(newComment);
    setNewComment('');
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddComment(newComment);
//     setNewComment('');
//   };

  return (
    <form className='forms-comment'onSubmit={handleSubmit}>
      <textarea
        className='comment-textarea'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a new comment..."
      /><br/>
      <button className='bt-submit-comment' type="submit" disabled={!newComment.trim()}>Add Comment</button><br/><br/>
    </form>
  );
};

export default CommentForm;