const path =  require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js','.ts']
    },
    module: {
        rules:[
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]

    }

}