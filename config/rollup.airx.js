/* eslint-disable import/no-extraneous-dependencies */
import babel from 'rollup-plugin-babel';
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
  plugins: [babel()]
};
