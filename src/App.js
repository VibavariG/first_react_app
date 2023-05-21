import './App.css';

const Person = () => {
  return (
    <>
    <h1>Name: Vibavari</h1>
    <h2>Last Name: Gurunathan</h2>
    <h2>Age: 21</h2>
    </>
  )
}
const App = () => {
  return (
    <div className="App"> 
        <Person/>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
    </div>
  );
}

export default App;
