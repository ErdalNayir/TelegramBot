import bot from "./bot.js";
import { start, help } from "./botInitialCommands.js";
import { descriptions } from "./utils.js";
import { praise, counter, deleteMessages } from "./botCommands.js";
import { stopWorkingInterval } from "./botQuickActions.js";

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
