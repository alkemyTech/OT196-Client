import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';

export default function Donations(){
  const navigate = useNavigate()
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token)    
}
const [donation, setDonation] = useState(0)

const handleChangeDonations = (e)=> {
  setDonation(Number(e.target.value))
}

useEffect(()=> {   
    const myPay = ()=> {
         axios.post(`http://localhost:3000/donations/`, { donation: donation })
         .then(x=> {
            console.log(stripeToken)
            console.log(x)
            if(x.data.msg){
                navigate('/thanks')
            }
        })
    }
    myPay()        
}, [stripeToken])

  return (
    <div>
  <h1> Gracias por tus donaciones </h1>
  <h4> Con ella le permites a Somos Más llegar a mas personas </h4>

  <input type='number' placeholder='Coloca tu donación' onChange={e=> handleChangeDonations(e)}/>
  <StripeCheckout
    token={onToken}
    stripeKey='pk_test_51KgvfFHEEv1tXsVZEpffi9X0VHCJ2XpgfPxentUc7Hx1qiTrS3uR1vXz0KDqpDkKBI5YX8ZLhxqah7FJhqK2vKXC00G70EZnc4'                      
    billingAddress                            
    description={`Tu donación: ${donation}`}
    amount={donation}
  
    >   
    <Button> Envia tu  Donación </Button>                       
  </StripeCheckout>
</div>
)}