import run from './utils/run.js';
import { pkgPath } from '../utils/paths.js';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/cli`);
};
export default series(async () => publishComponent());
