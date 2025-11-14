import { Router } from "express";
import { handlePaymentInstruction } from "../controllers/payment.controllers";

const router = Router();

router.post("/", handlePaymentInstruction);

export default router;
