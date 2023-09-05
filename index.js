import bot from "./bot.js";
import { start, help } from "./src/bot commands/botInitialCommands.js";
import { descriptions } from "./utils.js";
import {
  praise,
  deleteMessages,
  counter,
  getPopularSearchResult,
} from "./src/bot commands/botCommands.js";
import { stopWorkingInterval } from "./src/bot commands/botQuickActions.js";
import { chatWithGpt } from "./src/bot commands/botGptCommand.js";

// INITIAL COMMANDS
start;
help;


//COMMANDS
praise;
counter;
deleteMessages;
getPopularSearchResult
chatWithGpt


// DESCRIPTIONS FOR COMMANDS
descriptions;



//QUICK ACTIONS
stopWorkingInterval;

//START THE BOT
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
