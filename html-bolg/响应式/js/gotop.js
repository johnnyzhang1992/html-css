 window.onload=function(){
            var timer=null;
            var goTop=document.getElementById("goTop");
            goTop.onclick=function(){
                timer=setInterval(function(){
                    var top=document.body.scrollTop+document.documentElement.scrollTop;
                    var speed=top/5;
                    if(document.body.scrollTop){
                        document.body.scrollTop-=speed;
                    }
                    else{
                        document.documentElement.scrollTop-=speed;
                    }
                    if(top==0){
                        clearInterval(timer);
                    }
                },30);
            };
            window.onscroll=function(){
                if(document.body.scrollTop+document.documentElement.scrollTop>=500){
                    goTop.style.display="block";
                }
                else{
                    goTop.style.display="none";
                }
            };
	    window.onmousewheel=function(e){if(e.wheelDelta<0) clearInterval(timer);};
        };