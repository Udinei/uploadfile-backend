const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

// lista informações de todas imagens persistidas, tanto local como remoto
routes.get('/posts', async (req, res) => {
    const posts = await Post.find(); // recupera todos todos posts gravados 
    return res.json(posts);
});

// apaga posts do BD
routes.delete('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id); // busca o post cujo id foi passado como parametro

    await post.remove(); // remove o post do BD

    return res.send(); // um status ok 
})

// multer - middlware que pode carregar um arquivo a ser enviado como parametro da requisicao
// multerConfig - 
// .single("file") - permite enviar somente um arquivo a cada requisicao 
routes.post('/posts', multer(multerConfig).single("file"), async (req, res) => {
      // obtendo (destruct) atributos do arquivo enviado
    const { originalname: name, size , key, location: url = ""} = req.file;

    // criando collection post no mongodb   
    const post = await Post.create({
        name,
        size,
        key,
        url,
      });
      
      return res.json(post);

});

module.exports = routes;