import { Schema, model } from "mongoose";
import {v4 as UUIDv4} from "uuid";
export const Token = new Schema({
  name: { type: String, required: true, default:"Unknown Device" },
  id: {type: String, required:true},
  token: { type: String, required: true },
  userId: { type: String, required: true },
  lastUsed: { type: Number, required: true},
  createdAt: { type: Number, required: true },
  expiry: {
    type: Number,
    required: true
  }, //7 Days
});

export const TokenModel = model("Tokens", Token);
