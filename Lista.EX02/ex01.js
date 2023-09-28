const valoresMonetarios = [12.3456, 67.8901, 45.6789, 98.7654, 23.4567];

const vet = valoresMonetarios.map((valores) => {
    return valores.toFixed(2)
})
console.log(vet)