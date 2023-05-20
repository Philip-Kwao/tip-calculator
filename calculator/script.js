const displayEl = document.querySelector(".display")
// console.log(displayEl)
const buttonEl = document.querySelectorAll("button")
//  console.log(buttonEl)

    for(let i=0; i<buttonEl.length; i++){
        // console.log("clicked")
        // console.log(buttonEl[i].textContent)
        buttonEl[i].addEventListener("click", ()=>{

            const buttonValue = buttonEl[i].textContent
            if(buttonValue === "C"){
                clearValue()
            }else if(buttonValue === "="){
                solve()
            }
            else{
                appendValue(buttonValue)
            }
        })
        function appendValue(buttonValue){
            displayEl.value += buttonValue
        }

        function solve(){
            displayEl.value = eval(displayEl.value)
        }
        function clearValue(){
            displayEl.value = ""
        }
    }
