/*Timesheet Chart*/
var ctx = document.getElementById('timesheet').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
        datasets: [{
            label: 'Daily Timesheet',
            data: [8, 12, 9, 6, 9],
            backgroundColor: [
                'rgba(255, 99, 132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86,1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
           
            borderWidth: 1
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


/*chart for Leaves ---*/
var ctx = document.getElementById('leaveChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Pending Leave','Paid Leave', 'Casual Leave'],
        datasets: [{
            label: '# of Votes',
            data: [11, 3, 5],
            backgroundColor: [
                'rgba(75, 192, 192,1)',
                'limegreen',
                'red',           
                
            ],
            borderWidth: 1
        }]
    },
    
});

/*chart for Payslip / Salary ---*/
var ctx = document.getElementById('salaryChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Basic','HRA', 'TA', 'PT'],
        datasets: [{
            label: '# of Votes',
            data: [10, 4, 5,2],
            backgroundColor: [
                'rgba(75, 192, 192,1)',
                'orange',
                'red',                
                'rgba(153, 102, 255,1)',

            ],
            borderWidth: 1
        }]
    },
    
});


