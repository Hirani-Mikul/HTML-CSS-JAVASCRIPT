const result_list = document.getElementById('result-list');

let currentColorIndex = 0;
const Card_Color = [
  {
    background: 'rgb(250, 250, 86)',
    text: 'rgb(46, 9, 255)',
  },
  {
    background: 'rgb(0, 255, 0)',
    text: 'rgb(255, 255, 255)',
  },
  {
    background: 'rgb(250, 0, 0)',
    text: 'rgb(255, 255, 255)',
  },
  {
    background: 'rgb(128, 248, 104)',
    text: 'rgb(2, 5, 201)',
  },
  {
    background: 'rgb(217, 91, 255)',
    text: 'rgb(0, 0, 0)',
  },
  {
    background: 'rgb(130, 247, 255)',
    text: 'rgb(0, 0, 0)',
  },
];

let Data = [];

const fetchData = async () => {
  try {
    const fetchedData = await fetch('./input/results2.json');
    const res = await fetchedData.json();
    const data = await res.traceEvents;

    Data = [...data];
    LogData();
    UpdateList();
  } catch (error) {
    console.log(error.message);
    Data = [];
  }
};

fetchData();

const LogData = () => {
  console.log(Data);
};

const UpdateList = () => {
  result_list.innerHTML = Data.map((data) => GetHTML(data)).join('');
};

const GetHTML = (data) => {
  const EndTime = data.ts - data.dur;

  const currentBackgroundColor = Card_Color[currentColorIndex].background;
  const currentTextColor = Card_Color[currentColorIndex].text;
  currentColorIndex++;

  if (currentColorIndex === Card_Color.length) currentColorIndex = 0;

  return `
    <li class='result-item' style="background-color: ${currentBackgroundColor}; color: ${currentTextColor}">
      <h3 class='name'>${data.name}</h3>
      <div class='duration show'>
        <span class='hidden'>Dur: </span>
        <span>${data.dur}ms</span>
      </div>
      <div class='body'>
        <div class='time-taken show'>
          <span class='hidden'>Start - End</span>
          <span>${data.ts + 'ms - ' + EndTime}ms</span>
        </div>
        <div class='thread-info show'>
          <span class='hidden'>ThreadID:</span>
          <span>${data.tid}</span>
        </div>
      </div>
</li>
  
  `;
};

{
  /* <li class='result-item'>
  <h3 class='name'>Print Function</h3>
  <div class='duration show'>
    <span class='hidden'>Dur: </span>
    <span>500ms</span>
  </div>
  <div class='body'>
    <div class='time-taken show'>
      <span class='hidden'>Start - End</span>
      <span>1800ms - 2300ms</span>
    </div>
    <div class='thread-info show'>
      <span class='hidden'>ThreadID:</span>
      <span>39203920</span>
    </div>
  </div>
</li>; */
}
