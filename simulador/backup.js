/** @format */

function calcularRazao() {
    if (document.querySelector("#equipe").value == "hunter") {
        let meta = document.querySelector("#meta").value;

        let Jun = {
            valorMeta: 1800,
            bandaLarga: 2,
            avancada: 1,
            ha: 10,
            aceleradorBanda: 3,
            aceleradorHa: 10,
            aceleradorVada: 1,
            comissao: [0.1, 0.2, 0.3, 0.35],
            premiacao: [0.15, 0.25, 0.35, 0.5],
            acelerador: [0, 0, 0.1, 0.2],
        };

        let Ple = {
            valorMeta: 2500,
            bandaLarga: 2,
            avancada: 1,
            ha: 10,
            aceleradorBanda: 5,
            aceleradorHa: 15,
            aceleradorVada: 1,
            comissao: [0.1, 0.2, 0.3, 0.35],
            premiacao: [0.3, 0.35, 0.4, 0.65],
            acelerador: [0, 0, 0.1, 0.2],
        };

        let Sen = {
            valorMeta: 3000,
            bandaLarga: 2,
            avancada: 1,
            ha: 10,
            aceleradorBanda: 6,
            aceleradorHa: 20,
            aceleradorVada: 1,
            comissao: [0.1, 0.2, 0.3, 0.35],
            premiacao: [0.4, 0.5, 0.65, 0.85],
            acelerador: [0, 0, 0.1, 0.2],
        };

        if (meta == "jun") {
            metaUtilizavel = Jun;
        } else if (meta == "ple") {
            metaUtilizavel = Ple;
        } else {
            metaUtilizavel = Sen;
        }

        let valVendido = document.getElementById("y").value;
        let pp = document.getElementById("z").value;
        let bl = document.querySelector("#bl").value;
        let vada = document.querySelector("#vada").value;
        let ha = document.querySelector("#ha").value;

        console.log(metaUtilizavel);
        console.log(metaUtilizavel.acelerador[0]);
        console.log(document.querySelector("#bl").value);
        console.log(document.querySelector("#vada").value);

        if (meta == "") {
            // document.getElementById(
            //     "demo"
            // ).innerHTML = `Por favor, escolha um range.`;
            document.querySelector(
                ".modal-body"
            ).innerHTML = `Por favor, escolha um range.`;
            // alert(`Por favor, escolha um range.`)
        } else {
            if (
                bl >= metaUtilizavel.bandaLarga &&
                vada >= metaUtilizavel.avancada &&
                ha >= metaUtilizavel.ha
            ) {
                if (
                    valVendido - pp >= metaUtilizavel.valorMeta * 0.8 &&
                    valVendido - pp <= metaUtilizavel.valorMeta * 0.89
                ) {
                    // document.getElementById(
                    //     "demo"
                    // ).innerHTML = `Sua comissão é R$${
                    //     valVendido * (metaUtilizavel.comissao[0]+metaUtilizavel.premiacao[0])
                    // }, sendo R$${valVendido * metaUtilizavel.comissao[0]} de comissão, R$${valVendido * metaUtilizavel.premiacao[0]} de premiação e R$${valVendido * metaUtilizavel.acelerador[0]} de acelerador!`;

                    document.querySelector(
                        ".modal-body"
                    ).innerHTML = `Sua comissão é R$${(
                        valVendido *
                        (metaUtilizavel.comissao[0] +
                            metaUtilizavel.premiacao[0])
                    ).toFixed(2)}, sendo R$${(
                        valVendido * metaUtilizavel.comissao[0]
                    ).toFixed(2)} de comissão, R$${(
                        valVendido * metaUtilizavel.premiacao[0]
                    ).toFixed(2)} de premiação e R$${(
                        valVendido * metaUtilizavel.acelerador[0]
                    ).toFixed(2)} de acelerador!`;

                    // alert(`Sua comissão é R$${
                    //     valVendido * (metaUtilizavel.comissao[0]+metaUtilizavel.premiacao[0])
                    // }, sendo R$${valVendido * metaUtilizavel.comissao[0]} de comissão, R$${valVendido * metaUtilizavel.premiacao[0]} de premiação e R$${valVendido * metaUtilizavel.acelerador[0]} de acelerador!`)
                } else if (
                    valVendido - pp >= metaUtilizavel.valorMeta * 0.9 &&
                    valVendido - pp <= metaUtilizavel.valorMeta * 0.99
                ) {
                    // document.getElementById(
                    //     "demo"
                    // ).innerHTML = `Sua comissão é R$${
                    //     valVendido * (metaUtilizavel.comissao[1]+metaUtilizavel.premiacao[1])
                    // }, sendo R$${valVendido * metaUtilizavel.comissao[1]} de comissão, R$${valVendido * metaUtilizavel.premiacao[1]} de premiação e R$${valVendido * metaUtilizavel.acelerador[1]} de acelerador!`;

                    document.querySelector(
                        ".modal-body"
                    ).innerHTML = `Sua comissão é R$${
                        valVendido *
                        (
                            metaUtilizavel.comissao[1] +
                            metaUtilizavel.premiacao[1]
                        ).toFixed(2)
                    }, sendo R$${(
                        valVendido * metaUtilizavel.comissao[1]
                    ).toFixed(2)} de comissão, R$${(
                        valVendido * metaUtilizavel.premiacao[1]
                    ).toFixed(2)} de premiação e R$${(
                        valVendido * metaUtilizavel.acelerador[1]
                    ).toFixed(2)} de acelerador!`;

                    // alert(`Sua comissão é R$${
                    //     valVendido * (metaUtilizavel.comissao[1]+metaUtilizavel.premiacao[1])
                    // }, sendo R$${valVendido * metaUtilizavel.comissao[1]} de comissão, R$${valVendido * metaUtilizavel.premiacao[1]} de premiação e R$${valVendido * metaUtilizavel.acelerador[1]} de acelerador!`)
                } else if (
                    valVendido - pp >= metaUtilizavel.valorMeta * 1 &&
                    valVendido - pp <= metaUtilizavel.valorMeta * 1.19
                ) {
                    // document.getElementById(
                    //     "demo"
                    // ).innerHTML = `Sua comissão é R$${
                    //     valVendido * (metaUtilizavel.comissao[2]+metaUtilizavel.premiacao[2])
                    // }, sendo R$${valVendido * metaUtilizavel.comissao[2]} de comissão, R$${valVendido * metaUtilizavel.premiacao[2]} de premiação e R$${valVendido * metaUtilizavel.acelerador[2]} de acelerador!`;
                    if (
                        metaUtilizavel.aceleradorBanda <= bl &&
                        metaUtilizavel.aceleradorHa <= ha &&
                        metaUtilizavel.aceleradorVada <= vada
                    ) {
                        document.querySelector(
                            ".modal-body"
                        ).innerHTML = `Sua comissão é R$${(
                            valVendido *
                                (metaUtilizavel.comissao[2] +
                                    metaUtilizavel.premiacao[2]) +
                            valVendido *
                                (metaUtilizavel.comissao[2] +
                                    metaUtilizavel.premiacao[2]) *
                                metaUtilizavel.acelerador[2]
                        ).toFixed(2)}, sendo R$${(
                            valVendido * metaUtilizavel.comissao[2]
                        ).toFixed(2)} de comissão, R$${(
                            valVendido * metaUtilizavel.premiacao[2]
                        ).toFixed(2)} de premiação e R$${(
                            valVendido *
                            (metaUtilizavel.comissao[2] +
                                metaUtilizavel.premiacao[2]) *
                            metaUtilizavel.acelerador[2]
                        ).toFixed(2)} de acelerador!`;

                        // alert(`Sua comissão é R$${
                        //     valVendido * (metaUtilizavel.comissao[2]+metaUtilizavel.premiacao[2])
                        // }, sendo R$${valVendido * metaUtilizavel.comissao[2]} de comissão, R$${valVendido * metaUtilizavel.premiacao[2]} de premiação e R$${valVendido * metaUtilizavel.acelerador[2]} de acelerador!`)
                    } else {
                        document.querySelector(
                            ".modal-body"
                        ).innerHTML = `Sua comissão é R$${(
                            valVendido *
                            (metaUtilizavel.comissao[2] +
                                metaUtilizavel.premiacao[2])
                        ).toFixed(2)}, sendo R$${(
                            valVendido * metaUtilizavel.comissao[2]
                        ).toFixed(2)} de comissão, R$${(
                            valVendido * metaUtilizavel.premiacao[2]
                        ).toFixed(2)} de premiação e R$${(
                            valVendido * metaUtilizavel.acelerador[1]
                        ).toFixed(2)} de acelerador!`;

                        // alert(`Sua comissão é R$${
                        //     valVendido * (metaUtilizavel.comissao[2]+metaUtilizavel.premiacao[2])
                        // }, sendo R$${valVendido * metaUtilizavel.comissao[2]} de comissão, R$${valVendido * metaUtilizavel.premiacao[2]} de premiação e R$${valVendido * metaUtilizavel.acelerador[1]} de acelerador!`)
                    }
                } else if (valVendido - pp >= metaUtilizavel.valorMeta * 1.2) {
                    // document.getElementById(
                    //     "demo"
                    // ).innerHTML = `Sua comissão é R$${
                    //     valVendido * (metaUtilizavel.comissao[3]+metaUtilizavel.premiacao[3])
                    // }, sendo R$${valVendido * metaUtilizavel.comissao[3]} de comissão, R$${valVendido * metaUtilizavel.premiacao[3]} de premiação e R$${valVendido * metaUtilizavel.acelerador[3]} de acelerador!`;

                    if (
                        metaUtilizavel.aceleradorBanda <= bl &&
                        metaUtilizavel.aceleradorHa <= ha &&
                        metaUtilizavel.aceleradorVada <= vada
                    ) {
                        document.querySelector(
                            ".modal-body"
                        ).innerHTML = `Sua comissão é R$${(
                            valVendido *
                                (metaUtilizavel.comissao[3] +
                                    metaUtilizavel.premiacao[3]) +
                            valVendido *
                                (metaUtilizavel.comissao[3] +
                                    metaUtilizavel.premiacao[3]) *
                                metaUtilizavel.acelerador[3]
                        ).toFixed(2)}, sendo R$${(
                            valVendido * metaUtilizavel.comissao[3]
                        ).toFixed(2)} de comissão, R$${(
                            valVendido * metaUtilizavel.premiacao[3]
                        ).toFixed(2)} de premiação e R$${(
                            valVendido *
                            (metaUtilizavel.comissao[3] +
                                metaUtilizavel.premiacao[3]) *
                            metaUtilizavel.acelerador[3]
                        ).toFixed(2)} de acelerador!`;

                        // alert(`Sua comissão é R$${
                        //     valVendido * (metaUtilizavel.comissao[3]+metaUtilizavel.premiacao[3])
                        // }, sendo R$${valVendido * metaUtilizavel.comissao[3]} de comissão, R$${valVendido * metaUtilizavel.premiacao[3]} de premiação e R$${valVendido * metaUtilizavel.acelerador[3]} de acelerador!`)
                    } else {
                        document.querySelector(
                            ".modal-body"
                        ).innerHTML = `Sua comissão é R$${(
                            valVendido *
                            (metaUtilizavel.comissao[3] +
                                metaUtilizavel.premiacao[3])
                        ).toFixed(2)}, sendo R$${(
                            valVendido * metaUtilizavel.comissao[3]
                        ).toFixed(2)} de comissão, R$${(
                            valVendido * metaUtilizavel.premiacao[3]
                        ).toFixed(2)} de premiação e R$${(
                            valVendido * metaUtilizavel.acelerador[1]
                        ).toFixed(2)} de acelerador!`;

                        // alert(`Sua comissão é R$${
                        //     valVendido * (metaUtilizavel.comissao[3]+metaUtilizavel.premiacao[3])
                        // }, sendo R$${valVendido * metaUtilizavel.comissao[3]} de comissão, R$${valVendido * metaUtilizavel.premiacao[3]} de premiação e R$${valVendido * metaUtilizavel.acelerador[1]} de acelerador!`)
                    }
                } else {
                    // document.getElementById("demo").innerHTML =
                    //     "Não atingiu o minimo";

                    document.querySelector(".modal-body").innerHTML =
                        "Não atingiu o minimo";

                    // alert("Não atingiu o minimo")
                }
            } else {
                // document.getElementById(
                //     "demo"
                // ).innerHTML = `Você precisa vender pelo menos ${metaUtilizavel.bandaLarga} banda(s) larga(s) e ${metaUtilizavel.avancada} produto(s) avançado(s)!`;

                document.querySelector(
                    ".modal-body"
                ).innerHTML = `Você precisa vender pelo menos ${metaUtilizavel.bandaLarga} banda(s) larga(s), ${metaUtilizavel.ha} alta(s) ou portabilidade(s) e ${metaUtilizavel.avancada} produto(s) avançado(s)!`;

                // alert(`Você precisa vender pelo menos ${metaUtilizavel.bandaLarga} banda(s) larga(s), ${metaUtilizavel.ha} alta(s) ou portabilidade(s) e ${metaUtilizavel.avancada} produto(s) avançado(s)!`)
            }
        }
    } else if(document.querySelector("#equipe").value == "inside") {
        let meta = document.querySelector("#meta").value;

        let Jun = {
            valorMeta: 1800,
            bandaLarga: 2,
            avancada: 1,
            ha: 10,
            aceleradorBanda: 3,
            aceleradorHa: 10,
            aceleradorVada: 1,
            comissao: [0.05, 0.1, 0.15, 0.2],
            premiacao: [0.05, 0.1, 0.2, 0.3],
            acelerador: [0, 0, 0.1, 0.2],
        };

        let Ple = {
            valorMeta: 2500,
            bandaLarga: 2,
            avancada: 1,
            ha: 10,
            aceleradorBanda: 5,
            aceleradorHa: 15,
            aceleradorVada: 1,
            comissao: [0.05, 0.1, 0.2, 0.3],
            premiacao: [0.1, 0.15, 0.2, 0.3],
            acelerador: [0, 0, 0.1, 0.2],
        };

        let Sen = {
            valorMeta: 3000,
            bandaLarga: 2,
            avancada: 1,
            ha: 10,
            aceleradorBanda: 6,
            aceleradorHa: 20,
            aceleradorVada: 1,
            comissao: [0.1, 0.2, 0.3, 0.4],
            premiacao: [0.1, 0.2, 0.3, 0.4],
            acelerador: [0, 0, 0.1, 0.2],
        };

        if (meta == "jun") {
            metaUtilizavel = Jun;
        } else if (meta == "ple") {
            metaUtilizavel = Ple;
        } else {
            metaUtilizavel = Sen;
        }

        let valVendido = document.getElementById("y").value;
        let pp = document.getElementById("z").value;
        let bl = document.querySelector("#bl").value;
        let vada = document.querySelector("#vada").value;
        let ha = document.querySelector("#ha").value;

        console.log(metaUtilizavel)


    } else {
        document.querySelector(
            ".modal-body"
        ).innerHTML = 'Escolha uma equipe'
    }
}
