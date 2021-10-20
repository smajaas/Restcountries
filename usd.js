// XHR -XML Http request

// Retreive data from server

const getUSDollar = () => {
   const xhr = new XMLHttpRequest();
     xhr.open("GET", "https://restcountries.com/v3.1/all",true);

         xhr.responseType= "json";

xhr.onload=()=> {

         const data = xhr.response;
            const datas = data.filter((value)=>{
                for (var i in value.currencies.name.USD)
                    {
                        if(i === "Unites States Dollar"){
                            return true;
                        }
                    }
                }).map((value) => value.name);
               console.log(datas);
            }
     xhr.send();
};

 getUSDollar();

