let obj={
    name : "Iswariya M",
    place : "madurai",
    phonenumber : "9952264385",
    dob : "25/09/1994",
    marital_status: "Married",
    Languages:"tamil,english",
    company : "currently_not_work",
    email:"aishu2125@gmail.com",
    qualification : [
        {
        class : "SSLC",
        Institution : "jothi secondary school",
        Percentage : "85",
    },
    {
        class : "HSC",
        Institution : "jothi secondary school",
        Percentage : "67",
    },
    {
        class : "UG",
        Institution : "Kalasalingam University",
        Department : "B.tech IT",
        Percentage : "67",
    },
],

frameworks: ["Codeigniter","Wordpress","Prestashop"],
area_of_interest: ["webdevelopment","phpprogramming"],

};

//let arr=JSON.parse(obj);
//console.log(obj);



  for (let x in obj) {
    console.log(x + ": "+ obj[x])
 }

 const keys = Object.keys(obj);
 keys.forEach((key, index) => {
    console.log(`${key}: ${obj[key]}`);
});
Object.values(obj).forEach(val => console.log(val));


for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}



Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
});