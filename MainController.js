
  var mainPageControllers = angular.module('mainPageControllers',['googlechart','angular.filter','ngSanitize']);
  mainPageControllers.controller('mainPageController', function($scope,$http,$filter,$rootScope,$location,$sce){
    $scope.ASGNames =[];
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
    var getJSONData = $http({
      method: "GET",
      url: "DashBordData.json",
      headers: {
                    'Accept': 'application/json, text/javascript',
                        'Content-Type': 'application/json; charset=utf-8'
                }     
    });
    getJSONData.success(function (data) {
      $rootScope.groups = data;    
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
      $scope.RXHDBussinessCapability = [];
      $scope.RXHDFunctionality = [];
      $scope.RXHDFunctionalityData = [];
      $scope.RXCoreBussinessCapabilityData = [];
      $scope.GroupBussinessCapabilityData = [];
      $scope.DentalBussinessCapabilityData = [];
      for (var i = 0; i< $scope.RXHDApplicationName.length; i++) {
        var RXHDApplication = "";
        var RXHDApplication =  $scope.RXHDApplicationName[i];        
        for (var j = 0; j < data.ASG.length; j++){
          if(data.ASG[j].Group.Application == RXHDApplication && data.ASG[j].Group.groupName == "Rx-HD"){
            $scope.RXHDBussinessCapability.push(data.ASG[j].Group.businessCapability);
          }
        }
        for(var x=0; x< $scope.RXHDBussinessCapability.length; x++){
          for (var y = 0; y < data.ASG.length; y++){
          }          
         if(data.ASG[x].Group.businessCapability == $scope.RXHDBussinessCapability[x]){
            $scope.RXHDFunctionality.push(data.ASG[x].Group.functionality);          
          }
        }
        $scope.RXHDBussinessCapability = $filter('unique')($scope.RXHDBussinessCapability);
        $scope.RXHDFunctionality = $filter('unique')($scope.RXHDFunctionality);
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
          }
        }
        $scope.DentalBussinessCapability = $filter('unique')($scope.DentalBussinessCapability);
        $scope.DentalBussinessCapabilityData.push({"text": DentalApplication, "value": $scope.DentalBussinessCapability.length});
        $scope.DentalBussinessCapability = [];
      };      
      $scope.chartObject = {};
      $scope.chartObject.type = "TreeMap";
      $scope.seriesSelected = function(selectedItem) {      
        var col = selectedItem.row;      
        $rootScope.selectedASG = $scope.chartObject.data[col+1][0];
        $location.path("/SelectedASGPage");
      }
      $scope._createSVGLabel = function (d)
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
            //Create SVG labels
            var t = $scope._createSVGLabel({text:data.title, x:titleText.attr("x"), y:parseFloat(titleText.attr("y"))-40, fontWeight:'bold'});
            $(g).append($(t));
            t = $scope._createSVGLabel({text:data.l3, x:titleText.attr("x"), y:parseFloat(titleText.attr("y"))-20});
            $(g).append($(t));
            t= $scope._createSVGLabel({text:data.l4, x:titleText.attr("x"), y:parseFloat(titleText.attr("y"))});
            $(g).append($(t));
            t = $scope._createSVGLabel({text:data.l2, x:titleText.attr("x"), y:parseFloat(titleText.attr("y"))+20});
            $(g).append($(t));         
          }
          catch(e)
          {
          }        
        })
      }
      $scope.RXHDAutomated = ($scope.RXHDFullyAutomated/$scope.RXHDnumberOfTestCases)*100;
      $scope.RXHDAutomated = $filter('number')($scope.RXHDAutomated, 0);
      $scope.RXCoreAutomated = ($scope.RXCoreFullyAutomated/$scope.RXCorenumberOfTestCases)*100;
      $scope.RXCoreAutomated = $filter('number')($scope.RXCoreAutomated, 0);
      $scope.GroupAutomated = ($scope.GroupFullyAutomated/$scope.GroupnumberOfTestCases)*100;
      $scope.GroupAutomated = $filter('number')($scope.GroupAutomated, 0);
      $scope.DentalAutomated = ($scope.DentalFullyAutomated/$scope.DentalnumberOfTestCases)*100;
      $scope.DentalAutomated = $filter('number')($scope.DentalAutomated, 0);
      $scope.html = '<div>' + 'RX-HD -'+' '+ '<br/> Automated: '+ $scope.RXHDAutomated + '%' + '</div>';
      $scope.appData = $sce.trustAsHtml($scope.html);      
      var d1 = {
        title:'RX-HD',
        l2:$scope.RXHDAutomated + '%' + ' Automated',
        l3:$scope.RXHDApplicationName.length+' Applications',
        l4:$scope.RXHDnumberOfTestCases+' Scenarios'
      };
      var d2 = {
        title:'RX-Core',
        l2:$scope.RXCoreAutomated + '%'+ ' Automated',
        l3:$scope.RXCoreApplicationName.length+' Applications',
        l4:$scope.RXCorenumberOfTestCases+' Scenarios'
      };
      var d3 = {
            title:'Group',
            l2:$scope.GroupAutomated + '%'+ ' Automated',
            l3:$scope.GroupApplicationName.length+' Applications',
            l4:$scope.GroupnumberOfTestCases+' Scenarios'
          };
    var d4 = {
          title:'Dental',
          l2:$scope.DentalAutomated + '%'+ ' Automated',
          l3:+$scope.DentalApplicationName.length+' Applications',
          l4:$scope.DentalnumberOfTestCases+' Scenarios'
        };
      $scope.chartObject.data = ([['ASG', 'ASG Name', 'Application Count', 'RAG'],
            ['SSGQA', null, 0, 20 ],
            [JSON.stringify(d1), 'SSGQA', $scope.RXHDApplicationName.length , $scope.RXHDFullyAutomated/$scope.RXHDnumberOfTestCases ],
            [JSON.stringify(d2), 'SSGQA', $scope.RXCoreApplicationName.length , $scope.RXCoreFullyAutomated/$scope.RXCorenumberOfTestCases ],
            [JSON.stringify(d3), 'SSGQA', $scope.GroupApplicationName.length , $scope.GroupFullyAutomated/$scope.GroupnumberOfTestCases ],
            [JSON.stringify(d4), 'SSGQA', $scope.DentalApplicationName.length , $scope.DentalFullyAutomated/$scope.DentalnumberOfTestCases ]
      ]);
      $scope.chartObject.options = {
          height: 500,
          width: 600,
          minColor: '#ff0000',
          midColor: '#ffff00',
          maxColor: '#66ff33',
          fillOpacity:'0',
          headerHeight: 0.1,      
          highlightOnMouseOver: true,
          textStyle : {color: 'black', bold: 'true', fontSize: '0.1', fontName: 'AccentureFont'}
      };
    function showFullTooltip(row, size, value, column) {
      return '<div style="background:lightblue; padding:10px; border-style:solid">' +
             '<span style="font-family:Arial; font-size: 11px;">' + size + '  Applications</span><br>' +
             '<span style="font-family:Arial; font-size: 11px;"> Automated: ' + $filter('number')(($scope.chartObject.data[row+1][3])*100,0) +'%'+  '</span><br>' +
             ' </div>';
    }
    $scope.OverallChart = {};
      $scope.OverallChart.type = "PieChart";
      var OverallChartData = [];
      OverallChartData.push(
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
          {id: "f", label: "Automated", type: "number"},
          {id: "p", label: "Manual", type: "number"}
        ], "rows": $scope.OverallChartData
      };      
      $scope.OverallChart.options = {
        colors:['#8CC63E','#DF6C4F']
      };
    });
  });
  /**
   * Created by saravana.sivakumar on 11/23/2015.
   */
