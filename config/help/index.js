/**
 * @name 帮助命令配置
 * @author sui
 * @date 2023-08-29
 * */
import commandLineUsage from "command-line-usage";//帮助命令

const helpSections = [
  {
    header: 'create-easyest',
    content: '一个快速生成组件库搭建环境的脚手架',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        typeLabel: '{underline boolean}',
        description: '版本号',
      },
      {
        name: 'help',
        alias: 'h',
        typeLabel: '{underline boolean}',
        description: '帮助',
      }
    ],
  },
];

export const logHelp = () => {
  return commandLineUsage(helpSections);
}