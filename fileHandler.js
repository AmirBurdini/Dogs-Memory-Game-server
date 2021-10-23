require('./Config/configs')

let path = require("path");
let grid = require("gridfs-stream");
let fs = require("fs");
let filesrc = path.join(__dirname, "./filestoread/example.png");

let writeFile = () => {
   
    let connection = mongooseDrv.connection;

    if (connection !== "undefined") {

        console.log(connection.readyState.toString());
        
        Grid.mongo = mongooseDrv.mongo;
        
        connection.once("open", () => {
            
            console.log("Connection Open");
            let gridfs = grid(example.db);

            if (gridfs) {
                
                let streamwrite = gridfs.createWriteStream({
                    filename: "example.png"
                });
                //9b. create a readstream to read the file
                //from the filestored folder
                //and pipe into the database
                fs.createReadStream(filesrc).pipe(streamwrite);
                //9c. Complete the write operation
                streamwrite.on("close", (file) => {
                    console.log("Write written successfully in database");
                });
            } else {

                console.log("Sorry No Grid FS Object");
            }
        });
    } else {

        console.log('Sorry not connected');
    }
}

let readFile = () => {

    let connection = mongooseDrv.connection;
    if (connection !== "undefined") {

        console.log(connection.readyState.toString());
        let path = require("path");
        let grid = require("gridfs-stream");
        let fs = require("fs");
        let videosrc = path.join(__dirname, "./filestowrite/celibration.mp4");
        Grid.mongo = mongooseDrv.mongo;
        connection.once("open", () => {
            console.log("Connection Open");
            let gridfs = grid(example.db);
            if (gridfs) {
                let fsstreamwrite = fs.createWriteStream(
                    path.join(__dirname, "./filestowrite/example.png")
                );
                let readstream = gridfs.createReadStream({
                    filename: "example.png"
                });
                readstream.pipe(fsstreamwrite);
                readstream.on("close", (file) => {
                    console.log("File Read successfully from database");
                });
            } else {
                console.log("Sorry No Grid FS Object");
            }
        });
    } else {
        console.log('Sorry not connected');
    }
    console.log("done");
}

var MongoClient = require('mongodb').MongoClient,
  Grid = mongo.Grid;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/itsMine", function(err, db) {
  if(err) return console.dir(err);

  var grid = new Grid(db, 'fs');
  var buffer = new Buffer("Hello world");
  grid.put(buffer, {metadata:{category:'text'}, content_type: 'text'}, function(err, fileInfo) {
    if(!err) {
      console.log("Finished writing file to Mongo");
    }
  });
});