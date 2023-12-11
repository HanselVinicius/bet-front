FROM node:20 AS build
WORKDIR /usr
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli@13

RUN npm run build

FROM node:20
COPY --from=build /usr/src/app/dist/jogo_do_bixo /usr/src/app/jogo_do_bixo
WORKDIR /usr/src/app/jogo_do_bixo
CMD [ "npm", "run", "start" ]
