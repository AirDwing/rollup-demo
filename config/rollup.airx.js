/* eslint-disable import/no-extraneous-dependencies */
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import path from 'path';

export default {
  input: path.resolve(__dirname, '../src/index.js'),
  output: {
    file: path.resolve(__dirname, '../dist/airx.js'),
    format: 'cjs',
    sourcemap: true
  },
  external: [
    path.resolve(__dirname, '../config')
  ],
  plugins: [
    nodeResolve({
      jsnext: true
    }),
    commonjs({
      exclude: ['node_modules/**', 'src/**']
    }),
    babel()
  ]
};
