// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [dogImage, setdogImage] = useState([]);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response => response.json()))
        .then((data) => {
            setdogImage(data.message);
            setIsLoaded(true);
        })
    })
    if(!isLoaded) {return (<h3>Loading...</h3>)}
    return (
        <div>
            <img alt="A Random Dog" src={dogImage} />
        </div>
    )
}

export default App;