document.addEventListener('DOMContentLoaded', function() {
  // BTC investment performance data (dummy data for demonstration)
  const investmentLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const investmentReturns = [0, 10, 20, 15, 25, 30];

  // Get the canvas element and create the BTC investment chart
  const btcInvestmentChartCanvas = document.getElementById('btcInvestmentChart').getContext('2d');
  new Chart(btcInvestmentChartCanvas, {
    type: 'line',
    data: {
      labels: investmentLabels,
      datasets: [{
        label: 'Investment Returns (%)',
        data: investmentReturns,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        fill: false,
      }]
    },
    options: {
      responsive: false, // Set to false to prevent resizing
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Returns (%)'
          },
          suggestedMin: 0, // Customize the y-axis scale
          suggestedMax: 35 // Customize the y-axis scale
        }
      }
    }
  });
});
