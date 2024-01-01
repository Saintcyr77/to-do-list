import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

const addItem = (): void=>{
    const first = document.getElementById("exampleFormControlTextarea1") as HTMLInputElement;

    let textArreaValue: string;

    if (first != null) {
        textArreaValue = first.value;
    }
    else {
        textArreaValue = ""
    }

     
    if (textArreaValue !== "") {
         
        console.log("here"+ textArreaValue);
        
        
        const todoList: string | HTMLInputElement = document.getElementById("ul-class") as HTMLInputElement;
        const newItem = document.createElement("li");
        newItem.textContent = textArreaValue;
        newItem.classList.add("list-group-item")
        todoList.appendChild(newItem);
            
        const textarea: HTMLInputElement = document.getElementById("exampleFormControlTextarea1") as HTMLInputElement;
        textarea.value = "";

        const chkElement = document.getElementById("pid");

        if (chkElement!==null) {

          chkElement.remove()
        }
        
    }
    else {
        // alert("please enter something");

       
        const ErrorContainer = document.getElementById("error-div")
        const chk = document.getElementsByTagName("p");

   
        
        
        if (chk.length===0) {
            if (ErrorContainer) {
                const errorElement = document.createElement("p")
                const node = document.createTextNode("Please Write Something First!!");
                errorElement.appendChild(node)
                errorElement.classList.add("flex", "justify-center", "px-80", "my-2", "text-red-600");
                errorElement.setAttribute("id","pid")
                ErrorContainer.appendChild(errorElement)
                
            }
            else {
                console.log("here");
                
            }
            
        }
        
    }

    console.log("I  got here");
    

}

document.getElementById("btn")?.addEventListener("click",addItem)