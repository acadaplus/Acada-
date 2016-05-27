
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
    Dashboard1.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
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
            ymin:60,
            ymax:100,
            postUnits: '%',
          lineColors: lineColors
        });
    },

    //creates Donut chart
    Dashboard1.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true, //defaulted to true
            colors: colors
        });
    },
    
    
    Dashboard1.prototype.init = function() {

        //creating bar chart
        var $barData  = [
            { y: '2011', a: 535, b: 353 },
            { y: '2012', a: 542, b: 351  },
            { y: '2013', a: 575, b: 390  },
            { y: '2014', a: 608, b: 402  },
            { y: '2015', a: 619, b: 443  },
            { y: '2016', a: 693, b: 439  }
        ];
        this.createBarChart('morris-bar-example', $barData, 'y', ['a','b'], ['Male','Female'], ['#188ae2','#FF851B']);

        //create line chart
        var $data  = [
            { y: '2008', a: 78, b: 80 },
            { y: '2009', a: 75, b: 80 },
            { y: '2010', a: 79, b: 80 },
            { y: '2011', a: 85, b: 80 },
            { y: '2012', a: 95, b: 80 },
            { y: '2013', a: 99, b: 80 },
            { y: '2014', a: 90, b: 80 },
            { y: '2015', a: 85, b: 80 }
          ];
        this.createLineChart('morris-line-example', $data, 'y', ['a','b'], ['Graduation Rate','School Target'],['0.9'],['#ffffff'],['#999999'], ['#10c469','red']);

        //creating donut chart
        var $donutData = [
                {label: "Download Sales", value: 12},
                {label: "In-Store Sales", value: 30},
                {label: "Mail-Order Sales", value: 20}
            ];
        this.createDonutChart('morris-donut-example', $donutData, ['#ff8acc', '#5b69bc', "#35b8e0"]);
    },
    //init
    $.Dashboard1 = new Dashboard1, $.Dashboard1.Constructor = Dashboard1
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.Dashboard1.init();
}(window.jQuery);