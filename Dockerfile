FROM node:20-alpine3.17

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8070
CMD ["npm","start"]