import React, { useEffect, useState } from "react";
import asterisk from "../assets/Images/asterisk.svg";
import clip from "../assets/Images/clip.svg";
import clip2 from "../assets/Images/clip2.svg";
import Faqdata from "../data.json";

const Faq = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (id) => {
        if(selected === id ){
            return setSelected(null);
        }

        setSelected(id)
    }
    return (
        <div >
            <div className="faqs_container">
                <h6 className="faq_heading"> FAQs</h6>
                <p>Have Questions? We’re here to help.</p>
            </div>

            {
                Faqdata.map(({id , ques , ans}) => {
                    return (
                        <div className="faqs">
                            <div className="faq_ques">
                                <h4>{ques}</h4>
                                <span onClick={() => toggle(id)}>{selected == id ? <img src={clip2} /> : <img src={clip} alt="" />}</span>
                                {console.log(selected)}

                            </div>

                            <div className="faq_ans">
                                <h6>
                                    {selected == id ? (ans) : ""}
                                    
                                </h6>
                            </div>
                        </div>



                    )
                })


            }


        </div>
    )
}

export default Faq;

