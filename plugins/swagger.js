import SwaggerClient from 'swagger-js'

export default (context, inject) => {
    const swaggerClient = new SwaggerClient({
      url: 'http://iot.ceisufro.cl:8080/v3/api-docs?group=thingsboard' // Replace with your Swagger/OpenAPI endpoint
    })
  
    inject('swagger', swaggerClient)
  }