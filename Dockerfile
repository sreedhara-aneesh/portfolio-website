FROM node:16.9.0
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .
RUN npm run build

ENTRYPOINT npx serve@14.1.2 -s build -p 80