import React from 'react';
import './scss/Item.scss';
import Calendar from './Calendar';
import Member from './Member';


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
          type === "member"?
          <Member></Member>:
          <Calendar></Calendar>
        }
      </div>
  </div>
  )
}

export default Item;