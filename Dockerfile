#Stage 1
FROM node:16-bullseye as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#Stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/briefcase /usr/share/nginx/html
