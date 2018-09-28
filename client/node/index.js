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

// client.Get({ id: 292870 }, (error, response) => {
//     if (!error) {
//         return console.log('Response: ', response);
//     }
//     console.error(error.message);
// })

// client.Remove({ id: 136131}, (error, response) => {
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
//     console.error('Insert error: ', error.message);
// })
// client.Update({ id: 699065, title: 'Todo Ali', description: ' Todo Description Ali' }, (error, response) => {
//         if (!error) {
//             return console.log('Response: ', response)
//         }
//         console.error(error.message);
//     })
client.DoneTodo({ id: 605277, done: true }, (error, response) => {
        if (!error) {
            return console.log('Response: ', response)
        }
        console.error(error.message);
    })