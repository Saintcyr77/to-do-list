import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

let num: number = 0;
type Id = () => string;

const generateRandom: Id = function (): string {
  num++;
  return `my_id${num}`;
};

const addItem = (): void => {
  const first = document.getElementById(
    "exampleFormControlTextarea1"
  ) as HTMLInputElement;

  let textArreaValue: string;

  if (first != null) {
    textArreaValue = first.value;
  } else {
    textArreaValue = "";
  }

  if (textArreaValue !== "") {
    console.log("here" + textArreaValue);

    const todoList: string | HTMLInputElement = document.getElementById(
      "ul-class"
    ) as HTMLInputElement;
    const newItem = document.createElement("li");
    const newItemText = document.createElement("span");

    newItem.textContent = textArreaValue;
    newItem.classList.add(
      "list-group-item",
      "flex",
      "w-100",
      "flex-wrap",
      "break-all",
      "justify-end"
    );
    const svgCode =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/></svg>';
    const editSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>';
    const editBtn = document.createElement("span");
    editBtn.innerHTML = editSvg;
    editBtn.classList.add("mt-1");
    const del = document.createElement("span");
    del.classList.add("mt-1",'delete-button');
    del.innerHTML = svgCode;
    del.addEventListener("click", function handleClick(event) {
      const fetchUl = document.getElementById("ul-class") as HTMLElement;

      const liItems = fetchUl.getElementsByTagName("li");
        const target = event.target as HTMLElement;
        const liToRemove = target.closest('li');

        if (liToRemove) {
            liToRemove.remove();
        }
     
    });

    editBtn.addEventListener("click", function handleClick(event) {
      const text = document.getElementsByTagName("li");
    });
    const combiner = document.createElement("span");
    combiner.appendChild(del);
    combiner.appendChild(editBtn);
    combiner.classList.add("flex", "gap-2");
    newItem.appendChild(combiner);

    todoList.appendChild(newItem);

    const textarea: HTMLInputElement = document.getElementById(
      "exampleFormControlTextarea1"
    ) as HTMLInputElement;
    textarea.value = "";

    const chkElement = document.getElementById("pid");

    if (chkElement !== null) {
      chkElement.remove();
    }
  } else {
    const ErrorContainer = document.getElementById("error-div");
    const chk = document.getElementsByTagName("p");

    if (chk.length === 0) {
      if (ErrorContainer) {
        const errorElement = document.createElement("p");
        const node = document.createTextNode("Please Write Something First!!");
        errorElement.appendChild(node);
        errorElement.classList.add(
          "flex",
          "justify-center",
          "px-80",
          "my-2",
          "text-red-600"
        );
        errorElement.setAttribute("id", "pid");
        ErrorContainer.appendChild(errorElement);
      } else {
        console.log("here");
      }
    }
  }

  console.log("I  got here");
};

document.getElementById("btn")?.addEventListener("click", addItem);
