import './App.css'
import Counter from './components/Counter'
import Score from './components/Score'
import Users from './components/Users'
function App() {
  return (
    <>
     <Users/>
     <h1> Welcome to Counter App</h1>
     <hr/>
     <Counter/>
     <h1> Welcome to Scoreboard</h1>
     <hr/>
     <Score/>
    </>
  )
}
export default App
