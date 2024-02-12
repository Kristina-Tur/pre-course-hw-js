const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    let col = colors.filter(function (c) {
      if (c == "черный" || c == "красный" || c == "желтый")
        return true
    })
  return col.join("-")
}

console.log(createColorString());
