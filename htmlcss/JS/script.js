function fnadd(x,y)
        {
            var z=x+y;
            return z;

        }
        function fnsub(x,y)
        {
            var z=x-y;
            return z;

        }
        function fnmul(x,y)
        {
            var z=x*y;
            return z;

        }
        function fndiv(x,y)
        {
            var z=x/y;
            return z;

        }
        function calc(){
            var ans=0;

            var n1=parseInt(document.getElementById("number1").value);
            var n2=parseInt(document.getElementById("number2").value);
            var op=document.getElementById("operation").value;
            
            switch(op)
            {
                case "addition" :ans=fnadd(n1,n2);
                    break;
                case "subtraction" :ans=fnsub(n1,n2);
                    break;
                case "multiplication" :ans=fnmul(n1,n2);
                    break;
                case "division" :ans=fndiv(n1,n2);
                break;
            }

            document.getElementById("result").innerHTML=ans;   
        }