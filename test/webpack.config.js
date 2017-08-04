
module.exports={
    entry:'./mocha.js',
    output:{
        filename:'boundle.js'
    },
    resolve:{
        extensions:['.js','.css','.json','.ts','.tsx','.scss']
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:['awesome-typescript-loader']
            }
            
        ]
        
    }
}