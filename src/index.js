import { Table } from "./table.js";
import { run } from "./table.js";

const table = new Table({
    columns: ["NO.","Name", "Email", "Phone Number"],
    data: [
        {id: 1, name: 'Ikhor', email: 'Ikhor@example.com', number: "0856" },
        {id: 2, name: 'Nudew', email: 'Nudew@gmail.com', number: "0857" },
        {id: 3, name: 'Kamil', email: 'Kamil@yahoo.com', number: "0858" },
        {id: 4, name: 'Fahri', email: 'Fahri@gmail.com', number: "0859" }
    ]
});
run(table);