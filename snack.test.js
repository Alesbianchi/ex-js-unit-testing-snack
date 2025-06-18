const { getInitials } = require('./snack');

test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Mario Rossi')).toBe('MR');
    expect(getInitials('Luca Bianchi')).toBe('LB');
    expect(getInitials('giulia verdi')).toBe('GV'); // anche se in minuscolo
});