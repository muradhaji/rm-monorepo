import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    rules: {
      '@angular-eslint/template/prefer-control-flow': 'warn',
      '@angular-eslint/template/attributes-order': [
        'error',
        {
          alphabetical: false,
          order: [
            'STRUCTURAL_DIRECTIVE',
            'TEMPLATE_REFERENCE',
            'INPUT_BINDING',
            'OUTPUT_BINDING',
            'TWO_WAY_BINDING',
            'ATTRIBUTE_BINDING',
          ],
        },
      ],
    },
  },
];
