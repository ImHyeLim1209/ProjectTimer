import React, {useState} from 'react';
import { RiTeamFill, RiUser3Fill } from "react-icons/ri"; //alone: RiUser3Fill
import './scss/JoinButton.scss';
import socket from '../modules/socket'

const JoinButton : React.FC = () => {
  const [isJoin, setIsJoin] = useState(false);
  const handleClick = () : void => {
    if(isJoin) {
      setIsJoin(false);
      socket.emit('leave', 'ihl');
    } else {
      setIsJoin(true);
      socket.emit('join', 'ihl');
    }
    
  }

  return (
    <button className="join-button" onClick={handleClick}>
      {isJoin === false? 
      <RiTeamFill className="join" size="36"/>:
      <RiUser3Fill className="join" size="36"/>}
    </button>
    
  )
}

export default JoinButton;