// import { MongoClient, MongoClientOptions } from "mongodb";

// const uri = process.env.MONGODB_URI as string;
// const options: MongoClientOptions = {};

// if (!uri) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable in .env.local"
//   );
// }

// // Use a global cached client in development to prevent
// // exhausting connections during hot-reload
// declare global {
//   // eslint-disable-next-line no-var
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     const client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production, create a fresh client per module load
//   const client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;



import { MongoClient, MongoClientOptions } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const options: MongoClientOptions = {};

function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable in .env.local"
    );
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  }

  const client = new MongoClient(uri, options);
  return client.connect();
}

// Export a getter function instead of a top-level promise
// so the URI check only runs when a request actually arrives
const clientPromise = {
  get: getClientPromise,
};

export default clientPromise;