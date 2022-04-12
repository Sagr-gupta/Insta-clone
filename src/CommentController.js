import React from 'react'
import Comment from './Comment';
import "./postCard.css"

class CommentController extends React.Component {
    render() {
      return (
        <>
          <div className="poster-comment"></div>
          <div className="post-comments">
            {this.props.comments.map( (comment) => <Comment user={comment.user} comment={comment.comment} />)}
          </div>
        </>
      ); 
    }
  }
  
  

export default CommentController