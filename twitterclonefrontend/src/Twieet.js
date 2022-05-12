import React,{useState} from 'react';

const Tweet = (props) =>{

    const [counter , setCounter] = useState(0);

    const Increment = () =>{
        setCounter ( counter + 1);
    }
    const decrement = () =>{
        setCounter ( counter - 1);
    }

      const text = props.text;
      const author = props.author;
      const date = props.date;
        return (
            <div>
                <h1>This is tweet component</h1>
                <h2>By {author}</h2>
                <h1>Date : {date}</h1>
                <h3>{counter}</h3>
                <button value="button" onClick={Increment}>+</button>
                <button value="button" onClick={decrement}>-</button>
            </div>

        )
}

export default Tweet;