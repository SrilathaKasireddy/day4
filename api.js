//Using  the rest countries API url
var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload =function(){
 var data = JSON.parse(request.response);
 console.log(data)
 for(let i=0; i<data.length; i++){
  //flag
  console.log(data[i].flag)

//countries name, region, sub region and population
  console.log(`country name:${data[i].name} region:${data[i].region} sub region:${data[i].subregion} population:${data[i].population}`)
 
 }
}
