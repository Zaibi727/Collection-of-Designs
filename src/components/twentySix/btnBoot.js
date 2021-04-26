import React from 'react'

 const Button = (props) => {
    const { type, title } = {...props };

    if( type === "light"  ) {
        return(
            <button className="button-light">{title}</button>
        )
    } else if ( type=== "dark" ) {
        return (
            <button className="button-dark">{title}</button>
        )
    }else {
        return null;
    }
}

export default Button;