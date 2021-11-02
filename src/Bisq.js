import React, {useState, useEffect} from "react";

function Bisq () {
    const [fetched, setFetched] = useState(false);
    const [eth, setEth] = useState([]);
    const [btc, setBtc] = useState([]);

    useEffect(() => {
        fetch('https://bisq.markets/api/ticker?market=btc_usd')
        .then(res => res.json())
        .then(
            (result) => {
                setBtc(result);
            }
        )

        fetch('https://bisq.markets/api/ticker?market=eth_btc')
        .then(res => res.json())
        .then(
            (result) => {
                setEth(result);
            }
        )
    }, [])

    return (
        [fetched, btc, eth]
    )
}

export default Bisq;