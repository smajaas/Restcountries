//Using Filter function

const getRegion = () => {
const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all",true);
     xhr.responseType= "json";
    //  xhr.send();
     xhr.onload=()=> {
         const asian = xhr.response;
         const asians = asian.filter((data)=>data.region==="Asia");
         console.log(asians);
     }
     xhr.send();
    }
     getRegion();


// XHR -XML Http request

// Retreive data from server

// const getRegion = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://restcountries.com/v3.1/all",true);

//     //Response type
//     xhr.responseType= "json";

//     // After getting response what we do?  - print it on console

//     xhr.onload=()=> {
//         // console.log(xhr.response);
//         const data = xhr.response;
//         for (let datas of data) {
//             if (datas.region==="Asia") {
//             console.log(datas);
//         }
//     }
//     };
//     xhr.send();
// };

// getRegion();

