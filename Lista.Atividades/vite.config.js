import path from 'path'

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'src/index.html'),
          ex01: path.resolve(__dirname, 'src/ex01/index.html'),
        }
    },
  }
}