import React from 'react';
import '../payment/payment.css';



const payment = () => {
  return (
    <div className='payment'>
        <div className='payType'>
            <div className='titlePay'>
                <h2>Pago seguro</h2>
            </div> 
            <div className='payMethods'>
                <div className='payLeft'>
                    <h4>Tarjeta de crédito, tarjeta de débito y pago electrónico</h4>
                    <div className='iconsPay'>
                        <img className='logoImg' src="https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135020-american-express_82257.png" alt="Logo American express" />
                        <img className='logoImg' src="https://cdn.icon-icons.com/icons2/674/PNG/512/Paypal-39_icon-icons.com_60555.png" alt="Logo paypal" />
                        <img className='logoImg'src="https://finanzasycredito.mx/sites/finanzasycredito.mx/files/2021-10/banco-invex.jpg" alt="Logo Invex" />
                        <img className='logoImg' src="https://cdn.icon-icons.com/icons2/2342/PNG/512/mastercard_payment_method_icon_142750.png" alt="Logo Mastercard" />
                        <img className='logoImg' src="https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135017-visa_82256.png" alt="Logo Visa" />
                    </div>
                    

                </div>
                <div className='payRight'>
                    <h4>Efectivo en cualquiera de las sucursales participantes</h4>
                    <div className='iconsPay'>
                        <img className='logoImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Oxxo_Logo.svg/1200px-Oxxo_Logo.svg.png" alt="Logo Oxxo" />
                        <img className='logoImg' src="https://cdn.icon-icons.com/icons2/37/PNG/512/7number_7_3825.png" alt="Logo 7" />
                        <img className='logoImg' src="https://cdn.icon-icons.com/icons2/2699/PNG/512/walmart_logo_icon_170231.png" alt="Logo Walmart" />
                        <img className='logoImg' src="http://www.grupodcn.com/img/farmaciasAhorro.jpg" alt="Logo Farmacias ahorro" />
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
    
  )
}

export default payment