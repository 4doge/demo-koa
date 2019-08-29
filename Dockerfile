FROM node:11.15.0

RUN mkdir -p /project
WORKDIR /project

# RUN npm i -g pm2

COPY . /project

EXPOSE 3000

CMD ["node", "app.js"]