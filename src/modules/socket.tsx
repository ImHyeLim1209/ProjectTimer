import io from 'socket.io-client'

//socket은 객체로 만들어서 singleton 구현
const socket = io("http://localhost:4000", { transports: ['websocket'] });

export default socket; 