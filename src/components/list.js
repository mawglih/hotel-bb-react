import React from 'react';
import { ListItems } from '../utils/list-items';

export default (props) => {
    return(
        <ul className="list">
            {ListItems.map((item) =>{
                return(
                    <li className="list__item" key={ListItems.indexOf(item)}>{item.name}</li>
                );
            })}
        </ul>
    )
}