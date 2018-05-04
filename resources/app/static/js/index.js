let index = {
    init: function() {
      // Init
      asticode.loader.init();
      asticode.modaler.init();
      asticode.notifier.init();

      document.body.innerHTML = `
      <div class="form box-shadow">
        <div class="thumbnail"><img src="static/logo-dark.png"/></div>
        <p class="fancy">
           <span class="message">Login with Modern</span>
        </p>
        <form class="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>Login</button>
          <p class="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>` + document.body.innerHTML
    }
};
