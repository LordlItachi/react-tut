import {createElement} from 'react';
import style from './users.module.scss'

export function UserFavouriteFoods(){
    return createElement('section',null,
    <span className={style.favouriteFoods}>Favourite Food : </span>,
    <ul>
        <li>Sushi</li>
        <li>Salmon</li>
        <li>Pizza</li>

    </ul>)
}