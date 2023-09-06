import { getChatGPTResponse } from "../services/gptServices/gptServices.js";
import bot from "../../bot.js";

export const chatWithGpt = bot.command("chatbot", async (ctx) => {
    const message = ctx.message.text;
    const searchtring = message.split("chatbot")[1]; // get search
  
    getChatGPTResponse(searchtring)
      .then((data) => {
        const results = data;
        
        ctx.reply(results)
       
      })
      .catch((err) => {
        console.log(err.message);
      });
  });