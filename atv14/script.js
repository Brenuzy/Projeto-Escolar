document.getElementById('avisoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const aviso = {
        titulo: document.getElementById('avisoTitulo').value,
        descricao: document.getElementById('avisoDesc').value,
        data: new Date().toISOString()
    };

    postData('/avisos', aviso);
    this.reset();
});

document.getElementById('tarefaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const tarefa = {
        titulo: document.getElementById('tarefaTitulo').value,
        responsavel: document.getElementById('tarefaResponsavel').value,
        prazo: document.getElementById('tarefaPrazo').value
    };

    postData('/tarefas', tarefa);
    this.reset();
});

document.getElementById('usuarioForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = {
        nome: document.getElementById('userNome').value,
        cargo: document.getElementById('userCargo').value,
        turma: document.getElementById('userTurma').value || "Não informada"
    };

    postData('/usuarios', usuario);
    this.reset();
});

document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const reserva = {
        sala: document.getElementById('reservaSala').value,
        atividade: document.getElementById('reservaAtividade').value,
        data: document.getElementById('reservaData').value
    };

    postData('/reservas', reserva);
    this.reset();
});

function testarPost() {
    const teste = {
        id: Date.now(),
        mensagem: "Teste de rota POST",
        status: "sucesso",
        timestamp: new Date().toLocaleString()
    };

    postData('/teste', teste);
}

function postData(rota, dados) {
    console.log(`\nPOST ${rota}`);
    console.log("Dados recebidos:");
    console.table(dados);
    console.log("Status: 201 Created");
    console.log("============================================");
    
    alert(`Dados enviados para ${rota}!\nConfira o Console (F12)`);
}