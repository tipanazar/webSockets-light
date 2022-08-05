const ws = new require("ws");

const wsServer = new ws.Server({ port: 3000 });

const clients = [];

wsServer.on("connection", (newClient) => {
  clients.push(newClient);
  // console.log(newClient);
  setTimeout(() => {
    newClient.send("Вы в чате");
  }, 3000);

  clients.forEach((client) => {
    if (client !== newClient) {
      client.send("У нас новый участник!!!");
    }
  });
});
