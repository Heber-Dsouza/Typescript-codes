class Greeter {
  greeting: string

  constructor(message: string){
    this.greeting = message
  }

  greet(): string {
    return this.greeting
  }
}

let greeter = new Greeter("Aqui vc pode escrever um código")
console.log(greeter.greet());
