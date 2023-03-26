import bot from "../../bot.js";
import { commands } from "../../utils.js";

export const start = bot.start((ctx) => {
  ctx.reply(
    "Merhabe ben akıllı telegram robotuyum. Seni ve senin işlerini daha iyi yapmak için burdayım. "
  );
  ctx.reply("Daha fazla destek için /help komutunu kullanabilirsin  ");
});

// /help command
export const help = bot.help((ctx) => {
  var allCom = "";
  commands.forEach((cmd) => {
    allCom = allCom + cmd;
  });

  ctx.reply(allCom);

  ctx.replyWithMarkdownV2(
    "*Önemli Uyarı*: Eğer işlemleri hemen durdurmak istiyorsanız *dur* yazmanız yeterlidir"
  );
});
