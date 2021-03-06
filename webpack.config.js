"use strict";

const path = require("path");
const webpack = require("webpack");
const { CheckEsVersionPlugin } = require("@bitjourney/check-es-version-webpack-plugin");
const _ = require("lodash");

const config = {
  mode: "production",

  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist.es5"),
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js", ".json", ".wasm"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.dist.webpack.json",
        },
      },
    ],
  },

  plugins: [
    new CheckEsVersionPlugin({
      esVersion: 5, // for IE11 support
    }),
  ],
  externals: {
    "base64-js": {
      commonjs: "base64-js",
    },
  },

  optimization: {
    noEmitOnErrors: true,
    minimize: false,
  },

  // We don't need NodeJS stuff on browsers!
  // https://webpack.js.org/configuration/node/
  node: false,

  devtool: "source-map",
};

module.exports = [
  // default bundle does not includes wasm
  ((config) => {
    config.output.filename = "msgpack.js";
    config.plugins.push(
      new webpack.DefinePlugin({
        // The default bundle does not includes WASM
        "process.env.MSGPACK_WASM": JSON.stringify("never"),
        "process.env.WASM": JSON.stringify(null),
      }),
      new webpack.IgnorePlugin(/\.\/dist\/wasm\/msgpack\.wasm\.js$/),
    );
    return config;
  })(_.cloneDeep(config)),

  // +wsm
  ((config) => {
    config.output.filename = "msgpack+wasm.js";
    config.plugins.push(
      new webpack.DefinePlugin({
        // The default bundle does not includes WASM
        "process.env.MSGPACK_WASM": JSON.stringify(null),
        "process.env.WASM": JSON.stringify(null),
      }),
    );
    return config;
  })(_.cloneDeep(config)),
];
