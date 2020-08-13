module.exports = {
    env: {
        commonjs: true,
        es2020: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        'max-len': [
            'error',
            150,
        ],
        'import/no-unresolved': 'off',
        'no-useless-constructor': 'off',
        'no-unused-vars': 'off',
        'import/extensions': 'off',
        'no-empty-function': 'off',
        'no-underscore-dangle': 'off',
        indent: [
            'error',
            4,
        ],
        'arrow-body-style': 'off',
    },
};
