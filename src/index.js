class Table {
    constructor(init) {
        this.init = init;
    }

    createHeader(data) {
        let open = "<thead><tr>";
        let close = "</tr></thead>";
        data.forEach((d) => {
            open += `<th>${d}</th>`;
        });

        return open + close;
    }

    createBody(data) {
        let open = "<tbody>";
        let close = "</tbody>";

        data.forEach((d) => {
            open += `
          <tr>
            <td>${d.id}</td>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>${d.number}</td>
          </tr>
        `;
        });

        return open + close;
    }

    render(element) {
        let table =
            "<table class='table table-hover border text-center'>" +
            this.createHeader(this.init.columns) +
            this.createBody(this.init.data) +
            "</table>";
        element.innerHTML = table;
    }
}

const table = new Table({
    columns: ["NO.","Name", "Email", "Phone Number"],
    data: [
        {id: 1, name: 'Ikhor', email: 'Ikhor@example.com', number: "0856" },
        {id: 2, name: 'Nudew', email: 'Nudew@gmail.com', number: "0857" },
        {id: 3, name: 'Kamil', email: 'Kamil@yahoo.com', number: "0858" },
        {id: 4, name: 'Fahri', email: 'Fahri@gmail.com', number: "0859" }
    ]
});
const app = document.getElementById("app");
table.render(app);


