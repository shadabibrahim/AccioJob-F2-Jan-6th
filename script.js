/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let newArr = [
  { id: 11, name: "Shyam", age: "25", profession: "devOps" },
  { id: 22, name: "Kartik", age: "23", profession: "cloud" },
  { id: 33, name: "Rahul", age: "22", profession: "android" }
]

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map((obj) => {
    if (obj.profession === "developer") {
      console.log(obj.id, obj.name, obj.age, obj.profession)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach((obj) => {
    if (obj.profession === "developer") {
      console.log(obj.id, obj.name, obj.age, obj.profession)
    }

  })

}

function addData() {
  //Write your code here
  let obj =
    { id: 4, name: "susan", age: "20", profession: "intern" }
  arr.push(obj)
  console.log(arr)
}


function removeAdmin() {
  //Write your code here
  let ans = arr.filter((obj) => {
    return obj.profession != "admin"
  })
  console.log(ans);
}

function concatenateArray() {
  //Write your code here
  let ans = arr.concat(newArr);
  console.log(ans);
}
