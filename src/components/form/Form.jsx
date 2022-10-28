import React from 'react'
import '../form/form.css'

const Form = () => {
  return (
    
        <div className='formContainer'>
        <div className='divInput'>
            <h4>Busca un nuevo destino y comienza la aventura</h4>
            <p></p>

        </div>
        <div className='divInput'>
            
        </div>
        <div className='divInput'>
            <div>
                <label htmlFor="">Origen: </label>
            <select name="Origen" id=""><option value="">Medellín</option>
            <option value="">Cali</option>
            <option value="">Bogotá</option>
            <option value="">Santa Marta</option>
            <option value="">Cartagena</option>
            </select>
            </div>

            <div>
                <label htmlFor="">Destino: </label>
            <select name="" id=""><option value="">Medellín</option>
            <option value="">Cali</option>
            <option value="">Bogotá</option>
            <option value="">Santa Marta</option>
            <option value="">Cartagena</option>
            </select>
            
            </div>
            
            
        </div>
        <div className='divInput'>
            <input type="date" name="Salida" id="salida" />
            <input type="date" name="Regreso" id="regreso" />
        </div>
        <div className='divInput'>
            <label htmlFor="">Número de personas: </label>
            <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
            </select>
            <input type="text" placeholder='Código promocional' />
            
        </div>
       
    <button className='button'>Buscar</button>
    </div>
   
    
  )
}

export default Form