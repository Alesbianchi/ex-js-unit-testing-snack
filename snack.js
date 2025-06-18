// snack 01
function getInitials(nomeCompleto) {
    // suddivide il nome completo in un array di parole
    const parole = nomeCompleto.split(" ");
    // estrae la prima lettera di ogni parola, convertita in maiuscolo
    const lettere = parole.map(parola => parola.charAt(0).toUpperCase());
    // unisce tutte le lettere ottenute
    return lettere.join("");
}

// snack 02
function createSlug(testo) {
    if (!testo) {
        throw new Error("Il campo non può essere vuoto");
    }
    // converte il testo in minuscolo e sostituisce gli spazi con trattini
    return testo.toLowerCase().replaceAll(" ", "-");
}

// snack 03
function average(numeri) {
    if (numeri.length === 0) {
        return NaN;
    }
    const totale = numeri.reduce((acc, num) => acc + num, 0);
    return totale / numeri.length;
}


module.exports = {
    getInitials,
    createSlug,
    average
};