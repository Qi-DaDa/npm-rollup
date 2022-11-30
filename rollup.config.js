import { babel } from '@rollup/plugin-babel'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: './src/Loading/index.jsx', // 入口文件
  // {filname: 'index.esm.js', dir: 'dist/es/', format: 'esm'},
  output: {
    name: 'bulid', // 出口文件
    file: 'bulid/index.js', // 出口文件
    format: 'umd', // 输出的模块语法格式   // esm
  },
  plugins: [
    babel({
      exclude: 'node_modules', // 防止打包node_modules下的文件
      runtimeHelpers: true,   // 使plugin-transform-runtime生效
    }),
    serve({
      port: 8020,  //端口号，默认10001
      contentBase: './public',  //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
    }),
    // livereload('src')   //watch dist目录，当目录中的文件发生变化时，刷新页面
  ],
  external: [// 忽略文件
    'react',
    'react-dom',
    '/node_modules/'
  ],
}