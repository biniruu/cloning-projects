/**
 * Documentation
 * {@link https://eslint.org/docs/latest/}
 */

module.exports = {
  env: { browser: true, es6: true, node: true },
  /**
   * Extends
   *
   * eslint:recommended : eslint 추천 rule set
   * plugin:@typescript-eslint/recommended : 타입스크립트 추천 룰셋
   * plugin:@typescript-eslint/recommended-requiring-type-checking
   * plugin:import/recommended : eslint-plugin-import 추천 rule set
   * plugin:import/typescript : eslint-plugin-import 플러그인
   * plugin:prettier/recommended : eslint-config-prettier 추천 rule set
   */
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      /**
       * Jest
       *
       * plugin:jest/recommended : eslint-plugin-jest 추천 rule set
       */
      extends: ['plugin:jest/recommended'],
      files: ['*.spec.js', '*.spec.ts', '*.test.js', '*.test.ts'],
      rules: {
        /**
         * Rules
         * {@link https://github.com/jest-community/eslint-plugin-jest#rules}
         */
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    /**
     * @typescript-eslint/parser
     * {@link https://typescript-eslint.io/architecture/parser}
     *
     * project : tsconfig.json 경로 설정. true로 설정하면 각 소스파일에서 가장 가까운 경로에 있는 tsconfig.json 파일을 자동으로 찾는다.
     */
    project: true,
  },
  plugins: ['pug'],
  root: true, // 현재 설정 파일이 root임을 명시하는 옵션. true로 설정하면 상위 설정 파일 찾기를 여기서 멈춘다.
  rules: {
    /**
     * Rules reference
     * {@link https://eslint.org/docs/latest/rules}
     *
     * array-bracket-spacing : 대괄호 안에서 간격 허용 여부
     * camelcase : 카멜 케이스 작명 방식 강제
     * comma-dangle : trailing commas 사용 여부
     * computed-property-spacing : 계산된 인자(obj[property]) 표시 시 괄호 안에 공백문자 허용 여부
     * eqeqeq : 일치 연산자(===) 사용 강제. 동등 연산자(==) 사용 금지
     * generator-star-spacing : 제네레이터 함수에서 별표의 위치를 강제
     * new-cap : 'new' 연산자로 인스턴스 생성 시 constructor 함수명의 첫 글자를 대문자로 강제
     * no-array-constructor : Array() 생성자에 배열 리터럴 생성법을 사용해서 배열 생성 금지
     * no-console : 콘솔 사용 금지
     * no-debugger : debugger 사용 금지
     * no-duplicate-imports : 동일한 모듈에서 import를 여러 번 할 때 import문을 한 번만 사용하도록 강제. e.g. import { apple, banana } from 'fruits'
     * no-extra-semi : 불필요한 세미콜론 사용 금지
     * no-inner-declarations : nested block에서 변수 또는 함수 선언 금지
     * no-multiple-empty-lines : 여러 줄 공백 금지
     * no-nested-ternary : 중첩 삼항 연산자 금지
     * no-new-object : new Object로 객체 생성 금지
     * no-undef : 정의하지 않은 전역 변수는 /✱ global ... ✱/ 주석에 명시해야 사용 가능하도록 강제
     * no-underscore-dangle : 식별자 뒤에 언더스코어를 붙이지 못하도록 강제
     * no-unused-vars : 사용하지 않는 변수 금지
     * no-useless-escape : 불필요한 escape 문자 사용 금지. extends에 eslint:recommended를 설정했을 때 동작한다
     * no-var : var로 변수 선언 금지
     * object-curly-spacing : 중괄호 안에 간격 삽입. objectsInObjects: false 옵션은 사용할 수 없음. prettier의 bracketSpacing에 의해 덮어쓰기 되기 때문
     * prefer-const : 재할당이 이루어지지 않는 변수에 let을 사용했을 경우 const로 변경하도록 강제
     * prefer-rest-params : 함수의 parameter에서 arguments 객체 대신 rest parameter를 사용하도록 강제. e.g. function (...args) {}
     * quotes : 따옴표를 작은따옴표, 큰따옴표, 백틱 중 한 가지만 사용하도록 강제
     * sort-imports : import 정렬. ignoreDeclarationSort는 항상 true로 할 것. false로 하면 import 정렬 관련 경고가 발생하는데, 이 경고를 해결할 방법이 없다.
     * space-before-function-paren : 함수 선언 시 함수명과 괄호 사이에 간격 추가를 강제
     */
    'array-bracket-spacing': 'warn',
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': ['warn', 'always-multiline'],
    'computed-property-spacing': ['warn', 'never', { enforceForClassMembers: false }],
    eqeqeq: 'error',
    'generator-star-spacing': ['warn', 'after'],
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-nested-ternary': 'warn',
    'no-new-object': 'warn',
    'no-undef': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-vars': ['error', { args: 'after-used' }],
    'no-useless-escape': 'warn',
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'sort-imports': [
      'warn',
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    /**
     * Typescript-eslint supported rules
     * {@link https://typescript-eslint.io/rules/}
     *
     * ban-ts-comment : 설명을 추가하는 조건으로 @ts-expect-error, @ts-ignore, @ts-nocheck, @ts-check 주석을 허용
     * no-explicit-any
     * no-floating-promises
     * no-unsafe-argument
     * no-unsafe-assignment : any 타입 사용 시 알림을 띄움
     * no-unsafe-call
     * no-unsafe-member-access
     * no-unused-vars : no-unused-vars와 동일. no-unused-vars를 비활성화 한 후에 사용할 것
     * no-var-requires
     * restrict-plus-operands
     * restrict-template-expressions
     * space-before-function-paren : *공식 문서에서는 사용하지 말 것을 적극 권고한다* space-before-function-paren과 동일. space-before-function-paren을 비활성화 한 후에 사용할 것
     */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/space-before-function-paren': [
      'warn',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    /**
     * Eslint-config-prettier options
     * {@link https://github.com/prettier/eslint-plugin-prettier#options}
     *
     * 공식 문서에서는 옵션 설정을 추천하지 않는다. prettier-vscode 확장 프로그램이 .prettierrc 파일을 읽고 이곳에 있는 옵션은 무시하는데, 이 때문에 예상치 못한 문제가 발생할 수도 있기 때문.
     *
     * prettier : 이곳에 설정한 옵션은 .prettier 파일에 있는 옵션을 덮어쓴다.
     */
    'prettier/prettier': 'warn',
    /**
     * Eslint-plugin-import rules
     * {@link https://github.com/import-js/eslint-plugin-import#rules}
     *
     * no-unresolved : import한 파일/모듈이 unresolved 되는 일이 없도록 방지
     * newline-after-import : import 다음에 한 줄 띄기
     * order : import 자동 정렬. warnOnUnassignedImports는 항상 default값(false)로 놔둘 것. true로 할 경우 import 정렬 관련 경고가 발생하는데, 이 문제는 import/order 또는 sort-import 설정만으로는 해결 불가
     */
    'import/no-unresolved': 'off',
    'import/newline-after-import': 'warn',
    'import/order': [
      'warn',
      {
        alphabetize: { caseInsensitive: true, order: 'asc', orderImportKind: 'asc' },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    /**
     * Jest version setting
     * {@link https://github.com/jest-community/eslint-plugin-jest#jest-version-setting}
     *
     * fetch the installed version of Jest
     */
    jest: {
      version: require('jest/package.json').version,
    },
  },
}
