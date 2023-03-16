const express=require('express');
const app=express()

const port=5100;

//connect to server
const database=require('mysql');
const bodyParser=require('body-parser');

const data = database.createConnection(
    {




        host:"localhost",
        user:"root",
        password:"",
        database:"comment"
    }
)

const value=require('./data.json');
const userdetail=JSON.stringify(value.currentUser)
//console.log(userdetail);

var results=value.comments;
var arr=[];
var datas;
//console.log(results);
//console.log(Object.values(results));
//console.log(results[1].replies);
 let urlencoded=bodyParser.urlencoded({extended:false})
app.use(bodyParser.json());




app.set("view engine","ejs");
app.use(express.static('public'));

app.get('/first',(req,res)=>
{
    
   results.map((x)=>
   {
    arr.push([x.id,x.content,x.createdAt,x.score,JSON.stringify(x.user),JSON.stringify(x.replies)])

   })

    //let send="INSERT INTO commentbox VALUES ?"
    let send="select * from commentbox";
    data.query(send,(err,result)=>
    {
        if(err)
        {
           console.log('error:' + err);
        }
        else
        {
          console.log("hi...");
          datas=result;
          //console.log("Welcome",datas)
        
        }

    })
   res.render("first",{datas,userdetail});
   
})

app.post("/new",(req,res)=>
{
    console.log("Hi...............,",req.body.newdetail);
    let trial=req.body.newdetail;
    //console.log(trial[0].user)
     let send="INSERT INTO `commentbox` (`content`, `createdat`, `score`, `user`, `replies`) VALUES ('"+trial[0].content+"','"+trial[0].createdat+"','"+trial[0].score+"','"+trial[0].user+"','"+JSON.stringify(trial[0].replies)+"') "
    data.query(send,(err,result)=>
    {
        if(err)
        {
            console.log("Error",err)
        }
        else
        {
            console.log("Happy!...")
        }
    })
    res.render("first")
})



app.post("/reply",(req,res)=>
{
    
    let trial=JSON.stringify(req.body.replydetail);
    console.log(trial);
   console.log(req.body.userid);
     let send="UPDATE `commentbox` SET `replies`='"+trial+"' WHERE `Id`='"+req.body.userid+"'"
    data.query(send,(err,result)=>
    {
        if(err)
        {
            console.log("Error",err)
        }
        else
        {
            console.log("Happy!...")
        }
    })
    res.render("first")
})


app.post("/update",(req,res)=>
{
    
    let given=JSON.stringify(req.body.updetail);
    console.log(given);
   console.log(req.body.selectid);
     let send="UPDATE `commentbox` SET `replies`='"+given+"' WHERE `Id`='"+req.body.selectid+"'"
    data.query(send,(err,result)=>
    {
        if(err)
        {
            console.log("Error",err)
        }
        else
        {
            console.log("Happy!...")
        }
    })
    res.render("first")
})


app.post("/cancel",(req,res)=>
{
    
    let given=JSON.stringify(req.body.deldetail);
    console.log(given);
   console.log(req.body.selectid);
     let send="UPDATE `commentbox` SET `replies`='"+given+"' WHERE `Id`='"+req.body.selectid+"'"
    data.query(send,(err,result)=>
    {
        if(err)
        {
            console.log("Error",err)
        }
        else
        {
            console.log("Happy!...")
        }
    })
    res.render("first")
})


data.connect((err)=>
    {
        if(err)
        {
            console.log(error);
        }
        else
        {
            let send="select * from commentbox";
            data.query(send,(err,result)=>
            {
                if(err)
                {
                   console.log('error:' + err);
                }
                else
                {
                  console.log("hi...");
                  datas=result;
                  //console.log("Welcome",datas)
                
                }
        
            })
           
           console.log("connected!")
            
        }
    })
app.listen(port,()=>console.log("I am listen"));
