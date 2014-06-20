export default function snakeCaseToCamelCase (symbol) {
    return symbol.split('_').filter(function (word) {
        return word !== '';
    }).map(function (word, idx) {
        if (idx === 0) {
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }).join('');
}
