const ws = new require("ws");

const wsServer = new ws.Server({ port: 3000 });

const users = [];

wsServer.on("connection", (newUser) => {
  users.push(newUser);
  // console.log(newUser);
  setTimeout(() => {
    newUser.send("Вы в чате");
  }, 3000);

  users.forEach((user) => {
    if (user !== newUser) {
      user.send("У нас новый участник!!!");
    }
  });
});
