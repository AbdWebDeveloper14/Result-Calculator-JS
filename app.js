

// let stdName = prompt(`What's your Student Name?`)

// let paper1 = prompt(`What's the Mark's in paper1`)

// let paper2 = prompt(`What's the Mark's in paper2`)


// let suming = `${Number(paper1) + Number(paper2)}`

// let result = suming / 200

// // console.log(`Hello ${stdName}, Your Total Marks is ${suming} and Your Percentage is ${result * 100}%`);

// if ( result >= 30/100 ) {
//     console.log(`Congratulations ${stdName}, You are Pass!`);
//     alert(`Congratulations ${stdName}, You are Pass!`)
// }else{
//     console.log(`Sorry ${stdName}, You are Fail!`);
//     alert(`Sorry ${stdName}, You are Fail!`)
// }

// function greet() {
//     let stdName = document.getElementById("stdName").value;
 
//     let message = `Hello, ${stdName}! Welcome to our website.`;
//     document.getElementById("output").innerText = message;

// alert(message);

// }

function calculate(){
    let stdName = document.getElementById("stdName1").value;
    let paper1 = document.getElementById("paper1").value;
    let paper2 = document.getElementById("paper2").value;

    let suming = `${Number(paper1) + Number(paper2)}`
    let result = suming / 200

    if ( result >= 30/100 ) {
        console.log(`Congratulations ${stdName}, You are Pass!`);
        alert(`Congratulations ${stdName}, You are Pass!`)
    }else{
        console.log(`Sorry ${stdName}, You are Fail!`);
        alert(`Sorry ${stdName}, You are Fail!`)
    }

    document.getElementById("output1").innerHTML = `hello ${stdName}, Your Total Marks is ${suming} and Your Percentage is ${result * 100}%`
}
