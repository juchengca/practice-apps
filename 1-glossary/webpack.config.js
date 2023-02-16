require("dotenv").config();
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.join(__dirname, '/client/src/index.jsx'),

    output: {
        path: path.join(__dirname, '/client/dist'),
        filename: 'bundle.js'
    },

    mode: 'development',

    devServer: {
      port: "4000",
      open: true
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './client/src/index.html'
        })
    ],

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    module: {
        rules: [
            {
              test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                }
            }
        ]
    }

}

/*
const path = require("path");


  What should go here?  Great question!

  Before you go to documentation, verify which version of webpack
  you are using.

  Use this config to copy production versions of your
  index.html and styles.css to dist folder upon build

module.exports = {};
*/