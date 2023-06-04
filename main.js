const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});

// Mostrar o ocultar elementos según la selección del menú lateral
item1.addEventListener('click', function() {
    // Mostrar botón y ocultar mensaje de bienvenida y formulario
    boton.style.display = 'block';
    boton.style.display = 'none';
    form.style.display = 'none';
    tabla.style.display = 'none';
  });
  
 item2.addEventListener('click', function() {
    // Ocultar botón y mensaje de bienvenida, mostrar formulario
    welcomeButton.style.display = 'none';
    welcomeMessage.style.display = 'none';
    form.style.display = 'block';
    tabla.style.display = 'block';
  });