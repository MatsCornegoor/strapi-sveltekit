# FROM node:16
# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /app/
# COPY ./package*.json ./
# # ENV PATH /opt/node_modules/.bin:$PATH

# RUN npm ci
# # WORKDIR /opt/app
# COPY . .

# RUN npm run build
# EXPOSE 3000

# # CMD ["npm", "build"]
# CMD ["node", "build"]
# # CMD ["node", "./build"]


FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]