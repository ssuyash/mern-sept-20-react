import React, { Component } from 'react'

export default class Balancesheet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: 0,
            type: "",
            remark: "",
            transactions: []
        }
    }

    saveTransaction = () => {
        let { amount, type, remark, transactions } = this.state
        
        if(amount <= 0){
            alert("invalid amount")
            return
        }

        if(type == ""){
            alert("invalid transaction type")
            return
        }

        if(type == 'expense'){
            let summary = this.getSummary()
            let balance = summary.balance
            if(balance < amount){
                alert("invalid transaction, expense can not be more than balance.")
                return
            }
        }
       

        let newTrasaction = { amount, type, remark }
        transactions.push(newTrasaction)
        this.setState({ transactions, amount: 0, type: '', remark: '' })
        alert("successfully saved")
        


    }


    getSummary = () => {
        let txns = [...this.state.transactions]
        let income = 0
        let expense = 0

        txns.forEach(e => {
            if (e.type === 'income') {
                income += parseInt(e.amount)
            }
            if (e.type === 'expense') {
                expense += parseInt(e.amount)
            }
        })

        return { income, expense, balance: (income - expense) }
    }


    render() {
        let summary = this.getSummary()
        return (
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <input type="number"
                            value={this.state.amount}
                            onChange={(e) => this.setState({ amount: e.target.value })}
                            placeholder="amount" className="form-control" />
                    </div>

                    <div className="col-md-3">
                        <select
                            value={this.state.type}
                            onChange={(e) => this.setState({ type: e.target.value })}

                            className="form-control">
                            <option value="">select type</option>

                            <option value="income">income</option>
                            <option value="expense">expense</option>
                        </select>
                    </div>

                    <div className="col-md-3">
                        <input
                            value={this.state.remark}
                            onChange={(e) => this.setState({ remark: e.target.value })}
                            type="text" placeholder="remark" className="form-control" />
                    </div>

                    <div className="col-md-3">
                        <button
                            onClick={this.saveTransaction}
                            className="btn btn-outline-primary btn-block">Save</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <table className="table table-borderd">
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Remark</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.transactions.map((txn, ind) => {
                                    return (<tr key={ind}>
                                        <td>{txn.amount}</td>
                                        <td>{txn.type}</td>
                                        <td>{txn.remark}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-md-6">
                        <table className="table table-borderd">
                            <tbody>
                                <tr>
                                    <th>Total Income</th>
                                    <td>{summary.income}</td>
                                </tr>

                                <tr>
                                    <th>Total Expense</th>
                                    <td>{summary.expense}</td>
                                </tr>

                                <tr>
                                    <th>Balance</th>
                                    <td>{summary.balance}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        )
    }
}


//balance must not be negative
//txn type must have one type, either income or expense
