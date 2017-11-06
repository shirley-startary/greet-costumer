var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};


function greetCustomer(firstName) {
  // console.log(firstName);
  // console.log(customerData);
  for(var i in customerData){
    // console.log(i);
    if (i === firstName){
      /* En el siguiete if estamos accediendo a visits del nombre que hemos buscado,
      ya que se supone que sí encontró el nombre buscado*/
      if(customerData[firstName]["visits"] > 1){
        return "Welcome back, " + firstName + "! So glad to see you again!"
      } else {
        return "Welcome back, " + firstName + "! We're glad you liked us the first time!";
      }
    }
  }
  return "Welcome! Is this your first time?";
}
var output = greetCustomer('Carrie');
console.log(output);
