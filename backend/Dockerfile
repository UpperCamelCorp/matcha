FROM node@sha256:0931423df82136fe3b99881aa0167265cdd38d85e98df2185972dea86c8232e6

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]
