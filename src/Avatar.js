import React from 'react';
import 'tachyons';
import Avtarlist from './Avtarlist';
const Avater = (props) => {
    return ( 
        <div>
         <h1>Welcome To Avtar World</h1>
         <Avtarlist id="1" name="Amit Tyagi" work="Full Stack Developer" />
         <Avtarlist id="2" name="Shivam Kumar" work="API Developer"/>
         <Avtarlist id="3" name="Harsh Lal" work="Node Developer" />
         <Avtarlist id="4" name="Rahul" work="Laravel Developer" />
        <button>Subscribe</button>
        </div>
        
     )
    

}

export default Avater;