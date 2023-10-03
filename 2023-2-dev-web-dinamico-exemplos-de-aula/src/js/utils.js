export function formatarData(data) {
    let dataFormatar = new Date(data)
    return Intl.DateTimeFormat('pt-BR', {
        dateStyle: "long",
        timeZone: "America/Campo_Grande"
    }).format(dataFormatar)
}
