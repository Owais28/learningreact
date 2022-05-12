import React from 'react'
import {BsBellFill, BsFillBellSlashFill} from 'react-icons/bs'
export default function ShowNotification(props) {
  const [showNotification,setShowNotification] = React.useState(false)
    const isNotificationOn = showNotification;
    let bell;
    function handleClick(event){
      setShowNotification(
        (prevNotification) => !prevNotification
      )
    }
    if(isNotificationOn){
        bell = <BsBellFill onClick={handleClick} className='bell'/>
    } else {
        bell = <BsFillBellSlashFill onClick={handleClick} className='bell'/>
    }
  return (
    <div>{
        bell
        }</div>
  )
}
