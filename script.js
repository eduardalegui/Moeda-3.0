const apiKey = "ff5696c56e21b8ce5b448c22";


window.onload = async function (){
    let data = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
    if(!data.ok){
        return
    }
    let jsonData = await data.json();
    let keys = Object.keys(jsonData.conversion_rates);

    var select = document.getElementById("selectFrom");
    
    var select2 = document.getElementById("selectFrom2");
    
    keys.forEach(key => {
        var option = document.createElement('option');
        option.text = option.value = key;
        var option2 = document.createElement('option');
        option2.text = option2.value = key;
        
        select.add(option, key);
        select2.add(option2, key);
        
        console.log(key);  
    });
    
}

async function convert(){
    
    let moeda1 = document.getElementById("selectFrom").value;
    let moeda2 = document.getElementById("selectFrom2").value;
    
    let input1 = document.getElementById("input").value;
    
    let data = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${moeda1}/${moeda2}`);

    
    let jsonData = await data.json();

    document.getElementById("input2").value = (jsonData.conversion_rate * input1).toFixed(2);
}



function reverse(){
    let moeda1 = document.getElementById("selectFrom").value;
    let moeda2 = document.getElementById("selectFrom2").value;
    document.getElementById("selectFrom2").value = moeda1;
    document.getElementById("selectFrom").value = moeda2;

    let input1 = document.getElementById("input").value;

    document.getElementById("input").value = 1;
    convert()
    

}


    /* async function getRates() {

    let data = await fetch("https://v6.exchangerate-api.com/v6/37a26a6057489965c5ad1d60/latest/USD");
        if(!data.ok){
            return
        }
    let jsonData = await data.json();
    console.log(jsonData);

    let keys = Object.keys(jsonData.conversion_rates);

    console.log("-----------------");
    console.log("conversion_rates.keys:", keys);
    console.log("Taxa para EUR:", jsonData.conversion_rates.EUR);
    console.log("Taxa para BRL:", jsonData.conversion_rates.BRL);


    /*
    var select = document.getElementById("selectFrom");
    for (key in keys){
        var option = document.createElement('option');
        option.text = option.value = key;
        select.add(option, keys[key]);
        console.log(keys[key]);     
    }
    */

    // let todos = document.getElementById('selectFrom');
    // let newDefault1 = new Option('Select todo', null, true, true)
    // newDefault1.disabled = true
    // todos.add(newDefault1)

    
    //     .then(res => res.json())
    //     .then(data => {
    //     data.forEach(todo => {
    //         let option = new Option(todo.title, todo.id)
    //         console.log(option)
    //         todos.add(option)
    //     });
    // });

        
        
        
    //document.getElementById('selectFrom') = jsonData.conversion_rates.BRL;

