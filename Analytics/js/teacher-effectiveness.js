
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
    Dashboard1.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors) {
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
          ymax: 100,
          ymin: 80,
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
        this.createBarChart('teacher-education', $barData, 'y', ['a'], ['Teachers'], ['#B10DC9']);

        //creating teacher certification chart
        var $teacherCertificationData  = [
            { y: 'None', a: 10 },
            { y: 'NCE', a: 8 },
            { y: 'PGDE', a: 6 },
            { y: 'ADE', a: 1 },
            { y: 'Foreign', a: 3 }
        ];
        this.createBarChart('teacher-certification', $teacherCertificationData, 'y', ['a'], ['Teachers'], ['#188ae2']);

        //creating teacher retention chart
        var $teacherRetentionData  = [
            { y: '2013', a: 95, b: 0, c: 95 },
            { y: '2014', a: 97, b: 0, c: 97 },
            { y: '2015', a: 0, b: 83, c: 83 },
            { y: '2016', a: 0, b: 75, c: 75 }
        ];
        this.createBarChart('teacher-retention', $teacherRetentionData, 'y', ['a','b'], ['Retention Rate','Retention Rate'], ['#2ECC40','#FF4136'], function (index, options, content, row) { return "Retention Rate: " + row.c + "%"; });

        //create line chart
        var $data  = [
            { y: 'Jan', a: 99, b: 95 },
            { y: 'Feb', a: 98, b: 95 },
            { y: 'Mar', a: 93, b: 95 },
            { y: 'Apr', a: 96, b: 95 },
            { y: 'May', a: 99, b: 95 },
            { y: 'Jun', a: 100, b: 95 }
          ];
        this.createLineChart('teacher-attendance', $data, 'y', ['a','b'], ['TAR','Threshold'],['0.9'],['#ffffff'],['#999999'], ['#10c469','red']);

        //creating teacher experience chart
        var $donutData = [
                {label: "0-5 Years", value: 15},
                {label: "6-10 Years", value: 8},
                {label: "10+ Years", value: 5}
            ];
        this.createDonutChart('teacher-experience', $donutData, ['#FF851B', '#2ECC40', "#FF4136"], function (y, data) { return y + ' Teachers'});
    },
    //init
    $.Dashboard1 = new Dashboard1, $.Dashboard1.Constructor = Dashboard1
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.Dashboard1.init();
}(window.jQuery);