import React, {useState} from 'react';

const App = () => {
    const initialStates = {
        name: '',
        price: 1000,
    };

    const [name, setName] = useState(initialStates.name);
    const [price, setPrice] = useState(initialStates.price);
    const reset = () => {
        setPrice(1000);
        setName('');
    };

    return (
        <>
            <p>
                現在の{name} is {price}
            </p>
            <button onClick={() => setPrice(price + 1)}>+1</button>
            <button onClick={() => setPrice(price - 1)}>-1</button>
            <button onClick={reset}>reset</button>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </>
    );
};

export default App;
