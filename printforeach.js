const getRegion = () => {
    const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.com/v3.1/all",true);
         xhr.responseType= "json";
        //  xhr.send();
         xhr.onload=()=> {
             const country = xhr.response;
            country.forEach(data => {
                console.log(`
                "Country Name:"${data.name}-
                "Capital:"${data.capital}-
                "Country Flags:"${data.flag}`);
              });
         }
        
         xhr.send();
        }
         getRegion();
    