import { useState } from 'react'
import './App.css'


const Button = (props)=>{

     const {name, onclick} = props;

     return (
<>

<button onClick={onclick}>{name}</button>
</>

     )

}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 const clickHeandler = (setter) => ()=>{
      setter(prev => prev + 1)
 }
  return (
    <>
     <h4>Geeve feedback</h4>

<Button onclick={clickHeandler(setGood)} name="good"/>
<Button onclick={clickHeandler(setNeutral)} name="neutral"/>
<Button onclick={clickHeandler(setBad)} name="bad"/>


<p>Sttatistics</p>

<p>{good}</p>
<p>{neutral}</p>
<p>{bad}</p>
    </>
  )
}

export default App
