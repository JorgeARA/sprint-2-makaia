import React from "react";
import Background from "../../icons/avion.jpg";
import '../main/main.css'

const FlyBackground = () => {
    return(
        <section className="plane">
            <div className="plane_Background">
                <img className="planeB"  src={Background} alt="plane background" />
            </div>


        </section>
    )
}

export default FlyBackground; 