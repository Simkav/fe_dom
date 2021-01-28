class Student {
  /**
   *
   * @param {string} name
   * @param {boolean} isMale
   * @param {Univer} univer
   */
  constructor(name, isMale, univer) {
    this.name = name;
    this.isMale = isMale;
    this.univer = univer;
    this.contacts = {
      email: 'test@testovich.com',
    };
  }
}

class Univer {
  constructor(name) {
    this.name = name;
  }
}

const znu = new Univer('znu');

const stud = new Student('Undefined Undefinedovich', true, znu);

function getStudentInfo(student) {
  debugger
  const deepObjectEntries = (obj) => {
    const info = [];
    Object.entries(obj).forEach(([key, value], index) => {
      if (typeof value === 'object') {
        info.push(deepObjectEntries(value).flat());
      } else {
        info.push([key, value]);
      }
    });
    return info;
  };

  return deepObjectEntries(student)
    .map((item) => item.join(': '))
    .join('\n');
}
