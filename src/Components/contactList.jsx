import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts, loadContacts } from '../app/contactSlice'

export default function ContactList(){
    const dispatch = useDispatch()    
    const contacts = useSelector(state=> state.contacts)
    useEffect(()=> {
        dispatch(getContacts())
    }, [])
    console.log(contacts)

    return(
        <div>
            
        </div>
    )
}