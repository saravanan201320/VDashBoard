var SelectedApplicationPageControllers = angular.module('SelectedApplicationPageControllers',['googlechart','angular.filter']);
SelectedApplicationPageControllers.controller('SelectedApplicationPageController', function($scope,$http,$filter,$rootScope,$location){
	var data = $rootScope.groups;  	
  $rootScope.applicationTitleName = JSON.parse($rootScope.selectedApplication);  
  $scope.backBtn = function(){
    $location.path("/SelectedASGPage");
  }
  $scope.numberOfTestCases = 0;
  $scope.fullyAutomated = 0;
  $scope.partiallyAutomated = 0;
  var Application = "";
  var Application =  $rootScope.applicationTitleName.title.trim();
  $scope.bussinessCapability = [];
  $scope.functionality = [];
  $scope.FunctionalityData = [];
  for (var j = 0; j < data.ASG.length; j++){
    if(data.ASG[j].Group.Application.toUpperCase() == Application.toUpperCase() && data.ASG[j].Group.groupName.toUpperCase() == $rootScope.ASGTitleName.title.toUpperCase()){
      $scope.bussinessCapability.push(data.ASG[j].Group.businessCapability);               
    }
  }
  $scope.bussinessCapability = $filter('unique')($scope.bussinessCapability);        
  $scope.BCNumberOfTestCases = 0;
  $scope.BCFullyAutomated = 0;
  $scope.BCPartiallyAutomated = 0;
  for(var x=0; x< $scope.bussinessCapability.length; x++){              
    for (var i = 0; i < data.ASG.length; i++){                   
      if(data.ASG[i].Group.businessCapability == $scope.bussinessCapability[x] && data.ASG[i].Group.Application.toUpperCase() == Application.toUpperCase() && data.ASG[i].Group.groupName.toUpperCase() == $rootScope.ASGTitleName.title.toUpperCase()){          
        $scope.functionality.push(data.ASG[i].Group.functionality);          
        $scope.BCNumberOfTestCases = $scope.BCNumberOfTestCases + data.ASG[i].Group.numberOfTestCases;
        $scope.BCFullyAutomated = $scope.BCFullyAutomated + data.ASG[i].Group.FullyAutomated;
        $scope.BCPartiallyAutomated = $scope.BCPartiallyAutomated + data.ASG[i].Group.PartiallyAutomated;
      }
    }
    if($scope.BCNumberOfTestCases == 0 || $scope.BCNumberOfTestCases == 'Nan'){
      $scope.BCNumberOfTestCases = 0;
    }
    if($scope.BCFullyAutomated == 0 || $scope.BCFullyAutomated == 'Nan'){
      $scope.BCFullyAutomated = 0;
    }
    if($scope.BCPartiallyAutomated == 0 || $scope.BCPartiallyAutomated == 'Nan'){
      $scope.BCPartiallyAutomated = 0;
    }
    if($scope.BCNumberOfTestCases == 0){
      $scope.BCAutomated = 'Automated : NA';
      $scope.mapColor = 0;
    }
    else
    {
      $scope.BCAutomated = ($scope.BCFullyAutomated/$scope.BCNumberOfTestCases)*100;
      $scope.BCAutomated = $filter('number')($scope.BCAutomated, 0) + '% Automated';
      $scope.mapColor = $scope.BCFullyAutomated/$scope.BCNumberOfTestCases;
    }
    if(x==0 || x==1 || x==2){
      $scope.FunctionalityData.push([JSON.stringify({"title":$scope.bussinessCapability[x],"l1":$scope.functionality.length+' Functionality',"l2":$scope.BCAutomated, "l3":$scope.BCNumberOfTestCases+' Scenarios'}),Application,$scope.functionality.length, $scope.mapColor]);
      $scope.functionality = [];
      $scope.BCNumberOfTestCases = 0;
      $scope.BCFullyAutomated = 0;
      $scope.BCPartiallyAutomated = 0; 
    }; 
    if(x==($scope.bussinessCapability.length-1) && x!=0 && x!=1 && x!=2){          
      $scope.FunctionalityData.push([JSON.stringify({"title":"Others","l1":$scope.functionality.length+' Functionality',"l2":$scope.BCAutomated, "l3":$scope.BCNumberOfTestCases+' Scenarios'}),Application,4, $scope.mapColor]);          
    }    
  }
  $scope.chartObject2 = {};
  $scope.chartObject2.type = "TreeMap";
  if($scope.FunctionalityData.length==1){
    $scope.chartObject2.data = ([['BCName', 'ApplicationName', 'FunctionalityCount','RAG'],
      [Application,null,0,20],$scope.FunctionalityData[0], 
      ]);
  }
  if($scope.FunctionalityData.length==2){
   $scope.chartObject2.data = ([['BCName', 'ApplicationName', 'FunctionalityCount','RAG'],
    [Application,null,0,20],$scope.FunctionalityData[0],$scope.FunctionalityData[1]
    ]);
 }
 if($scope.FunctionalityData.length==3){
  $scope.chartObject2.data = ([['BCName', 'ApplicationName', 'FunctionalityCount','RAG'],
    [Application,null,0,20],$scope.FunctionalityData[0],$scope.FunctionalityData[1],$scope.FunctionalityData[2]      
    ]);
}
if($scope.FunctionalityData.length==4){
  $scope.chartObject2.data = ([['BCName', 'ApplicationName', 'FunctionalityCount','RAG'],
    [Application,null,0,20],$scope.FunctionalityData[0],$scope.FunctionalityData[1],$scope.FunctionalityData[2],
    $scope.FunctionalityData[3]         
    ]);
}
if($scope.FunctionalityData.length==5){
  $scope.chartObject2.data = ([['BCName', 'ApplicationName', 'FunctionalityCount','RAG'],
    [Application,null,0,20],$scope.FunctionalityData[0],$scope.FunctionalityData[1],$scope.FunctionalityData[2],
    $scope.FunctionalityData[3],$scope.FunctionalityData[4]
    ]);
}
if($scope.FunctionalityData.length==6){
  $scope.chartObject2.data = ([['BCName', 'ApplicationName', 'FunctionalityCount','RAG'],
    [Application,null,0,20],$scope.FunctionalityData[0],$scope.FunctionalityData[1],$scope.FunctionalityData[2],
    $scope.FunctionalityData[3],$scope.FunctionalityData[4],$scope.FunctionalityData[5]
    ]);
}
if($scope.FunctionalityData.length==7){
  $scope.chartObject2.data = ([['BCName', 'ApplicationName', 'FunctionalityCount','RAG'],
    [Application,null,0,20],$scope.FunctionalityData[0],$scope.FunctionalityData[1],$scope.FunctionalityData[2],
    $scope.FunctionalityData[3],$scope.FunctionalityData[4],$scope.FunctionalityData[5],$scope.FunctionalityData[6]
    ]);
}
if($scope.FunctionalityData.length==8){
  $scope.chartObject2.data = ([['BCName', 'ApplicationName', 'FunctionalityCount','RAG'],
    [Application,null,0,20],$scope.FunctionalityData[0],$scope.FunctionalityData[1],$scope.FunctionalityData[2],
    $scope.FunctionalityData[3],$scope.FunctionalityData[4],$scope.FunctionalityData[5],$scope.FunctionalityData[6],
    $scope.FunctionalityData[7]       
    ]);
}
if($scope.FunctionalityData.length==9){
  $scope.chartObject2.data = ([['BCName', 'ApplicationName', 'FunctionalityCount','RAG'],
    [Application,null,0,20],$scope.FunctionalityData[0],$scope.FunctionalityData[1],$scope.FunctionalityData[2],
    $scope.FunctionalityData[3],$scope.FunctionalityData[4],$scope.FunctionalityData[5],$scope.FunctionalityData[6],
    $scope.FunctionalityData[7],$scope.FunctionalityData[8]
    ]);
}
if($scope.FunctionalityData.length==10){
  $scope.chartObject2.data = ([['BCName', 'ApplicationName', 'FunctionalityCount','RAG'],
    [Application,null,0,20],$scope.FunctionalityData[0],$scope.FunctionalityData[1],$scope.FunctionalityData[2],
    $scope.FunctionalityData[3],$scope.FunctionalityData[4],$scope.FunctionalityData[5],$scope.FunctionalityData[6],
    $scope.FunctionalityData[7],$scope.FunctionalityData[8],$scope.FunctionalityData[9]
    ]);
}
if($scope.FunctionalityData.length==11){
  $scope.chartObject2.data = ([['BCName', 'ApplicationName', 'FunctionalityCount','RAG'],
    [Application,null,0,20],$scope.FunctionalityData[0],$scope.FunctionalityData[1],$scope.FunctionalityData[2],
    $scope.FunctionalityData[3],$scope.FunctionalityData[4],$scope.FunctionalityData[5],$scope.FunctionalityData[6],
    $scope.FunctionalityData[7],$scope.FunctionalityData[8],$scope.FunctionalityData[9],$scope.FunctionalityData[10]
    ]);
}
$scope.chartObject2.options = {
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
});