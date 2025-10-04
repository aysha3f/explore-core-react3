
import './App.css';
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';
// import ToDo from './Todo';
// import HunGre from './Hungre';

function App() {
//  const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah', 'Jasim','Anwar','Rajjak'];

const singers = [
  { id: 1, name: 'Dr. Mahfuz', age: 68 },
  { id: 2, name: 'Tahsan', age: 45 },
  { id: 3, name: 'shuvro Deb', age: 57 }
];


const books = [
  { id:1, name: 'Physics', price: 250 },
  { id:2, name: 'Chemistry', price: 350 },
  { id:3, name: 'Math', price: 255 },
  { id:4, name: 'Biology', price: 290 },
]


  //  const time = 50;

  return (
    <> 
      <h1>React Core Concepts</h1>


      <Library books={books}></Library>


      
      {
        singers.map(singer => <Singer key={singer.id} singer ={singer}></Singer>)
      }

{
  // actors.map(actor => <Actor actor={actor}></Actor> )
}

{/* <ToDo task="Learn React" isDone={true} time= {time}></ToDo>
   <ToDo task="Revise JS" isDone={false}></ToDo>
   <ToDo task="Take a shower" isDone={true} time=""></ToDo> */}
{/* <HunGre task="take food from shop" isDone =
{true}></HunGre>
<HunGre task="Am i Hungry" isDone =
{true}></HunGre>
<HunGre task="take food from street" isDone =
{false}></HunGre> */}

  {/* <Student></Student>
  <Student></Student>
  <Person></Person>
  <Developer name="Mozumder" tech='JS'></Developer>
  <Developer name="Rajon" tech='Python'></Developer>
  <Developer name="Shabana" tech='Java'></Developer>
  <Player name="tamim" runs="5000"></Player>
  <Player name="mushi" runs="5000"></Player>
  <Salami event="Roja Eid" amount="2000"></Salami>
  <Salami event="Graduation"></Salami>
  <Book name="Heamin Sunim" book='Love for Imperfection'></Book>
  <Book name="Brain Trace" book='Eat That Frog'></Book> */}
 
  </>
  )
}
function Book ({name, book}){
  return(
 <div className='student'>
 <p>Favourite writer:  {name}</p>
 <p>Best Selling Book:  {book}</p>
 </div>
  )
}


function Salami ({event, amount=0}){
  return (
    <div className='student'>
    <p>Salami For: {event} </p>
    <p>Amount: {amount}</p>
    </div>
  )
}

// const {name, runs} = {name:'tamim', runs: '5000'}
function Player({name, runs}){
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}


function Developer(props){
  console.log(props);
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Student(){
  return(
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Person(){
  const age = 17;
  const name = 'Jolil';

  const personStyle ={
    color: 'red',
    textAlign: 'right'
  }

  return(
    <p id='' title='tooltip' style={personStyle}>I am a person: {name} {age}</p>
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
function Cv (){
  return(
    <>
    <h3>Aysha</h3>
    <p>Aspiring Mern Stack Developer. I am currently learning React</p>
    </>
  )
}
export default App
