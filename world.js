window.onload = function(){
    
    var but1 = document.getElementById("countrylookup");
    var but2 = document.getElementById("citylookup");
    var result = document.getElementById("result");
   

    but1.addEventListener('click',function(a){
        a.preventDefault();
        
        var country = document.getElementById("country").value;
        
        var xmlR  = new XMLHttpRequest();
    
        url = 'world.php?country='+ country;
      
        xmlR.onreadystatechange = req;
        xmlR.open('GET', url);
        
        xmlH.send();
        
    });
    
    
    function req(){
        if((xmlR.readyState === XMLHttpRequest.DONE) && (xmlR.status === 200))
        {
           result.innerHTML = xmlR.responseText;
        }
    }
    
     but2.addEventListener('click',function(b){
        b.preventDefault();
        
        var country = document.getElementById("country").value;
        
        var xmlR1  = new XMLHttpRequest();
    
        url = 'world.php?country='+country+'&context='+country;
       
        xmlR.onreadystatechange = secreq;
        xmlR1.open('GET', url);
        xmlR1.send();
        
    });
    
     function secreq(){
        if((xmlR1.readyState === XMLHttpRequest.DONE) && (xmlR1.status === 200))
        {
           result.innerHTML = xmlR1.responseText;
        }
       
    }
};