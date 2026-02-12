    const materias = [
        { codigo: "0413", nombre: "PROGRAMACIÓN WEB", grupo: "Gpo1", dia: "MARTES", horaInicio: 10, horaFin: 12, aula: "E201" },
        { codigo: "0413", nombre: "PROGRAMACIÓN WEB", grupo: "Gpo1", dia: "JUEVES", horaInicio: 15, horaFin: 17, aula: "E201" },
        { codigo: "0402", nombre: "INTRO. INGENIERÍA", grupo: "Gpo3", dia: "LUNES", horaInicio: 8, horaFin: 10, aula: "D104" },
        { codigo: "0402", nombre: "INTRO. INGENIERÍA", grupo: "Gpo3", dia: "MIÉRCOLES", horaInicio: 8, horaFin: 10, aula: "D104" },
        { codigo: "0402", nombre: "INTRO. INGENIERÍA", grupo: "Gpo4", dia: "LUNES", horaInicio: 10, horaFin: 12, aula: "E201" },
        { codigo: "0402", nombre: "INTRO. INGENIERÍA", grupo: "Gpo4", dia: "JUEVES", horaInicio: 8, horaFin: 10, aula: "E201" },
        { codigo: "0402", nombre: "INTRO. INGENIERÍA", grupo: "Gpo7", dia: "LUNES", horaInicio: 15, horaFin: 17, aula: "D104" },
        { codigo: "0402", nombre: "INTRO. INGENIERÍA", grupo: "Gpo7", dia: "JUEVES", horaInicio: 13, horaFin: 15, aula: "D104" },
        { codigo: "0402", nombre: "INTRO. INGENIERÍA", grupo: "Gpo8", dia: "MARTES", horaInicio: 15, horaFin: 17, aula: "D104" },
        { codigo: "0402", nombre: "INTRO. INGENIERÍA", grupo: "Gpo8", dia: "MIÉRCOLES", horaInicio: 13, horaFin: 15, aula: "D104" }
    ];

    const diasSemana = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES"];
    const appContainer = document.getElementById('app');
    const btnLista = document.getElementById('btnLista');
    const btnCalendario = document.getElementById('btnCalendario');

    renderLista();

    function cambiarVista(vista) {
        if (vista === 'lista') {
            renderLista();
            btnLista.classList.replace("btn-outline-primary", "btn-primary");
            btnLista.classList.remove("btn-outline-secondary"); 
            btnCalendario.className = "btn btn-outline-secondary";
        } else {
            renderCalendario();
            btnCalendario.className = "btn btn-primary";
            btnLista.className = "btn btn-outline-secondary";
        }
    }
    function renderLista() {
        let html = `
        <table class="table table-hover table-striped table-bordered align-middle">
            <thead class="table-dark">
                <tr><th>CÓDIGO</th><th>ASIGNATURA</th><th class="text-center">GRUPO</th><th class="text-center">DÍA</th><th class="text-center">HORARIO</th><th class="text-center">AULA</th></tr>
            </thead>
            <tbody>`;
        
        materias.forEach(m => {
            html += `<tr>
                <td>${m.codigo}</td><td class="fw-bold">${m.nombre}</td>
                <td class="text-center"><span class="badge bg-primary">${m.grupo}</span></td>
                <td class="text-center">${m.dia}</td>
                <td class="text-center">${m.horaInicio}:00 - ${m.horaFin - 1}:40</td>
                <td class="text-center"><span class="badge bg-secondary">${m.aula}</span></td>
            </tr>`;
        });
        appContainer.innerHTML = html + `</tbody></table>`;
    }