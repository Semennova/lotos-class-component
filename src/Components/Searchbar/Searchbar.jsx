import React from 'react'
import style from './Searchbar.module.css'
import { api } from '../../api/api'


export class Searchbar extends React.Component {
    search (name) {
        api.search(name)
        .then(response => {
            this.props.setPeople(response.data.results)
        })
    }


    render() {
        return (
        <div className={style.searchSection}>
            <label className={style.label} htmlFor='search'></label>
                <input id='search' type='text' placeholder='Search' onChange={(e)=> this.search(e.target.value)} />
        </div>
    )
    }
}



