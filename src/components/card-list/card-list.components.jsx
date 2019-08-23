import  React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
    return (
         <div className='card-list'>
            {props.people.map(p =>
                <Card key={p.id} people={p}/>
            )}
        </div>
    )
}