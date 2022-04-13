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
       this.props.like(1)
      } else {
        this.props.like(-1)
      }
    }
    
    updateComments = (data) => {
      console.log("updating comments"); 
      let state = this.state;
      console.log(data);
      this.props.add_comment(data.comment)
      this.setState({comments: [data, ...state.comments]});
    }
  
    render(){
      console.log(this.props.postData.comments)
      return(
        <div className="card">
                   <a className="vis-toggle" onClick={this.props.vist}><i className= "fa fa-close" /></a>

          <div className="card-image-container">
            <img src={this.props.postData.image}></img>
          </div>
          <div className='card-left-container'>
          <div className="card-top">
            <a className="card-poster-image-container">
              <img className="user-pfp" src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"/>
            </a>
            <a className="card-poster-name">{this.props.postData.poster.name}</a>
          </div>
          <div className="card-middle">
            <ActionBar like={this.likeButton}/>
            <LikeCounter likes={this.props.postData.likesCount} />
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