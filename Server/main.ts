import { Hono } from "hono";
import { initializeApp, cert } from "firebase-admin/app";
import firebase from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

const app = new Hono();

import { config } from "https://deno.land/x/dotenv/mod.ts";
import { log } from "node:console";
await config({ export: true });

interface UserParse {
  username: string;
  email: string;
  uid: string;
}

const clientHost = "http://127.0.0.1:5173";

const firebaseApp = initializeApp({
  credential: cert("./eatassured-50fbd-firebase-adminsdk-fbsvc-3ba31069a7.json")
});

const db = getFirestore(firebaseApp);

app.get("/", (c) => {
  return c.text("Hello world!");
});

app.post("/user/create", async (c) => {
  console.log("Hello?");
  try {
    const { uid, username, email } = await c.req.json<UserParse>();
    const user = await db.collection("users").doc(uid).set({
        username: username,
        email: email,
        createdAt: new Date().toISOString(),
    });
    c.status(201);
    return c.json({ Status: "OK" });
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ Status: "Error", Error: e });
  }
});
Deno.serve(app.fetch);
