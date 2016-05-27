
/**
* Theme: Adminto Admin Template
* Author: Coderthemes
* Dashboard
*/

!function($) {
    "use strict";

    var Dashboard1 = function() {
    	this.$realData = []
    };

    //creates Bar chart
    Dashboard1.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors, callback) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barSizeRatio: 0.5,
            axes: true,
            hoverCallback: callback,
            stacked: true,
            barColors: lineColors
        });
    },

    //creates line chart
    Dashboard1.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors, ymin, ymax) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          fillOpacity: opacity,
          pointFillColors: Pfillcolor,
          pointStrokeColors: Pstockcolor,
          behaveLikeLine: true,
          gridLineColor: '#eef0f2',
          hideHover: 'auto',
          resize: true, //defaulted to true
          pointSize: 0,
          parseTime: false,
          ymax: ymax,
          ymin: ymin,
          postUnits: '%',
          lineColors: lineColors
        });
    },

    //creates Donut chart
    Dashboard1.prototype.createDonutChart = function(element, data, colors, formatter) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true, //defaulted to true
            colors: colors,
            formatter: formatter
        });
    },
    
    
    Dashboard1.prototype.init = function() {

        //creating teacher education chart
        var $barData  = [
            { y: 'Bachelors', a: 18 },
            { y: 'Masters', a: 3 },
            { y: 'Doctorate', a: 1 },
            { y: 'Other', a: 6 }
        ];
        //this.createBarChart('teacher-education', $barData, 'y', ['a'], ['Teachers'], ['#B10DC9']);

        //creating teacher certification chart
        var $teacherCertificationData  = [
            { y: 'None', a: 10 },
            { y: 'NCE', a: 8 },
            { y: 'PGDE', a: 6 },
            { y: 'ADE', a: 1 },
            { y: 'Foreign', a: 3 }
        ];
        //this.createBarChart('teacher-certification', $teacherCertificationData, 'y', ['a'], ['Teachers'], ['#188ae2']);

        //creating teacher retention chart
        var $adaData  = [
            { y: 'May 16-20', a: 95, b: 0, c: 95 },
            { y: 'May 23-27', a: 97, b: 0, c: 97 },
            { y: 'May 30-3', a: 0, b: 83, c: 83 },
            { y: 'Jun 6-10', a: 0, b: 75, c: 75 }
        ];
        this.createBarChart('average-daily-attendance', $adaData, 'y', ['a','b'], ['Avg. Daily Attendance','Avg. Daily Attendance'], ['#2ECC40','#FF4136'], function (index, options, content, row) { return "Avg. Daily Attendance: " + row.c + "%"; });

        //creating tardy rate chart
        var $tardyRateData  = [
            { y: 'May 16-20', a: 8, b: 0, c: 8 },
            { y: 'May 23-27', a: 0, b: 12, c: 12 },
            { y: 'May 30-3', a: 9, b: 0, c: 9 },
            { y: 'Jun 6-10', a: 5, b: 0, c: 5 }
        ];
        this.createBarChart('tardy-rate', $tardyRateData, 'y', ['a','b'], ['Tardy Rate','Tardy Rate'], ['#2ECC40','#FF4136'], function (index, options, content, row) { return "Tardy Rate: " + row.c + "%"; });

        //creating infringement chart
        var $conductData  = [
            { y: 'May 16-20', a: 0, b: 6, c: 6 },
            { y: 'May 23-27', a: 4, b: 0, c: 4 },
            { y: 'May 30-3', a: 2, b: 0, c: 2 },
            { y: 'Jun 6-10', a: 3, b: 0, c: 3 }
        ];
        this.createBarChart('code-of-conduct', $conductData, 'y', ['a','b'], ['Infringement Rate','Infringement Rate'], ['#2ECC40','#FF4136'], function (index, options, content, row) { return "Infringement Rate: " + row.c + "%"; });

        //creating violation chart
        var $violationData  = [
            { y: 'May 16-20', a: 1, b: 0, c: 1 },
            { y: 'May 23-27', a: 1, b: 0, c: 1 },
            { y: 'May 30-3', a: 2, b: 0, c: 2 },
            { y: 'Jun 6-10', a: 0, b: 0, c: 0 }
        ];
        this.createBarChart('law-enforcement', $violationData, 'y', ['a','b'], ['Violation Rate','Violation Rate'], ['#2ECC40','#FF4136'], function (index, options, content, row) { return "Violation Rate: " + row.c + "%"; });

        //create line chart
        var $data  = [
            { y: '', a: 97, b: 95 },
            { y: 'May 9-13', a: 99, b: 95 },
            { y: 'May 16-20', a: 98, b: 95 },
            { y: 'May 23-27', a: 93, b: 95 },
            { y: 'May 30-3', a: 96, b: 95 },
            { y: 'Jun 6-10', a: 99, b: 95 }
          ];
        this.createLineChart('daily-attendance-rate', $data, 'y', ['a','b'], ['Daily Attendance Rate','Threshold'],['0.9'],['#ffffff'],['#999999'], ['#10c469','red'], 80, 100);

        //create line chart
        var $periodAbsenceRateData  = [
            { y: '', a: 7, b: 10 },
            { y: 'May 9-13', a: 8, b: 10 },
            { y: 'May 16-20', a: 9, b: 10 },
            { y: 'May 23-27', a: 12, b: 10 },
            { y: 'May 30-3', a: 11, b: 10 },
            { y: 'Jun 6-10', a: 9, b: 10 }
        ];
        this.createLineChart('class-period-absence-rate', $periodAbsenceRateData , 'y', ['a','b'], ['Daily Attendance Rate','Threshold'],['0.9'],['#ffffff'],['#999999'], ['#10c469','red'], 0, 20);

        //creating teacher experience chart
        var $donutData = [
                {label: "0-5 Years", value: 15},
                {label: "6-10 Years", value: 8},
                {label: "10+ Years", value: 5}
            ];
        //this.createDonutChart('teacher-experience', $donutData, ['#FF851B', '#2ECC40', "#FF4136"], function (y, data) { return y + ' Teachers'});
    },
    //init
    $.Dashboard1 = new Dashboard1, $.Dashboard1.Constructor = Dashboard1
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.Dashboard1.init();
}(window.jQuery);