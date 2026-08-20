import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const client = new OpenAI({
  apiKey: OPENAI_KEY,
});

export default apiKey;
