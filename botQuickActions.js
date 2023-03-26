import bot from "./bot.js";
import { intervalId } from "./botCommands.js";

//stops all intervals
export const stopWorkingInterval = bot.hears("dur", (ctx) => {
  ctx.reply("Durduruldu...");
  clearInterval(intervalId);
});
