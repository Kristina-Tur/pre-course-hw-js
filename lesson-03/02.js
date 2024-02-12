const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
const word = words.indexOf("апельсин");
if (!isNaN(word)){
  console.log("Ура! нашел")
} else {
  console.log("Придется поискать в другом магазине…")
}