const response = await fetch(´https://super-duper-succotash-695qrpjpw6wr354j4-3000.app.github.dev/departamentos/${asd}´);
const departments = await response.json();
console.log(departments);