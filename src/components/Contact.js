import React from 'react';
const Contact = (props) => {
    console.log(props);
    setTimeout(() => {
        props.history.push('/about')
    },2000);
        return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur repellat, corrupti tenetur voluptates tempora amet sunt, voluptatem ullam quos ducimus cum, mollitia quae neque atque soluta dicta laborum! Velit, qui!</p>
        </div>
    )
}
export default Contact;