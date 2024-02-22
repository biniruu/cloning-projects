// const { useRecoilCallback } = require('recoil')

module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  root: false,
  rules: {
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['Input'],
        depth: 1,
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      'warn',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'warn',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['button', 'menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],
    'react/destructuring-assignment': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    // 'react/jsx-curly-spacing': ['warn', { when: 'always', children: true, objectLiterals: 'never' }], // prettier와 충돌하여 사용할 수 없음
    'react/jsx-key': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowFunctions: true,
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-direct-mutation-state': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unused-state': 'warn',
    'react/prop-types': 'off',
    'react/self-closing-comp': ['warn', { component: true, html: false }],
    'react/static-property-placement': ['error', 'static public field'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      // {
      //   additionHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
      // },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
