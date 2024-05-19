module.exports = app => {
    app.use('/api/users', require('./users'));
    app.use('/api/auth', require('./auth'));
    app.use('/api/products', require('./products'));
    app.use('/api/cart', require('./cart'))
}

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://adellhmt:GfDyEiGB1YT5X13S@cluster0.6oxyknn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
