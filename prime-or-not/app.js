n = parseInt(prompt());
c = 1;
for (i = 2 ; i < n ; i++)
{
    if(n % i ==0){
        c = 0;
    }
}
 if (c == 1)
{
    console.log(n," Prime Number");
}
else {
    console.log(n, " Not a Prime Number");
}