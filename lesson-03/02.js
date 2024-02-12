const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
const word = words.indexOf("апельсин");
if (word === -1){
  console.log("Придется поискать в другом магазине…") 
} else {
  console.log("Ура! нашел")
}