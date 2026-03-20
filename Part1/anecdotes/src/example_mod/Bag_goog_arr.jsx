/*  
демо-пример, который наглядно показывает разницу
 между "плохим" и "хорошим" 
 способом работы с массивом в состоянии.
  */


 import { useState } from 'react'


 
const Button = (props) => {
  const {click, name } = props;
  return(
    <button id="anecdotes" onClick={click}>{name}</button>
  )


}

 const AppArray =()=>{
  const [badArray, setBadArray] = useState(Array(3).fill(0))
  const [goodArray, setGoodArray] = useState(Array(3).fill(0))

const handleGood = () => {
    const copyGoodArr=[...goodArray]
    copyGoodArr[2]+=1
    setGoodArray(copyGoodArr)
    console.log("Good", goodArray)
}

const copyBadArr=[...badArray]
const handleBad = () => {
    
    copyBadArr[0]+=1
    setBadArray(copyBadArr)
console.log("Bad", badArray)

}

return(

<>
<p>good: {goodArray}</p>
<p>bad: {badArray}</p>

 <Button click={handleBad} name="bad"/>
    <Button click={handleGood} name="good" />
</>
)

 }


 export default AppArray;