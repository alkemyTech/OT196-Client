import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom'
import { Button, InputGroup, FormControl, Container } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { FaDollarSign, FaHandsHelping } from "react-icons/fa"

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
  <h1 className="mb-3"> Gracias por tus donaciones </h1>
  <h4> Con ella le permites a Somos Más llegar a mas personas </h4>

  <Container className="w-50 mx-auto mb-3">
    <InputGroup className="mb-3">
      <InputGroup.Text><FaDollarSign/></InputGroup.Text>
      <FormControl onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} aria-label="Valor monetario" />
    </InputGroup>
  <StripeCheckout
    token={onToken}
    stripeKey='pk_test_51KgvfFHEEv1tXsVZEpffi9X0VHCJ2XpgfPxentUc7Hx1qiTrS3uR1vXz0KDqpDkKBI5YX8ZLhxqah7FJhqK2vKXC00G70EZnc4'                      
    billingAddress                            
    description={`Tu donación: ${donation}`}
    amount={donation}
    >   
    <div className="d-grid gap-2">
      <Button> <FaHandsHelping/> Envia tu  Donación </Button>       
    </div>                
  </StripeCheckout>
  </Container>

</div>
)}