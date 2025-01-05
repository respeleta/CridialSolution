# Cridial Solution

Cridial Solution API Referidos

## Backend Scaffolding

Estructura del proyecto siguiendo el concepto clean code:

![image](https://github.com/user-attachments/assets/7a7e4174-1cf4-4180-a3c1-ae529224a85b)

- **prisma:** archivo de configuración del OMR [schema.prisma]
- **src**: código fuente del proyecto
- **test**: unit test de la funcionalidades del proyecto

## Routes

Endpoint de Creación de Usuario:

- url: http://localhost:[port]/api/users

  Ejemplo:

  ```
  curl --location 'http://localhost:3000/api/users' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "email": "ramos@cridial.com",
      "name": "Sergio Ramos",
      "referral_email": "snow@cridial.com",
      "identification_number": "ID0015"
  }'
  ```

  ![image](https://github.com/user-attachments/assets/4724c6af-e903-44f7-ba23-62c29dbe6e8f)

  ![image](https://github.com/user-attachments/assets/5a81700c-01e5-4caa-8678-65ccdf83daa3)

Endpoint de Consulta de Usuario y Referidos:

- url: http://localhost:[port]/api/users/[user_id]/referrals

  Ejemplo:

  ```
  curl --location 'http://localhost:3000/api/users/12/referrals'
  ```

  ![image](https://github.com/user-attachments/assets/ad93c47e-a834-4557-867c-b2d83c4740d9)

  ![image](https://github.com/user-attachments/assets/7135aac8-850a-43ea-8393-df5723f8f686)
