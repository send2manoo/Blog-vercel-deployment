// ----- /api/analytics.js -----
// Import Dependencies
const url = require("url");
const MongoClient = require("mongodb").MongoClient;

// Create cached connection variable
let cachedDb = null;
const uri = process.env.VISITORSDB;

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase() {
    // If the database connection is cached,
    // use it instead of creating a new connection
    if (cachedDb) {
        return cachedDb;
    }

    // If no connection is cached, create a new one
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Select the database through the connection,
    // using the database path of the connection string
    const db = await client.db(url.parse(uri).pathname.substr(1));

    // Cache the database connection and return the connection
    cachedDb = db;
    return db;
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
    try {
        // get all user details and store them
        const referer = req.headers["referer"];
        const ip = req.headers["x-forwarded-for"];
        const ua = req.headers["user-agent"];
        const ul = req.headers["accept-language"];
        const dnt = req.headers["dnt"];

        d = new Date(); // time of logging
        d.toLocaleTimeString();

        info = { ip, ua, ul, dnt, referer, dt: "" + d }; // as a json5 object

        const db = await connectToDatabase();
        const collection = await db.collection(process.env.COLLECTION);
        await collection
            .insertOne(info)
            .then(() => {
                // just return the status as 200
                res.status(200).send();
            })
            .catch((err) => {
                throw err;
            });
    } catch (error) {
        // log the error so that owner can see it in vercel's function logs
        console.log(error);
        // return 500 for any error
        res.status(500).send();
    }
};
