'use strict';
//global variables

var hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


var seattle= {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesSold: 6.3,
  sales:[],
  //amount of cookies purchased per hr. 
  generateSales: function(){
    for(var i= 0; i<hours.length;i++){
      var hourlyCookieSales= this.avgHourlySales();
      this.sales.push(hourlyCookieSales);

    }
    console.log(this.sales);
  },
  //random customers per hour
  avgHourlySales: function(){
    return Math.round(Math.random()*(this.maxCust-this.minCust)) + this.minCust;

  }

};
//amount of cookies sold
seattle.generateSales(city);{
  for (var i=0; i<hours.length;i++){
    var avgcookies=Math.ceil(city.generateSales()*city.avgcustomer)
    city.sales[i]=hours[i]+avgCookies+'cookies';
  }
}
//function displayStores(location){
  //var storeData=location.sales;
 // var parentElement=document.getElementByld('location');
 // var ul=document.createElement('ul');
 // parentElement.appendChild(ul);
  //ul.textContent=location.name;
 // for (var i=0;i<storeData.lenght;i++){
   // var li=document.createElement('li');
   // var lisItem=location.sales
   // ul.appendChild(li);
    //li.textContent=location.sales[i];
 // }
//}
////////////////////////////////////////////fixing lab6

////////////////////////////////////lab7


//add table 
addElement('th',headerRowElem,'6:00am');
addElement('th',headerRowElem,'7:00am');
//....7pm

var article=addElement('article',container);
addElement('h2',article,this.name);

var tableElem = addElement('table',article);

var headerRowElem=addElement('tr',tableElem);

var dataRowElem=addElement('tr',tableElem);

addElement('td',dataRowElem,(city).6:00am);
addElement('td',dataRowElem,(city).7:00am);
//....7pm