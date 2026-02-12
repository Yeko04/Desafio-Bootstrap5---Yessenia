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