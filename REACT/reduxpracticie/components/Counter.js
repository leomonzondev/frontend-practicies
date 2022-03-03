import React from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../store/amount/action'





const Counter = () => {


return (
    <div>
        <h1>Amount: {}</h1>
        <button onClick={() => deposit}>Deposit</button>
        <button onClick={() => withdraw}>Withdraw $10</button>
    </div>
)
}


export default connect(null,{deposit, withdraw})(Counter)

