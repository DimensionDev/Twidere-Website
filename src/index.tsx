import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import './i18n'
import HomePage from './HomePage'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>,
    document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
