function isPalindrome(str) {
    if (!str) {
        return false;  // Verifica se a string é vazia ou nula
    }

    // Remove caracteres que não são letras ou números e converte para minúsculas
    const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compara a string limpa com a sua versão invertida
    return cleanedString === cleanedString.split('').reverse().join('');
}

module.exports = isPalindrome;
