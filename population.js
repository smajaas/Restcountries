const getRegion = () => {
    const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.com/v3.1/all",true);
         xhr.responseType= "json";
        //  xhr.send();
         xhr.onload=()=> {
             const asian = xhr.response;
             const asians = asian.filter((data)=> data.population<200000);
             console.log(asians);
         }
        
         xhr.send();
        }
         getRegion();
    