const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
   module: {
     rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
     },
     {
      test: /\.(sa|sc|c)ss$/,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",  
        // Translates CSS into CommonJS
        // 'css-loader',
       // { loader:
       "css-loader", //options: { importLoaders:1}},
	     // Deal with flex Compatibility
       {
        loader: "postcss-loader",
        options: {
          ident: 'postcss',
          plugins: [
            require('autoprefixer')({
              'browsers': ['> 1%', 'last 2 versions']
            }),
          ]
        }
      },
        // Compiles Sass to CSS
         "sass-loader"
      ],
   },
   ]
  }
};


