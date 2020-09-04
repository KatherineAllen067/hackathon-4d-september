import React from 'react';
import '../styles/Program.scss';
import Plates from '../assets/icons/platesgif.gif';
import Enjoy from '../assets/icons/enjoy.png';
import Redeem from '../assets/icons/redeem.png';


function Program(){
    return(
        <>
        <div className="program">
            <h1 className="program-title">How it Works</h1>
            <div className="program-box">
                <div className="program-card">
                    <img src={Plates} alt="plate" className="icon2"/>
                    <h2>Earn</h2>
                    <span>Every-time you order from local restaurants you earn dishes.</span>
                </div>
                <div className="program-card">
                    <img src={Enjoy} alt="enjoy" className="icon2"/>
                    <h2>Redeem</h2>
                    <span>Get your favourite things for free. Cash in your dishes for delicious rewards and merchandise.</span>
                </div>
                <div className="program-card" >
                    <img src={Redeem} alt="redeem" className="icon2"/>
                    <h2>Enjoy</h2>
                    <span>Sit back and enjoy your goodies. Support local businesses has never been so rewarding.</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Program;