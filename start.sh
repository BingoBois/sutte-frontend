docker build -t lesfrontstaging:latest .
docker run -e BACK_URL="http://les.viter.dk:3030" --name tester lesfrontstaging:latest npm test
