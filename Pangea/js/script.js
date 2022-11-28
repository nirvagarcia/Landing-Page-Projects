google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'], //100
        ['Asia', 35],
        ['America', 25],
        ['Europe', 20],
        ['Africa', 12],
        ['Oceania', 8]
    ]);   

    var options = {
        //title: 'Fans de Studio Ghibli',
        width: 900,
        height: 500,
        slices: {
            0: { color: '#944d43', offset: 0.2},
            1: { color: 'pink' },
            2: { color: '#C66A5D' },
            3: { color: '#944d43' },
            4: { color: '#C66A5D' },
        },
        pieSliceTextStyle: {
            color: 'white',
        },       
       
    };
    
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}