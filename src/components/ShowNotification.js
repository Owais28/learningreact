import React from 'react'
import {BsBellFill, BsFillBellSlashFill} from 'react-icons/bs'
export default function ShowNotification(props) {
    const isNotificationOn = props.isNotificationOn;
    let bell;
    if(isNotificationOn){
        bell = <BsBellFill className='bell'/>
    } else {
        bell = <BsFillBellSlashFill className='bell'/>
    }
  return (
    <div>{
        bell
        }</div>
  )
}
