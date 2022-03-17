const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next)=>{
  const post = req.body;
  console.log(post);

  res.statusCode(201).json({
    message: "Post added MF"
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "fjldfjl",
      title: 'First server-side post',
      content: 'Firs server-side post content: amena'
    },
    {
      id: "dsgdfsgssdfgsd",
      title: 'First server-side post222222222222',
      content: 'Firs server-side post content: amena222222222222222'
    }
  ];

  res.status(200).json(
    {
      message: 'Posts sended succesfulls',
      posts: posts
    }
  );

});



module.exports = app;
