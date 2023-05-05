import React from 'react'
import './SidebarOption.css'
import { IconButton } from '@mui/material'
import { Duo, Person, Phone } from '@mui/icons-material'
const SidebarOption = ({Icon,title,number,selected}) => {
  return (
    <div className={`siderbarOption ${selected && "siderbarOption--active"}`}>
        <Icon/>
        <h3>{title}</h3>
        <p>{number}</p>
        
    </div>
  )
}

export default SidebarOption