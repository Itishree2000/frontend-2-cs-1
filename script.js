let data = [
    { name: "Itishree", age: 23, profession: "developer" },
    { name: "Amar", age: 24, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(person => person.profession === "developer");
    console.log(developers);
  }
  
  // 2. Add Data
  function addData() {
    const newData = { name: "Iti", age: 25, profession: "designer" };
    data.push(newData);
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter(person => person.profession !== "admin");
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const additionalData = [
      { name: "Lipa", age: 22, profession: "designer" },
      { name: "Biki", age: 29, profession: "developer" },
    ];
    const concatenatedData = data.concat(additionalData);
    console.log(concatenatedData);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / data.length;
    console.log(average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const above25 = data.some(person => person.age > 25);
    console.log(above25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(data.map(person => person.profession))];
    console.log(professions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = data.find(person => person.name === "john");
    if (john) {
      john.profession = "senior developer";
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCount = data.reduce((count, person) => {
      count[person.profession] = (count[person.profession] || 0) + 1;
      return count;
    }, {});
    console.log(professionCount);
  }
  