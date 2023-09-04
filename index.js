function subirData() {
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const fecha = document.getElementById("fecha-nacimiento").value;


  const data = {
    name: name,
    lastname: lastname,
    fecha: fecha
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const url = 'https://jsonplaceholder.typicode.com/users';

  fetch(url, options)
  .then(response => response.json())
  .then(data => {
      console.log('Respuesta del servidor:', data);
      alert('Datos enviados exitosamente');
  })
  .catch(error => {
      console.error('Error al enviar los datos:', error);
      alert('Error al enviar los datos');
  });
}