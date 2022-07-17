// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words.
//     Example:
// console.log("This house is not nice!".filter('not'));
// Output: "This house is nice!"

String.prototype.filter = function (word) {
    return this.split(' ').filter(w => w !== word).join(' ');
}

console.log("This house is not nice!".filter('not'));

// Exercise 2:
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
// that works by repeatedly stepping through the list to be sorted,
// Example:[6,4,0, 3,-2,1].bubbleSort();
// Output : [-2, 0, 1, 3, 4, 6]

Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                let a = this[j];
                this[j] = this[j + 1];
                this[j + 1] = a;
            }
        }
    }
    return this;
}

console.log([6,4,0, 3,-2,1].bubbleSort());

// Exercise 3:
// Create an object called Teacher derived from a Person function constructor, and implement
// a method called teach that receives a string called subject, and prints out: [teacher's name]
// is now teaching [subject]. Create a Teacher object and call its teach method.
// Also do the same thing using Object.create. When using Object.create you will need a
// factory function instead of a function constructor in order to pass parameters such as
// ‘name’ to be set in the prototype.

// function constructor
(function(){
    function Person(name) {
        this.name = name;
    }
    
    const Teacher = function(name) {
        Person.call(this, name);
    }
    
    Teacher.prototype.tech = function (subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
    
    const tech1 = new Teacher("Adam");
    tech1.tech('ASA');
})();

//  Object.create
(function(){
    const Person = {
        name: 'default'
    }
    
    const Teacher = Object.create(Person);
    Teacher.tech = function (subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }

    function createTeacher(name) {
        const tech1 = Object.create(Teacher);
        tech1.name = name;
        return tech1;
    }

    const tech1 = createTeacher('Adam');
    tech1.tech('ASD');

})();

// Exercise 4:
// Write code that will create person, student, and professor objects.
    // • Person objects have
        // o name and age fields
        // o a greeting method that prints out: “Greetings, my name is [name] and I am
            // [age] years old.”
        // o a salute method that prints out: “Good morning!, and in case I dont see you,
        // good afternoon, good evening and good night!”
    // • Student objects inherit name, age, and salute from person. They also have a field
    // ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
    // [name] and I am studying [major]. The greeting should be output to the console.
    // • Professor objects inherit name, age, and salute from person. They also have a field
    // ‘department’ and have their own greeting method. Their salutation is “Good day,
    // my name is [name] and I am in the [department] department.” Output it to the
    // console.
    // • Create a professor object and a student object. Call both the greeting and salutation
    // methods on each.
    // • Do this exercise once using the object prototype approach for inheritance and then
    // using the function constructor approach.

// object prototype approach
(function (){
    const Person = {
        name: 'default',
        age: 'default',
        greeting: function() {
            console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
        },
        salute: function() {
            console.log(`Good morning!, and in case I dont see you, good afternoon, good evening and good night!`)
        }
    };

    const Student = Object.create(Person);
    Student.major = 'default';
    Student.greeting = function() {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`)
    }

    const Professor = Object.create(Person);
    Professor.department = 'default';
    Professor.greeting = function () {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    }

    const stu = Object.create(Student);
    const prof = Object.create(Professor);
    stu.name = 'Student 1';
    stu.age = 20;
    stu.major = 'Math';
    stu.greeting();
    prof.name = 'Prof 1';
    prof.age = 50;
    prof.department = 'Computer Science';
    prof.greeting();
})();

// function constructor approach
(function (){
    function Person (name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greeting = function() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    };
    Person.prototype.salute = function() {
        console.log(`Good morning!, and in case I dont see you, good afternoon, good evening and good night!`)
    };

    const Student = function (name, age, major) {
        this.major = major;
        Person.call(this, name, age);
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.greeting = function() {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`)
    }



    const Professor = function (name, age, department) {
        this.department = department;
        Person.call(this, name, age);
    }
    Professor.prototype = Object.create(Person.prototype);
    Professor.prototype.greeting = function () {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    }

    const stu = new Student('A', 20, 'Math');
    const prof = new Professor('B', 50, 'Computer Science');

    stu.greeting();
    prof.greeting();
})();




