/**
 * @name 交互命令配置===项目配置
 * @author sui
 * @date 2023-08-29
 * */
import prompts from 'prompts';
import gitClone from '../../utils/gitClone.js';

const remoteList = {
  1: 'https://github.com/suidagang/vite-vue3-ts-less',
  2: 'https://github.com/suidagang/zrplus'
};

const promptsOptions = [
  {
    type: 'text',
    name: 'name',
    message: '请输入项目名称'
  },
  {
    type: 'select', //单选
    name: 'template',
    message: '请选择一个模板',
    choices: [
      { title: 'vue3标准项目', value: 1 },
      { title: 'vue3组件库', value: 2 }
    ]
  }
];

export const getUserInfo = async () => {
  const res = await prompts(promptsOptions);
  if (!res.name || !res.template) return;
  gitClone(`direct:${remoteList[res.template]}`, res.name, {
    clone: true
  });
};