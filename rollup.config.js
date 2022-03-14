import { babel } from '@rollup/plugin-babel';

const config = {
    input: 'src/event-system-creator.mjs',
    output: {
        file: 'index.js',
        format: 'cjs',
        exports: 'default',
    },
    plugins: [babel({ babelHelpers: 'bundled' })],
};

export default config;
