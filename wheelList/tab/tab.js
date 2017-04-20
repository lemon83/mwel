

    function Tab(btn,cont){
        Tab.prototype.btn = document.getElementsByTagName(btn);
        Tab.prototype.cont = document.getElementsByTagName(cont);
        Tab.prototype.flag = true;
        this.iNow = 0;
    };
    Tab.prototype.init = function(){
        var that = this;
        for(var i=0;i<this.btn.length;i++){
            this.btn[i].index = i;
            this.btn[i].onclick = function(){
                that.iNow = this.index;

                that.play(this);
                this.style.color='blue';
            }
        }
    };
    Tab.prototype.play = function(btn){
        for(var j=0;j<this.cont.length;j++){
            this.cont[j].className = 'hide';
            this.btn[j].style.color = 'black';

        }
        this.cont[btn.index].className = 'show';
    };
    Tab.prototype.autoPlay = function(){
        var that = this;
        setInterval(()=>{
            if(that.iNow == that.btn.length - 1){
                that.iNow = 0;
            }else{
                that.iNow++;
            }
            for(var q=0;q<that.btn.length;q++){
                that.btn[q].style.color = 'black';
                that.cont[q].className = 'hide';
            }
            that.btn[that.iNow].style.color = 'blue';
            that.cont[that.iNow].className = 'show';

        },1200)
    }
    console.log(Tab.prototype)