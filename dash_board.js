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
        
        // Fetch dynamic user progress data from the server
        fetch('get_user_progress.php') // The PHP file that returns the progress data
            .then(response => response.json())
            .then(data => {
                const progressData = data.progress;  // Assuming 'progress' is an array like [10, 20, 30, 40, 50]
                const labels = data.labels;          // Assuming 'labels' contains the weeks, e.g. ['Week 1', 'Week 2', ...]
                
                // Define the chart with dynamic data
                const progressChart = new Chart(context, {
                    type: 'line', 
                    data: {
                        labels: labels, // X-axis labels (weeks)
                        datasets: [{
                            label: 'User Progress', 
                            data: progressData, // Dynamic user progress data
                            borderColor: 'rgba(75, 192, 192, 1)', 
                            backgroundColor: gradient, 
                            fill: true, 
                            tension: 0.4,
                            pointBackgroundColor: 'rgba(75, 192, 192, 1)', 
                            pointBorderColor: '#fff', 
                            pointHoverRadius: 6, 
                            pointHoverBackgroundColor: '#ff6384', 
                            pointHoverBorderColor: '#fff', 
                            pointRadius: 5, 
                            pointHitRadius: 10
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: true,
                                position: 'top',
                                labels: {
                                    color: '#333'
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
                                    display: false
                                },
                                ticks: {
                                    color: '#666'
                                }
                            },
                            y: {
                                beginAtZero: true,
                                grid: {
                                    color: 'rgba(200, 200, 200, 0.3)',
                                    borderDash: [5, 5]
                                },
                                ticks: {
                                    color: '#666',
                                    callback: function (value) {
                                        return value + '%';
                                    }
                                }
                            }
                        }
                    }
                });
            })
            .catch(error => console.error('Error fetching user progress data:', error));
    } else {
        console.error('Canvas element not found for chart rendering');
    }
});
