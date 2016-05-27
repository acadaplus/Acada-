
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
    Dashboard1.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors, callback, stacked) {
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
            stacked: stacked,
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

        //creating teacher retention chart
        var $adaData  = [
            { y: '1 Grade Below C', a: 0, b: 25, c: 25 },
            { y: '2 Grades Below C', a: 17, b: 0, c: 17 },
            { y: '3+ Grades Below C', a: 5, b: 0, c: 5 }
        ];
        this.createBarChart('grade-below-c', $adaData, 'y', ['a','b'], ['Avg. Daily Attendance','Avg. Daily Attendance'], ['#39CCCC','#FF4136'], function (index, options, content, row) { return "Avg. Daily Attendance: " + row.c + "%"; }, true);

        //creating tardy rate chart
        var $fallingGradeData  = [
            { y: 'Mathematics', a: 0, b: 21, c: 21 },
            { y: 'English', a: 0, b: 15, c: 15 },
            { y: 'Science', a: 0, b: 17, c: 17 },
            { y: 'Social Studies', a: 0, b: 12, c: 12 }
        ];
        this.createBarChart('falling-grade', $fallingGradeData, 'y', ['a','b'], ['% With Falling Grade','% With Falling Grade'], ['#2ECC40','#FF4136'], function (index, options, content, row) { return "% With Falling Grade: " + row.c + "%"; }, true);

        //create line chart
        var $data  = [
            { y: '2012', a: 25, b: 7, c: 19, d: 3 },
            { y: '2013', a: 32, b: 9, c: 25, d: 5 },
            { y: '2014', a: 29, b: 12, c: 33, d: 2 },
            { y: '2015', a: 21, b: 5, c: 35, d: 2 },
            { y: '2016', a: 18, b: 3, c: 29, d: 7 }
          ];
        //this.createLineChart('failing-subject', $data, 'y', ['a','b'], ['Daily Attendance Rate','Threshold'],['0.9'],['#ffffff'],['#999999'], ['#10c469','red'], 80, 100);
        this.createBarChart('failing-subject', $data, 'y', ['a','b','c','d'], ['Failing Mathematics','Failing English','Failing Science','Failing Social Studies'], ['#0074D9','#FF4136','#2ECC40','#FF851B'], null, false);


        //create line chart
        var $repeatedClassData  = [
            { y: 'Primary 1', a: 2, b: 0, c: 2 },
            { y: 'Primary 2', a: 3, b: 0, c: 3 },
            { y: 'Primary 3', a: 0, b: 5, c: 5 },
            { y: 'Primary 4', a: 4, b: 0, c: 4 },
            { y: 'Primary 5', a: 2, b: 0, c: 2 },
            { y: 'Primary 5', a: 1, b: 0, c: 1 }
        ];
        this.createBarChart('repeat-classes', $repeatedClassData, 'y', ['a','b'], ['% Repeated Class','% Repeated Class'], ['#0074D9','#FF4136'], function (index, options, content, row) { return "Students Repeated Course: " + row.c + "%"; }, true);

        //create line chart
        var $repeatedCourseData  = [
            { y: 'Mathematics', a: 9, b: 0, c: 9 },
            { y: 'English', a: 0, b: 12, c: 12 },
            { y: 'Science', a: 8, b: 0, c: 8 },
            { y: 'Social Studies', a: 7, b: 0, c: 7 }
        ];
        this.createBarChart('repeat-courses', $repeatedCourseData, 'y', ['a','b'], ['% Repeated Course','% Repeated Course'], ['#2ECC40','#FF4136'], function (index, options, content, row) { return "Students Repeated Course: " + row.c + "%"; }, true);

    },
    //init
    $.Dashboard1 = new Dashboard1, $.Dashboard1.Constructor = Dashboard1
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.Dashboard1.init();
}(window.jQuery);