function showSalary(users, age) {

  let salaryString = '';

  users.forEach(function(item) {
  
    if (item.age <= age) {  
      salaryString += item.name +', ' + item.balance + '\n';
    };
  
  });
 
  let resultString = salaryString.substr(0, salaryString.length - 1);
  
  return resultString;
}
