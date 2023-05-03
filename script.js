var table = document.getElementById("ttable");
function foo(){
    var firstn = document.getElementById("firstname").value;
   var lastn = document.getElementById("lastname").value;
   var addr = document.getElementById("address").value;
   var pin=document.getElementById("pincode").value;
   
   var st = document.getElementById("state").value;
   var cou = document.getElementById("country").value;

    var template = `
 <tr>
    <td>${firstn}</td>
    <td>${lastn}</td>
    <td>${addr}</td>
    <td>${pin}</td>
    
    <td>${st}</td>
    <td>${cou}</td>
 </tr>
 `;
    table.innerHTML += template;
}