$(document).ready(function(){
        
//        $.getJSON('./sample.json',function(data){
//           
//              var tr;
//        for (var i = 0; i < data.length; i++) {
//            tr = $('<tr/>');
//            tr.append("<td>" + data[i].StudentName + "</td>");
//            tr.append("<td>" + data[i].age + "</td>");
//            
//            tr.append("<td class='sub'>" + data[i].subjects.Physics + "</td>");
//            tr.append("<td class='sub'>" + data[i].subjects.Chem + "</td>");
//            tr.append("<td class='sub'>"+ data[i].subjects.Maths + "</td>");
//            $('table').append(tr);  } 
//           
//        });
    
   $.ajax({
        url:'http://jsonplaceholder.typicode.com/posts',
        type:'GET',
        success: function(res){
            var data = JSON.parse(res);
           
        },
        error: function(err){
            console.log('inside error method'+ err);
        },
        complete: function(){
            console.log('inside complete method');
        }
    })
     
        $('#Total').on('click',total);
        function total(){
            var record=$(this).parents('.parent').siblings();

            for(var i=0;i<record.length;i++)
            {
                var abc=$(record[i]).children('.sub');

                var total=0;
                for(var j=0;j<abc.length;j++)
                {
                    total=total+parseInt($(abc[j]).html());
                }
            }

        }
 
    
})