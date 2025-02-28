import express from "express";
import db from "@repo/db/client";
const app = express();

app.get("/", (req, res) => {
  res.send("Bank Webhook");
});

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
  // TODO: Zod Validation to be added
  // TODO: HDFC bank should ideally send us a secret so we know this is sent by them
  const paymentInformation: {
    token: string;
    userId: string;
    amount: string;
  } = {
    token: req.body.token,
    userId: req.body.uid,
    amount: req.body.amount,  
  };

  try {
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: Number(paymentInformation.userId),
        },
        data: {
          amount: {
            // You can also get this from your db
            increment: Number(paymentInformation.amount),
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);
    res.json({
      message: "Captured",
    });
  } catch (e) {
    console.log(e);
    res.status(411).json({
      message: "Error while processing webhook",
    });
  }
  //   TODO: Update the balance in db, Using Prisma Transactions - that is transactions should get accepted or rejected simultaneously.
});

app.listen(3003);
