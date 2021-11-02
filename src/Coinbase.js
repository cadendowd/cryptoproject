import React, {useState, useEffect} from "react";

function Coinbase() {   
    const [fetched, setFetched] = useState(false);
    const [buyEth, setBuyEth] = useState([]);
    const [buyBtc, setBuyBtc] = useState([]);
    const [sellEth, setSellEth] = useState([]);
    const [sellBtc, setSellBtc] = useState([]);

    useEffect(() => {
        fetch('https://api.coinbase.com/v2/prices/ETH-USD/buy')
        .then(res => res.json())
        .then(
            (result) => {
                setBuyEth(result.data);
            }
        )

        fetch('https://api.coinbase.com/v2/prices/BTC-USD/buy')
        .then(res => res.json())
        .then(
            (result) => {
                setBuyBtc(result.data);
            }
        )

        fetch('https://api.coinbase.com/v2/prices/ETH-USD/sell')
        .then(res => res.json())
        .then(
            (result) => {
                setSellEth(result.data);
            }
        )

        fetch('https://api.coinbase.com/v2/prices/BTC-USD/sell')
        .then(res => res.json())
        .then(
            (result) => {
                setFetched(true);
                setSellBtc(result.data);
            }
        )
    }, [])

    return(
        [fetched, buyBtc, sellBtc, buyEth, sellEth]
    )
}

export default Coinbase;