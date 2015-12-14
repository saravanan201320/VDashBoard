angular.module('myApp', ['googlechart'])
    .controller('myController', function($scope) {
        var chart1 = {};
        chart1.type = "LineChart";
        chart1.displayed = false;
        chart1.data = {
            "cols": [
                { id: "month",      label: "Month",    type: "string"},
                { id: "laptop-id",  label: "Laptop",   type: "number"},
                { id: "desktop-id", label: "Desktop",  type: "number"},
                { id: "server-id",  label: "Server",   type: "number"},
                { id: "cost-id",    label: "Shipping",  type: "number"}
            ],
            "rows": [
                { c: [
                    { v: "January"},
                    { v: 19, f: "42 items"},
                    { v: 12, f: "Ony 12 items"},
                    { v: 7,  f: "7 servers"},
                    { v: 4}
                ]
                },
                { c: [
                    { v: "February"},
                    { v: 13},
                    { v: 1, f: "1 unit (Out of stock this month)"},
                    { v: 12},
                    { v: 2}
                ]

                },
                { c: [
                    { v: "March"},
                    { v: 24},
                    { v: 5},
                    { v: 11},
                    { v: 6}
                ]
                }]
        };
        chart1.options = {
            "title": "Sales per month",
            "colors": ['#0000FF', '#009900', '#CC0000', '#DD9900'],
            //defaultColors property is not part of the strandard options
            //object.  I've added it here to keep a backup of the original
            //colors to call on when re-enabling a series.
            "defaultColors": ['#0000FF', '#009900', '#CC0000', '#DD9900'],
            "isStacked": "true",
            "fill": 20,
            "displayExactValues": true,
            "vAxis": {
                "title": "Sales unit",
                "gridlines": {
                    "count": 10
                }
            },
            "hAxis": {
                "title": "Date"
            }
        };

        //we initilize a basic view here, which the series
        //hiding code will interact with.
        chart1.view = {
            columns: [0, 1, 2, 3, 4]
        };
        $scope.myChart = chart1;

        $scope.seriesSelected = function(selectedItem) {
            console.log(selectedItem);
            var col = selectedItem.column;
            console.log($scope.myChart.data.cols[col].label)
            //If there's no row value, user clicked the legend.
            if (selectedItem.row === null) {
                //If true, the chart series is currently displayed normally.  Hide it.
                if ($scope.myChart.view.columns[col] == col) {
                    //Replace the integer value with this object initializer.
                    $scope.myChart.view.columns[col] = {
                        //Take the label value and type from the existing column.
                        label: $scope.myChart.data.cols[col].label,
                        type: $scope.myChart.data.cols[col].type,
                        //makes the new column a calculated column based on a function that returns null,
                        //effectively hiding the series.
                        calc: function() {
                            return null;
                        }
                    };
                    //Change the series color to grey to indicate that it is hidden.
                    //Uses color[col-1] instead of colors[col] because the domain column (in my case the date values)
                    //does not need a color value.
                    $scope.myChart.options.colors[col - 1] = '#CCCCCC';
                }
                //series is currently hidden, bring it back.
                else {
                    //Simply reassigning the integer column index value removes the calculated column.
                    $scope.myChart.view.columns[col] = col;
                    //I had the original colors already backed up in another array.  If you want to do this in a more
                    //dynamic way (say if the user could change colors for example), then you'd need to have them backed
                    //up when you switch to grey.
                    $scope.myChart.options.colors[col - 1] = $scope.myChart.options.defaultColors[col - 1];
                }
            }
        };
    });