import React from 'react';
// import Comment from './Comment';
import Comments from './Comments';

const CommentList = ({ comments, onDelete, onEdit }) => (
  <div>
    {comments.map((comment) => (
      <Comments
        key={comment.id}
        comment={comment}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    ))}
  </div>
);

export default CommentList;