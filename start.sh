docker build -t lesfrontstaging:latest .
docker network create mynet
docker run --network mynet --name runner -d -p 3000:3000 lesfrontstaging:latest npm start 
docker run --network mynet -e BACK_URL=http://les.viter.dk:3030 -e FRONT_URL=http://runner:3000 --name tester lesfrontstaging:latest npm test