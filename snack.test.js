const { getInitials, createSlug, average } = require('./snack.js');

// snack 01
test("La funzione getInitials restituisce correttamente le iniziali di una stringa con nome e cognome", () => {
    const input = "Lorenzo rossi";
    expect(getInitials(input)).toBe("LR");
});

// snack 02
test("La funzione createSlug restituisce una stringa minuscola con i trattini al posto degli spazi", () => {
    const frase = "Ciao Come Va";
    expect(createSlug(frase)).toBe("ciao-come-va");
});

// snack 03
test("La funzione average calcola la media aritmetica di un array di numeri", () => {
    const voti = [6, 7, 8, 9];
    expect(average(voti)).toBe(7.5);
});