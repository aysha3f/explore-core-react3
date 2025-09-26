
import './App.css'

function App() {
return (
    <> 
      <h1>Vite + React</h1>
  <Person></Person>
  <Sports></Sports>
  <Person></Person>
  <Person></Person>
  <Sports></Sports>
  </>
  )
}

function Person(){
  const age = 17;
  const name = 'Jolil';
  return(
    <p>I am a person: {name} {age}</p>
  )
}

function Sports (){
  return(
    <div>
      <h3>Cricket</h3>
      <p>Playing and losing</p>
    </div>
  )
}

export default App
