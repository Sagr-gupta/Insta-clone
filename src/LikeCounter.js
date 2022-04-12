import React from 'react'
import "./postCard.css"

class LikeCounter extends React.Component {
    render(){
      return (
        <div className="card-views">
          <div className="card-view-count">{this.props.likes} likes</div>
        </div>
      );
    }
  }

export default LikeCounter