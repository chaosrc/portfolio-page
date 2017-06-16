const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
    entry:'./src/app.js',
    output:{
        filename:'bundle.js'
    },
    devtool:"source-map",
    resolve:{
        extensions:['.js','.css','.json','.ts','.tsx','.scss']
    },
    module:{
        rules:[{
            test:/\.scss$/,
            use:ExtractTextPlugin.extract({
                use:['css-loader','sass-loader']
            })},
            {
                test:/\.tsx?$/,
                use:['awesome-typescript-loader']
            }
            
        ]
        
    },
    plugins:[
            new ExtractTextPlugin('style.css')
        ]

}