# FROM node:alpine

# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .

# CMD ["npm", "start"]

FROM node:alpine
ENV CI=true

RUN npm install -g serve  

WORKDIR '/app'
COPY package*.json ./
RUN npm install --only=prod

COPY . .
# RUN npm run build

# CMD serve -s build -p 3000

CMD ["npm", "start"]