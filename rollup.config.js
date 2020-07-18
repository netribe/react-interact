
import buble from '@rollup/plugin-buble'

export default {
    input: 'src/ReactInteract.jsx',
    output: {
        file: 'dist/ReactInteract.js',
        format: 'cjs',
        exports: "default"
    },
    plugins: [buble()],
    external: ['react', 'react-dom']
};