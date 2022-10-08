import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import sucrase from '@rollup/plugin-sucrase'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
      },
    ],
    plugins: [
      typescript({
        tsconfig: "tsconfig.json",
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external(),
      resolve(),
      terser(),
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
      sucrase({
        exclude: ['node_modules/**'],
        transforms: ['typescript', 'jsx'],
      }),
    ]
  },
];