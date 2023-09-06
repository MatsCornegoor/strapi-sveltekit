FROM node:16
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY ./package*.json ./
ENV PATH /opt/node_modules/.bin:$PATH

RUN npm ci
WORKDIR /opt/app
COPY ./ .

RUN npm run build
EXPOSE 3000

# CMD ["npm", "build"]
CMD ["node", "./build"]