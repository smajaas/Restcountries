const getTotalpop = (total,num) => {
    const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.com/v3.1/all",true);
         xhr.responseType= "json";
        //  xhr.send();
         xhr.onload=()=> {
             const country = xhr.response;
            const total = country.reduce((val1,val2)=>{
                    return val1+val2.population;
            },0);
        
            console.log(total);
         }
        
         xhr.send();
        }
         getTotalpop();
    


//          // 1.create an instance xml http
// var request=new XMLHttpRequest();
// // 2.create a connection
// request.open('GET','https://restcountries.com/v3.1/all',true);
// // 3.send the request
// request.send();
// // 4.load the response
// request.onload=function(){
//     var data=JSON.parse(this.response);
//     var res=data.reduce((a, i)=>{
//         return a + i.population;
//     },0);
//     console.log(res);
// }