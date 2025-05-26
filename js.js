import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var saldo = 200;

console.log('Olá, você acabou de entar em uma casa de aposta, você pode apostaer em 2 times\n Seu slado atual é: ' + saldo);

function gerarOdiTime1() {
    return Math.floor(Math.random() * 21);
}

function gerarOdiTime2() {
    return Math.floor(Math.random() * 21);
}

rl.question('O que você deseja fazer?\n 1 - apostar\n 2 - depositar\n', (opcao) => {
    if (opcao === '1') {

        rl.question('Digite o nome do time 1: ', (time1) => {
            rl.question('Digite o nome do time 2: ', (time2) => {
                const odiTime1 = gerarOdiTime1();
                const odiTime2 = gerarOdiTime2();

                console.log(`A odd do time ${time1} é: ${odiTime1}`);
                console.log(`A odd do time ${time2} é: ${odiTime2}`);

                rl.question(`Digite para qual time você quer apostar\n 1 - ${time1}\n 2 - ${time2}\n `, (timedaAposta) => {
                    if (timedaAposta === '1') {
                        rl.question(`Digite o valor da aposta para o time ${time1}: `, (valorAposta) => {
                            if (valorAposta <= saldo) {
                                var retorno = (odiTime1 * valorAposta);
                                rl.question(`Qual time ganhou?\n  1 - ${time1}\n  2 - ${time2}\n `, (timeGanhador) => {
                                    if (timeGanhador === timedaAposta) {
                                        saldo += retorno;
                                        console.log(`Parabéns, você ganhou! Seu novo saldo é: R$ ${saldo}`);
                                    } else {
                                        saldo -= valorAposta;
                                        console.log(`Que pena, você perdeu! Seu novo saldo é: R$ ${saldo}`);
                                    }
                                });
                            }
                        });
                    } else if (timedaAposta === '2') {
                        rl.question(`Digite o valor da aposta para o time ${time2}: `, (valorAposta) => {
                            if (valorAposta <= saldo) {
                                var retorno = (odiTime2 * valorAposta);
                                rl.question(`Qual time ganhou?\n  1 - ${time1}\n  2 - ${time2}\n `, (timeGanhador) => {
                                    if (timeGanhador === timedaAposta) {
                                        saldo += retorno;
                                        console.log(`Parabéns, você ganhou! Seu novo saldo é: R$ ${saldo}`);
                                    } else {
                                        saldo -= valorAposta;
                                        console.log(`Que pena, você perdeu! Seu novo saldo é: R$ ${saldo}`);
                                    }
                                });
                            }
                        });
                    }
                });
            });
        });

    } else if (opcao === '2') {
        rl.question('Digite o valor que você deseja depositar: ', (valorDeposito) => {
            saldo += parseFloat(valorDeposito);
            console.log(`Seu novo saldo é: R$ ${saldo}`);

            rl.question('Digite o nome do time 1: ', (time1) => {
                rl.question('Digite o nome do time 2: ', (time2) => {
                    const odiTime1 = gerarOdiTime1();
                    const odiTime2 = gerarOdiTime2();

                    console.log(`A odd do time ${time1} é: ${odiTime1}`);
                    console.log(`A odd do time ${time2} é: ${odiTime2}`);

                    rl.question(`Digite para qual time você quer apostar\n 1 - ${time1}\n 2 - ${time2}\n `, (timedaAposta) => {
                        if (timedaAposta === '1') {
                            rl.question(`Digite o valor da aposta para o time ${time1}: `, (valorAposta) => {
                                if (valorAposta <= saldo) {
                                    var retorno = (odiTime1 * valorAposta);
                                    rl.question(`Qual time ganhou?\n  1 - ${time1}\n  2 - ${time2}\n `, (timeGanhador) => {
                                        if (timeGanhador === timedaAposta) {
                                            saldo += retorno;
                                            console.log(`Parabéns, você ganhou! Seu novo saldo é: R$ ${saldo}`);
                                            rl.close();
                                        } else {
                                            saldo -= valorAposta;
                                            console.log(`Que pena, você perdeu! Seu novo saldo é: R$ ${saldo}`);
                                            rl.close();
                                        }
                                    });
                                }
                            });
                        } else if (timedaAposta === '2') {
                            rl.question(`Digite o valor da aposta para o time ${time2}: `, (valorAposta) => {
                                if (valorAposta <= saldo) {
                                    var retorno = (odiTime2 * valorAposta);
                                    rl.question(`Qual time ganhou?\n  1 - ${time1}\n  2 - ${time2}\n `, (timeGanhador) => {
                                        if (timeGanhador === timedaAposta) {
                                            saldo += retorno;
                                            console.log(`Parabéns, você ganhou! Seu novo saldo é: R$ ${saldo}`);
                                            rl.close();
                                        } else {
                                            saldo -= valorAposta;
                                            console.log(`Que pena, você perdeu! Seu novo saldo é: R$ ${saldo}`);
                                            rl.close();
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
            });
        });
    }
});
