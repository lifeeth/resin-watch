var tty = require('tty.js');
// Simple tty.js in app mode
var app = tty.createServer({
  shell: 'bash',
  users: {
    admin: 'admin'
  },
  port: process.env.PORT
});

app.listen();
