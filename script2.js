document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const mensajeError = document.getElementById("mensaje-error");

  const errores = [];

  // Validación del nombre
  if (nombre === "") {
    errores.push("El campo 'Nombre completo' es obligatorio.");
  }

  // Validación del correo
  if (correo === "") {
    errores.push("El campo 'Correo electrónico' es obligatorio.");
  } else {
    const regexCorreo = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
    if (!regexCorreo.test(correo)) {
      errores.push("El correo ingresado no tiene un formato válido.");
    }
  }

  // Validación del teléfono
  if (telefono === "") {
    errores.push("El campo 'Teléfono' es obligatorio.");
  } else {
    const regexTelefono = /^\d{10}$/;
    if (!regexTelefono.test(telefono)) {
      errores.push("El número telefónico debe tener 10 dígitos.");
    }
  }

  // Validación del mensaje
  if (mensaje === "") {
    errores.push("El campo 'Mensaje' es obligatorio.");
  }

  // Mostrar errores
  if (errores.length > 0) {
    mensajeError.innerHTML = errores.join("<br>");
    return;
  }

  alert("Formulario enviado exitosamente.");
  mensajeError.textContent = "";
  this.reset();
});
