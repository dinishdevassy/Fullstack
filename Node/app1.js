var greeting=require("./greeting");
greeting.sayhello();
greeting.sayby();
// greeting.greet();
greeting.language;
printarray();
function printarray()
{
    for(var i=0;i<greeting.language.length;i++)
    {
        console.log(greeting.language[i]);
    }
}
