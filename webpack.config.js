//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// export
module.exports = {
    // parcel index.hmtl
    // 파일을 읽어들이기 시작하는 진입점 설정 
    entry:'./js/main.js',   // webpack은 index.html을 진입점이 아닌 .js를 진입점으로 한다. 
    // 결과물(번들)을 반환하는 설정
    output:{
        // path:path.resolve(__dirname,'dist'),    //절대경로명시필요, __dirname은 현재 파일webpack.config.js의 경로
                                                //path.resolve는 현재경로와 dist를 합친다. 
        // filename:'main.js'                   
        // path:path.resolve(__dirname,'dist'), // 사실 path, filename은 자동으로 만들어짐 dist로 entry와 동이랗 filename만들어짐 
        // filename:'main.js', 
        clean:true  //output folder에 만들어진   것을 제거 
    },
    module:{
        rules:[
            {
                test: /\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader', 
                    'sass-loader'
                ]
            }, 
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
            
        ]
    },
    // 번들링 후 결과물의 처리방식 등 다양한 플러그인들을 설정 
    plugins:[
        new HtmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            patterns:[
                { from: 'static'}
            ]
        })
    ],
    devServer:{
        host: 'localhost'
    }
}