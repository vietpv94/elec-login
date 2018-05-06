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
        let c = document.createElement("div");
                  c.innerHTML = `Welcome on <b>Astilectron</b> demo!<br>This is using the bootstrap and the bundler.`;
                  asticode.modaler.setContent(c);
                  asticode.modaler.show();
      });
    }
};
