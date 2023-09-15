const person: object = {
  id: 0,
  firstName: "",
  mobile: "",
};
const personList: string[] = [];

function addPerson(id: number, firstName: string, mobile: string) {
  const pr = Object.create(person);
  pr.id = id;
  pr.firstName = firstName;
  pr.mobile = mobile;

  personList.push(pr);
}

addPerson(365, "shahram", "09331815199");
addPerson(442, "maryam", "080180182");
function printPerson() {
  if (!personList[0]) {
    return;
  }
  console.log(personList);
}
printPerson();

function search(fname: string) {
  let result = personList.find((item) => item.firstName === fname);
  if (result) console.log("find person");
  else console.log("can't find person");
}

search("shahram")
