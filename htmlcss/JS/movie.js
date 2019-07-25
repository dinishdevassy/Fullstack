var i=0;
var moviearray=Array();
"<table>";
function movielist()
{
    moviearray[i]=document.getElementById("moviename").value;
    i++;
    var res="";
    for(j=0;j<moviearray.length;j++)
    {
        res+=moviearray[j]+"<br>";
    }
    document.getElementById("result").innerHTML=res;
    document.getElementById("moviename").value="";
     "+<tr>"+"<td> "+hai+"</td>"+"</tr>";
}
"+</table>";