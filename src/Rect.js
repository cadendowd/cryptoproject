import React from "react";

function Rect({action, coin, price, color}) {
    const rectstyle = {
        margin: '0 auto',
        width: '60px',
        height: price / 300,
        backgroundColor: color
    }

    return (
        <div style = {{dislay: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px', display: 'inline-block'}}>
            <div style = {rectstyle}></div>
            <h2 style = {{color: 'gray'}}>{action}</h2>
            <span>1 {coin} for ${price}</span>
        </div>
    )
}

export default Rect