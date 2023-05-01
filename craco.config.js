const CracoAlias = require("craco-alias");

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: "tsconfig",
				tsConfigPath: "tsconfig.paths.json",
			},
		},
	],
};

// https://github.com/dilanx/craco/issues/429
// ESmodule 이슈 있음, CommonJs 사용

// export default {
// 	plugins: [
// 		{
// 			plugin: CracoAlias,
// 			options: {
// 				source: 'tsconfig',
// 				tsConfigPath: 'tsconfig.paths.json',
// 			},
// 		},
// 	],
// };
