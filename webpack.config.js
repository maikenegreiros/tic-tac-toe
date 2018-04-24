module.exports = {
    entry: {
        main: './resources/assets/ts/main.ts'
    },
    mode: "development",
    resolve: {
        extensions: ['.js','.ts']
    },
    output: {
        path: __dirname + "/public/js/",
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    watch: true
};
