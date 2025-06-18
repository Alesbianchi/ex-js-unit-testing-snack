const { getInitials, createSlug, average, isPalindrome } = require('./snack.js');

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

// snack 04
test("La funzione createSlug sostituisce gli spazi con il trattino -", () => {
    const titolo = "Pagina di Prova Online";
    expect(createSlug(titolo)).toBe("pagina-di-prova-online");
});

// snack 05
test("La funzione isPalindrome verifica correttamente se una stringa è un palindromo", () => {
    const parola1 = "Anna";
    const parola2 = "radar";
    const parola3 = "casa";

    expect(isPalindrome(parola1)).toBe(true);
    expect(isPalindrome(parola2)).toBe(true);
    expect(isPalindrome(parola3)).toBe(false);
});

// snack 06
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
    expect(() => createSlug("")).toThrow("Il campo non può essere vuoto");
    expect(() => createSlug(null)).toThrow("Il campo non può essere vuoto");
    expect(() => createSlug(undefined)).toThrow("Il campo non può essere vuoto");
});
