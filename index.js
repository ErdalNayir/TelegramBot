const { Telegraf, Markup, Scenes } = require("telegraf");
const { message } = require("telegraf/filters");

require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

var intervalId;

// /start komutu için
bot.start((ctx) => {
  ctx.reply(
    "Merhabe ben akıllı telegram robotuyum. Seni ve senin işlerini daha iyi yapmak için burdayım. "
  );
  ctx.reply("Daha fazla destek için /help komutunu kullanabilirsin  ");
});

// /help komutu için
bot.help((ctx) => {
  ctx.reply("Var olan tüm komut listesi aşağıdaki gibidir:\n\n");

  commands = [
    "/ovgu : Biraz övgü istiyorsan bunu kullan\n",
    "/hava : Güncel hava durumunu gösterir\n",
    "/sayac : 0 dan sonsuza kadar birer saniye ile sayar\n",
  ];

  var allCom = "";
  commands.forEach((cmd) => {
    allCom = allCom + cmd;
  });

  ctx.reply(allCom);

  ctx.replyWithMarkdownV2(
    "*Önemli Uyarı*: Eğer işlemleri hemen durdurmak istiyorsanız *dur* yazmanız yeterlidir"
  );
});

//Command açıklamaları
bot.telegram.setMyCommands([
  {
    command: "ovgu",
    description: "1000 kat övgüye hazır mısın?",
  },
  {
    command: "help",
    description: "Var olan komutları ve işlevlerini gösterir",
  },
  {
    command: "start",
    description: "Robot hakkında temel bilgileri öğrenin",
  },
  {
    command: "hava",
    description: "Güncel Hava durmunu gösterir",
  },
  {
    command: "sayac",
    description: "0'dan sonsuza kadar birer saniye aralıkla  sayar",
  },
]);

// commands
bot.command("ovgu", (ctx) => {
  const praises = [
    "Helal olsun sana",
    "Adamın dibisin",
    "Yakışıklılığın hakiki mi ?",
    "Erdal duymasın en sevdiğim kişi sensin :p",
  ];

  const leng = praises.length;

  const random = Math.floor(Math.random() * (leng - 0)) + 0;

  ctx.reply(praises[random]);
});

bot.command("sayac", (ctx) => {
  var i = 0;
  intervalId = setInterval(() => {
    ctx.reply(i.toString());
    i++;
  }, 1000);
});

// bot.on(message("sticker"), (ctx) => ctx.reply("👍"));

bot.hears("dur", (ctx) => {
  ctx.reply("Durduruldu...");
  clearInterval(intervalId);
});

// robotu başlatır
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
