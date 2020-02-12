const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.236',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  // conn.on('data', (data) => {
  //   console.log(data)
  // })

  conn.on('connect', () => {
    console.log('Successfully connected to game servers')
    conn.write('Name: WF')
  });
 

  return conn;
}

module.exports = { connect };