import path from "path"

export default {
    root: path.resolve(__dirname, "src"),
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "src/index.html"),
                listaDiciplinas: path.resolve(__dirname, "src/lista-disciplinas.html"),
                posts: path.resolve(__dirname, "src/posts.html"),
                manipulandoNodeLists: path.resolve(__dirname, "src/manipulando-nodelists.html"),
            }
        }
    }
}
