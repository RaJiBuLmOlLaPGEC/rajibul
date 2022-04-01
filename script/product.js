let pro = document.getElementsByClassName("indiv")
let img = document.getElementsByTagName("img")
let data = JSON.parse(localStorage.getItem("data"))

function basket(x) {
    console.log(img[x].src)
    console.log(pro[x].textContent)

    var obj= {
        src : img[x].src,
        content: pro[x].textContent
    }
    if(data===null){
        data = [];
        data.push(obj)

    }else{

        data.push(obj)
    }
    localStorage.setItem("data",JSON.stringify(data))
}
let datadiv= document.getElementById("data")
data.map(function(elm){
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = elm.src;
    let p = document.createElement('p')
    p.innerHTML = elm.content;
    let btn =  document.createElement("button")
    btn.innerText = "Buy"
    div.append(img,p,btn)
    datadiv.append(div)
})
function baketShow(){
    if(datadiv.style.display==="none"){
        datadiv.style.display="block"
    }else{
        datadiv.style.display="none"
    }
}