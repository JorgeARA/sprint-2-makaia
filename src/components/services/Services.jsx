import React from 'react'
import '../services/services.css'

const Services = () => {
  return (
    <div className='services'>
         <div className='titleServ'>
                <h2>Servicios disponibles</h2>
        </div>
        <div className='cardServ'>
            <div className='card'>
                <img className='imgServ' src="https://cdn.icon-icons.com/icons2/196/PNG/128/car_23773.png" alt="Imagen transporte" />
                <h4>Transporte</h4>
                <p>Renta un auto o reserva un shuttle</p>
            </div>
            <div className='card'>
                <img className='imgServ' src="https://cdn.icon-icons.com/icons2/290/PNG/512/flight_30822.png" alt="Imagen vuelos" />
                <h4>Vuelos + Hoteles</h4>
                <p>Encuentra las mejores ofertas para tu viaje</p>
            </div>
            <div className='card'>
                <img className='imgServ' src="https://cdn.icon-icons.com/icons2/602/PNG/512/User_Groups_icon-icons.com_55785.png" alt="Imagen grupos" />
                <h4>Grupos</h4>
                <p>Obtén una cotización para grupos de más de 9 personas</p>
            </div>
            <div className='card'>
                <img className='imgServ' src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-local-hotel_89842.png" alt="Imagen hotel" />
                <h4>Hoteles</h4>
                <p>Reserva cualquier habitación en cualquier parte del mundo</p>
            </div>
            <div className='card'>
                <img className='imgServ' src="https://cdn.icon-icons.com/icons2/943/PNG/512/shoppaymentorderbuy-10_icon-icons.com_73874.png" alt="Imagen carga" />
                <h4>Carga</h4>
                <p>Contamos con servicio de carga y mensajería</p>
            </div>
            

        </div>
    </div>
  )
}

export default Services