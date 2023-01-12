import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const addBtn = document.querySelector("#add") as HTMLButtonElement;
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

const add = () => {
    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];        
    let doc: HasFormatter;   

    if ( type.value === "Invoice" ) {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    
    list.render(doc, type.value, "end");
}

addBtn.addEventListener("click", add);