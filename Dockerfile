FROM node:16-alpine

WORKDIR /app
COPY . .
RUN npm install -g gatsby-cli
RUN npm ci
RUN gatsby build
CMD ["gatsby", "serve"]
EXPOSE 9000