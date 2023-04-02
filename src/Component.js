import './App.css';

function Component(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I am {props.name} waiting to be reviewed.
        </p>
      </header>
    </div>
  );
}

export default Component;
