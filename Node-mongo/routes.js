const router = require('express').Router();
const Todo = require('./Models/todoModel');

router.get('/', async(req,res)=>
    {
        try{
            await Todo.find()
                    .then((todos)=> res.status(200).json({sucess:true,todos}))
                    .catch(()=> res.status(404).json({sucess:false,message:"Todos not found"}));
        }
        catch(err){
            res.status(500).json({sucess:false,message:"Internal Server Error"})
        }

    }
)

router.get('/:id', async(req,res)=>
    {
        try{
            await Todo.findById(req.params.id)
                    .then((todo)=> res.status(200).json({sucess:true,todo}))
                    .catch(()=> res.status(404).json({sucess:false,message:"Todo not found"}));
        }
        catch(err){
            res.status(500).json({sucess:false,message:"Internal Server Error"})
        }

    }
)

router.post('/', async(req,res)=>
    {
        try{
            const todo = new Todo({
                name: req.body.name,
                status: false
            });
            await todo.save()
                    .then(()=> res.status(201).json({sucess:true,todo}))
                    .catch(()=> res.status(404).json({sucess:false,message:"Todo creation failed"}));
        }
        catch(err){
            console.log(err);
            res.status(500).json({sucess:false,message:"Internal Server Error"})
        }

    }
)

router.patch('/:id', async(req,res)=>
    {
        try{
            await Todo.findByIdAndUpdate(req.params.id,req.body)
                    .then((todo)=> res.status(200).json({sucess:true,todo}))
                    .catch(()=> res.status(404).json({sucess:false,message:"Todo Updation failed"}));
        }
        catch(err){
            console.log(err);
            res.status(500).json({sucess:false,message:"Internal Server Error"})
        }

    }
)

router.delete('/:id', async(req,res)=>
    {
        try{
            await Todo.findByIdAndDelete(req.params.id)
                    .then((todo)=> res.status(204).json({sucess:true,message:"Todo deleted successfully"}))
                    .catch(()=> res.status(404).json({sucess:false,message:"Todo deletion failed"}));
        }
        catch(err){
            console.log(err);
            res.status(500).json({sucess:false,message:"Internal Server Error"})
        }

    }
)

module.exports =router;

