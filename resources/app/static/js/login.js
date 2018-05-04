let login = {
  init: function() {
    document.body.innerHTML = `
    <div class="form box-shadow" id="loginform">
      <div class="thumbnail"><img src="static/logo-dark.png"/></div>
      <p class="fancy">
         <span class="message">Login with Modern</span>
      </p>
      <form class="login-form">
        <input type="text" placeholder="username" id="username"/>
        <input type="password" placeholder="password" id="password"/>
        <a class= "button" id="btnLogin">Login</a>
        <p class="message">Not registered? <a href="#">Create an account</a></p>
      </form>
    </div>` + document.body.innerHTML
  },
  hide: function() {
      document.getElementById("loginform").style.display = "none";
  },
  show: function() {
      document.getElementById("loginform").style.display = "block";
  }
}
