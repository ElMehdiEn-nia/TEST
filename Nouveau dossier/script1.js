let n = parseInt(prompt("Entrer le nombre pour la table de multiplication"))
console.log('Tbale de multiplication de ${n}')
for (let i = 1;i<= 10;i++) {
    let resultat = n * i;
    console.log('${n} * {i} = ${resultat}')
}