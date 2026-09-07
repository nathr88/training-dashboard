fetch('data.json')
.then(response => response.json())
.then(data => {

    const totalDistance =
        data.reduce((sum,row)=>sum+row.distance,0);

    const totalTSS =
        data.reduce((sum,row)=>sum+row.tss,0);

    const totalWork =
        data.reduce((sum,row)=>sum+row.work,0);

    const totalElevation =
        data.reduce((sum,row)=>sum+row.elevation,0);

    document.getElementById('distance').innerText =
        totalDistance.toFixed(1) + " km";

    document.getElementById('tss').innerText =
        totalTSS;

    document.getElementById('work').innerText =
        totalWork.toLocaleString() + " kJ";

    document.getElementById('elevation').innerText =
        totalElevation.toLocaleString() + " m";

    const weeks = data.map(x => x.week);

    new Chart(
        document.getElementById('distanceChart'),
        {
            type: 'bar',
            data: {
                labels: weeks,
                datasets: [{
                    label: 'Distance (km)',
                    data: data.map(x => x.distance),
                    backgroundColor: '#1976d2'
                }]
            }
        }
    );

    new Chart(
        document.getElementById('tssChart'),
        {
            type: 'line',
            data: {
                labels: weeks,
                datasets: [{
                    label: 'TSS',
                    data: data.map(x => x.tss),
                    borderColor: '#ff6f00',
                    fill: false
                }]
            }
        }
    );

});
