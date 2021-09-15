import React from 'react'
import style from './DataBase.module.css'

export const DataBasePerson = (props) => {
    return (
             <div className={style.personSection}>
                        <h4>Name: {props.person.name}</h4>
                        <span>Height: {props.person.height}; </span>
                        <span>Date of birth: {props.person.birth_year} </span>
                </div>
     
    )
}
