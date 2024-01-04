const data = [
    {
        min: 0,
        max: 18.4,
        classification: "Menor que 18,5",
        info: "Magreza",
        obesity: "0",
        infoClass:"low",
    },
    {
        min: 18.5,
        max: 24.9,
        classification: "Entre 18,5 e 24,9",
        info: "Normal",
        obesity: "0",
        infoClass:"good",
    },
    {
        min: 25.0,
        max: 29.9,
        classification: "Entre 25,0 e 29,9",
        info: "Sobrepeso",
        obesity: "I",
        infoClass:"medium",
    },
    {
        min: 30.0,
        max: 39.9,
        classification: "Entre 30,0 e 39,9",
        info: "Obesidade",
        obesity: "II",
        infoClass:"medium",
    },
    {
        min: 40.0,
        max: 99.0,
        classification: "Maior que 40,0",
        info: "Obesidade grave",
        obesity: "III",
        infoClass:"high",
    },
]

export { data }