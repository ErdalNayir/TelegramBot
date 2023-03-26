import bot from "./bot.js";

//"COMMAND DESCRIPTION FOR /help"
export const commands = [
  "/ovgu : Biraz övgü istiyorsan bunu kullan\n",
  "/hava : Güncel hava durumunu gösterir\n",
  "/sayac : 0 dan sonsuza kadar birer saniye ile sayar\n",
  "/sil : Bu chatteki bütün mesajları siler\n",
];

//DESCRIPTIONS FOR COMMANDS
export const descriptions = bot.telegram.setMyCommands([
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
  {
    command: "sil",
    description: "Bütün mesajları siler",
  },
]);

//PRAISES FOR /ovgu
export const praises = [
  "Helal olsun sana",
  "Adamın dibisin",
  "Yakışıklılığın hakiki mi ?",
  "Erdal duymasın en sevdiğim kişi sensin :p",
];
