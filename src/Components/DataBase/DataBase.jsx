import React from 'react'
import style from './DataBase.module.css'
import { SearchbarContainer } from '../Searchbar/SearchbarContainer'
import { PaginationContainer } from '../Pagination/PaginationContainer'
import { DataBasePerson } from './DataBasePerson'


export const DataBase = (props) => {

    return <div className={style.dataBaseContainer}>
                <SearchbarContainer />

                <h1 className={style.heading}>Star Wars Data Base</h1>
                {props.people.map((person, index) => (
                    <DataBasePerson person={person} key={index}/>
                ))} 
            
                <PaginationContainer onPageChange={props.onPageChange} />
                
            </div> 

    
}
