// Ensure DOM is fully loaded before executing the chart script
document.addEventListener('DOMContentLoaded', function () {
    // Used for graph
    const ctx = document.getElementById('progressChart');
    
    // Check if the canvas element exists
    if (ctx) {
      const context = ctx.getContext('2d');
      
      // Create a gradient fill for the line chart
      const gradient = context.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'rgba(75, 192, 192, 0.4)');
      gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');
      
      // Define the chart
      const progressChart = new Chart(context, {
        type: 'line', // Define the type of chart as 'line'
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], // X-axis labels
          datasets: [{
            label: 'User Progress', // Label of the dataset
            data: [10, 20, 30, 40, 50], // User progress data points
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            backgroundColor: gradient, // Apply gradient fill under the line
            fill: true, // Enable filling under the line
            tension: 0.4, // Smooth the line curve
            pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
            pointBorderColor: '#fff', // Border color of the points
            pointHoverRadius: 6, // Increase point size on hover
            pointHoverBackgroundColor: '#ff6384', // Point color on hover
            pointHoverBorderColor: '#fff', // Point border color on hover
            pointRadius: 5, // Point size
            pointHitRadius: 10 // Increase hit area for better user interaction
          }]
        },
        options: {
          responsive: true, // Make the chart responsive
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: '#333' // Change legend text color
              }
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(0,0,0,0.7)',
              titleColor: '#fff',
              bodyColor: '#fff',
              footerColor: '#fff',
              callbacks: {
                label: function (context) {
                  return `Progress: ${context.raw}%`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false // Remove grid lines on x-axis
              },
              ticks: {
                color: '#666' // Change x-axis label color
              }
            },
            y: {
              beginAtZero: true, // Ensures the y-axis starts at 0
              grid: {
                color: 'rgba(200, 200, 200, 0.3)', // Change grid line color
                borderDash: [5, 5] // Add dashed lines for y-axis grid
              },
              ticks: {
                color: '#666', // Change y-axis label color
                callback: function (value) {
                  return value + '%'; // Add percentage sign to y-axis labels
                }
              }
            }
          }
        }
      });
    } else {
      console.error('Canvas element not found for chart rendering');
    }
  });
