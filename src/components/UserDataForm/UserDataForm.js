import React, { useState } from 'react';
import { TextField, Button,Typography } from '@mui/material';
import { Person, Phone, Email } from '@mui/icons-material';

const UserDataForm = ({
    setNombreUsuario,
    setApellidoUsuario,
    setTelefonoUsuario,
    setDireccionUsuario,
    setEmailUsuario}) => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [confirmEmailError, setConfirmEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      setEmailError(true);
      setConfirmEmailError(true);
    } else {
      setEmailError(false);
      setConfirmEmailError(false);

     // console.log(nombre, apellido, telefono, email, confirmEmail);
      setNombreUsuario(nombre)
      setApellidoUsuario(apellido)
      setTelefonoUsuario(telefono)
      setDireccionUsuario(direccion)
      setEmailUsuario(email)



      // Aquí podemos enviar los datos del formulario a un servidor o almacenarlos localmente
    }
  };

  return (

   
    <form onSubmit={handleSubmit}>
      <Typography variant='h5'>Datos del Usuario</Typography>
      <TextField
        id="nombre"
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: <Person />,
        }}
      />
      <TextField
        id="apellido"
        label="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: <Person />,
        }}
      />
      <TextField
        id="telefono"
        label="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: <Phone />,
        }}
      />
      <TextField
        id="direccion"
        label="Direccion"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: <Phone />,
        }}
      />
      <TextField
        id="email"
        label="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        error={emailError}
        helperText={emailError ? 'Los correos no coinciden' : ''}
        InputProps={{
          startAdornment: <Email />,
        }}
      />
      <TextField
        id="confirmar-email"
        label="Confirmar correo electrónico"
        value={confirmEmail}
        onChange={(e) => setConfirmEmail(e.target.value)}
        fullWidth
        margin="normal"
        error={confirmEmailError}
        helperText={confirmEmailError ? 'Los correos no coinciden' : ''}
        InputProps={{
          startAdornment: <Email />,
        }}
      />
      <Button variant="contained" color="primary" type="submit">
        Confirmar datos
      </Button>
    </form>
  );
};

export default UserDataForm;