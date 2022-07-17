#Stage 1
FROM node:14-bullseye as node
WORKDIR /app
COPY . .
RUN node -v
#RUN npm install -g npm@latest
RUN npm install
RUN npm run build --prod --release

#Stage 2
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/briefcase /usr/share/nginx/html
