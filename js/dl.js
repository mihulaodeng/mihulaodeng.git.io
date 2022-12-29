window.addEventListener('load',function(){
    
    var input = document.getElementsByTagName('input');
        var email = input[0];
        var psw = input[1];
        var chek = input[2];
        var buttom = input[3];
        var ebox = document.getElementById('ebox');
        var pbox = document.getElementById('pbox');
        var warm=document.querySelector('.warm')
        // 焦点移入邮箱框
        email.onfocus = function () {
            ebox.style.background = '#fff';
            if (this.value == 'Enter Email') {
                this.value = '';
            }
        }
        email.onblur = function () {
            ebox.style.background = 'rgba(255,255,255,0.5)';
            if (this.value == '') {
                this.value = 'Enter Email';
                em_erro.style.display='block'
            }else{
                em_erro.style.display='none'
            }
        }
        // 焦点移入密码框
        psw.onfocus = function () {
            pbox.style.background = '#fff';
            if (this.value == 'Enter Password') {
                this.value = '';
            }
        }
        psw.onblur = function () {
            pbox.style.background = 'rgba(255,255,255,0.5)';
            if (this.value == '') {
                this.value = 'Enter Password';
                ps_erro.style.display='block'
            }else{
                ps_erro.style.display='none'

            }
        }
        // buttom.onclick=function(){
        //     if (chek.checked!='checked') {
        //         warm.style.display='block';
        //     }
        // }
        buttom.addEventListener('click',function(){
            if(email.value==11223344&&psw.value==123456){
                window.location.href='index.html'
            }else{
                tow.style.display='block'
            }
        })

        // 
        // 
    var em_erro=document.querySelector('.em_erro')
    var ps_erro=document.querySelector('.ps_erro')
    var tow=document.querySelector('.tow')
})