module.exports = {
    contains: function contains(target, pattern){
        var value = 0;
        pattern.forEach(function(word){
          value = value + target.includes(word);
        });
        return (value === 1)
    },
    csvHeaders: () => ["peliculas","recomendada","vista","genero"],
}