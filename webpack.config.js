const path = require('path');

module.exports = (env, argv) => {
    return {
        mode: env.production ? 'production' : 'development',
        devtool: env.production ? 'source-maps' : 'eval',
        entry: './src/runtime.js',
        output: {
            filename: '[name]-[hash].js',
            path: __dirname + '/dist',
            hashDigestLength: 3, //hash|chunkhash|contentHash 全局配置长度
            library: 'myLib',
            libraryTarget: 'umd',
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        module: {
            rules: [{
                test: /\.js$/,
                use: 'babel-loader',
            }],
        },
        // plugins: [
        //     new TerserPlugin({
        //         terserOptions: {
        //             compress: argv['optimize-minimize'] // 只有传入 -p 或 --optimize-minimize
        //         }
        //     })
        // ]
    };
};
