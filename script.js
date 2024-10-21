const person = {
    name: prompt("Jaké je vaše jméno a příjmení?"),
    age: Number(prompt("Jaký je váš věk?")),
    language: window.navigator.language,
  };
  
  document.body.innerHTML += "<p>Zadané jméno: " + person.name + ", váš věk: " + person.age + "</p>";
  document.body.innerHTML += "<p>Váš jazyk: " + person.language + "</p>";
  document.body.innerHTML += "<p>Byli jste zaregistrováni na očkování.</p>";