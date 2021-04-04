import React from 'react';
import './scss/Member.scss';
import JoinButton from './JoinButton'
import socket from '../modules/socket'


const Member : React.FC = () => {
  //socketio로 join 등의 메시지를 받으면 해당 내용으로 변경한다.
  socket.on('member', (data: string) => {
    console.log("data: ", data);
    const memberDiv = document.querySelector('.member-count') as HTMLImageElement;
    memberDiv.textContent = data;
  });

  socket.on('join', (data: string) => {
    console.log("data: ", data);
    const memberDiv = document.querySelector('.member-count') as HTMLImageElement;
    memberDiv.textContent = data;
  });

  socket.on('leave', (data: string) => {
    console.log("data: ", data);
    const memberDiv = document.querySelector('.member-count') as HTMLImageElement;
    memberDiv.textContent = data;
  })

  const num = "3명";
  return (
    <div className="member-container">
      <div className="member-count">{num}</div>
      <JoinButton/>
    </div>
  )
}

export default Member;