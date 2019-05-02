FROM bingoles/front:latest as build-deps
COPY . /root
WORKDIR /root/
RUN wget https://storage.googleapis.com/les/node_modules.tar.gz
RUN tar -xzf node_modules.tar.gz
RUN rm node_modules.tar.gz
RUN npm i
