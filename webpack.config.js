const path = require('path');

module.exports = {
  
  entry: [
        './src/index.js'        
   ],

	output: {
		// filename: '[name].bundle.js',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                'style-loader',
                'css-loader',
                 "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
       ]
	},
};
