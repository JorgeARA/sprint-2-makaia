import React, { useState } from "react";
import { Form } from "react-bootstrap";

import '../main/main.css';
import ModalList from "../ModalList";

  
  
const FlyBackground = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <section >
            {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous"></link> */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>

            <div className="plane_Background">
                <div className='planeB'>

                     {/* Encabezado */}
                    <div class="container">
                        <p className="text_plane1">Busca un nuevo destino y comienza una aventura.</p>
                        <p className="text_plane2">Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>
                    </div>

                    {/* Eleccion de tipo de viaje  */}
                    <div className="planeBackComponents">
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked></input>
                            <label class="btn btn-outline-primary" for="btnradio1">Viaje redondo</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
                            <label class="btn btn-outline-primary" for="btnradio2">Viaje sencillo</label>
                        </div>
                    </div>

                    {/* Eleccion de origen y destino  */}
                    <div class="container">
                        <div class="row align-items-start">
                            <div class="col">
                                <div class="planeBackComponents">
                                <button type="button" class="btn btn-light" onClick={ handleShow } > Ciudad de Mexico </button>
                                    {/* <input type="text" class="form-control" id="floatingInputValue" placeholder="Ciudad de Mexico" value="" ></input>  */}
                                    <label className="text_content1" >Origen</label> 
                                </div>
                            </div>

                            <div class="col">
                            <div class="planeBackComponents">
                            <button type="button" class="btn btn-light" onClick={ handleShow } > --- --- --- --- ---     </button>
                                {/* <input type="text" class="form-control" id="floatingInputValue" placeholder="--- --- ---" value=""></input> */}
                                <label className="text_content1" >Seleccione un destino</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Eleccion de fechas de viaje  */}
                    <div class="container">
                        <div class="row align-items-start">
                            <div class="col">
                                <div class="planeBackComponents">
                                    <label className="text_content1" for="salida">Salida</label>
                                    <Form.Control type="date" name='date_salida' />
                                </div>
                            </div>

                            <div class="col">
                                <div class="planeBackComponents">
                                    <label className="text_content1" for="regreso">Regreso</label>
                                    <Form.Control type="date" name='date_regreso' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Eleccion datos adicionales  */}
                    <div class="container">
                        <div class="row align-items-start">

                            <div class="col">
                                <div class="planeBackComponents">
                                    <label className="text_content1" for="floatingInputValue">Pasajeros</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>1 Adulto</option>
                                        <option value="1">2 Adultos</option>
                                        <option value="2">3 Adultos</option>
                                        <option value="3">4 Adultos</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col">
                                <div class="planeBackComponents">
                                    <label className="text_content1" for="floatingInputValue">¿Tienes un código de promoción?</label>
                                    <input type="text" class="form-control" id="floatingInputValue" placeholder="-- -- -- --" value=""></input>
                                </div>
                                </div>
                        </div>
                    </div>

                    {/* Boton final  */}
                    <div class="container">
                        <button type="button" class="btn btn-labeled btn-primary">
                        <span class="btn-label"><i class="fa fa-check"></i></span>Buscar vuelos</button>
                    </div>
                </div>
            </div>
        </section>
        <ModalList show={show} handleClose={handleClose}/>
        </>
    )

}



export default FlyBackground; 