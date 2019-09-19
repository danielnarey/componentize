import pkg from './package.json';

export default [
  {
    input: 'index.js',
    external: [
      'dequal',
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  },
];