

function sending(a)
{
    console.log(a);
    console.log(commenting.value);
    var arr=[];
    let randomnumber=Math.floor(Math.random()*10)
    let obj={
        content:commenting.value,
        createdat:"Now",
        score:randomnumber,
        user:a,
        replies:[]
        
    }
    arr.push(obj);

    fetch('new',
       {method: 'POST',
       headers: {
         'Content-Type': 'application/json;charset=utf-8'
         },
       body: JSON.stringify({
        newdetail:arr
       }),
       redirect:"follow"
        }).then(
           function(response)
           {
           window.location.reload();
            return response;
               
           }
       )
}
var givenid;
function replying(identity,b)
{
    
    let givenvalue=identity.innerText;
    console.log(identity)
    console.log(givenvalue);
    if(b.style.display=="none")
    {
        b.style.display="block"
    }
   
    else
    {
        b.style.display="none"
    }
    givenid=givenvalue;
    
}
function replyed(detail,ele,givenarr)
{
    console.log(givenid);
    let persondetail=JSON.parse(detail);
    console.log(ele);
    console.log(givenarr);
     let arr=JSON.parse(givenarr);
     console.log(arr);
    var arr1;
    if(arr.length>=1)
    {
    arr1=arr;
    }
    else
    {
        arr1=[]
    }
    console.log(arr1);
    let random=Math.floor(Math.random()*10)
    let object=
    {
        id:random,
        content:ele.value,
        createdAt:"Now",
        score:random,
        user:persondetail
       

    }
    arr1.push(object);
    //  console.log(JSON.stringify(arr1))
    console.log(arr1);

    fetch('reply',
       {method: 'POST',
       headers: {
         'Content-Type': 'application/json;charset=utf-8'
         },
       body: JSON.stringify({
        replydetail:arr1,
        userid:givenid
       }),
       redirect:"follow"
        }).then(
           function(response)
           {
           
           window.location.reload();
            return response;
               
           }
       )

   
}
function update(c)
{
    if(c.style.display=="none")
    {
        c.style.display="block"
    }
   
    else
    {
        c.style.display="none"
    }
    
}

function updating(d,ind,id,rep)
{
    console.log(ind);
    console.log(id);
    console.log(rep);
    console.log(d.value);
    var arrvalue=JSON.parse(rep);
   
    var arrind=arrvalue[ind];
    console.log(arrind);
 
  let obj=
  {
    id:arrind.id,
    content:d.value,
    createdAt:arrind.createdAt,
    score:arrind.score,
    user:arrind.user
  }
console.log(obj);
if(d.value != "")
{
arrvalue.splice(ind,1,obj);
}
else
{
    arrvalue.splice(ind,1);
}
console.log(arrvalue)
useralldetail=arrvalue;
fetch('update',
       {method: 'POST',
       headers: {
         'Content-Type': 'application/json;charset=utf-8'
         },
       body: JSON.stringify({
        updetail:arrvalue,
        selectid:id
       }),
       redirect:"follow"
        }).then(
           function(response)
           {
           window.location.reload();
           window.location.reload();
            return response;
               
           }
       )

}

function cancel()
{
   
    
        hidediv.style.display="none";
    
    
}
var usedarr=[];
var selectdata=0;
function cancelling(number,userarr,userdata)
{
    hidediv.style.display="block";
    console.log(number,userarr);
    let usingarr=JSON.parse(userarr);
    usingarr.splice(number,1);
    console.log(usingarr);
    usedarr=usingarr;
    selectdata=userdata
   

}

function del()
{
    console.log(selectdata);
    console.log(usedarr);

    fetch('cancel',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
      },
    body: JSON.stringify({
     deldetail:usedarr,
     selectid:selectdata
    }),
    redirect:"follow"
     }).then(
        function(response)
        {
        window.location.reload();
         return response;
            
        }
    )
}