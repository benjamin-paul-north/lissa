

<html> <head><script>

x=prompt("enter x between -1 and 1");
y=prompt("enter y between -1 and 1");
var m=3,n=2,t=1,tolerance=.0001;
while( (Math.sqrt(2)-tolerance)>((Math.asin(y)+2*Math.PI*m)/(Math.acos(x)+2*Math.PI*n))||
 (Math.sqrt(2)+tolerance)<((Math.asin(y)+2*Math.PI*m)/(Math.acos(x)+2*Math.PI*n))) {
if( (Math.sqrt(2)-tolerance)>=((Math.asin(y)+2*Math.PI*m)/(Math.acos(x)+2*Math.PI*n))){
 m=m+1;} else if((Math.sqrt(2)+tolerance)<=((Math.asin(y)+2*Math.PI*m)/(Math.acos(x)+2*Math.PI*n))) { n=n+1;} }

t=Math.acos(x)+2*Math.PI*n;

alert(t);
</script></head></body></html>






<html><head><script>
var t=prompt("enter t");
var x=Math.cos(t);
var y=Math.sin(t*Math.sqrt(2));

alert(x);
alert(y);
</script></head><body/></html>
