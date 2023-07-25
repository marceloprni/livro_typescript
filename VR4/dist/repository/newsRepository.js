"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const newShema_1 = require("../models/newShema");
exports.NewsRepository = mongoose_1.default.model("news", newShema_1.NewsSchema);
