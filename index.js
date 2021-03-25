require('dotenv').config();
const express = require('express')
const app = express()

const port = process.env.PORT || 3000; 

app.use(express.json()); //middleware preconfiguraciones en ete caso tipo

app.get('/users', function (req, res) 
{
    const users = 
    [
        {
            id: 1,
            name: 'Fernando'
        },
        
        {
            id: 2,
            name: 'Marta'
        },
    ]
   res.json(users); //200 default entonces no lo pongo
});


app.post('/users', function (req, res)
{  
    const user = req.body;
    user.id = 86546;

    const result =
    {
        message: 'User created',
        user
    }
  res.status(201).json(result);
});

app.put('/users/:id', function (req, res) 
{
    const {id} = req.params;
    const user = req.body;

    user.id = id;

    const result = 
    {
        message: 'User updated',
        user
    }
    res.status(200).json(result)
});

app.patch('/users/:id', function (req, res) 
{
    const {id} = req.params;
    const user = req.body;

    user.id = id;
    const result = 
    {
        message: 'User updated with patch',
        user
    }

    res.status(200).json(result);
});

app.delete('/users/:id', function (req, res)  //con los : indico que es dinamico
{
const {id} = req.params;
//const id = req.params.id;

    const result =
    {
        message: `User with id: ${id} deleted`
    }
  res.json(result);
});

////
app.listen(port, ()=> 
    {
        console.log(`############### App started. PORT: ${port} ###############`);
    }
);
