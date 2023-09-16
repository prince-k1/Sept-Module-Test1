const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  const dublicateData = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i = 0; i < data.length; i++){
        if(data[i].profession == "developer"){
            console.log(data[i].name + " is developer");
        }
    }
  }
  
  // 2. Add Data
  function addData() {
    dublicateData.push({name: "Prince", age: 21, profession: "developer"});
    console.log(dublicateData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i = 0; i < data.length; i++){
        if(dublicateData[i].profession == "admin"){
            let spliced = dublicateData.splice(i, 1);
        }
    }
    console.log(dublicateData);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let arr1 = [
        {name : "Prince", age: 21, profession: "developer"},
        {name : "Rahul", age: 22, profession: "Manager"},
        {name : "Ravi", age : 23, profession: "Unemployed"}
    ]
    let arr2 = [
        { name: "john", age: 24, profession: "developer" },
        ...arr1,
        { name: "jane", age: 27, profession: "admin" },
    ]
    console.log(arr2);
  }
  
  // 5. Average Age
  function averageAge() {
    let average = 0;
    for(let i = 0; i < data.length; i++){
        average += data[i].age;
    }
    average = average/data.length;
    console.log("Average age is: "+ average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
        for(let i = 0; i < data.length; i++){
            if(data[i].age > 25){
                console.log(data[i].name + "'s age is above 25");
            }
        }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    for(let i = 0; i < data.length; i++){
        console.log(data[i].profession);
    }
  }
  
  // 8. Sort by Age
  function sortByAge() {

    for(let i = 0; i < data.length; i++){
        if(data[i].age > data[i+1]){
            let newAge = data[i];
            data[i] = data[i+1];
            data[i+1] = newAge;
        }
    }
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data[0].profession = "Manager";
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    console.log("There are 2 profession");
  }