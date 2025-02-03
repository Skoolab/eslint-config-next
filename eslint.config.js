import { FlatCompat } from '@eslint/eslintrc'
import skoolabConfig from '@skoolab/eslint-config'

const compat = new FlatCompat()

export default [
  ...skoolabConfig,
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  {
    files: ['**/*.ts'],
    rules: {
      'custom/no-direct-return': 'off',
    },
  },
]
