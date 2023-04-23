import json5 from 'json5';
import fs from 'fs';
const getRigDeps = () => {
	let rigConfig = json5.parse(fs.readFileSync('./package.rig.json5').toString());
	return Object.keys(rigConfig.dependencies);
}
const getRigGlobs = () => {
	let rigConfig = json5.parse(fs.readFileSync('./package.rig.json5').toString());
	return Object.keys(rigConfig.dependencies).map(dep=>`!**/${dep}/**`);
}
export default {
	getPkgs: getRigDeps,
	getRigDeps,
	getRigGlobs
}