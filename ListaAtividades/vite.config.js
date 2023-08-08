import path from "path"

export default {
    root: path.resolve(__dirname, "src"),
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "src/index.html"),
                ex01: path.resolve(__dirname, "src/ex01.html"),
                ex02: path.resolve(__dirname, "src/ex02.html"),
                ex03: path.resolve(__dirname, "src/ex03.html"),
                ex04: path.resolve(__dirname, "src/ex04.html"),
                ex05: path.resolve(__dirname, "src/ex05.html")
            }
        }
    }
}
