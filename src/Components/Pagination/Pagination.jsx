import React from 'react'
import style from './Pagination.module.css'


export const Pagination = (props) => {
    
    let pages = []
    for(let i = 1; i <= Math.ceil(props.totalPeopleCount / props.pageSize); i++){
        pages.push(i)
    }

  
    return (
        <div className={style.pagesStyle}>
                    {pages.map(p => (
                    <span className={p === props.currentPage ? style.active : style.pageItem} key={p} onClick={()=>props.onPageChange(p)}>{p}</span>
                ))}
        </div>
    )
}
