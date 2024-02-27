import React, { useContext, useEffect, useState } from 'react';
import './Header.scss'
import Payment from '../Payment/Payment';
import Modal from '../Modal/Modal';
import { ReactReduxContext } from 'react-redux';
import transactions from '../../Assets/Transactions';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    // Access the store via the `useContext` hook
    const navigate = useNavigate();
    const { store } = useContext(ReactReduxContext);

    const [list, setList] = useState(transactions);

    useEffect(() => {

        store.subscribe(() => {

            const state = store.getState(); 
            setList((values) => ([
                ...values,
                state.transaction
            ]));
        });
    }, []);

    return (
        <>
            <div className="container-fluid display-table">
                <div className="row display-table-row">
                    <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        <div className="logo">
                            {/* <a href='/'><img src="https://play-lh.googleusercontent.com/nn3jXKaItb-nryaw47o1-6diQ1OckdBnI_TO8MJB4GpMRB6pkmi1SjsVDihqpWqeC9xa" alt="merkery_logo" className="hidden-xs hidden-sm" />
                                <img src="" alt="merkery_logo" className="visible-xs visible-sm circle-logo" />
                            </a> */}
                        </div>
                        <div className="navi">
                            <ul>
                                <li className="active"><a href="/"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></a></li>
                                <li><a href="/"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Workflow</span></a></li>
                                <li><a href="/"><i className="fa fa-bar-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Statistics</span></a></li>
                                <li><a href="/"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Calender</span></a></li>
                                <li><a href="/"><i className="fa fa-calendar" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Users</span></a></li>
                                <li><a href="/"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-11 display-table-cell v-align">
                        {/* <!--<button type="button" className="slide-toggle">Slide Toggle</button> --> */}
                        <div className="row">
                            <header>
                                <div className="col-md-7">
                                    <nav className="navbar-default pull-left">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="/side-menu" aria-expanded="false">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>
                                    </nav>
                                    <div className="search hidden-xs hidden-sm">
                                        <input type="text" placeholder="Search" id="search" />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="header-rightside">
                                        <ul className="list-inline header-top pull-right"> 
                                            <li onClick= {() => navigate('/registration')}>Login</li>
                                            <li><a href="/"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                            <li>
                                                <a href="/" className="icon-info">
                                                    <i className="fa fa-bell" aria-hidden="true"></i>
                                                    <span className="label label-primary">3</span>
                                                </a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="/" className="dropdown-toggle" data-toggle="dropdown"><img src="https://play-lh.googleusercontent.com/nn3jXKaItb-nryaw47o1-6diQ1OckdBnI_TO8MJB4GpMRB6pkmi1SjsVDihqpWqeC9xa" alt="user" />
                                                    <b className="caret"></b></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <div className="navbar-content">
                                                            <span>JS Krishna</span>
                                                            <p className="text-muted small">
                                                                me@jskrishna.com
                                                            </p>
                                                            <div className="divider">
                                                            </div>
                                                            <a href="/" className="view btn-sm active">View Profile</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                        </div>
                        <div className="user-dashboard">
                            <h1>Hello, Gaus</h1>
                            <div className="row">


                                <div className="col-md-7 col-sm-7 col-xs-12">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-3 col-xs-12 gutter">
                                            <div className="sales">
                                                <ul>
                                                    <li>Food & Drinks</li>
                                                    <li>$1000</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-3 col-xs-12 gutter">
                                            <div className="sales">
                                                <ul>
                                                    <li>Bills & Payments</li>
                                                    <li>$1000</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-3 col-xs-12 gutter">
                                            <div className="sales">
                                                <ul>
                                                    <li>Entertainment</li>
                                                    <li>$1000</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-5 col-xs-12 right-sidebar">
                                    <h3>Transaction History</h3>
                                    <div>
                                        {
                                            list.map((transaction, i) => {

                                                return <div key={i}>
                                                    <Payment data={transaction} />
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className='addTransaction'>
                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                        <h4 >Measuring Transaction</h4>
                                        <button type="button" data-toggle="modal" data-target="#myModal" >Add New</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal />
        </>
    );
}
