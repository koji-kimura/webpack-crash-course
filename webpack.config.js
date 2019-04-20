const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      // cssを指定する
      // 余計な記載が入っていたのが原因
      // loaderはタグ順に動く、後ろから順番に動く、まずスタイルの適応、その後でcssの適応が正しい
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  //documentrootの追加
  devServer: {
    contentBase: outputPath
  }
};
