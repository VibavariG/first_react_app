import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}
const App = () => {
  return (
    <div className="App"> 
      <Person name='Vibavari' lastName='Gurunathan' age={21}/>
      <Person name='Twinkle' lastName='Madan' age= {23}/>
    </div>
  );
}

export default App;
