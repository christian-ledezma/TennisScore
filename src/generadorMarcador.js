function generador(score_1, score_2){
    let resultado = '';
    if(score_1 == 0 && score_2 == 0)
        resultado = 'love - love';
    else if (score_1 == 0 || score_2 == 0)
        resultado = `${score_1} - ${score_2}`;
    return resultado
}

export default generador;