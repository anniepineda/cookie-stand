'use strict';
//global variables

var hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//constructor
function Store(name,mincust,maxcust,avgCookiesPerCustomer){
  this.name=name;
  this.mincust=mincust;
  this.maxcust=maxcust;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour=[];
  this.totalSoldDaily=0;
  this.getCookiesPerHour();
}
//
Store.prototype.getCookiesPerHour = function(){
  for (var i = 0; i < hours.length; i++){
    var avgHourlySales = Math.round(((Math.random() * (this.maxcust - this.mincust +1)) + this.mincust) * this.avgCookiesPerCustomer);
    this.cookiesPerHour.push(avgHourlySales);
    this.totalSoldDaily += avgHourlySales;
  }
};


var seattle = new Store('Seattle',23,65,6.3);
var tokyo = new Store('Tokyo',3,24,1.2);
var dubai = new Store('Dubai',11,38,3.7);
var paris = new Store('Paris',20,38,2.3);
var lima = new Store('Lima',2,16,4.6);


console.log('seattle:', seattle);

function addElement(tag,container,text){
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}


// function displayStores(city) {
//   var sales = document.getElementById('sales');
//   addElement('h2', sales, city.name);
//   var ulElem = addElement('ul', sales);
//   for (var i=0; i < hours.length; i++) {
//     addElement('li', ulElem, hours[i] + ' ' + city.cookiesPerHour[i] + ' cookies');
//   }
//   addElement('li', ulElem, 'Total '+ city.totalSoldDaily+ ' cookies' );
// }

// displayStores(seattle);
// displayStores(tokyo);
// displayStores(dubai);
// displayStores(paris);
// displayStores(lima);


//lab07
var tableContainer = document.getElementById('tableContainer');
var tableElem = addElement('table',tableContainer);

var trElem = addElement('tr',tableElem);
addElement('th',trElem,' ');
for (var i = 0; i < hours.length; i++){
  addElement('th',trElem, hours[i]);
}
addElement('th',trElem,'Daily Location Total');


//body of table
function getCityData(city){
  var dataRow = addElement('tr',tableElem);
  addElement('td',dataRow,city.name);
  for (var i=0;i<hours.length; i++){
    addElement('td',dataRow, city.cookiesPerHour[i]);
  }
  addElement('td',dataRow,city.totalSoldDaily);
}

getCityData(seattle);
getCityData(tokyo);
getCityData(paris);
getCityData(dubai);
getCityData(lima);

//footer totals
function addHourlySalesVertical(seattle,tokyo,paris,dubai,lima){
  var footElem = addElement('tr',tableElem);
  addElement('td',footElem,'Totals');
  for(var k=0; k<hours.length; k++){
    addElement('td',footElem,seattle.cookiesPerHour[k] + tokyo.cookiesPerHour[k]+ paris.cookiesPerHour[k] + dubai.cookiesPerHour[k] + lima.cookiesPerHour[k]);
  }
  addElement('td',footElem,seattle.totalSoldDaily+tokyo.totalSoldDaily+paris.totalSoldDaily+dubai.totalSoldDaily+lima.totalSoldDaily);

}



addHourlySalesVertical(seattle,tokyo,paris,dubai,lima);


