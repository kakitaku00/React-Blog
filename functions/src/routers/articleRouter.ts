import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as serviceAccount from "../serviceAccountKey.json";

// typescriptでfirebase-adminを扱う http://ropupu-ropupu.hatenablog.com/entry/2019/02/19/212426
const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

admin.initializeApp({
  credential: admin.credential.cert(params),
  databaseURL: "https://react-blog-92a07.firebaseio.com",
});

const db = admin.firestore();
const router = express.Router();
const key = functions.config().articleservice.key;

function checkApiKey(req: express.Request, res: express.Response) {
  const request_key = req.get("x-api-key");
  if (key !== request_key) {
    res.status(400).send("Error: Bad Api key");
  }
}

router
  .route("/")
  .get(async (req, res) => {
    const posts: any[] = [];
    checkApiKey(req, res);
    try {
      const querySnapShot = await db.collection("posts").get();
      querySnapShot.forEach((doc) => {
        const post = doc.data();
        posts.push({
          id: doc.id,
          ...post,
        });
      });
      res.status(200).json({
        posts,
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: `Error getting document: ${error.message}` });
    }
  })
  .post(async (req, res) => {
    const articleData = req.body.articleData;
    checkApiKey(req, res);
    try {
      await db.collection("posts").add({
        ...articleData,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      res.status(200).json({ message: `Posting Complete` });
    } catch (error) {
      res.status(500).json({ message: `Error posting document: ${error}` });
    }
  });

router
  .route("/:id")
  .put(async (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;
    checkApiKey(req, res);
    try {
      await db.collection("posts").doc(id).update({
        title,
        body,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      res.status(200).json({ message: `Updated ID: ${id}` });
    } catch (error) {
      res.status(500).json({ message: `Put Failed` });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    checkApiKey(req, res);
    try {
      await db.collection("posts").doc(id).delete();
      res.status(200).json({ message: `Deleted ID： ${id}` });
    } catch (error) {
      res.status(500).json({ message: `Delete Failed` });
    }
  });

export default router;
