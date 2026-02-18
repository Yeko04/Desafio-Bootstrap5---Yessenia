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

    function renderCalendario() {
        let html = `
        <table class="table table-bordered text-center mb-0">
            <thead class="table-dark">
                <tr><th style="width:10%">HORA</th>${diasSemana.map(d => `<th style="width:18%">${d}</th>`).join('')}</tr>
            </thead>
            <tbody>`;

        for (let hora = 8; hora <= 16; hora++) {``
            html += `<tr><td class="bg-light fw-bold align-middle py-4">${hora}:00</td>`;
            
            diasSemana.forEach(dia => {
                const m = materias.find(x => x.dia === dia && x.horaInicio === hora);
                
                if (m) {
                    let rowspan = m.horaFin - m.horaInicio;
                    html += `<td rowspan="${rowspan}" class="table-primary border-start border-4 border-primary align-middle position-relative">
                                <div class="fw-bold text-primary">${m.nombre}</div>
                                <span class="badge bg-primary mb-1">${m.grupo}</span>
                                <div class="small text-muted">${m.aula}</div>
                             </td>`;
                } else {
                    const ocupado = materias.some(x => x.dia === dia && hora > x.horaInicio && hora < x.horaFin);
                    if (!ocupado) {
                        html += `<td class="py-4"></td>`;
                    }
                }
            });
            html += `</tr>`;
        }
        appContainer.innerHTML = html + `</tbody></table>`;
    }

    function ConfiguracionDeBotones() {
        document.getElementById('btnImprimir').onclick = () => window.print();
        document.getElementById('btnExportar').onclick = () => {
            let csv = "Codigo,Materia,Grupo,Dia,Horario,Aula\n";
            materias.forEach(m => {
                csv += `${m.codigo},${m.nombre},${m.grupo},${m.dia},${m.horaInicio}:00-${m.horaFin}:00,${m.aula}\n`;
            });
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('href', url);
            a.setAttribute('download', 'horario_academico.csv');
            a.click();
        };

        document.getElementById('btnSalir').onclick = () => {
            if (confirm("¿Deseas salir de la aplicación?")) {
                window.close();
            }
        };
    }
