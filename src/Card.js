import React from 'react'
import ActionBar from './ActionBar';
import LikeCounter from './LikeCounter';
import CommentController from './CommentController';
import CommentBox from './CommentBox';
import "./postCard.css"

class Card extends React.Component {
    constructor(){
      super();
      this.state = {
          likesCount: 0,
          poster: {
            name: "",
            profile_picture: ""
          },
          image: "",
          comments: []
        }
    }
    
    componentDidMount() {
      this.setState({...this.props.postData});
      console.log(this.props.postData)
    }
  
    
    likeButton = (liked) => {
      if (liked) {
        this.setState({likes: this.state.likes + 1});
      } else {
        this.setState({likes: this.state.likes - 1});
      }
    }
    
    updateComments = (data) => {
      console.log("updating comments"); 
      let state = this.state;
      console.log(data);
      this.setState({comments: [data, ...state.comments]});
    }
  
    render(){
      return(
        <div className="card">
         
          <div className="card-image-container">
            <img src={this.props.postData.image}></img>
          </div>
          <div className='card-left-container'>
          <div className="card-top">
            <a className="card-poster-image-container">
              <img className="user-pfp" src={this.props.postData.poster.profile_picture}/>
            </a>
            <a className="card-poster-name">{this.props.postData.poster.name}</a>
          </div>
          <div className="card-middle">
            <ActionBar like={this.likeButton}/>
            <LikeCounter likes={this.props.postData.likes} />
            <CommentController comments={this.props.postData.comments}/>
          </div>
          <div className="card-bottom">
            <CommentBox submit={this.updateComments}/>
          </div>
          </div>
         
        </div>
      );
    }
  }

export default Card