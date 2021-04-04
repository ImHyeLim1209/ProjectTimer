import React from 'react';
import './scss/Item.scss';
import Calendar from './Calendar';


interface Props {
  column: string,
  value: string,
  type: string
}

const Item: React.FC<Props> = ({column, value, type}) => {
  return (
    <div className="item">
      <div>{column}:&nbsp;&nbsp;</div>
      <div>
        {
          type === "string"?
          value:
          <Calendar></Calendar>
        }
      </div>
  </div>
  )
}

export default Item;