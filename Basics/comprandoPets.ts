type Animal = "inseto" | "peixe" | "pássaro"

const buyPet = (pet: Animal, name: string) => {
  console.log(`Vc comprou um ${pet} chamado ${name}`);
  
}

buyPet("inseto", "Beatle")