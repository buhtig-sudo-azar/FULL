import { useState } from 'react'
import './App.css'

const StatisticsLine = (props) => {

const {text, value} = props;

return (
     <>
      <p style={{ margin: '8px 0' }}>{text}  {value}</p>
     </>
)

}

const Statistics = (props) => {
     const { good, neutral, bad, average, positivePercentage, all } = props;
    
if(all!==0){
     return (
          <><p style={{
               margin: '0 0 20px 0',
               textAlign: 'center',
               fontWeight: 'bold',
               fontSize: '18px'
          }}>
               
          </p>
 <h5>Statistics</h5>
               <StatisticsLine text="good" value={good}/>
               <StatisticsLine text="neutral" value={neutral}/>
               <StatisticsLine text="bad" value={bad}/>
               <StatisticsLine text="all" value={all}/>
               <StatisticsLine text="average" value={average}/>
               <StatisticsLine text="positivePercentage" value={positivePercentage}/>
          </>

     )
}

return(

    <><p style={{
               margin: '0 0 20px 0',
               textAlign: 'center',
               fontWeight: 'bold',
               fontSize: '18px'
          }}>
              
          </p>
               <h3>
                    No feedback given
               </h3>
          </>
)
}


const Button = (props) => {
     const { name, onclick } = props;
     return (
          <>
               <button
                    onClick={onclick}
                    style={{
                         padding: '10px 20px',
                         margin: '5px',
                         border: 'none',
                         borderRadius: '5px',
                         backgroundColor: '#4CAF50',
                         color: 'white',
                         cursor: 'pointer',
                         fontSize: '16px'
                    }}
               >
                    {name}
               </button>
          </>
     )
}

function App() {
     const [isDarkMode, setIsDarkMode] = useState(false);
     const [good, setGood] = useState(0);
     const [neutral, setNeutral] = useState(0);
     const [bad, setBad] = useState(0);

     const toggleThemeFactory = (setter) => () => {
          setter(prev => !prev)
     };

     const clickHeandler = (setter) => () => {
          setter(prev => prev + 1)
     }
     const total = good + neutral + bad;
     const average = total > 0 ? (good * 1 + neutral * 0 + bad * (-1)) / total : 0;
     const positivePercentage = total > 0 ? (good / total) * 100 : 0;
     return (
          <div style={{
               backgroundColor: isDarkMode ? '#121212' : '#ffffff',
               color: isDarkMode ? '#ffffff' : '#000000',
               minHeight: '100vh',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               padding: '20px',
               gap: '20px',
               fontFamily: 'Arial, sans-serif'
          }}>
               {/* Кнопка темы */}
               <button
                    onClick={toggleThemeFactory(setIsDarkMode)}
                    style={{
                         padding: '12px 24px',
                         borderRadius: '25px',
                         border: '2px solid #FFD700',
                         background: 'none',
                         color: isDarkMode ? '#FFD700' : '#333',
                         cursor: 'pointer',
                         fontSize: '16px',
                         fontWeight: 'bold'
                    }}
               >
                    {isDarkMode ? '🌙 Тёмная тема' : '☀️ Светлая тема'}
               </button>

               {/* Заголовок */}
               <h4 style={{
                    margin: '0',
                    textAlign: 'center',
                    fontSize: '24px'
               }}>
                    Give feedback
               </h4>

               {/* Кнопки в ряд */}
               <div style={{
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
               }}>
                    <Button onclick={clickHeandler(setGood)} name="good" />
                    <Button onclick={clickHeandler(setNeutral)} name="neutral" />
                    <Button onclick={clickHeandler(setBad)} name="bad" />
               </div>

               {/* Статистика */}
               <div style={{
                    backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
                    padding: '25px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    textAlign: 'left',
                    minWidth: '250px',
                    fontFamily: 'monospace'
               }}>
             <Statistics good={good} neutral={neutral} bad={bad} all={total} average={average.toFixed(2)}  positivePercentage={positivePercentage.toFixed(2)} />
               </div>
          </div>
     )
}

export default App
