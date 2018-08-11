import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

//this creates a component with the classname tweet so it would use the .Tweet css box. If i removed the 
//class name it would lose the css box I created.
//also all the other components i create "child components" will go into this main Tweet component
function Tweet({ tweet }) {
    return(
        <div className="tweet">
        <Avatar hash={tweet.gravatar}/>  {/* this passes the gravatar prop to hash prop */}
         <div className="content">
           <NameWithHandle author={tweet.author}/>  
           <Time time={tweet.timestamp}/>
           <Message text={tweet.message}/>
         <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
          </div>
         </div>
        </div>
    );
}

var testTweet = {
    message: "Is this thing on?",
    gravatar: "xyz",
    author: {
        handle: "Person",
        name: "People Person"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2018-08-30 15:57:30"
};

//this is where i create the avatar component and destructure it using ES6 Destructoring
function Avatar({ hash }) {
     var url = `https://www.gravatar.com/avatar/${hash}`;
    return(
        <img src={url}
        className="avatar"
        alt="avatar" />
    );
}

//creating the Message component in the tweet
function Message({ text }){
    return(
        <div className="message">
             {text}
        </div>
    );
}

//creating the @handle component in the tweet
function NameWithHandle({author}) {
    const { name, handle} = author;
    return(
        <span className="name-with-handle"> {/* the main span prop with child spans in them*/}
        <span className="name">Name</span>
        <span className="handle">Your @</span>
        </span>
    );
}


//Creating the Time and other such buttons, they are still functions even if they dont look like ones.
//When an arrow function consists of only one expression then theres no need for reutrn ()
//After Destructioning, it needs to be braces because it now has 2 statement.
const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return(
        <span className="time">
            {timeString}
        </span>    
    );
};


function gerRetweetCount(count) {
    if (count > 0 ){
        return(
            <span className="retweet-count">
            {count}
            </span>
        );
    } else {
        return null;
    }
}

// the fa fa- text in classname gives the icons for the buttons
const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
    <i className="fa fa-retweet"/>
    {gerRetweetCount(count)}
    </span>
);

const LikeButton = ({ count }) => (
    <span className="like-button">
     <i className="fa fa-heart"/>
     {count > 0 && 
       <span className="like-count">
        {count}
       </span> 
}
    </span> 
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);



// passing as props, js in braces must be an expression!!!
function Mihkel(){
    const firstName = "Mihkel";
    const lastName = "Liblikman";

    return (
        <person
            classname = 'person'
            age={33}
            name={firstName + ' ' + lastName}
        />
    )
}

//props passed as the first argument component function
/* function Hello(props){
    return(
        <span>Hey, {props.name} </span>
    );
} */

//With arrowfunction test
/* const Hello = (props) => (
    <span>Hello, {props.name}</span>
); */

//ES6 as destructioning, { name } can be read as extrace the 'name' key from the object passed as the first argument
/* const Hello = ({ name }) => (
    <span>Heya, {name}</span>

); */

// the destructioning syntax can be used for multible key excractions too
/* const Hello = ({ firstName, lastName }) =>(
    <span>Asuh, {firstName} {lastName}</span>
); */
 
// destructioning works outside of function arguments as well...also arrow functions need a return if the body is surround by braces, and incase of multiple lines the body also needs braces 
const Hello = (props) => {
    const {name} = props;
    return (
        <span>Haya, {name}</span>
    );
}

//props are read only, and if a child component needs to communicate with the parent component then the parent can inject a function as a prop
function handleAction(event){
    console.log ('Child did:', event);
}
// the child component receives a prop named onAction which it can call if it needs to sed up data or notify the parent of an event.
function Parent() {
    return (
        <Child onAction={handleAction}/>
    );
} 
// a button...
function Child ({ onAction }){
    return (
        <button onClick={onAction}/>
    );
}


ReactDOM.render(
    <Tweet tweet={testTweet}/>,
     document.querySelector('#root')
);

