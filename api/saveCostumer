const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost', // Endereço do servidor MySQL
    user: 'seu_usuario', // Seu nome de usuário do MySQL
    password: 'sua_senha', // Sua senha do MySQL
    database: 'crm_database' // Nome do banco de dados
});

db.connect(err => {
    if (err) {
        console.error('Erro de conexão com o banco de dados:', err);
        return;
    }
    console.log('Conexão ao banco de dados MySQL estabelecida.');
});

app.use(express.json());

app.post('/api/saveCustomer', (req, res) => {
    const customer = req.body;

    db.query('INSERT INTO clientes SET ?', customer, (err, result) => {
        if (err) {
            console.error('Erro ao inserir cliente no banco de dados:', err);
            res.json({ success: false });
        } else {
            console.log('Cliente cadastrado com sucesso.');
            res.json({ success: true });
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000');
});
