'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
* - Create a data object for chart.js using your AppState's allProducts array.
* - Combine the data object with configuration information for chart.js type, colors, etc
* - Call chart.js with the configuration and the canvasElem
*
* DONE:
* - Instantiate a new AppState
* - Use a method on that AppState to load vote data from localStorage.
*/


let state = new AppState();
state.loadItems();

console.log(state.returnNamesArray());


function renderChart() {
  new Chart(canvasElem, {
    type: 'bar',
    data: {
      labels: state.returnNamesArray(),
      datasets: [{
        label: '# of Times Seen',
        data: state.returnTimesClickedData(),
        borderWidth: 1,
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
      },{
        label: '# of Times Clicked',
        // data: [1, 9, 23, 1, 7, 6],
        data: state.returnTimesSeenData(),
        borderWidth: 1,
        backgroundColor: 'rgba(0, 128, 0, 0.5)',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}

renderChart();
