import express from "express";
// import path from "path";
import { connectDatabase, getUserCollection } from "./database";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URI available");
}

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);

// Get all users
app.get("/api/users", async (_request, response) => {
  const userCollection = getUserCollection();
  const cursor = userCollection.find();
  const allUsers = await cursor.toArray();
  response.send(allUsers);
});

app.get("/api/hello", (_request, response) => {
  response.json({ message: "Hello from server" });
});

// Serve production bundle
app.use(express.static("dist"));

// Handle client routing, return all requests to the app
/* app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "../dist/index.html"));
}); */

/* app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); */
