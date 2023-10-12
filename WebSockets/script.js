/*const ws = new WebSocket("ws://192.168.0.101:8080");

ws.on("open", () => {
  console.log("اتصال مفتوح");
});

ws.on("message", (data) => {
  console.log(data);
});

ws.send("مرحبًا!");*/

//__________________________________


/*const ws = new WebSocket("ws://192.168.0.101:8080");

ws.addEventListener("open", () => {
  console.log("اتصال مفتوح");
});

ws.addEventListener("message", (event) => {
  console.log(event.data);
});
://localhost:7700
ws.send("مرحبًا!");
*/

//__________________________________
let server = "ws://127.0.0.1:7700";

const socket = new WebSocket(server);

socket.onopen = () => {
  socket.send("hy");
};

socket.onmessage = (event) => {
  console.log("رسالة من الجهاز ذو العنوان"+server+ ' : ' + event.data);
};
''