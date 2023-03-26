import bot from "./bot.js";
import { start, help } from "./src/bot commands/botInitialCommands.js";
import { descriptions } from "./utils.js";
import {
  praise,
  deleteMessages,
  counter,
} from "./src/bot commands/botCommands.js";
import { stopWorkingInterval } from "./src/bot commands/botQuickActions.js";

// INITIAL COMMANDS
start;
help;

// DESCRIPTIONS FOR COMMANDS
descriptions;

//COMMANDS
praise;
counter;
deleteMessages;

//QUICK ACTIONS
stopWorkingInterval;

//START THE BOT
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
