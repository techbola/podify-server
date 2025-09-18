import { createUser } from "@/controllers/user";
import { validate } from "@/middleware/validator";
import { createUserSchema } from "@/utils/validationSchema";
import { Router } from "express";

const router = Router();

router.post("/register", validate(createUserSchema), createUser);

export default router;
