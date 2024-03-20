export const template = (link: string) => {
  return `
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Busme</h1>
      <h3>Cambio de contraseña</h3>
      <p>Estimado usuario</p>
      <p>Una peticion de cambio de contraseña ha sido solicitada a esta direccion de correo electronico, si usted no ha sido el responsable, haga caso omiso a este correo electrónico. Si usted ha solicitado el cambio de contraseña, haga click <a href="${link}" target="_blank">aquí</a> </p>
    </div>
  </body>
</html>
  `
}