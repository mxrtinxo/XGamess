$(document).ready(function() {



    $.validator.addMethod("rutChileno", function(value, element) {
  
      
        var rutPattern = /^\d{7,8}-\d$/;
        if (!rutPattern.test(value)) {
            return false;
        }
  
      
        var rutSinGuion = value.replace("-", "");
        var rut = rutSinGuion.slice(0, -1);
        var dv = rutSinGuion.slice(-1);
        var factor = 2;
        var sum = 0;
        for (var i = rut.length - 1; i >= 0; i--) {
            sum += parseInt(rut.charAt(i)) * factor;
            factor = factor === 7 ? 2 : factor + 1;
        }
        var dvCalculado = 11 - (sum % 11);
        dvCalculado = dvCalculado === 11 ? "0" : dvCalculado === 10 ? "K" : dvCalculado.toString();
  
        return dv === dvCalculado;
      }, "El RUT no es válido (escriba sin puntos y con guión)");
  
      
      $.validator.addMethod("emailCompleto", function(value, element) {
  
      
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
  
      
        return regex.test(value);
  
      }, 'El formato del correo no es válido');
      
      
      $.validator.addMethod("soloLetras", function(value, element) {
  
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
  
      }, "Sólo se permiten letras y espacios en blanco.");
  
      $("#formulario_usuarios").validate({
        rules: {
          id: {
            required: true,
            min: 1
          },
          Usuario: {
            required: true
          },
          rut: {
            required: true,
            rutChileno: true
          },
          nombres:{
            required:true,
            soloLetras:true,
            minlength: 3,
            maxlength: 50
          },
          apellidos:{
            required:true,
            soloLetras:true,
            minlength: 3,
            maxlength: 50
          },
          correo:{
            required:true,
            emailCompleto:true
          },
          direccion:{
            required:true,
            soloLetras:true
          },
         
        },
        messages: {
          id: {
            required: "El ID es un campo requerido",
            min: "El ID debe ser mayor a 0"
          },
          id: {
            required: "El ID es un campo requerido",
            min: "El ID debe ser mayor a 0"
          },
          rut: {
            required: "El RUT es un campo requerido",
            rutChileno: "El RUT no es válido (escriba sin puntos y con guión)"
          },
          nombres: {
            required: "El nombre es un campo requerido",
            soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
          },
          apellidos:{
            required:"Sus apellidos son un campo requerido",
            soloLetras:"Sus apellidos solo pueden contener letras"
          },
          correo: {
            required: "El correo es un campo requerido",
            email: "El formato del correo no es válido",
          },
          direccion: {
            required: "La direccion es un campo requerido",
            soloLetras:"La direccion solo pueden contener letras"
          },
         
         
      }, 
    });
  });  
  
  



