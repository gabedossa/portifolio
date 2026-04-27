import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReactHooks from 'eslint-plugin-react-hooks'

export default tseslint.config(
  { ignores: ['dist'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...pluginReactHooks.configs['recommended-latest'].rules,
    },
  },
)
