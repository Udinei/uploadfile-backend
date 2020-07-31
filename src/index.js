/** Essa app em tempo de dev usa nodemon para restart ao alterar files .js */
require('dotenv').config();
const express = require("express"); // importando express
const morgan = require("morgan"); // importa morgan gerenciador de logs (requisição http)
const mongoose = require('mongoose');
const path = require('path'); // permite criar um path para o sistema de file 
const cors = require('cors'); // habilita receber requisições de outros dominios que nao o local

const app = express(); // instancia servidor express

// conectando ao banco mongodb na base mongobelez
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, // aceita sintax da url acima
    useUnifiedTopology: true,
})

app.use(cors()); // recebe requisições de todos os dominios
app.use(express.json()); // abilita o expressa a usar json
app.use(express.urlencoded({ extended: true })) // abilita o express usar encode (tipos de arquivos)
app.use(morgan('dev')); // deve ser colocado antes das rotas, exibe no terminal qual requisição foi executada o tempo e codigo de status

// liberando ao express acesso local a arquivos estaticos
app.use(
    '/files', express.static(path.resolve(__dirname, "..", "tmp", "uploads")) // ".." volta uma pasta, caspath local liberado para acesso do express
);

// carrega e usa o arquivo de rotas routs.js
app.use(require("./routes"));
// usa o style dev de logs do morgan


/** Teste servidor express */
// primeira rota teste, vai ser executa ao chamar a app no browser na porta 300
//app.get('/', (req, res) => {
//    return res.send('Hello World');
//});

app.listen(process.env.PORT || 3000) // server vai houvir a porta 3000