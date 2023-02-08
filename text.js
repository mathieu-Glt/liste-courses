// const ages = [32, 33, 16, 18, 40];
// const names = 
// 			[{name: "mathieu", age: 37},
// 			{name: "laetitia", age: 35},
// 			{name: "Kahterine", age: 38},
// 			{name: "Doran", age: 36}]
// console.log(names)
// const filtered = names.filter(checkAdult);
// console.log(filtered);

// document.getElementById("demo").innerHTML = ages.filter(filterNumber);
// document.getElementById("dem").innerHTML = names.filter(checkAdult);


// function filterNumber(age) {
//   return age != 18;
// }

// function checkAdult(obj) {
//    if (obj.age != 36) {
//       return true
//    } 
  
// }
// const arraByID = names.filter(checkAdult);
// console.log('tableau filtré :',arraByID);


// var mesPoissons  = ["scalaire", "clown", "mandarin", "chirurgien"];

// var enleves = mesPoissons.splice(3, 1);
// console.log(mesPoissons);
// var replace = mesPoissons.splice(2, 0, "trompette");
// console.log(mesPoissons);
// var replace = mesPoissons.splice(0, 1, "guitare");
// console.log(mesPoissons);


// // const obj = { "price": { 0: "10.00", 1: "15.00", 2: "6.00" }, "serialNumber": { 0: 1000, 1: 2000, 2: 3000 } },
// //       result = Object.entries(obj).reduce((r,[key, value]) => {
// //         Object.values(value).forEach((val, i) => {
// //           r[i] = {...(r[i] || {}), [key]: val};
// //         });
// //         return r;
// //       },[]);
// // console.log(result);
// const elButton = document.querySelector('.draggable');
// console.log(elButton);
// elButton.addEventListener('mousedown', demarrerDeplacement);

// function demarrerDeplacement(e) {
//     console.log(e.currentTarget);
//     const poignee = e.currentTarget;
//     const li = poignee.closest('li');
//     li.setAttribute('draggable', 'true');
//     console.log(li);

// }

$('.poignee').mousedown(function(e) {
    console.log(e.currentTarget);
    const poignee = e.currentTarget;
    $(poignee).draggable();
    $(poignee).closest('li').draggable();
   
    $('li').on("dragstart", function (event) {
        console.log("drag start");
    
    })


       


    

    // $(poignee).mouseup(function(e) {
    //     console.log('mouse up');

    // })
    
})
$('li').on("dragstop", function (event) {
    console.log("drag end");
    console.log(event.currentTarget);
    $(event.currentTarget).draggable('destroy')
    console.log(event.currentTarget);

})



// &    

// elPoignee.addEventListener('dragstart', (event) => {
//     console.log('drag start');
//     console.log(event);
//     console.log(event.target);

// })

// elPoignee.on('dragend', (event) => {
//     console.log('drag end');
//     console.log(event);
//     console.log(event.target);

// })

$('li').on("blur", function(e) {
    console.log("blur");
})

