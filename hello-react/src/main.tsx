import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App name={'Tana'} surname={'Dendere'}/>
  </React.StrictMode>,
)

// strict mode is so we don't over render
// <App/> - self close because it doesn't take any children elements

// <App name={'Tana'} surname='Dendere'/>
// The name and surname are the elements of the props object from App function
// The value Tana is evaluated because it is in {}, where are Dendere is just a string literal
// We want to evaulted any code inside we use {}

