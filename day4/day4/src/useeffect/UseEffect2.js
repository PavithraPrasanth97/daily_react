import React, {useEffect,useState} from 'react'

export function UseEffect2() {
    const [data, setData] = useState([]);

    const apicall = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const values = await response.json();
        setData(values);
    };

    useEffect(() => {
        apicall();
    }, []);
    return (
        <>
            <h1>Get the data</h1>
            <div>
                {data.map((item) => (
                    <ul key={item.id}> {item.title}</ul>
                ))}
            </div>
        </>
    );
}
