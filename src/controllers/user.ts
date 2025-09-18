import { CreateUser } from "@/@types/user";
import User from "@/models/user";
import { RequestHandler } from "express";

export const createUser: RequestHandler = async (req: CreateUser, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({ name, email, password });
  res.status(201).json({ newUser });
};
