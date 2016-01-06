
var SelectedASGPageControllers = angular.module('SelectedASGPageControllers',['googlechart','angular.filter']);
SelectedASGPageControllers.controller('SelectedASGPageController', function($scope,$http,$filter,$rootScope,$location){
  $scope.ASGNames =[];
  $rootScope.ASGTitleName = JSON.parse($rootScope.selectedASG);
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
  var data = $rootScope.groups;      
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
    };      }
    $scope.ASGNames = $filter('unique')($scope.ASGNames);
    $scope.RXHDApplicationName = $filter('unique')($scope.RXHDApplicationName);
    $scope.RXHDApplicationNames = $scope.RXHDApplicationName;
    $scope.RXCoreApplicationName = $filter('unique')($scope.RXCoreApplicationName);
    $scope.GroupApplicationName = $filter('unique')($scope.GroupApplicationName);
    $scope.DentalApplicationName = $filter('unique')($scope.DentalApplicationName);
    $scope.RXHDApplicationNameCount = $scope.RXHDApplicationName.length;
    $scope.RXCoreApplicationNameCount = $scope.RXCoreApplicationName.length;
    $scope.GroupApplicationNameCount = $scope.GroupApplicationName.length;
    $scope.DentalApplicationNameCount = $scope.DentalApplicationName.length;
    $scope.TotalApplicationCount = $scope.RXHDApplicationName.length+$scope.RXCoreApplicationName.length+$scope.GroupApplicationName.length+$scope.DentalApplicationName.length;
    $scope.RXHDBussinessCapability = [];
    $scope.RXHDFunctionality = [];
    $scope.RXHDFunctionalityData = [];
    $scope.RXCoreBussinessCapabilityData = [];
    $scope.GroupBussinessCapabilityData = [];
    $scope.DentalBussinessCapabilityData = [];
    $scope.RXHDApplicationDatas =[];
    $scope.RXCoreApplicationDatas =[];
    $scope.GroupApplicationDatas =[];
    $scope.DentalApplicationDatas =[];
    for (var i = 0; i< $scope.RXHDApplicationName.length; i++) {
      var RXHDApplication = "";
      var RXHDApplication =  $scope.RXHDApplicationName[i];
      $scope.RXHDApplicationNumberOfTestCases = 0;
      $scope.RXHDApplicationFullyAutomated = 0;
      $scope.RXHDApplicationPartiallyAutomated = 0;        
      for (var j = 0; j < data.ASG.length; j++){       
        if(data.ASG[j].Group.Application == RXHDApplication && data.ASG[j].Group.groupName == "Rx-HD"){
          $scope.RXHDBussinessCapability.push(data.ASG[j].Group.businessCapability);
          $scope.RXHDApplicationNumberOfTestCases = $scope.RXHDApplicationNumberOfTestCases + data.ASG[j].Group.numberOfTestCases;
          $scope.RXHDApplicationFullyAutomated = $scope.RXHDApplicationFullyAutomated + data.ASG[j].Group.FullyAutomated;
          $scope.RXHDApplicationPartiallyAutomated = $scope.RXHDApplicationPartiallyAutomated + data.ASG[j].Group.PartiallyAutomated;
        }
      }        
      for(var x=0; x< $scope.RXHDBussinessCapability.length; x++){          
        if(data.ASG[x].Group.businessCapability == $scope.RXHDBussinessCapability[x]){            
          $scope.RXHDFunctionality.push(data.ASG[x].Group.functionality);            
        }
      }
      $scope.RXHDBussinessCapability = $filter('unique')($scope.RXHDBussinessCapability);
      $scope.RXHDFunctionality = $filter('unique')($scope.RXHDFunctionality);
      $scope.RXHDApplicationAutomated = ($scope.RXHDApplicationFullyAutomated/$scope.RXHDApplicationNumberOfTestCases)*100;
      $scope.RXHDApplicationAutomated = $filter('number')($scope.RXHDApplicationAutomated, 0);
      $scope.RXHDBussinessCapabilityData.push([JSON.stringify({"title":RXHDApplication,"l1":$scope.RXHDBussinessCapability.length+' Business Capability',"l2":$scope.RXHDApplicationAutomated+ '% Automated', "l3":$scope.RXHDApplicationNumberOfTestCases+' Test Cases'}),'RX-HD',$scope.RXHDBussinessCapability.length, $scope.RXHDApplicationFullyAutomated/$scope.RXHDApplicationNumberOfTestCases]);        
      $scope.RXHDApplicationDatas.push({"ApplicationName":RXHDApplication,"Total":$scope.RXHDApplicationNumberOfTestCases,"Automated":$scope.RXHDApplicationFullyAutomated, "Manual": $scope.RXHDApplicationPartiallyAutomated})
      $scope.RXHDFunctionalityData.push({"text": $scope.RXHDBussinessCapability, "value": $scope.RXHDBussinessCapability.length});
      $scope.RXHDBussinessCapability = [];
      $scope.RXHDFunctionality = [];
    };
    for (var i = 0; i< $scope.RXCoreApplicationName.length; i++) {
      var RXCoreApplication = "";
      var RXCoreApplication =  $scope.RXCoreApplicationName[i];
      $scope.RXCoreApplicationNumberOfTestCases = 0;
      $scope.RXCoreApplicationFullyAutomated = 0;
      $scope.RXCoreApplicationPartiallyAutomated = 0; 
      for (var j = 0; j < data.ASG.length; j++){
        if(data.ASG[j].Group.Application == RXCoreApplication && data.ASG[j].Group.groupName == "Rx-Core"){
          $scope.RXCoreBussinessCapability.push(data.ASG[j].Group.businessCapability);
          $scope.RXCoreApplicationNumberOfTestCases = $scope.RXCoreApplicationNumberOfTestCases + data.ASG[j].Group.numberOfTestCases;
          $scope.RXCoreApplicationFullyAutomated = $scope.RXCoreApplicationFullyAutomated + data.ASG[j].Group.FullyAutomated;
          $scope.RXCoreApplicationPartiallyAutomated = $scope.RXCoreApplicationPartiallyAutomated + data.ASG[j].Group.PartiallyAutomated;            
        }
      }
      $scope.RXCoreApplicationCoreAutomated = ($scope.RXCoreApplicationFullyAutomated/$scope.RXCoreApplicationNumberOfTestCases)*100;
      $scope.RXCoreApplicationCoreAutomated = $filter('number')($scope.RXCoreApplicationCoreAutomated, 0);
      $scope.RXCoreBussinessCapability = $filter('unique')($scope.RXCoreBussinessCapability);
      $scope.RXCoreBussinessCapabilityData.push([JSON.stringify({"title":RXCoreApplication,"l1":$scope.RXCoreBussinessCapability.length+' Business Capability',"l2":$scope.RXCoreApplicationCoreAutomated+ '% Automated', "l3":$scope.RXHDApplicationNumberOfTestCases+' Test Cases'}),'RX-Core',$scope.RXCoreBussinessCapability.length, $scope.RXCoreApplicationFullyAutomated/$scope.RXCoreApplicationNumberOfTestCases]);
      $scope.RXCoreApplicationDatas.push({"ApplicationName":RXCoreApplication, "Total":$scope.RXCoreApplicationNumberOfTestCases,"Automated":$scope.RXCoreApplicationFullyAutomated, "Manual": $scope.RXCoreApplicationPartiallyAutomated})
      $scope.RXCoreBussinessCapability = [];
    };
    for (var i = 0; i< $scope.GroupApplicationName.length; i++) {
      var GroupApplication = "";
      var GroupApplication =  $scope.GroupApplicationName[i];
      $scope.GroupApplicationNumberOfTestCases = 0;
      $scope.GroupApplicationFullyAutomated = 0;
      $scope.GroupApplicationPartiallyAutomated = 0; 
      for (var j = 0; j < data.ASG.length; j++){
        if(data.ASG[j].Group.Application == GroupApplication && data.ASG[j].Group.groupName == "Group"){
          $scope.GroupBussinessCapability.push(data.ASG[j].Group.businessCapability);
          $scope.GroupApplicationNumberOfTestCases = $scope.GroupApplicationNumberOfTestCases + data.ASG[j].Group.numberOfTestCases;
          $scope.GroupApplicationFullyAutomated = $scope.GroupApplicationFullyAutomated + data.ASG[j].Group.FullyAutomated;
          $scope.GroupApplicationPartiallyAutomated = $scope.GroupApplicationPartiallyAutomated + data.ASG[j].Group.PartiallyAutomated;
        }
      }
      $scope.GroupApplicationAutomated = ($scope.GroupApplicationFullyAutomated/$scope.GroupApplicationNumberOfTestCases)*100;
      $scope.GroupApplicationAutomated = $filter('number')($scope.GroupApplicationAutomated, 0);
      $scope.GroupBussinessCapability = $filter('unique')($scope.GroupBussinessCapability);
      $scope.GroupBussinessCapabilityData.push([JSON.stringify({"title":GroupApplication,"l1":$scope.GroupBussinessCapability.length+' Business Capability',"l2":$scope.GroupApplicationAutomated+ '% Automated', "l3":$scope.GroupApplicationNumberOfTestCases+' Test Cases'}),'Group',$scope.GroupBussinessCapability.length, $scope.GroupApplicationFullyAutomated/$scope.GroupApplicationNumberOfTestCases]);
      $scope.GroupApplicationDatas.push({"ApplicationName":GroupApplication, "Total":$scope.GroupApplicationNumberOfTestCases,"Automated":$scope.GroupApplicationFullyAutomated, "Manual": $scope.GroupApplicationPartiallyAutomated})
      $scope.GroupBussinessCapability = [];
    };
    for (var i = 0; i< $scope.DentalApplicationName.length; i++) {
      var DentalApplication = "";
      var DentalApplication =  $scope.DentalApplicationName[i];
      $scope.DentalApplicationNumberOfTestCases = 0;
      $scope.DentalApplicationFullyAutomated = 0;
      $scope.DentalApplicationPartiallyAutomated = 0; 
      for (var j = 0; j < data.ASG.length; j++){
        if(data.ASG[j].Group.Application == DentalApplication && data.ASG[j].Group.groupName == "Dental"){
          $scope.DentalBussinessCapability.push(data.ASG[j].Group.businessCapability);
          $scope.DentalApplicationNumberOfTestCases = $scope.DentalApplicationNumberOfTestCases + data.ASG[j].Group.numberOfTestCases;
          $scope.DentalApplicationFullyAutomated = $scope.DentalApplicationFullyAutomated + data.ASG[j].Group.FullyAutomated;
          $scope.DentalApplicationPartiallyAutomated = $scope.DentalApplicationPartiallyAutomated + data.ASG[j].Group.PartiallyAutomated;            
        }
      }
      $scope.DentalApplicationAutomated = ($scope.DentalApplicationFullyAutomated/$scope.DentalApplicationNumberOfTestCases)*100;
      $scope.DentalApplicationAutomated = $filter('number')($scope.DentalApplicationAutomated, 0);
      $scope.DentalBussinessCapability = $filter('unique')($scope.DentalBussinessCapability);
      $scope.DentalBussinessCapabilityData.push([JSON.stringify({"title":DentalApplication,"l1":$scope.DentalBussinessCapability.length+' Business Capability',"l2":$scope.DentalApplicationAutomated+ '% Automated', "l3":$scope.DentalApplicationNumberOfTestCases+' Test Cases'}),'Dental',$scope.DentalBussinessCapability.length, $scope.DentalApplicationFullyAutomated/$scope.DentalApplicationNumberOfTestCases]);      
      $scope.DentalApplicationDatas.push({"ApplicationName":DentalApplication, "Total":$scope.DentalApplicationNumberOfTestCases,"Automated":$scope.DentalApplicationFullyAutomated, "Manual": $scope.DentalApplicationPartiallyAutomated})
      $scope.DentalBussinessCapability = [];
    };
    if ($rootScope.selectedASG.contains("RX-HD")){
      $scope.TotalNumberOfTestCases = $scope.RXHDnumberOfTestCases;
      $scope.TotalFullyAutomated = $scope.RXHDFullyAutomated;
      $scope.TotalPartiallyAutomated = $scope.RXHDPartiallyAutomated;
      $scope.chartObject1 = {};
      $scope.chartObject1.type = "TreeMap";
      if($scope.RXHDBussinessCapabilityData.length==1){
        $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
          ['RX-HD',null,0,20],$scope.RXHDBussinessCapabilityData[0], 
          ]);
      }
      if($scope.RXHDBussinessCapabilityData.length==2){
       $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
        ['RX-HD',null,0,20],$scope.RXHDBussinessCapabilityData[0],$scope.RXHDBussinessCapabilityData[1]
        ]);
     }
     if($scope.RXHDBussinessCapabilityData.length==3){
      $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
        ['RX-HD',null,0,20],$scope.RXHDBussinessCapabilityData[0],$scope.RXHDBussinessCapabilityData[1],$scope.RXHDBussinessCapabilityData[2]      
        ]);
    }
    if($scope.RXHDBussinessCapabilityData.length==4){
      $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
        ['RX-HD',null,0,20],$scope.RXHDBussinessCapabilityData[0],$scope.RXHDBussinessCapabilityData[1],$scope.RXHDBussinessCapabilityData[2],
        $scope.RXHDBussinessCapabilityData[3]         
        ]);
    }
    if($scope.RXHDBussinessCapabilityData.length==5){
      $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
        ['RX-HD',null,0,20],$scope.RXHDBussinessCapabilityData[0],$scope.RXHDBussinessCapabilityData[1],$scope.RXHDBussinessCapabilityData[2],
        $scope.RXHDBussinessCapabilityData[3],$scope.RXHDBussinessCapabilityData[4]
        ]);
    }
    if($scope.RXHDBussinessCapabilityData.length==6){
      $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
        ['RX-HD',null,0,20],$scope.RXHDBussinessCapabilityData[0],$scope.RXHDBussinessCapabilityData[1],$scope.RXHDBussinessCapabilityData[2],
        $scope.RXHDBussinessCapabilityData[3],$scope.RXHDBussinessCapabilityData[4],$scope.RXHDBussinessCapabilityData[5]
        ]);
    }
    if($scope.RXHDBussinessCapabilityData.length==7){
      $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
        ['RX-HD',null,0,20],$scope.RXHDBussinessCapabilityData[0],$scope.RXHDBussinessCapabilityData[1],$scope.RXHDBussinessCapabilityData[2],
        $scope.RXHDBussinessCapabilityData[3],$scope.RXHDBussinessCapabilityData[4],$scope.RXHDBussinessCapabilityData[5],$scope.RXHDBussinessCapabilityData[6]
        ]);
    }
    if($scope.RXHDBussinessCapabilityData.length==8){
      $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
        ['RX-HD',null,0,20],$scope.RXHDBussinessCapabilityData[0],$scope.RXHDBussinessCapabilityData[1],$scope.RXHDBussinessCapabilityData[2],
        $scope.RXHDBussinessCapabilityData[3],$scope.RXHDBussinessCapabilityData[4],$scope.RXHDBussinessCapabilityData[5],$scope.RXHDBussinessCapabilityData[6],
        $scope.RXHDBussinessCapabilityData[7]       
        ]);
    }
    if($scope.RXHDBussinessCapabilityData.length==9){
      $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
        ['RX-HD',null,0,20],$scope.RXHDBussinessCapabilityData[0],$scope.RXHDBussinessCapabilityData[1],$scope.RXHDBussinessCapabilityData[2],
        $scope.RXHDBussinessCapabilityData[3],$scope.RXHDBussinessCapabilityData[4],$scope.RXHDBussinessCapabilityData[5],$scope.RXHDBussinessCapabilityData[6],
        $scope.RXHDBussinessCapabilityData[7],$scope.RXHDBussinessCapabilityData[8]
        ]);
    }
    if($scope.RXHDBussinessCapabilityData.length==10){
      $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
        ['RX-HD',null,0,20],$scope.RXHDBussinessCapabilityData[0],$scope.RXHDBussinessCapabilityData[1],$scope.RXHDBussinessCapabilityData[2],
        $scope.RXHDBussinessCapabilityData[3],$scope.RXHDBussinessCapabilityData[4],$scope.RXHDBussinessCapabilityData[5],$scope.RXHDBussinessCapabilityData[6],
        $scope.RXHDBussinessCapabilityData[7],$scope.RXHDBussinessCapabilityData[8],$scope.RXHDBussinessCapabilityData[9]
        ]);
    }
    $scope.chartObject1.options = {
      height: 500,
      width: 600,
      minColor: '#ff0000',
      midColor: '#ffff00',
      maxColor: '#66ff33',
      headerHeight: 0.1,
      fontColor: 'black',          
      highlightOnMouseOver: true,
      textStyle : {color: 'black', bold: 'true', fontSize: '0.1'}
    };
    $scope.OverallChart = {};
    $scope.OverallChart.type = "PieChart";
    var OverallChartData = [];
    OverallChartData.push(
    {
      c: [
      {v: "Automated"}, {v: $scope.RXHDFullyAutomated}
      ]
    },
    {
      c: [
      {v: "Manual"}, {v: $scope.RXHDPartiallyAutomated}
      ]
    }
    );
    $scope.OverallChartData = OverallChartData;    
    $scope.OverallChart.data = {
      "cols": [
      {id: "n1", label: "NumberOfTestCases", type: "string"},
      {id: "f", label: "Automated", type: "number"},
      {id: "p", label: "Manual", type: "number"}
      ], "rows": $scope.OverallChartData
    };      
    $scope.OverallChart.options = {
      'title': 'RX-HD',
      colors:['#8CC63E','#DF6C4F']
    };
  };  
  if ($rootScope.selectedASG.contains("RX-Core")){
    $scope.TotalNumberOfTestCases = $scope.RXCorenumberOfTestCases;
    $scope.TotalFullyAutomated = $scope.RXCoreFullyAutomated;
    $scope.TotalPartiallyAutomated = $scope.RXCorePartiallyAutomated;
    $scope.chartObject1 = {};
    $scope.chartObject1.type = "TreeMap";
    if($scope.RXCoreBussinessCapabilityData.length==1){
      $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
        ['RX-Core',null,0,20],$scope.RXCoreBussinessCapabilityData[0]
        ]);
    }
    if($scope.RXCoreBussinessCapabilityData.length==2){
     $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
      ['RX-Core',null,0,20],$scope.RXCoreBussinessCapabilityData[0],$scope.RXCoreBussinessCapabilityData[1]
      ]);
   }
   if($scope.RXCoreBussinessCapabilityData.length==3){
    $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
      ['RX-Core',null,0,20],$scope.RXCoreBussinessCapabilityData[0],$scope.RXCoreBussinessCapabilityData[1],$scope.RXCoreBussinessCapabilityData[2]      
      ]);
  }
  if($scope.RXCoreBussinessCapabilityData.length==4){
    $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
      ['RX-Core',null,0,20],$scope.RXCoreBussinessCapabilityData[0],$scope.RXCoreBussinessCapabilityData[1],$scope.RXCoreBussinessCapabilityData[2],
      $scope.RXCoreBussinessCapabilityData[3]         
      ]);
  }
  if($scope.RXCoreBussinessCapabilityData.length==5){
    $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
      ['RX-Core',null,0,20],$scope.RXCoreBussinessCapabilityData[0],$scope.RXCoreBussinessCapabilityData[1],$scope.RXCoreBussinessCapabilityData[2],
      $scope.RXCoreBussinessCapabilityData[3],$scope.RXCoreBussinessCapabilityData[4]
      ]);
  }
  if($scope.RXCoreBussinessCapabilityData.length==6){
    $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
      ['RX-Core',null,0,20],$scope.RXCoreBussinessCapabilityData[0],$scope.RXCoreBussinessCapabilityData[1],$scope.RXCoreBussinessCapabilityData[2],
      $scope.RXCoreBussinessCapabilityData[3],$scope.RXCoreBussinessCapabilityData[4],$scope.RXCoreBussinessCapabilityData[5]
      ]);
  }
  if($scope.RXCoreBussinessCapabilityData.length==7){
    $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
      ['RX-Core',null,0,20],$scope.RXCoreBussinessCapabilityData[0],$scope.RXCoreBussinessCapabilityData[1],$scope.RXCoreBussinessCapabilityData[2],
      $scope.RXCoreBussinessCapabilityData[3],$scope.RXCoreBussinessCapabilityData[4],$scope.RXCoreBussinessCapabilityData[5],$scope.RXCoreBussinessCapabilityData[6]
      ]);
  }
  if($scope.RXCoreBussinessCapabilityData.length==8){
    $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
      ['RX-Core',null,0,20],$scope.RXCoreBussinessCapabilityData[0],$scope.RXCoreBussinessCapabilityData[1],$scope.RXCoreBussinessCapabilityData[2],
      $scope.RXCoreBussinessCapabilityData[3],$scope.RXCoreBussinessCapabilityData[4],$scope.RXCoreBussinessCapabilityData[5],$scope.RXCoreBussinessCapabilityData[6],
      $scope.RXCoreBussinessCapabilityData[7]       
      ]);
  }
  if($scope.RXCoreBussinessCapabilityData.length==9){
    $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
      ['RX-Core',null,0,20],$scope.RXCoreBussinessCapabilityData[0],$scope.RXCoreBussinessCapabilityData[1],$scope.RXCoreBussinessCapabilityData[2],
      $scope.RXCoreBussinessCapabilityData[3],$scope.RXCoreBussinessCapabilityData[4],$scope.RXCoreBussinessCapabilityData[5],$scope.RXCoreBussinessCapabilityData[6],
      $scope.RXCoreBussinessCapabilityData[7],$scope.RXCoreBussinessCapabilityData[8]
      ]);
  }
  if($scope.RXCoreBussinessCapabilityData.length==10){
    $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
      ['RX-Core',null,0,20],$scope.RXCoreBussinessCapabilityData[0],$scope.RXCoreBussinessCapabilityData[1],$scope.RXCoreBussinessCapabilityData[2],
      $scope.RXCoreBussinessCapabilityData[3],$scope.RXCoreBussinessCapabilityData[4],$scope.RXCoreBussinessCapabilityData[5],$scope.RXCoreBussinessCapabilityData[6],
      $scope.RXCoreBussinessCapabilityData[7],$scope.RXCoreBussinessCapabilityData[8],$scope.RXCoreBussinessCapabilityData[9]
      ]);
  }
  $scope.chartObject1.options = {
    height: 500,
    width: 600,
    minColor: '#ff0000',
    midColor: '#ffff00',
    maxColor: '#66ff33',
    headerHeight: 0.1,
    fontColor: 'black',          
    highlightOnMouseOver: true,
    textStyle : {color: 'black', bold: 'true', fontSize: '0.1'}
  };
  $scope.OverallChart = {};
  $scope.OverallChart.type = "PieChart";
  var OverallChartData = [];
  OverallChartData.push(
  {
    c: [
    {v: "Automated"}, {v: $scope.RXCoreFullyAutomated}
    ]
  },
  {
    c: [
    {v: "Manual"}, {v: $scope.RXCorePartiallyAutomated}
    ]
  }
  );
  $scope.OverallChartData = OverallChartData;    
  $scope.OverallChart.data = {
    "cols": [
    {id: "n1", label: "NumberOfTestCases", type: "string"},
    {id: "f", label: "Automated", type: "number"},
    {id: "p", label: "Manual", type: "number"}
    ], "rows": $scope.OverallChartData
  };      
  $scope.OverallChart.options = {
    'title': 'RX-Core',
    colors:['#8CC63E','#DF6C4F']
  };
};
if ($rootScope.selectedASG.contains("Group")){
  $scope.TotalNumberOfTestCases = $scope.GroupnumberOfTestCases;
  $scope.TotalFullyAutomated = $scope.GroupFullyAutomated;
  $scope.TotalPartiallyAutomated = $scope.GroupPartiallyAutomated;
  $scope.chartObject1 = {};
  $scope.chartObject1.type = "TreeMap";
  if($scope.GroupBussinessCapabilityData.length==1){
    $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
      ['Group',null,0,20],$scope.GroupBussinessCapabilityData[0]
      ]);
  }
  if($scope.GroupBussinessCapabilityData.length==2){
   $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Group',null,0,20],$scope.GroupBussinessCapabilityData[0],$scope.GroupBussinessCapabilityData[1]
    ]);
 }
 if($scope.GroupBussinessCapabilityData.length==3){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Group',null,0,20],$scope.GroupBussinessCapabilityData[0],$scope.GroupBussinessCapabilityData[1],$scope.GroupBussinessCapabilityData[2]      
    ]);
}
if($scope.GroupBussinessCapabilityData.length==4){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Group',null,0,20],$scope.GroupBussinessCapabilityData[0],$scope.GroupBussinessCapabilityData[1],$scope.GroupBussinessCapabilityData[2],
    $scope.GroupBussinessCapabilityData[3]         
    ]);
}
if($scope.GroupBussinessCapabilityData.length==5){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Group',null,0,20],$scope.GroupBussinessCapabilityData[0],$scope.GroupBussinessCapabilityData[1],$scope.GroupBussinessCapabilityData[2],
    $scope.GroupBussinessCapabilityData[3],$scope.GroupBussinessCapabilityData[4]
    ]);
}
if($scope.GroupBussinessCapabilityData.length==6){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Group',null,0,20],$scope.GroupBussinessCapabilityData[0],$scope.GroupBussinessCapabilityData[1],$scope.GroupBussinessCapabilityData[2],
    $scope.GroupBussinessCapabilityData[3],$scope.GroupBussinessCapabilityData[4],$scope.GroupBussinessCapabilityData[5]
    ]);
}
if($scope.GroupBussinessCapabilityData.length==7){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Group',null,0,20],$scope.GroupBussinessCapabilityData[0],$scope.GroupBussinessCapabilityData[1],$scope.GroupBussinessCapabilityData[2],
    $scope.GroupBussinessCapabilityData[3],$scope.GroupBussinessCapabilityData[4],$scope.GroupBussinessCapabilityData[5],$scope.GroupBussinessCapabilityData[6]
    ]);
}
if($scope.GroupBussinessCapabilityData.length==8){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Group',null,0,20],$scope.GroupBussinessCapabilityData[0],$scope.GroupBussinessCapabilityData[1],$scope.GroupBussinessCapabilityData[2],
    $scope.GroupBussinessCapabilityData[3],$scope.GroupBussinessCapabilityData[4],$scope.GroupBussinessCapabilityData[5],$scope.GroupBussinessCapabilityData[6],
    $scope.GroupBussinessCapabilityData[7]       
    ]);
}
if($scope.GroupBussinessCapabilityData.length==9){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Group',null,0,20],$scope.GroupBussinessCapabilityData[0],$scope.GroupBussinessCapabilityData[1],$scope.GroupBussinessCapabilityData[2],
    $scope.GroupBussinessCapabilityData[3],$scope.GroupBussinessCapabilityData[4],$scope.GroupBussinessCapabilityData[5],$scope.GroupBussinessCapabilityData[6],
    $scope.GroupBussinessCapabilityData[7],$scope.GroupBussinessCapabilityData[8]
    ]);
}
if($scope.GroupBussinessCapabilityData.length==10){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Group',null,0,20],$scope.GroupBussinessCapabilityData[0],$scope.GroupBussinessCapabilityData[1],$scope.GroupBussinessCapabilityData[2],
    $scope.GroupBussinessCapabilityData[3],$scope.GroupBussinessCapabilityData[4],$scope.GroupBussinessCapabilityData[5],$scope.GroupBussinessCapabilityData[6],
    $scope.GroupBussinessCapabilityData[7],$scope.GroupBussinessCapabilityData[8],$scope.GroupBussinessCapabilityData[9]
    ]);
}
$scope.chartObject1.options = {
  height: 500,
  width: 600,
  minColor: '#ff0000',
  midColor: '#ffff00',
  maxColor: '#66ff33',
  headerHeight: 0.1,
  fontColor: 'black',          
  highlightOnMouseOver: true,
  textStyle : {color: 'black', bold: 'true', fontSize: '0.1'}
};
$scope.OverallChart = {};
$scope.OverallChart.type = "PieChart";
var OverallChartData = [];
OverallChartData.push(
{
  c: [
  {v: "Automated"}, {v: $scope.GroupFullyAutomated}
  ]
},
{
  c: [
  {v: "Manual"}, {v: $scope.GroupPartiallyAutomated}
  ]
}
);
$scope.OverallChartData = OverallChartData;    
$scope.OverallChart.data = {
  "cols": [
  {id: "n1", label: "NumberOfTestCases", type: "string"},
  {id: "f", label: "Automated", type: "number"},
  {id: "p", label: "Manual", type: "number"}
  ], "rows": $scope.OverallChartData
};      
$scope.OverallChart.options = {
  'title': 'Group',
  colors:['#8CC63E','#DF6C4F']
};
};
if ($rootScope.selectedASG.contains("Dental")){
  $scope.TotalNumberOfTestCases = $scope.DentalnumberOfTestCases;
  $scope.TotalFullyAutomated = $scope.DentalFullyAutomated;
  $scope.TotalPartiallyAutomated = $scope.DentalPartiallyAutomated;
  $scope.chartObject1 = {};
  $scope.chartObject1.type = "TreeMap";
  if($scope.DentalBussinessCapabilityData.length==1){
    $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
      ['Dental',null,0,20],$scope.DentalBussinessCapabilityData[0]
      ]);
  }
  if($scope.DentalBussinessCapabilityData.length==2){
   $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Dental',null,0,20],$scope.DentalBussinessCapabilityData[0],$scope.DentalBussinessCapabilityData[1]
    ]);
 }
 if($scope.DentalBussinessCapabilityData.length==3){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Dental',null,0,20],$scope.DentalBussinessCapabilityData[0],$scope.DentalBussinessCapabilityData[1],$scope.DentalBussinessCapabilityData[2]      
    ]);
}
if($scope.DentalBussinessCapabilityData.length==4){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Dental',null,0,20],$scope.DentalBussinessCapabilityData[0],$scope.DentalBussinessCapabilityData[1],$scope.DentalBussinessCapabilityData[2],
    $scope.DentalBussinessCapabilityData[3]         
    ]);
}
if($scope.DentalBussinessCapabilityData.length==5){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Dental',null,0,20],$scope.DentalBussinessCapabilityData[0],$scope.DentalBussinessCapabilityData[1],$scope.DentalBussinessCapabilityData[2],
    $scope.DentalBussinessCapabilityData[3],$scope.DentalBussinessCapabilityData[4]
    ]);
}
if($scope.DentalBussinessCapabilityData.length==6){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Dental',null,0,20],$scope.DentalBussinessCapabilityData[0],$scope.DentalBussinessCapabilityData[1],$scope.DentalBussinessCapabilityData[2],
    $scope.DentalBussinessCapabilityData[3],$scope.DentalBussinessCapabilityData[4],$scope.DentalBussinessCapabilityData[5]
    ]);
}
if($scope.DentalBussinessCapabilityData.length==7){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Dental',null,0,20],$scope.DentalBussinessCapabilityData[0],$scope.DentalBussinessCapabilityData[1],$scope.DentalBussinessCapabilityData[2],
    $scope.DentalBussinessCapabilityData[3],$scope.DentalBussinessCapabilityData[4],$scope.DentalBussinessCapabilityData[5],$scope.DentalBussinessCapabilityData[6]
    ]);
}
if($scope.DentalBussinessCapabilityData.length==8){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Dental',null,0,20],$scope.DentalBussinessCapabilityData[0],$scope.DentalBussinessCapabilityData[1],$scope.DentalBussinessCapabilityData[2],
    $scope.DentalBussinessCapabilityData[3],$scope.DentalBussinessCapabilityData[4],$scope.DentalBussinessCapabilityData[5],$scope.DentalBussinessCapabilityData[6],
    $scope.DentalBussinessCapabilityData[7]       
    ]);
}
if($scope.DentalBussinessCapabilityData.length==9){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Dental',null,0,20],$scope.DentalBussinessCapabilityData[0],$scope.DentalBussinessCapabilityData[1],$scope.DentalBussinessCapabilityData[2],
    $scope.DentalBussinessCapabilityData[3],$scope.DentalBussinessCapabilityData[4],$scope.DentalBussinessCapabilityData[5],$scope.DentalBussinessCapabilityData[6],
    $scope.DentalBussinessCapabilityData[7],$scope.DentalBussinessCapabilityData[8]
    ]);
}
if($scope.DentalBussinessCapabilityData.length==10){
  $scope.chartObject1.data = ([['ApplicationName', 'ASGName', 'BusinessCount','RAG'],
    ['Dental',null,0,20],$scope.DentalBussinessCapabilityData[0],$scope.DentalBussinessCapabilityData[1],$scope.DentalBussinessCapabilityData[2],
    $scope.DentalBussinessCapabilityData[3],$scope.DentalBussinessCapabilityData[4],$scope.DentalBussinessCapabilityData[5],$scope.DentalBussinessCapabilityData[6],
    $scope.DentalBussinessCapabilityData[7],$scope.DentalBussinessCapabilityData[8],$scope.DentalBussinessCapabilityData[9]
    ]);
}
$scope.chartObject1.options = {
  height: 500,
  width: 600,
  minColor: '#ff0000',
  midColor: '#ffff00',
  maxColor: '#66ff33',
  headerHeight: 0.1,
  fontColor: 'black',          
  highlightOnMouseOver: true,
  textStyle : {color: 'black', bold: 'true', fontSize: '0.1'}
};
$scope.OverallChart = {};
$scope.OverallChart.type = "PieChart";
var OverallChartData = [];
OverallChartData.push(
{
  c: [
  {v: "Automated"}, {v: $scope.DentalFullyAutomated}
  ]
},
{
  c: [
  {v: "Manual"}, {v: $scope.DentalPartiallyAutomated}
  ]
}
);
$scope.OverallChartData = OverallChartData;    
$scope.OverallChart.data = {
  "cols": [
  {id: "n1", label: "NumberOfTestCases", type: "string"},
  {id: "f", label: "Automated", type: "number"},
  {id: "p", label: "Manual", type: "number"}
  ], "rows": $scope.OverallChartData
};      
$scope.OverallChart.options = {
  'title': 'Dental',
  colors:['#8CC63E','#DF6C4F']
};
};
$scope.backBtn = function(){
  $location.path("/index");
}
$scope.toolTipData = function toolTip(row){
  for(var i=0;i<data.ASG.length;i++){
    if(data.ASG[i].Group.Application.contains(row) && data.ASG[i].Group.groupName.toUpperCase().contains($rootScope.selectedASG.toUpperCase())){          
      $scope.ApplicationNumberOfTestCases = $scope.ApplicationNumberOfTestCases + data.ASG[i].Group.numberOfTestCases;
      $scope.ApplicationFullyAutomated = $scope.ApplicationFullyAutomated + data.ASG[i].Group.FullyAutomated;
      $scope.ApplicationPartiallyAutomated = $scope.ApplicationPartiallyAutomated + data.ASG[i].Group.PartiallyAutomated;      
    }
  }
  return $scope.ApplicationNumberOfTestCases;
}
function showFullTooltip(row, size, value, column) {
  return '<div ng-app="" style="background:lightblue; padding:10px; border-style:solid; width: ">' +
  '<span style="font-family:Arial; font-size: 11px;">' + size + ' Business Capabilities</span><br>' +  		        
  '<span style="font-family:Arial; font-size: 11px;">Automated: ' + $filter('number')(($scope.chartObject1.data[row+1][3])*100,0) +'%'+  '</span><br>' +
  ' </div>';
}

$scope.seriesSelected = function(selectedItem) {        
  var col = selectedItem.row;        
  $rootScope.selectedApplication = $scope.chartObject1.data[col+1][0];
  $location.path("/SelectedApplicationPage");
}

$scope._createSVGLabel1 = function (d)
{
  var xmlns = "http://www.w3.org/2000/svg";
  var t = document.createElementNS(xmlns,"text");
  t.setAttributeNS(null, "fill", "#000000");
  t.setAttributeNS(null, "stroke-width", "0");
  t.setAttributeNS(null, "stroke", "none");
  t.setAttributeNS(null, "font-weight", d.fontWeight ? d.fontWeight : 'normal');
  t.setAttributeNS(null, "font-size", "16");
  t.setAttributeNS(null, "font-family", "AccentureFont");
  t.setAttributeNS(null, "y", d.y);
  t.setAttributeNS(null, "x", d.x);
  t.setAttributeNS(null, "text-anchor", "middle");         
  t.textContent = d.text;
  return t;
};

$scope.onChartReady = function()
{  
  var gNodes = $("svg g");
  var n = gNodes.length;
  gNodes.each(function(i, g){
    try
    {            
      if(i>=n-1)
        return;
        //Create text node and append
        //
        //Get content label node ref
        var titleText = $(g).find("text");            
        //Get the data 
        var data = JSON.parse($(titleText).text());            
        $(titleText).remove();
        if(data.l2.contains("0")||data.l2.contains("1")||data.l2.contains("2")||data.l2.contains("3")||data.l2.contains("4")
          ||data.l2.contains("5")||data.l2.contains("6")||data.l2.contains("7")||data.l2.contains("8")||data.l2.contains("9")){
          $(g).find("rect").css('fill', '#FF0000');
      }
      if(data.l2.contains("10")||data.l2.contains("11")||data.l2.contains("12")||data.l2.contains("13")||data.l2.contains("14")
        ||data.l2.contains("15")||data.l2.contains("16")||data.l2.contains("17")||data.l2.contains("18")||data.l2.contains("19")){
        $(g).find("rect").css('fill', '#FF3300');
    }
    if(data.l2.contains("20")||data.l2.contains("21")||data.l2.contains("22")||data.l2.contains("23")||data.l2.contains("24")
      ||data.l2.contains("25")||data.l2.contains("26")||data.l2.contains("27")||data.l2.contains("28")||data.l2.contains("29")){
      $(g).find("rect").css('fill', '#FF6600');
  }
  if(data.l2.contains("30")||data.l2.contains("31")||data.l2.contains("32")||data.l2.contains("33")||data.l2.contains("34")
    ||data.l2.contains("35")||data.l2.contains("36")||data.l2.contains("37")||data.l2.contains("38")||data.l2.contains("39")){
    $(g).find("rect").css('fill', '#FF9900');
}
if(data.l2.contains("40")||data.l2.contains("41")||data.l2.contains("42")||data.l2.contains("43")||data.l2.contains("44")
  ||data.l2.contains("45")||data.l2.contains("46")||data.l2.contains("47")||data.l2.contains("48")||data.l2.contains("49")){
  $(g).find("rect").css('fill', '#FFCC00');
}
if(data.l2.contains("50")||data.l2.contains("51")||data.l2.contains("52")||data.l2.contains("53")||data.l2.contains("54")
  ||data.l2.contains("55")||data.l2.contains("56")||data.l2.contains("57")||data.l2.contains("58")||data.l2.contains("59")){
  $(g).find("rect").css('fill', '#FFFF00');
}
if(data.l2.contains("60")||data.l2.contains("61")||data.l2.contains("62")||data.l2.contains("63")||data.l2.contains("64")
  ||data.l2.contains("65")||data.l2.contains("66")||data.l2.contains("67")||data.l2.contains("68")||data.l2.contains("69")){
  $(g).find("rect").css('fill', '#FFFF0A');
}
if(data.l2.contains("70")||data.l2.contains("71")||data.l2.contains("72")||data.l2.contains("73")||data.l2.contains("74")
  ||data.l2.contains("75")||data.l2.contains("76")||data.l2.contains("77")||data.l2.contains("78")||data.l2.contains("79")){
  $(g).find("rect").css('fill', '#C2FF14');
}
if(data.l2.contains("80")||data.l2.contains("81")||data.l2.contains("82")||data.l2.contains("83")||data.l2.contains("84")
  ||data.l2.contains("85")||data.l2.contains("86")||data.l2.contains("87")||data.l2.contains("88")||data.l2.contains("89")){
  $(g).find("rect").css('fill', '#A4FF1E');
}
if(data.l2.contains("90")||data.l2.contains("91")||data.l2.contains("92")||data.l2.contains("93")||data.l2.contains("94")
  ||data.l2.contains("95")||data.l2.contains("96")||data.l2.contains("97")||data.l2.contains("98")||data.l2.contains("99")){
  $(g).find("rect").css('fill', '#85FF28');
}
if(data.l2.contains("100")){
  $(g).find("rect").css('fill', '#66FF33');
}
        //Modify the title (increase font size, change the text...)
        // $(titleText).text(data.title);
        // $(titleText).attr("font-size", "12");
        //Create SVG labels
        var t = $scope._createSVGLabel1({text:data.title, x:titleText.attr("x"), y:parseFloat(titleText.attr("y"))-40, fontWeight:'bold'});
        $(g).append($(t));
        t = $scope._createSVGLabel1({text:data.l1, x:titleText.attr("x"), y:parseFloat(titleText.attr("y"))-20});
        $(g).append($(t));
        t= $scope._createSVGLabel1({text:data.l3, x:titleText.attr("x"), y:parseFloat(titleText.attr("y"))});
        $(g).append($(t));
        t = $scope._createSVGLabel1({text:data.l2, x:titleText.attr("x"), y:parseFloat(titleText.attr("y"))+20});
        $(g).append($(t));            
      }
      catch(e)
      {        
      }          
    })
}
$scope.ApplicationNumberOfTestCases = 0;
$scope.ApplicationFullyAutomated = 0;
$scope.ApplicationPartiallyAutomated = 0; 
for(var i=0;i<data.ASG.length;i++){        
  for(var j=0;j<$scope.RXHDApplicationName.length;j++){
    if(data.ASG[i].Group.groupName.toUpperCase().contains($rootScope.selectedASG.toUpperCase())){
      $scope.ApplicationNumberOfTestCases = $scope.ApplicationNumberOfTestCases + data.ASG[i].Group.numberOfTestCases;
      $scope.ApplicationFullyAutomated = $scope.ApplicationFullyAutomated + data.ASG[i].Group.FullyAutomated;
      $scope.ApplicationPartiallyAutomated = $scope.ApplicationPartiallyAutomated + data.ASG[i].Group.PartiallyAutomated;
    }
  }      
}
var tableChartData = [];
tableChartData.push(
{
  c: [
  {v: $scope.DentalFullyAutomated}
  ]
},
{
  c: [
  {v: $scope.DentalPartiallyAutomated}
  ]
},
{
  c: [
  {v: $scope.DentalPartiallyAutomated}
  ]
},
{
  c: [
  {v: $scope.DentalPartiallyAutomated}
  ]
}
);    
});

/**
* Created by saravana.sivakumar on 11/23/2015.
*/
