import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import sucrase from '@rollup/plugin-sucrase';

export default [
  {
    input: './src/index.tsx',
    output: {
        dir: 'dist',
        format: 'cjs',
        dir: "dist",
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external(),
      resolve(),
      terser(),
      typescript({
        tsconfig: "tsconfig.json",
      }),
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
  },
  {
    input: './src/types/index.d.ts',
    output: {
        dir: 'dist/types',
        format: 'cjs',
        dir: "dist",
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external(),
      resolve(),
      terser(),
      sucrase({
        exclude: ['node_modules/**'],
        transforms: ['typescript', 'jsx'],
      }),
      typescript({
        tsconfig: "tsconfig.json",
      }),
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