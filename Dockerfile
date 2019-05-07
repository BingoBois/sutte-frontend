FROM bingoles/front:latest as build-deps
COPY . /root
WORKDIR /root/
RUN wget -q https://storage.googleapis.com/lesfront/node_modules.tar.gz
RUN tar -xzf node_modules.tar.gz
RUN rm node_modules.tar.gz
RUN npm i
