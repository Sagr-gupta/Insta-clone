import React from 'react'
import "./postCard.css"
class CommentBox extends React.Component {
    constructor(){
      super();
      this.state = {
        user: "codepen.person",
        comment: null
      }
    }
    
    updateComment(e) {
      this.setState({[e.target.name] : e.target.value});
    }
    
    submitComment = () => {
      let comment = {...this.state};
      if(comment.comment !== null || comment.comment === ""){
        this.props.submit(comment);
        this.setState({comment: ""});
      }
    }
    
    render() {
      let buttonClass = this.state.comment === null ||  this.state.comment === ""?  "" : "postable";
      return (
        <>
          <input name="comment" placeholder="Add a comment..." value={this.state.comment} default="comment" onChange={ e => { this.updateComment(e) }}/>
          <button className={buttonClass} onClick={this.submitComment}>Post</button>
        </>
      );
    }
  }

export default CommentBox