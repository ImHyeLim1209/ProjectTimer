import React from 'react';
import './scss/Detail.scss';
import Item from './Item';

const Detail : React.FC = () => {
  return (
    <div className="detail">
      <Item column="팀원" value="4명" type="member"></Item>
      <Item column="종료일" value="2021/4/26/12:00:00" type="date"></Item>
    </div>
  )
}

export default Detail;
