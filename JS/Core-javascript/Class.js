class Person {
    constructor() {
      this.name = 'me'; //property
    }
  
    printMyName() {
      console.log(this.name);
    }
  }
  
  const person = new Person(); //new Person() 메소드를 사용해서 상수 person에 저장한다.
  person.printMyName()
  //me가 출력된다. 