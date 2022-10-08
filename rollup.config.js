import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: './src/index.tsx',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external(),
      resolve(),
      terser(),
      typescript(),
      postcss({
        config: {
            path: './postcss.config.js'
        },
        extensions: ['.css'],
        extract: false
      }),
      postcss({
        config: {
            path: './postcss.config.js'
        },
        use: {               
            less: { javascriptEnabled: true }
        },
        extensions: ['.less'], // Looks like this still processes CSS despite this line.
        extract: false         
      }),

    ]
  }
];