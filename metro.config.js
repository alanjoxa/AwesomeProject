/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const Resolver = require('metro-resolver');
module.exports = {
watch : false,
resolver : {
  resolveRequest: (context, realModuleName, platform, moduleName) => {
    if(realModuleName.includes("xml2js")) {
      console.log("---CUSTOM RESOLVER--", [realModuleName, platform, moduleName]);
    }
    const localContext = Object.assign({}, context, {resolveRequest : false});
  	return Resolver.resolve(localContext, moduleName || realModuleName, platform);
  },
},
transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
