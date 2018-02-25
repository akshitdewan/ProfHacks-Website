(function ($) {
    "use strict";
	
    var config = {
        apiKey: "AIzaSyCGAhEirtKDNysgXK5b4fYU4AHZlK2d2M8",
        databaseURL: "https://profapp-e3c81.firebaseio.com/"
    };
    firebase.initializeApp(config);
    var database = firebase.database().ref().child('test');
    var ctx = document.getElementById("sales-chart");
    var myChart;
	var previous;
    var predictionData = [10,11,12.5,14,18,30,23,18,14,12.5,14,30,25,19,15,8,5];
	setInterval(function(){ 
    database.once('value').then(function(snapshot) {
       
		
		// if(previous != null){
		// alert(previous.length);
		// alert(snapshot.val().length);
		// }
		if(previous == null|| snapshot.val().length != previous.length){
		
        var dataArray = snapshot.val();
        var lastIndex = dataArray.length - 1;
        var canDiscount = dataArray[lastIndex]< 30/2;
        for(var i = lastIndex; i<lastIndex+2 && i < predictionData.length; i++){
            if(predictionData[i]>=15){
                canDiscount = false;
				}
        }
		
		if(canDiscount){
		
	document.getElementById("discountr").style.visibility='visible';
	}
		
		
    //Team chart
    var ctx = document.getElementById("team-chart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 am","1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10 pm", "11 pm", "12 pm"],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [{
                data: dataArray,
                label: "# of Customers",
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,46,68,.75)',
                borderWidth: 0.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#ed7f7e',
                    },
                    {
                data: predictionData,
                label: "# of Customers",
                backgroundColor: 'transparent',
                borderColor: 'rgba(0,180,232,.75)',
                borderWidth: 0.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#00b4e8',
                    }]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },


            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Time'
                    }
                        }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Customers'
                    }
                        }]
            },
            title: {
                display: false,
            }
        }
    });}
       // alert(snapshot.val().splice(0,snapshot.val().length/2))
        // myChart = new Chart(ctx, {
        // type: 'line',
        // data: {
            // labels: snapshot.val().splice(snapshot.val().length/2 - 1),
            // type: 'line',
            // defaultFontFamily: 'Montserrat',
            // datasets: [{
                // label: "People",
                // data: snapshot.val().splice(snapshot.val().length/2,snapshot.val().length),
                // backgroundColor: 'transparent',
                // borderColor: '#87de75',
                // borderWidth: 3,
                // pointStyle: 'circle',
                // pointRadius: 5,
                // pointBorderColor: 'transparent',
                // pointBackgroundColor: '#87de75',
            // }]
        // },
        // options: {
            // responsive: true,

            // tooltips: {
                // mode: 'index',
                // titleFontSize: 12,
                // titleFontColor: '#000',
                // bodyFontColor: '#000',
                // backgroundColor: '#fff',
                // titleFontFamily: 'Montserrat',
                // bodyFontFamily: 'Montserrat',
                // cornerRadius: 3,
                // intersect: false,
            // },
            // legend: {
                // labels: {
                    // usePointStyle: true,
                    // fontFamily: 'Montserrat',
                // },
            // },
            // scales: {
                // xAxes: [{
                    // display: true,
                    // gridLines: {
                        // display: false,
                        // drawBorder: false
                    // },
                    // scaleLabel: {
                        // display: false,
                        // labelString: 'Month'
                    // }
                // }],
                // yAxes: [{
                    // display: true,
                    // gridLines: {
                        // display: false,
                        // drawBorder: false
                    // },
                    // scaleLabel: {
                        // display: true,
                        // labelString: 'People'
                    // }
                // }]
            // },
            // title: {
                // display: false,
                // text: 'Normal Legend'
            // }
        // }
    // });
	previous = snapshot.val();
  });
}, 5000);




})(jQuery);