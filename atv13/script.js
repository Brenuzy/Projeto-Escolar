const usuarios = [
    {
        id: 1,
        nome: "Prof. Carlos Mendes",
        cargo: "Professor de Matemática",
        turma: "8º Ano A e B",
        avatar: "🧑‍🏫"
    },
    {
        id: 2,
        nome: "Maria Clara Silva",
        cargo: "Aluna",
        turma: "9º Ano A",
        avatar: "👩‍🎓"
    },
    {
        id: 3,
        nome: "Ana Paula Costa",
        cargo: "Diretora",
        turma: "Administração",
        avatar: "👩‍💼"
    }
];

const avisos = [
    {
        titulo: "Reunião de Pais",
        descricao: "Reunião geral com os pais no dia 10/07 às 19h no auditório.",
        tipo: "warning"
    },
    {
        titulo: "Entrega de Projetos",
        descricao: "Prazo final para entrega do projeto de Ciências: 12/07.",
        tipo: "info"
    },
    {
        titulo: "Feriado Escolar",
        descricao: "Não haverá aula no dia 15/07 (feriado municipal).",
        tipo: "success"
    },
    {
        titulo: "Manutenção no Sistema",
        descricao: "O portal do aluno ficará indisponível das 23h às 01h.",
        tipo: "danger"
    }
];

const tarefas = [
    {
        titulo: "Corrigir provas de Matemática",
        responsavel: "Prof. Carlos Mendes",
        prazo: "05/07/2026",
        prioridade: "high"
    },
    {
        titulo: "Preparar material de Geografia",
        responsavel: "Prof. Juliana Rocha",
        prazo: "08/07/2026",
        prioridade: "medium"
    },
    {
        titulo: "Atualizar notas do 2º bimestre",
        responsavel: "Todos os professores",
        prazo: "10/07/2026",
        prioridade: "low"
    }
];

const reservas = [
    {
        sala: "Sala 12",
        atividade: "Aula de Matemática - 8º Ano A",
        data: "04/07/2026",
        horario: "08:00 - 09:40"
    },
    {
        sala: "Laboratório de Informática",
        atividade: "Aula prática de Programação",
        data: "05/07/2026",
        horario: "14:00 - 15:40"
    }
];

function renderUsuarios() {
    const container = document.getElementById('usersContainer');
    container.innerHTML = usuarios.map(user => `
        <div class="user-card">
            <div class="user-avatar">${user.avatar}</div>
            <div class="user-name">${user.nome}</div>
            <div class="user-role">${user.cargo}</div>
            <p><strong>Turma:</strong> ${user.turma}</p>
        </div>
    `).join('');
}

function renderAvisos() {
    const container = document.getElementById('alertsContainer');
    container.innerHTML = avisos.map(aviso => `
        <div class="alert-card ${aviso.tipo}">
            <h3>${aviso.titulo}</h3>
            <p>${aviso.descricao}</p>
        </div>
    `).join('');
}

function renderTarefas() {
    const container = document.getElementById('tasksContainer');
    container.innerHTML = tarefas.map(tarefa => `
        <div class="task-card">
            <h3>${tarefa.titulo}</h3>
            <p><strong>Responsável:</strong> ${tarefa.responsavel}</p>
            <p><strong>Prazo:</strong> ${tarefa.prazo}</p>
            <span class="task-priority ${tarefa.prioridade}">${tarefa.prioridade === 'high' ? 'Alta' : tarefa.prioridade === 'medium' ? 'Média' : 'Baixa'}</span>
        </div>
    `).join('');
}

function renderReservas() {
    const container = document.getElementById('reservationsContainer');
    container.innerHTML = reservas.map(reserva => `
        <div class="reservation-card">
            <h3>${reserva.sala}</h3>
            <p><strong>Atividade:</strong> ${reserva.atividade}</p>
            <p><strong>Data:</strong> ${reserva.data}</p>
            <p><strong>Horário:</strong> ${reserva.horario}</p>
        </div>
    `).join('');
}

console.log("=== MOCK DE DADOS - SISTEMA ESCOLAR ===");
console.log("1. Usuários:", usuarios);
console.log("2. Avisos:", avisos);
console.log("3. Tarefas:", tarefas);
console.log("4. Reservas de Sala:", reservas);
console.log("=========================================");

document.getElementById('log-info').textContent = "Dados exibidos no console (F12)";

renderUsuarios();
renderAvisos();
renderTarefas();
renderReservas();