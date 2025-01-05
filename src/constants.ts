const Constants = {
  STATUS: {
    badRequest: 'BADREQUEST',
    badRequestCode: 400,
    success: 'SUCCESS',
    successCodeCreated: 201,
    successCode: 200,
    internalServerError: 'FAILED',
    internalServerErrorCode: 500,
    notFound: 'NOTFOUND',
    notFoundCode: 404,
  },
  MESSAGES: {
    invalidUser: 'El usuario ya existe con el número de identificación o correo electrónico proporcionado',
    createdUser: 'Usuario creado correctamente',
    serverError: 'Error en el servicio',
    notFound: 'Usuario no encontrado',
  },
};

export default Constants;
