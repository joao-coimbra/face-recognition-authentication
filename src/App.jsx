function App() {
  return (
    <div className="App">
      	<h1>FACEIO Integration Boilerplate</h1>
	<button onClick={window.enrollNewUser} title="Enroll a new user on this FACEIO application">Enroll New User</button>
	<button onClick={window.authenticateUser} title="Authenticate a previously enrolled user on this application">Authenticate User</button>
    </div>
  );
}

export default App;
