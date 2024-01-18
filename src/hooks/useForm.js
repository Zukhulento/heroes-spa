// TODO: Esto es un hook custom para formularios reutilizable

import { useState } from "react";

export const useForm = (initialForm = {}) => {
    // *En esta linea se asigna el objeto del formulario (con los campos) como
    // *Valor inicial del estado de formulario
    const [formState, setFormState] = useState(initialForm);
    // *En esta linea se definie la función para cambiar cualquier campo del form
    // *Recibe como parámetro la desestructuración del event.target
      const onChange = ({ target }) => {
        // Del target se desestructura el value y el name (Datos que usaré luego)
        const { name, value } = target;
        // Se define nuevos valores al estado
        setFormState({
          ...formState,
          [name]: value,
        });
      };
      const onResetForm = () => {
        setFormState(initialForm)
      }
    // !Se retorna con este hook el estado del formulario y la función para actualizar el estado
  return {
    ...formState,
    formState,
    onChange,
    onResetForm

  }
}
