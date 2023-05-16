// import React, { useState } from 'react';
import {faqs} from '../Data';
import AccordionItem from './AccoridianItem'

function Accoridian(props) {
    // const[clicked , setClicked] = useState("0")

    // const handleToggle = (index) => {
    //     if (clicked === index) {
    //      return setClicked("0");
    //     }
    //     setClicked(index);
    //    };
    return (
        <div className='accordion'>
            <ul className="accordion">
                {faqs.map((faq, index) => (
                    <AccordionItem 
                    // onToggle={() => handleToggle(index)}
                    key={index} faq={faq} 
                    // active={clicked === index}
                    />
                ))}
             </ul>
        </div>
    );
}

export default Accoridian;