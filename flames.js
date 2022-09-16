let boy;
let girl;
let sab;
let res;
const gif=document.getElementById("giffer")
const outo=document.getElementById("final")
const doccer=document.getElementById("heading")
document.getElementById("bu").onclick = function(){
    boy=document.getElementById("boy").value;
    boy=boy.toLowerCase();
    console.log(boy);
    girl=document.getElementById("girl").value;
    girl=girl.toLowerCase();
    console.log(girl);
    sab=boy.length+girl.length;
    res=sab;
    console.log(sab);
    for(let i=0;i<boy.length;i+=1){
        for(let j=0;j<girl.length;j+=1){
            if(boy.charAt(i)==girl.charAt(j)){
                boy=boy.replace(boy.charAt(i)," ",i);
                girl=girl.replace(girl.charAt(j),".",j);
                sab-=2;
                // document.getElementById("ah").innerHTML = String(sab);
                
            }
        }
    }

    // let l=["3","4","6","15"]
    let l={3:"3",4:"4",6:"6",15:"15"}
    let f={2:"2",8:"8",12:"12",14:"14"}
    let a={10:"10",5:"5",9:"9"}
    let s={1:"1",7:"7",11:"11",13:"13"}

    if (sab in l){
        outo.textContent="Love 💕"
        console.log("Love");
        gif.style.display="block"
        gif.src="./images/love.gif"
    }
    else if(sab in f){
        console.log("Friend");
        outo.textContent="Friend 🤝🏻"
        gif.style.display="block"
        gif.src="./images/friend.gif"
    }
    else if (sab in a){
        console.log("Affection");
        outo.textContent="Affection 🥰"
        gif.style.display="block"
        gif.src="./images/affection.gif"
    }
    else if (sab in s){
        console.log("Siblings");
        outo.textContent="Siblings 👩🏻‍🤝‍🧑🏻"
        gif.style.display="block"
        gif.src="./images/siblings.gif"
    }
    else{
        console.log("Enter the first name is enough");
    }
    console.log(sab);
}

doccer.addEventListener("click", ()=>window.open("./images/howtoplay.pdf"));
