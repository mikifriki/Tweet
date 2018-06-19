import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//this creates a component with the classname tweet so it would use the .Tweet css box. If i removed the 
//class name it would lose the css box I created.
//also all the other components i create "child components" will go into this main Tweet component
function Tweet(){
    return(
        <div className="tweet">
        <Avatar/>
         <div classname="content">
           <NameWithHandle/><Time/>
           <Message/>
         <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
          </div>
         </div>
        </div>
    );
}

//this is where i create the avatar component
function Avatar(){
    return(
        <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male3-512.png"
        className="avatar"
        alt="avatar"/>
    );
}

//creating the Message component in the tweet
function Message(){
    return(
        <div className="message">
        The message
        </div>
    );
}

//creating the @handle component in the tweet
function NameWithHandle(){
    return(
        <span className="name-with-handle"> {/* the main span prop with child spans in them*/}
        <span className="name">Name</span>
        <span className="handle">Your @</span>
        </span>
    );
}

//Creating the Time and other such buttons, they are still functions even if they dont look like ones.
//When an arrow function consists of only one expression then theres no need for reutrn ()
const Time =() => (
    <span className="time">3h ago</span>
);


// the fa fa- text in classname gives the icons for the buttons
const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);









ReactDOM.render(
    <Tweet/>,
     document.querySelector('#root')
);

