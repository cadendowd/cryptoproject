import './App.css';
import Coinbase from './Coinbase';
import Bisq from './Bisq';
import React, {useState} from "react";
import Navbar from './Navbar';
import Card from './Card'

function App() {
  const coinbase = Coinbase();
  const bisq = Bisq();
  const coindata = [coinbase[1].amount, coinbase[2].amount, coinbase[3].amount, coinbase[4].amount]
  // conversion from ethereum -> bitcoin -> usd
  const bisqbtcbuy = Number(bisq[1].buy).toFixed(2)
  const bisqbtcsell = Number(bisq[1].sell).toFixed(2)
  const bisqethbuy = (bisq[1].last * bisq[2].buy).toFixed(2)
  const bisqethsell = (bisq[1].last * bisq[2].low).toFixed(2)
  const bisqdata = [bisqbtcbuy, bisqbtcsell, bisqethbuy, bisqethsell]
  const coincolor = [comparebuy(coinbase[1].amount, bisqbtcbuy), comparesell(coinbase[2].amount, bisqbtcsell), comparesell(coinbase[2].amount, bisqbtcsell), comparesell(coinbase[4].amount, bisqethsell)]
  const bisqcolor = [comparebuy(bisqbtcbuy, coinbase[1].amount), comparesell(bisqbtcsell, coinbase[2].amount), comparesell(bisqbtcsell, coinbase[2].amount), comparesell(bisqethsell, coinbase[4].amount)]

  const [isHidden, setIsHidden] = useState('hidden')

  const hiddenstyle = {
    visibility: isHidden
  }

  function comparesell(a, b){
    if(a === null){
      return 'gray'
    } 
    if(b == null){
      return 'black'
    }
    if(a > b){
      return 'black'
    } else {
      return 'gray'
    }
  }

  function comparebuy(a, b){
    if(a === null){
      return 'gray'
    } 
    if(b == null){
      return 'black'
    }
    if(a < b){
      return 'black'
    } else {
      return 'gray'
    }
  }

  function hide(){
    if(isHidden === 'hidden'){
      setIsHidden('visible')
    } else {
      setIsHidden('hidden')
    }
    console.log(isHidden)
  }

  return (
    <div className="App">
      <Navbar/>
      <h2>
        Click to find out where to buy and sell your cryptocurreny:
      </h2>
      <p>The black squares are the recommended choice.</p>
      <button onClick = {hide}>
        Click Me!
      </button>
      <div style = {hiddenstyle}>
        <div style = {{display: 'flex', flexDirection: 'row', margin: '30px', justifyContent: 'space-around'}}>
          <Card content = "Coinbase" data = {coindata} col = {coincolor}/>
          <Card content = "Bisq" data = {bisqdata} col = {bisqcolor}/>
        </div>
      </div>
    </div>
  );
}

export default App;
