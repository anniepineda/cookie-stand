'use strict';
var hours= [6,7,8,9,10,11,12,1,2,3,4,5,6,7]

var seattle = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSold: 6.3,
  sales:[]
  getSales:function(){
    var rando= Math.rando();{
      console.log('rando',rando)
    }
    var range= this.maxcust-this.minCust
    console.log('range',range)

    var randoCust=this.mincust+Math.floor(rando*range)+1
    var estiCookiesSold=Math.ceil(randoCust);
    console.log('estCookiesSold',estiCookiesSold);
    return estiCookiesSold
  }
}

function displayStores(location){
  var storeData=location.sales;
  var parentElement=document.getElementByld('location');
  var ul=document.createElement('ul');
  parentElement.appendChild(ul);
  ul.textContent=location.name;
  for (var i=0;i<storeData.lenght;i++){
    var li=document.createElement('li');
    var lisItem=location.sales
    ul.appendChild(li);
    li.textContent=location.sales[i];
  }
}

