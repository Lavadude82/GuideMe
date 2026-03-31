import express from "express";
import mongoose from "mongoose";
import {MongooseUser} from "@repo/MongooseUser"

import { err, yay } from "@utils/c-log";
import { ErrType } from "@controllers/dto/ErrorDTO";

export default function (
  app: express.Application,
  database: mongoose.Connection,
) {
  // Handle API User Creation Request
  app.post("/api/v1/user/register", async (req, res) => {
    if(!req.body) return res.status(400).json("EMPTY_BODY" as ErrType)
    MongooseUser.create(req.body)
      .then((response) => {
        if (!response.success) {
          err("Failed to Create User | ", response.error);
          return res.status(400).json(response.error);
        }
        return res.status(201).json(response);
      })
      .catch((error) => {
        err("Error Creating User", error);
        return res.status(500).json({ type: "INTERNAL_SERVER_ERROR" });
      });
  });
}
