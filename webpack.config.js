module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // Hem .js hem de .jsx dosyalarını işlemeye yönelik kural
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'] // .js ve .jsx uzantılarını tanıyacak
    }
  };