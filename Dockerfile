FROM node:14.16.0-alpine
WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .

RUN npm install
ENV API_URL=http://api.myapp.com
EXPOSE 3000
CMD ["npm", "start"]