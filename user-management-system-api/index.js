require('dotenv').config(); // Load environment variables

const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json()); // Middleware

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Use the Mongo URI from the .env file
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    console.log("Connected to MongoDB!");

    const myDB = client.db("coffe-expresso");
    const dataCollection = myDB.collection("personal information");

  
    // Your API routes here
    app.post("/user", async (req, res) => {
      const data = req.body;
      const result = await dataCollection.insertOne(data);
      res.send(result);
    });

    app.get('/list', async (req, res) => {
      const result = await dataCollection.find().toArray();
      res.send(result);
    });

    app.post('/update/:id', async (req, res) => {
      const id = req.params.id;
      const data = req.body;

      const query = { _id: new ObjectId(id) };
      const update = {
        $set: {
          name: data.name,
          email: data.email,
          age: data.age,
        },
      };

      const result = await dataCollection.updateOne(query, update, { upsert: true });
      res.send(result);
    });

    app.post('/delete/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await dataCollection.deleteOne(query);
      res.send(result);
    });

    app.post('/signup', async (req, res) => {
      const data = req.body;
      const result = await dataCollection.insertOne(data);
      res.send(result);
    });
      // defalt api
      app.get('/',(req,res)=>{
        res.send('APP is running')
      })
      app.get('/test',(req,res)=>{
        res.send('coffie app testing')
      })
  } finally {
    // Do not close the client in a running API
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
