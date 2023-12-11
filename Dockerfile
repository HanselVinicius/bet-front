FROM node:18 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
RUN npm install -g @angular/cli
COPY . .
RUN npm run build --prod
FROM nginx:1.15.8-alpine
COPY --from=build /usr/src/app/dist/jogo_do_bixo /usr/share/nginx/html
