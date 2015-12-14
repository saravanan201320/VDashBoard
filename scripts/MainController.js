
var mainPageControllers = angular.module('mainPageControllers',['googlechart','angular.filter']);

mainPageControllers.controller('mainPageController', function($scope,$http,$filter,$rootScope,$location){
  $scope.ASGNames =[];

  $scope.show = function(){
    console.log("hiiiii")
  }

  $scope.RXHDApplicationName = [];
  $scope.RXHDBussinessCapabilityData = [];

  $scope.RXCoreApplicationName = [];
  $scope.RXCoreBussinessCapability = [];

  $scope.GroupApplicationName = [];
  $scope.GroupBussinessCapability = [];

  $scope.DentalApplicationName = [];
  $scope.DentalBussinessCapability = [];

  $scope.TotalNumberOfTestCases = 0;
  $scope.TotalFullyAutomated = 0;
  $scope.TotalPartiallyAutomated = 0;

  $scope.RXHDnumberOfTestCases = 0;
  $scope.RXHDFullyAutomated = 0;
  $scope.RXHDPartiallyAutomated = 0;

  $scope.RXCorenumberOfTestCases = 0;
  $scope.RXCoreFullyAutomated = 0;
  $scope.RXCorePartiallyAutomated = 0;

  $scope.GroupnumberOfTestCases = 0;
  $scope.GroupFullyAutomated = 0;
  $scope.GroupPartiallyAutomated = 0;

  $scope.DentalnumberOfTestCases = 0;
  $scope.DentalFullyAutomated = 0;
  $scope.DentalPartiallyAutomated = 0;

  var getJSONData = $http.get("SampleData.json");
  getJSONData.success(function (data) {
    $rootScope.groups = data;
    console.log($rootScope.groups);
    for (var i = 0; i < data.ASG.length; i++){
      $scope.ASGNames.push(data.ASG[i].Group.groupName);
      if (data.ASG[i].Group.groupName == "Rx-HD") {
        $scope.RXHDApplicationName.push(data.ASG[i].Group.Application);
        $scope.RXHDnumberOfTestCases = $scope.RXHDnumberOfTestCases + data.ASG[i].Group.numberOfTestCases;
        $scope.RXHDFullyAutomated = $scope.RXHDFullyAutomated + data.ASG[i].Group.FullyAutomated;
        $scope.RXHDPartiallyAutomated = $scope.RXHDPartiallyAutomated + data.ASG[i].Group.PartiallyAutomated;
      };
      if (data.ASG[i].Group.groupName == "Rx-Core") {
        $scope.RXCoreApplicationName.push(data.ASG[i].Group.Application);
        $scope.RXCorenumberOfTestCases = $scope.RXCorenumberOfTestCases + data.ASG[i].Group.numberOfTestCases;
        $scope.RXCoreFullyAutomated = $scope.RXCoreFullyAutomated + data.ASG[i].Group.FullyAutomated;
        $scope.RXCorePartiallyAutomated = $scope.RXCorePartiallyAutomated + data.ASG[i].Group.PartiallyAutomated;
      };
      if (data.ASG[i].Group.groupName == "Group") {
        $scope.GroupApplicationName.push(data.ASG[i].Group.Application);
        $scope.GroupnumberOfTestCases = $scope.GroupnumberOfTestCases + data.ASG[i].Group.numberOfTestCases;
        $scope.GroupFullyAutomated = $scope.GroupFullyAutomated + data.ASG[i].Group.FullyAutomated;
        $scope.GroupPartiallyAutomated = $scope.GroupPartiallyAutomated + data.ASG[i].Group.PartiallyAutomated;
      };
      if (data.ASG[i].Group.groupName == "Dental") {
        $scope.DentalApplicationName.push(data.ASG[i].Group.Application);
        $scope.DentalnumberOfTestCases = $scope.DentalnumberOfTestCases + data.ASG[i].Group.numberOfTestCases;
        $scope.DentalFullyAutomated = $scope.DentalFullyAutomated + data.ASG[i].Group.FullyAutomated;
        $scope.DentalPartiallyAutomated = $scope.DentalPartiallyAutomated + data.ASG[i].Group.PartiallyAutomated;
      };
    }

    $scope.TotalNumberOfTestCases = $scope.RXHDnumberOfTestCases + $scope.RXCorenumberOfTestCases + $scope.GroupnumberOfTestCases + $scope.DentalnumberOfTestCases ;
    $scope.TotalFullyAutomated = $scope.RXHDFullyAutomated + $scope.RXCoreFullyAutomated + $scope.GroupFullyAutomated + $scope.DentalFullyAutomated;
    $scope.TotalPartiallyAutomated = $scope.RXHDPartiallyAutomated + $scope.RXCorePartiallyAutomated + $scope.GroupPartiallyAutomated + $scope.DentalPartiallyAutomated;
    $scope.ASGNames = $filter('unique')($scope.ASGNames);
    $scope.RXHDApplicationName = $filter('unique')($scope.RXHDApplicationName);
    $scope.RXCoreApplicationName = $filter('unique')($scope.RXCoreApplicationName);
    $scope.GroupApplicationName = $filter('unique')($scope.GroupApplicationName);
    $scope.DentalApplicationName = $filter('unique')($scope.DentalApplicationName);
    $scope.RXHDApplicationNameCount = $scope.RXHDApplicationName.length;
    $scope.RXCoreApplicationNameCount = $scope.RXCoreApplicationName.length;
    $scope.GroupApplicationNameCount = $scope.GroupApplicationName.length;
    $scope.DentalApplicationNameCount = $scope.DentalApplicationName.length;
    $scope.TotalApplicationCount = $scope.RXHDApplicationName.length+$scope.RXCoreApplicationName.length+$scope.GroupApplicationName.length+$scope.DentalApplicationName.length;

    $scope.ASGData = [{"Rx-HD" : $scope.RXHDApplicationName.length,
      "Rx-Core": $scope.RXCoreApplicationName.length,
      "Group":$scope.GroupApplicationName.length,
      "Dental":$scope.DentalApplicationName.length,
      "Total": $scope.RXHDApplicationName.length+$scope.RXCoreApplicationName.length+$scope.GroupApplicationName.length+$scope.DentalApplicationName.length}];
    // $scope.RXHDWidth = ($scope.RXHDApplicationNameCount/$scope.TotalApplicationCount)*100+"%";
    // $scope.RXCoreWidth = ($scope.RXCoreApplicationNameCount/$scope.TotalApplicationCount)*100+"%";
    // $scope.GroupWidth = ($scope.GroupApplicationNameCount/$scope.TotalApplicationCount)*100+"%";
    // $scope.DentalWidth= ($scope.DentalApplicationNameCount/$scope.TotalApplicationCount)*100+"%";
    // $scope.RXHDHeight = ($scope.RXHDApplicationNameCount/$scope.TotalApplicationCount)*750+"px";
    // $scope.RXCoreHeight = ($scope.RXCoreApplicationNameCount/$scope.TotalApplicationCount)*750+"px";
    // $scope.GroupHeight = ($scope.GroupApplicationNameCount/$scope.TotalApplicationCount)*750+"px";
    // $scope.DentalHeight= ($scope.DentalApplicationNameCount/$scope.TotalApplicationCount)*750+"px";


    $scope.RXHDBussinessCapability = [];
    $scope.RXHDFunctionality = [];
    $scope.RXHDFunctionalityData = [];
    $scope.RXCoreBussinessCapabilityData = [];
    $scope.GroupBussinessCapabilityData = [];
    $scope.DentalBussinessCapabilityData = [];


    for (var i = 0; i< $scope.RXHDApplicationName.length; i++) {
      var RXHDApplication = "";
      var RXHDApplication =  $scope.RXHDApplicationName[i];
      //console.log("==========================="+[i]);
      for (var j = 0; j < data.ASG.length; j++){
        if(data.ASG[j].Group.Application == RXHDApplication && data.ASG[j].Group.groupName == "Rx-HD"){
          $scope.RXHDBussinessCapability.push(data.ASG[j].Group.businessCapability);
        }
      }

      //$scope.RXHDBussinessCapability = $filter('orderBy')($scope.RXHDBussinessCapability);
      //console.log("------------>"+$scope.RXHDBussinessCapability.length);
      for(var x=0; x< $scope.RXHDBussinessCapability.length; x++){
        for (var y = 0; y < data.ASG.length; y++){
          //console.log(data.ASG[y].Group.Application);
         // console.log(RXHDApplication);
        }
        //console.log("businessCapability :"+data.ASG[x].Group.businessCapability);
        //console.log("businessCapability1 :"+$scope.RXHDBussinessCapability[x]);
       if(data.ASG[x].Group.businessCapability == $scope.RXHDBussinessCapability[x]){
          $scope.RXHDFunctionality.push(data.ASG[x].Group.functionality);
          //console.log($scope.RXHDFunctionality);
        }
      }

      $scope.RXHDBussinessCapability = $filter('unique')($scope.RXHDBussinessCapability);
      $scope.RXHDFunctionality = $filter('unique')($scope.RXHDFunctionality);
      //console.log("RXHDBussinessCapability :"+ $scope.RXHDBussinessCapability+" length :"+ $scope.RXHDBussinessCapability.length);
      //console.log("RXHDFunctionality :"+ $scope.RXHDFunctionality+" length :"+ $scope.RXHDFunctionality.length);
      $scope.RXHDBussinessCapabilityData.push({"text": RXHDApplication, "value": $scope.RXHDBussinessCapability.length});
      $scope.RXHDFunctionalityData.push({"text": $scope.RXHDBussinessCapability, "value": $scope.RXHDBussinessCapability.length});
      $scope.RXHDBussinessCapability = [];
      $scope.RXHDFunctionality = [];
    };

    for (var i = 0; i< $scope.RXCoreApplicationName.length; i++) {
      var RXCoreApplication = "";
      var RXCoreApplication =  $scope.RXCoreApplicationName[i];
      for (var j = 0; j < data.ASG.length; j++){
        if(data.ASG[j].Group.Application == RXCoreApplication && data.ASG[j].Group.groupName == "Rx-Core"){
          $scope.RXCoreBussinessCapability.push(data.ASG[j].Group.businessCapability);
          // console.log($scope.RXHDBussinessCapability);
        }
      }
      $scope.RXCoreBussinessCapability = $filter('unique')($scope.RXCoreBussinessCapability);
      $scope.RXCoreBussinessCapabilityData.push({"text": RXCoreApplication, "value": $scope.RXCoreBussinessCapability.length});
      $scope.RXCoreBussinessCapability = [];
    };

    for (var i = 0; i< $scope.GroupApplicationName.length; i++) {
      var GroupApplication = "";
      var GroupApplication =  $scope.GroupApplicationName[i];
      for (var j = 0; j < data.ASG.length; j++){
        if(data.ASG[j].Group.Application == GroupApplication && data.ASG[j].Group.groupName == "Group"){
          $scope.GroupBussinessCapability.push(data.ASG[j].Group.businessCapability);
          // console.log($scope.RXHDBussinessCapability);
        }
      }
      $scope.GroupBussinessCapability = $filter('unique')($scope.GroupBussinessCapability);
      $scope.GroupBussinessCapabilityData.push({"text": GroupApplication, "value": $scope.GroupBussinessCapability.length});
      $scope.GroupBussinessCapability = [];
    };

    for (var i = 0; i< $scope.DentalApplicationName.length; i++) {
      var DentalApplication = "";
      var DentalApplication =  $scope.DentalApplicationName[i];
      for (var j = 0; j < data.ASG.length; j++){
        if(data.ASG[j].Group.Application == DentalApplication && data.ASG[j].Group.groupName == "Dental"){
          $scope.DentalBussinessCapability.push(data.ASG[j].Group.businessCapability);
          // console.log($scope.RXHDBussinessCapability);
        }
      }

      $scope.DentalBussinessCapability = $filter('unique')($scope.DentalBussinessCapability);
      $scope.DentalBussinessCapabilityData.push({"text": DentalApplication, "value": $scope.DentalBussinessCapability.length});
      $scope.DentalBussinessCapability = [];
    };
    // $scope.RXHDBussinessCapability.push([{"applicationName": $scope.RXHDApplicationName, "businessCount": $scope.}])

    $scope.myObj = {
      "graphset":[
        {
          "type":"treemap",
          "plotarea":{
            "margin":"0 0 30 0"
          },
          "tooltip":{
          },
          "options":{
          },
          "series":[
            {
              "text":"ASG",
              "children":[
                {
                  "text":"RX-HD "+ "Overall Test Cases: "+ $scope.RXHDBussinessCapability.length,
                  "children":$scope.RXHDBussinessCapabilityData
                },
                {
                  "text":"RX-Core",
                  "children":$scope.RXCoreBussinessCapabilityData
                },
                {
                  "text":"Group",
                  "children":$scope.GroupBussinessCapabilityData
                },
                {
                  "text":"Dental",
                  "children":$scope.DentalBussinessCapabilityData
                }
              ]
            }
          ]
        }
      ]
    };

    $scope.chartObject = {};
    $scope.chartObject.type = "TreeMap";
    $scope.seriesSelected = function(selectedItem) {
      console.log(selectedItem);
      var col = selectedItem.row;
      console.log($scope.chartObject.data[col+1][0]);
      $rootScope.selectedASG = $scope.chartObject.data[col+1][0];
      $location.path("/SelectedASGPage");
    }
    
    $scope.chartObject.data = ([['ASG', 'ASG Name', 'Application Count'],
          ['ASG',    null,                 0                            ],
          ['RX-HD',   'ASG',             $scope.RXHDApplicationName.length               ],
          ['RX-Core',    'ASG',             2                             ],
          ['Group',      'ASG',             $scope.GroupApplicationName.length                             ],
          ['Dental', 'ASG',             $scope.DentalApplicationName.length                          ]
    ]);

    $scope.chartObject.options = {
        height: 400,
        width: 600,
        minColor: 'lightblue',
        midColor: 'lightblue',
        maxColor: 'lightblue',
        headerHeight: 25,
        fontColor: 'black',
        generateTooltip: showFullTooltip,
        highlightOnMouseOver: true
    };

  console.log("===>"+$scope.chartObject.data);
    function showFullTooltip(row, size, value, column) {
    return '<div style="background:#fd9; padding:10px; border-style:solid">' +
           '<span style="font-family:Courier"><b> Application Count : ' + size + '</span><br>' +
           ' </div>';
  }

  $scope.OverallChart = {};
    $scope.OverallChart.type = "PieChart";
    var OverallChartData = [];
    OverallChartData.push(
      //{
      //  c: [
      //    {v: "Test Cases"}, {v: $scope.GroupnumberOfTestCases}
      //  ]
      //},
      {
        c: [
          {v: "Automated"}, {v: $scope.TotalFullyAutomated}
        ]
      },
      {
        c: [
          {v: "Manual"}, {v: $scope.TotalPartiallyAutomated}
        ]
      }
    );
    
    $scope.OverallChartData = OverallChartData;
    
    $scope.OverallChart.data = {
      "cols": [
        {id: "n1", label: "NumberOfTestCases", type: "string"},

        //{id: "n", label: "NumberOfTestCases", type: "number"},
        {id: "f", label: "Automated", type: "number"},
        {id: "p", label: "Manual", type: "number"}
      ], "rows": $scope.OverallChartData
    };
    console.log($scope.OverallChart.data);
    $scope.OverallChart.options = {
      'title': 'ASG'
    };
  });
});


/**
 * Created by saravana.sivakumar on 11/23/2015.
 */
