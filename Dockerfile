FROM node:14.9
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
# EXPOSE 9004
 
CMD [ "npm", "start" ]