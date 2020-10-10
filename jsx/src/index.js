//import react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom'; 
import faker from 'faker'
import CommentDetail from './CommentDetail.js'

//React component
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail avatarLink={faker.image.avatar()} author="Sam" timeAgo="Today at 4:45AM" commentText="Yes, of course!" />
            <CommentDetail avatarLink={faker.image.avatar()} author="Max" timeAgo="Today at 3:01AM" commentText="Are you sure?" />
            <CommentDetail avatarLink={faker.image.avatar()} author="Alisa" timeAgo="Yesterday at 9:13PM" commentText="So, there are so many text here, you can delete o change this comment later." />
            <CommentDetail avatarLink={faker.image.avatar()} author="Karina" timeAgo="Yesterday at 7:37PM" commentText="Hello, have are you?" />
            <CommentDetail avatarLink={faker.image.avatar()} author="Mary" timeAgo="Yesterday at 7:34PM" commentText="Hello!" />
        </div>
    );
}

//Take react component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
