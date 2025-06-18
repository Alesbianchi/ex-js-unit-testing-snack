const { getInitials, createSlug } = require('./snack.js');

// snack 01
test("La funzione getInitials restituisce correttamente le iniziali di una stringa con nome e cognome", () => {
    const input = "Lorenzo rossi";
    expect(getInitials(input)).toBe("LDL");
});

// snack 02
test("La funzione createSlug restituisce una stringa minuscola con i trattini al posto degli spazi", () => {
    const frase = "Ciao Come Va";
    expect(createSlug(frase)).toBe("ciao-come-va");
});