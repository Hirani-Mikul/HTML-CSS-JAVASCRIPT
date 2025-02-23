const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

const students = [
  {
    name: "Computer",
    score: 90,
    gender: "male",
  },
  {
    name: "Chrome",
    score: 40,
    gender: "female",
  },
  {
    name: "Firefox",
    score: 80,
    gender: "female",
  },
  {
    name: "Microsoft",
    score: 30,
    gender: "male",
  },
  {
    name: "Mac",
    score: 60,
    gender: "male",
  },
  {
    name: "Opera",
    score: 60,
    gender: "male",
  },
  {
    name: "Javascript",
    score: 30,
    gender: "female",
  },
  {
    name: "Python",
    score: 70,
    gender: "female",
  },
];

const processData = (data, callback) => {
  data.forEach((student, i) => {
    if (student.gender.toLowerCase() === "male") {
      if (typeof callback === "function") {
        callback(student);
      }
    }
  });
};

const r = [];
processData(students, (obj) => {
  if (obj.score > 50) {
    r.push(obj);
  }
});
result1.innerHTML = r.map((element) => {
  return `<p>${element.name} passed.</p>`;
});

const determineTotal = () => {
  let total = 0,
    count = 0;
  processData(students, (obj) => {
    total += obj.score;
    count++;
  });

  result2.innerHTML = `<p>Total score: ${total} - Total Count: ${count}</p>`;
};
determineTotal();
