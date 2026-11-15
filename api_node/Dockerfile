# Imagen oficial de Node con soporte vigente
FROM node:22-slim
# Directorio de trabajo dentro del contenedor
WORKDIR /app
# Copiamos el proyecto
COPY . .
# Instalamos dependencias
RUN npm install
# Puerto en el que escucha la API
EXPOSE 3000
# Arranque de la aplicación
CMD ["npm", "start"]