import commandLineArgs from "command-line-args";
import { readFile } from "fs/promises";
import { logHelp } from './config/help/index.js';//帮助命令配置 -help或者-h
import { getUserInfo }from './config/projectConfig/index.js'


const pkg = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);

//配置命令参数
const optionDefinitions = [{ name: "version", alias: "v", type: Boolean },{ name: "help", alias: "h", type: Boolean }];
const options = commandLineArgs(optionDefinitions);

if (options.version) {
  console.log(`v${pkg.version}`);
}

//帮助命令
if (options.help) {
  console.log(logHelp())
}

//空对象就表示不带命令，执行选择
if (options && JSON.stringify(options) == "{}") {
  getUserInfo();
}
