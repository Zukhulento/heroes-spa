// En este archivo se recopilan las acciones que puedo hacer
// Se obtiene la info de los types
import { types } from "../types/types";
//! En el reducer no se debe de llamar nada del localStorage o agentes externos al mismo
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action,
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
