var img=1 ;

        function next(){
            img+=1;
            if(img>=11){
                img = 1;
                console.log(img);
            }
            else{
                console.log(img);
            }
            slide(img);
        }

        function prev(){
            img-=1;
            if(img<=0){
                img = 10;
                console.log(img);
        }
            else{
                console.log(img);
            }
            slide(img);
        }
        setInterval(function(){
            img++;
            if(img>=11){
                img = 1;
                console.log(img);
            }
            else{
                console.log(img);
            }
            slide(img);
        },10000);
        var n;
        function slide(n){
            switch (n) {
            case 1:
                document.getElementById('first').style.marginLeft="0";
                break;
            case 2:
                document.getElementById('first').style.marginLeft="-20%";
                break;
            case 3:
                document.getElementById('first').style.marginLeft="-40%";
                break;
            case 4:
                document.getElementById('first').style.marginLeft="-60%";
                break;
            case 5:
                document.getElementById('first').style.marginLeft="-80%";
                break;
            case 6:
                document.getElementById('first').style.marginLeft="-100%";
                break;
            case 7:
                  document.getElementById('first').style.marginLeft="-120%";
                  break;
            case 8:
                  document.getElementById('first').style.marginLeft="-140%";
                  break;
            case 9:
                  document.getElementById('first').style.marginLeft="-160%";
                  break;
            case 10:
                  document.getElementById('first').style.marginLeft="-180%";
                  break;
        }
    }