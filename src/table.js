export class Table {
    constructor(init) {
        this.dataHead = init.columns;
        this.dataBody = init.data;
    }

    createHeader(data, open = "<thead><tr>", close = "</tr></thead>") {
        data.forEach((d) => {
            open += `<th>${d}</th>`;
        });

        return open + close;
    }

    createBody(data, open = "<tbody>", close = "</tbody>") {
        data.forEach((d) => {
            open += `
          <tr>
            <td>${d.id}</td>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>${d.number}</td>
          </tr>
        `
        });

        return open + close;
    }

    render(element) {
        let table =
            "<table class= 'table table-hover border text-center'>" +
            this.createHeader(this.dataHead) +
            this.createBody(this.dataBody) +
            "</table>";
        element.innerHTML = table;
    }
}

export const run = (table) => {
    const app = document.getElementById("app");
    table.render(app);
}



