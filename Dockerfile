FROM node:16.15.0-alpine3.15

RUN mkdir /app
RUN mkdir /app/web

WORKDIR /app/web

COPY . .

EXPOSE 3000

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]