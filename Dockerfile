FROM node

COPY package.json package-lock.json /home/app/
COPY public /home/app/public
WORKDIR /home/app
RUN npm install

EXPOSE 3000
RUN echo "HOST=0.0.0.0" > .env
CMD npm start
