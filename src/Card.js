import React from "react";
import Rect from "./Rect";

function Card ({content, data, col}) {
    return(
        <div style = {{height: '450px', width: '600px', border: '2px solid darkorange', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}>
            <h1>
                {content} Prices
            </h1>
            <div style = {{display: 'flex', flexDirection: 'row', textAlign: 'center', margin: '10px'}}>
                <Rect action = "BUY" coin = "BTC" price = {data[0]} color = {col[0]}/>
                <Rect action = "SELL" coin = "BTC" price = {data[1]} color = {col[1]}/>
                <Rect action = "BUY" coin = "ETH" price = {data[2]} color = {col[2]}/>
                <Rect action = "SELL" coin = "ETH" price = {data[3]} color = {col[3]}/>
            </div>
        </div>
    )
}

export default Card