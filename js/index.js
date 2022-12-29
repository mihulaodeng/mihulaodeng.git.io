window.addEventListener('load',function(){
    var tp=document.querySelector('.tp')
    var ul=tp.children[0]
    var wd=tp.offsetWidth
    var num=0
    // 自动播放图片
    var timer=setInterval(function(){
        num++
        if(num>=ul.children.length){
            num=0
            move=-num*wd
            ul.style.transform='translateX('+move+'px)'
        }else{
            var move=-num*wd
            ul.style.transition='all,.5s'
            ul.style.transform='translateX('+move+'px)'
        }
    },3000)
    // 鼠标移入圈，让图片显示
    var dt=document.querySelector('.dt')
    var quan=dt.querySelectorAll('.quan')
    for(var i=0;i<quan.length;i++){
        quan[i].addEventListener('mouseover',function(){
            // 清除定时器
            clearInterval(timer)
            timer=null
            ul.style.transition='none'
            var index=this.getAttribute('index')
            num=index
            console.log(num);
            var move=-num*wd
            ul.style.transform='translateX('+move+'px)'
        })
    }
    for(var i=0;i<quan.length;i++){
        quan[i].addEventListener('mouseout',function(){
            clearInterval(timer)
            timer=null
            // 注意!这里用来储存定时器的变量必须为全局变量
            timer=setInterval(function(){
                num++
                if(num>=ul.children.length){
                    num=0
                    move=-num*wd
                    ul.style.transform='translateX('+move+'px)'
                }else{
                    var move=-num*wd
                    ul.style.transition='all,.5s'
                    ul.style.transform='translateX('+move+'px)'
                }
            },3000)
        })
    }

    // 留言板
    var text = document.querySelector('.zhanshi').querySelector('ul')
    var fs=document.querySelector('.fasong').querySelector('button')
    
    fs.addEventListener('click',function(){
        var textarea=document.querySelector('.fasong').querySelector('textarea')
        // 创建li
        var li=document.createElement("li")
        
        li.innerHTML=textarea.value+'<a href=javascript:;>删除<a/>'
        text.appendChild(li)
        textarea.value='';
        var dl=li.querySelector('a')
       dl.addEventListener('click',function(){
        text.removeChild(dl.parentNode)
       })
    })


    // 遮罩层

    // 获取相册元素
    var xc_img=document.querySelector('.xc-bd').children
    // 获取遮罩层元素
    var mask=document.querySelector('.mask')
    var img=mask.querySelector('img')
    var but=mask.querySelector('.but')
    for(var i=0;i<xc_img.length;i++){
        xc_img[i].addEventListener('click',function(){
            var src=this.children[0].src
            img.src=src
            mask.style.display='block'
        })
    }
    but.addEventListener('click',function(){
        mask.style.display='none'
    })

})