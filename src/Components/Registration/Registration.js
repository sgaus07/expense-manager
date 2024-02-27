import React, { useState } from 'react';
import './Registration.scss';
export default function Registration() {

    const [isSignInTabActive, setSignInTabActive] = useState(true);

    return (
        <>
            <div className="registration-page">
                <div className='action'>
                    <div className="action-tab">
                        <div onClick={() => {
                            setSignInTabActive(true)
                        }} className={`item btn-signIn ${isSignInTabActive ? 'active' : ''}`}>Sign In</div>
                        <div onClick={() => {
                            setSignInTabActive(false)
                        }} className={`item btn-login ${!isSignInTabActive ? 'active' : ''}`}>Sign Up</div>
                    </div>

                    {
                        !isSignInTabActive && <div className='registration'>
                            <form>
                                <label>
                                    <p className="label-txt">ENTER YOUR EMAIL</p>
                                    <input type="text" className="input" />
                                    <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                </label>
                                <label>
                                    <p className="label-txt">ENTER YOUR NAME</p>
                                    <input type="text" className="input" />
                                    <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                </label>
                                <label>
                                    <p className="label-txt">ENTER YOUR PASSWORD</p>
                                    <input type="text" className="input" />
                                    <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                </label>
                                <button >SignUp</button>
                            </form>
                        </div>
                    }

                    {
                        isSignInTabActive && <div className='login'>
                            <form>
                                <label>
                                    <p className="label-txt">ENTER YOUR EMAIL</p>
                                    <input type="text" className="input" />
                                    <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                </label>
                                <label>
                                    <p className="label-txt">ENTER YOUR PASSWORD</p>
                                    <input type="text" className="input" />
                                    <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                </label>
                                <button>login</button>
                            </form>
                        </div>
                    }



                </div>
            </div>
        </>
    );
}
