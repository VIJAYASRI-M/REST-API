const db = require('../config/dataBase');

const bookService = {
    
    addBook: (book)=>{
        const query = "insert into books (title, author, price, stock, category_id) values(?,?,?,?,?)";
        return new Promise((resolve,reject)=>{
            db.query(query,[book.title,book.author,book.price,book.stock,book.category_id],(err,results)=>{
                if(err) reject(err);
                resolve(book);
            });
        });
    },
    
    getAllBooks: ()=>{
        const query = "select * from books";
        return new Promise((resolve,reject)=>{
            db.query(query,(err,results)=>{
                if(err) reject(err);
                resolve(results);
            });
        });
    },

    getBookById: (id)=>{
        const query = "select * from books where book_id= ?";
        return new Promise((resolve,reject)=>{
            db.query(query,[id],(err,results)=>{
                if(err) reject(err);
                if(results.length==0) reject("Book not Found");
                resolve(results[0]);
            });
        });
    },

    updateBook: (id,book)=>{
        const query = "update books set title = ?,author= ?, price= ?, stock=?, category_id=?  where book_id= ?";
        return new Promise((resolve,reject)=>{
            db.query(query,[book.title,book.author,book.price,book.stock,book.category_id,id],(err,result)=>{
                if(err) reject(err);
                resolve("Book Updated Successfully");
            });
        });
    },

    DeleteBook: (id)=>{
        const query = "delete from books where book_id= ?";
        return new Promise((resolve,reject)=>{
            db.query(query,[id],(err)=>{
                if(err) reject(err);
                resolve();
            });
        });
    }

};

module.exports = bookService;