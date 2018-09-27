const grpc = require("grpc");
const protoPath = require("path").join(__dirname, "../..", "proto");
const proto = grpc.load({ root: protoPath, file: "todos.proto" });
const client = new proto.TodosService(
    "127.0.0.1:50051",
    grpc.credentials.createInsecure()
);

// client.List({}, (error, response) => {
//     if (!error) {
//         return console.log('Response: ', response)
//     }
//     console.error(error.message);
// })

// client.Get({ id: 633110 }, (error, response) => {
//     if (!error) {
//         return console.log('Response: ', response);
//     }
//     console.error(error.message);
// })

// client.Remove({ id: 171216}, (error, response) => {
//     if (!error) {
//         return console.log('Response: ', response);
//     }
//     console.error(error.message);
// })

// client.Insert({ 
//     id: parseInt(Math.random() * 1000000), title: 'Todo 1', description: 'Todo 1 Description' }, (error, response) => {
//     if (!error) {
//         return console.log('Response: ', response);
//     }
//     console.error(error.message);
// })
client.Update({ id: 633110, title: 'Updated Todo Title', description: 'Updated Todo Description' }, (error, response) => {
        if (!error) {
            return console.log('Response: ', response)
        }
        console.error(error.message);
    })
