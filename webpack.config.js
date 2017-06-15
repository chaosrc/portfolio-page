const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
    entry:'./src/app.js',
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test:/\.scss$/,
            use:ExtractTextPlugin.extract({
                use:['css-loader','sass-loader']
            })
        }],
        
    },
    plugins:[
            new ExtractTextPlugin('style.css')
        ]

}