//클래스 상속
class Human {
    constructor() {
        this.from = 'korea'; // ① constructor() 생성자 함수를 추가
    }

    printFrom() {
        console.log(this.from); 
    }
}

class Person extends Human{ // ② extends 키워드를 이용해서 확장한다. 
    super() // ③ 상위 클래스의 생성자 함수를 실행하는 super() 키워드를 추가 
    constructor() {
      this.name = 'me'; //property
      this.from = 'canada'; // ⑤ 확장된 클래스에서 새로운 property 값을 넣으면
    }
  
    printMyName() {
      console.log(this.name);
    }
  }
  
  const person = new Person(); //new Person() 메소드를 사용해서 상수 person에 저장한다.
  person.printMyName()
  //me가 출력된다. 
  person.printFrom()
  // ④ Person 클래스에서도 Human 이 가지고있는 printFrom()을 호출할 수 있다. 
  // ⑥ korea가 찍히지 않고 canada가 찍힌다. 