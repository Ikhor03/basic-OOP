export class Table {
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

export const run = (table) =>{
    const app = document.getElementById("app");
    table.render(app);
}



