
var text = "deleveled level test";
var split = text.match(/[^\s.]+/g);
for (var i = 0; i < split.length; i++) {
    var word = split[i];
    var reverse = word.split("").reverse().join("");
    console.log(i + 1 + ". " + word + " <-> "+ reverse , (word == reverse));
}

