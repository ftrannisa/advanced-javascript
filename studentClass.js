class Student {
  constructor(name, age, dateOfBirth, gender, studentId) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.studentId = studentId;
    this.hobbies = [];
  }

  set Name(name) {
    this.name = name;
  }

  set Age(age) {
    this.age = age;
  }

  set DateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  set Gender(gender) {
    if (gender === "Male" || gender === "Female") {
      this.gender = gender;
    } else {
      this.gender = "Masukkan gender yang benar!";
    }
  }

  addId(id) {
    this.studentId = id;
  }

  addHobby(hobbies) {
    this.hobbies.push(hobbies);
  }

  removeHobby(hobbies) {
    // console.log(this.hobbies.length);
    // console.log(this.hobbies[1]);
    let remove = [];
    for (let i = 0; i <= this.hobbies.length; i++) {
      if (this.hobbies[i] !== hobbies) {
        remove.push(this.hobbies[i]);
      } else {
        continue;
      }
    }
    this.hobbies = [];
    this.hobbies.push(remove);
    //console.log(remove);
  }

  get Data() {
    return `Nama : ${this.name}, 
      Umur : ${this.age} tahun, 
      TTL : ${this.dateOfBirth},
      Gender : ${this.gender},
      No Id : ${this.studentId},
      Hobby : ${this.hobbies}.`;
  }
}

let Fitri = new Student("Fitri", 22, "31/08/1998", "Female", 1706041072);
console.log(Fitri);

// Fitri.addHobby('tidur');
// Fitri.addHobby('makan');
// Fitri.addHobby('baca');
// console.log(Fitri);

// Fitri.removeHobby('baca');
// console.log(Fitri);
// console.log(Fitri.Data)

// console.log(Fitri.name);
// console.log(Fitri.age);
// console.log(Fitri.dateOfBirth);
// console.log(Fitri.gender);
// console.log(Fitri.studentId);
// console.log(Fitri.hobbies);
