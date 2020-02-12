const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.236',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log(data)
  })

  conn.on('connect', () => {
    console.log('Successfully connected to game servers')
    conn.write('Name: WF')
  })

 

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = { connect };