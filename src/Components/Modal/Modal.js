import React, { useContext, useEffect, useState } from 'react';
import './Modal.scss';
import { ReactReduxContext } from 'react-redux';
import { add } from '../../Shared/Actions/TransactionAction';

export default function Modal() {

    // Access the store via the `useContext` hook
    const { store } = useContext(ReactReduxContext);

    

    const [transaction, setTransaction] = useState({});

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setTransaction((props) => ({
            ...props,
            [name]: value
        }));
    }
    const addTransaction = () => {

        // console.log(transaction);

        store.dispatch(add(transaction));
        
        // transactions.push(transaction);
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">


                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        <div className="modal-body">
                            <div className='form'>
                                <form id='addTransaction()'>
                                    <div className="form-group">
                                        <input className='form-control' onChange={handleInputChange} value={transaction.title} type='text' name='title' placeholder='Title' />
                                    </div>
                                    <div className="form-group">
                                        <select onChange={handleInputChange} className='form-control' name='type' value={transaction.type}>
                                            <option value="">--Select Type--</option>
                                            <option value="expense">Expense</option>
                                            <option value="income">Income</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input className='form-control' onChange={handleInputChange} value={transaction.amount} name='amount' type='number' placeholder='Amount' />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => { addTransaction() }} type="button" className='btn btn-success' data-dismiss="modal">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
    // 
};
