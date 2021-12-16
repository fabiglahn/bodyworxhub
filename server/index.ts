import express from "express";
import { connectDatabase, getUserCollection } from "./database";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URI available");
}

// Get logged-in user
app.get("/api/users/:email", async (request, response) => {
  const userCollection = getUserCollection();
  const cursor = userCollection.find({ email: request.params.email });
  const allUsers = await cursor.toArray();
  response.send(allUsers[0]);
});

// Serve production bundle
app.use(express.static("dist"));

// LOGIN a user
app.post("/api/login", async (request, response) => {
  const { email, password } = request.body;

  const userCollection = getUserCollection();

  const existingUser = await userCollection.findOne({ email, password });
  if (existingUser) {
    response.setHeader("Set-Cookie", `email=${email}`);
    response.send(existingUser);
  } else {
    response
      .status(401)
      .send("Login failed. Check if email and password is correct");
  }
});

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })
);
