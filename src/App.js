import './App.css';

const App = () => {
  const name = null
  //const isNameShowing = false
  return (
    <div className="App"> 
        <h1>Hello,</h1>
        {name ? (
          <>
          <h1>{name}</h1>
          </>
        ): (
          <>
          <h1>test</h1>
          <h2>someone</h2>
          </>
        )}
    </div>
  );
}

export default App;
