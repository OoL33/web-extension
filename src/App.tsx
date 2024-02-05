import React from "react"
import logo from "./logo.svg"
import "./App.css"
import FormComponent from "./components/formComponent"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Web Extension</p>
      </header>
      <FormComponent />
    </div>
  )
}

export default App
