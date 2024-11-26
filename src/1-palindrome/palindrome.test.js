const isPalindrome = require('./palindrome');  // Importa a função a ser testada

describe('Testes de palíndromos', () => {

    test('Reconhece palíndromos simples', () => {
        expect(isPalindrome('aba')).toBe(true);
        expect(isPalindrome('madam')).toBe(true);
    });

    test('Reconhece palíndromos com maiúsculas e minúsculas', () => {
        expect(isPalindrome('MadAm')).toBe(true);
        expect(isPalindrome('RaceCar')).toBe(true);
    });

    test('Reconhece palíndromos com espaços e pontuação', () => {
        expect(isPalindrome('A man, a plan, a canal, Panama!')).toBe(true);
        expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    });

    test('Retorna falso para string vazia ou nula', () => {
        expect(isPalindrome('')).toBe(false);
        expect(isPalindrome(null)).toBe(false);
    });

    test('Reconhece quando não é um palíndromo', () => {
        expect(isPalindrome('hello')).toBe(false);
        expect(isPalindrome('world')).toBe(false);
    });
});
