import React from 'react'
import "./postCard.css"

class Comment extends React.Component {
    render(){
      return (
        <>
          <div className="comment">
            <a className="user">{this.props.user}</a>
            {this.props.comment}
            <div className="timestamp">{this.props.timestamp}</div>
          </div>
        </>
      ); 
    }
  }

export default Comment