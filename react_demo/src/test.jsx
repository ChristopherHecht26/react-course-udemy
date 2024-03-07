import React, {useState} from 'react';
import './test.css';

export function Test(){
    const [cryptoName, setCryptoName] = useState("Bitcoin");
    const [wechselKurs, setWechselkurs] = useState("1.0");
    const [coins, setCoins] = useState("1.0");
    const [money, setMoney] = useState("");

    const convert = () => {
        const newValue = parseFloat(wechselKurs) * parseFloat(coins);
        setMoney(newValue.toString());
    }

    return(

    
        <div className='container'>

                <label>Crypto-Name:</label>
                <input type='text' value={cryptoName} onChange={e => setCryptoName(e.target.value)}></input>

                <label>aktueller Wechselkurs:</label>
                <input type='text' value={wechselKurs} onChange={e => setWechselkurs(e.target.value)}></input>

                <label>Anzahl Coins</label>
                <input type='text' value={coins} onChange={e => setCoins(e.target.value)}></input>

                <button onClick={() => convert()}>Berechnen</button>

                <label>Mit dem Wechselkurs von {wechselKurs} sind deine {coins} {cryptoName} heute {money}€ wert</label>

        </div>
        
    );
}

export default Test;