import React from 'react'
import { hardcodeActivities } from "./harcodeActivities"
import './ActivityList.css'
import ActivityCard from './ActivityCard'

export default function ActivityList(){
  const activitiesToShow = hardcodeActivities
    // const activitiesToShow = []

    return(
        <div className='container_main'>
            {
                activitiesToShow.length ?
                activitiesToShow.map(x=> {
                    return <ActivityCard  
                    key={x.id}
                    id= {x.id}
                    imagen= {x.imagen}
                    tittle= {x.tittle}
                    start= {x.startDate}
                    end= {x.finishDate}
                    participants= {x.participants}
                    className='card_main'
                     />
                })   :  <h1 className='container_no_activities_to_show'> Lo sentimos, no tenemos actividades programadas proximante, 
                         en cuanto las tengamos estaran publicadas en esta liga </h1> }  
        </div>
    )
}