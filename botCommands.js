import bot from "./bot.js";
import { praises } from "./utils.js";

export var intervalId; //it will store working interval

//  /ovgu
export const praise = bot.command("ovgu", (ctx) => {
  const leng = praises.length;
  const random = Math.floor(Math.random() * (leng - 0)) + 0;

  ctx.reply(praises[random]);
});

//  /sayac
export const counter = bot.command("sayac", (ctx) => {
  var i = 0;
  intervalId = setInterval(() => {
    ctx.reply(i.toString());
    i++;
  }, 1000);
});

//  /sil
export const deleteMessages = bot.command("sil", async (ctx) => {
  let i = 0;
  while (true) {
    try {
      await ctx.deleteMessage(ctx.message.message_id - i++);
    } catch (e) {
      break;
    }
  }
});
