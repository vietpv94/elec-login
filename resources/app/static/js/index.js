const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '172.19.0.3',
  user     : 'root',
  password : 'root',
  database : 'electron_db'
});

connection.connect(function(err) {
  if(!err) {
      console.log("Database is connected");
  } else {
      console.log("Error while connecting with database");
  }
});

let index = {
    init: function() {
      // Init
      asticode.loader.init();
      asticode.modaler.init();
      asticode.notifier.init();

      login.init();

      document.getElementById("btnLogin").addEventListener("click", function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        asticode.loader.show();
        connection.query('SELECT * FROM users WHERE name = ?',[username], function (error, results, fields) {
          asticode.loader.hide();
          if (error) {
            let c = document.createElement("div");
            c.innerHTML = `Login unsuccessful.`;
            asticode.modaler.setContent(c);
            asticode.modaler.show();
          } else {
            if (results.length > 0) {
                if(password == results[0].password) {
                  let c = document.createElement("div");
                  c.innerHTML = `Welcome on <b>Astilectron</b> demo!<br>This is using the bootstrap and the bundler.`;
                  asticode.modaler.setContent(c);
                  asticode.modaler.show();
                } else {
                  let c = document.createElement("div");
                  c.innerHTML = `Login unsuccessful and password does not match.`;
                  asticode.modaler.setContent(c);
                  asticode.modaler.show();
                }
            } else {
              let c = document.createElement("div");
              c.innerHTML = `Login unsuccessful and username does not match.`;
              asticode.modaler.setContent(c);
              asticode.modaler.show();
            }
          }
        });

        connection.end();
      });
    }
};
