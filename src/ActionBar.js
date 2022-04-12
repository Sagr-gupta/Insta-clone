import React, { Component } from 'react'
import "./postCard.css"

class ActionBar extends Component {
    constructor(){
      super();
      this.state = {
        liked: false,
        marked: false
      }
    }
  
    toggleLike = () => {
      let self = this;
      this.props.like(!self.state.liked);
      this.setState({liked: !self.state.liked});
    }
    
    markPost = () => {
      let self = this;
      this.setState({marked: !self.state.marked});
    }
    
    startComment = () => {
      document.querySelector().focus(); 
    }
    
    render(){
      return (
        <div className="card-action-bar">
          <a onClick={this.toggleLike}><i className={ this.state.liked ? "fas fa-heart" : "far fa-heart" }/></a>
          <a onClick={this.markPost}><i className={ this.state.marked ? "fas fa-bookmark" : "far fa-bookmark" }/></a>
        </div>
      )
    }
  }

export default ActionBar