document.addEventListener('DOMContentLoaded', function() {
    fetch('lineChartData.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('evChart').getContext('2d');
            const config = {
                type: 'line',
                data: {
                    labels: data.EV_Sales.map(item => item.year),
                    datasets: [{
                        label: 'EVs Sold',
                        data: data.EV_Sales.map(item => item.EVs_sold),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: {
                                    size: 16
                                }
                            }
                        },
                        y: {
                            beginAtZero: true,
                            ticks: {
                                font: {
                                    size: 16
                                }
                            }
                        }
                    }
                }
            };
            new Chart(ctx, config);
        });

    fetch('pieChartData.json')
        .then(response => response.json())
        .then(pieData => {
            const pieCtx = document.getElementById('pieChart').getContext('2d');
            const pieConfig = {
                type: 'pie',
                data: {
                    labels: pieData.Market_Share.map(item => item.Country),
                    datasets: [{
                        data: pieData.Market_Share.map(item => item.Share),
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)', // Green
                            'rgba(255, 99, 132, 0.2)', // Red
                            'rgba(153, 102, 255, 0.2)', // Purple
                            'rgba(255, 206, 86, 0.2)', // Yellow
                            'rgba(54, 162, 235, 0.2)', // Blue
                            'rgba(0, 0, 0, 0.2)', // Black
                            'rgba(255, 159, 64, 0.2)'  // Orange
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)', // Green
                            'rgba(255, 99, 132, 1)', // Red
                            'rgba(153, 102, 255, 1)', // Purple
                            'rgba(255, 206, 86, 1)', // Yellow
                            'rgba(54, 162, 235, 1)', // Blue
                            'rgba(0, 0, 0, 1)', // Black
                            'rgba(255, 159, 64, 1)'  // Orange
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    size: 16
                                }
                            }
                        }
                    }
                }
            };
            new Chart(pieCtx, pieConfig);
        });

    const normalData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Monthly Data',
            data: [10, 20, 30, 40, 50],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1
        }]
    };

    const normalCtx = document.getElementById('normalChart').getContext('2d');
    new Chart(normalCtx, {
        type: 'bar',
        data: normalData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 16
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            size: 16
                        }
                    }
                }
            }
        }
    });

    document.getElementById('myButton').addEventListener('click', function() {
        alert('Button was clicked!');
    });
});