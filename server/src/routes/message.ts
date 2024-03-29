import express from "express";
import { messageController } from "../controllers/message";

export default (router: express.Router) => {
  router.get("/messages/:roomId", messageController.getMessages);
  router.get("/chat-partners/:userId", messageController.getChatPartners);
};
