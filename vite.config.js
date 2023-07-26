/** @return {import('vite').BuildOptions} */
function getBuildConfig() {
    if (process.env.BUILD === 'demo') {
        return {
            outDir: './public',
        }
    }

    return {
        lib: {
            entry: './src/main.ts',
            formats: ['es', 'amd'],
            fileName: 'main',
            name: 'lottiePlayer',
        }
    };
}

/** @type {import('vite').UserConfig} */
export default {
    base: './',
    build: {
        outDir: './dist',
        assetsDir: '',
        sourcemap: true,
        target: 'es2018',
        ...getBuildConfig()
    },
    worker: {
        format: process.env.BUILD === 'demo' ? 'es' : 'iife',
        rollupOptions: {
            output: {
                entryFileNames: '[name].js'
            }
        }
    }
}
