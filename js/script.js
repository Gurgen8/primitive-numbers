
    
        var end = 100;
        x: for (var start = 0; start <= end; start++) {
           if(start === 0 || start === 1){
              continue;
           }
           for (var i = 2; i <= start; i++) {
              if(start % i  === 0 && start !== i){
                 continue x;
              }
           }
           document.write (start);
        }
    