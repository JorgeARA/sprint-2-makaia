import React from "react";
import Background from "../../icons/avion.jpg";
import '../main/main.css'
import Form from "../form/Form";

const FlyBackground = () => {
    return(
        <section className="plane">
            <div className="plane_Background">
                <Form/>
                <img className="planeB"  src={Background} alt="plane background" />
                
            </div>


        </section>
    )
}

export default FlyBackground; 