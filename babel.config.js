/** @type {import('@babel/core').TransformOptions} */
module.exports = {
    "presets": [
        "@babel/preset-typescript",
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-object-assign",
        "@babel/plugin-proposal-object-rest-spread"
      ]
};
