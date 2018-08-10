var path = require('path');
module.exports = {
    mode:'development',
    entry: {    
    	app:['es6-shim','whatwg-fetch','./app/main.js']
    },
    output: {
        path: __dirname+'/public', 
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    },
    module: {
        rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
			,{
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
            }
            ,{
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            }
			,{
        		test: /\.pug$/,
        		loaders: [
							{
								loader: 'babel-loader',
								query: {
									presets: ['es2015']
								}	
							}
	        				,{ 
	        					loader:'ferrugemjs-loader'
	        					,options:{
									templateExtension:".pug"
								} 
							}
	        				,'pug-html-loader'
        				]
      		}
		]
    }
	,resolve: {
		extensions: ['.js','.pug']
		,alias:{    		
			'@':__dirname + '/app'
		}    
	}
}
