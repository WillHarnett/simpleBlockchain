module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        'comma-dangle': ['error', 'never'],
        'object-shorthand': ['error', 'never'],
        'no-underscore-dangle': ['error', { allow: ['_id'] }]
    },
    globals: {
        EventSource: true
    }
};
