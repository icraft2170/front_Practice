window.addEventListener('load',function(){
    const signIn = document.querySelector(".signin");
    const signInEmail = signIn.querySelector(".signin-email");
    const singInPassword = signIn.querySelector(".singin-password");
    const singInPasswordRe = signIn.querySelector(".singin-password-re");
    const singInNameText = signIn.querySelector(".singin-name__text");

    // EmailInput
    function emailValidCheck(){
        const addEmailVaildCheck = signIn.querySelector('.signin-email__vailidcheck');
        const regExp =/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        let check;
        const template = `
            <div>
                {{__email_vaild_check_value__}}
            </div>
        `
        if(regExp.test(signInEmail.value)){
            check = `
            <span class="material-icons blue">
                올바른 아이디입니다. done
            </span>
            `
        }else{
            check = `<span class="red"> 이메일을 올바르게 입력해주세요</span>`
        }
        addEmailVaildCheck.innerHTML = template.replace('{{__email_vaild_check_value__}}',check);
    }

    function emailInput(){
        const regExp =/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if(regExp.test(signInEmail.value)){
            signInEmail.classList.add("underline-blue");
        }else{
            signInEmail.classList.add("underline-red");
        }
    }
    function emailBlur(){
        signInEmail.classList.remove("underline-blue");
        signInEmail.classList.remove("underline-red");
    }

    signInEmail.addEventListener('change', emailValidCheck);
    signInEmail.addEventListener('input',emailInput);
    signInEmail.addEventListener('blur',emailBlur);


    // Password Input

    function passwordValidCheck(){
        const addPassWordValid = signIn.querySelector('.signin-password__vailidcheck');
        const regExp =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
        let check;
        const template = `
            <div>
                {{__password_vaild_check_value__}}
            </div>
        `
        if(regExp.test(singInPassword.value)){
            check = `
            <span class="material-icons blue">
                done
            </span>
            `
        }else{
            check = `
            <span class="material-icons red">
            clear
            </span>
            `
        }

        addPassWordValid.innerHTML = template.replace('{{__password_vaild_check_value__}}',check);
    }

    function passwordInput(){
        const regExp =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
        if(regExp.test(singInPassword.value)){
            singInPassword.classList.add("underline-blue");
        }else{
            singInPassword.classList.add("underline-red");
        }
    }
    function passwordBlur(){
        singInPassword.classList.remove("underline-blue");
        singInPassword.classList.remove("underline-red");
    }

    singInPassword.addEventListener('input',passwordValidCheck);
    singInPassword.addEventListener('input',passwordInput);
    singInPassword.addEventListener('blur',passwordBlur);

    // Password-re Input
    function passwordReValidCheck(){
        const addPassWordValid = signIn.querySelector('.signin-password-re__vailidcheck');
        let check;
        const template = `
            <div>
                {{__password_vaild_re_check_value__}}
            </div>
        `

        if(singInPassword.value !== singInPasswordRe.value){
            check =`
            <span class="material-icons red">
            clear 비밀번호가 다릅니다..
            </span>
            `
        }else if(singInPassword.value === singInPasswordRe.value){
            check= `
            <span class="material-icons blue">
            done 비밀번호가 동일합니다
            </span>
            `
        }

        addPassWordValid.innerHTML = template.replace('{{__password_vaild_re_check_value__}}',check);
    }

    function passwordReInput(){
        const regExp =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
        if(singInPassword.value !== singInPasswordRe.value){
            singInPasswordRe.classList.add("underline-red");
            return;
        }
        if(regExp.test(singInPassword.value)){
            singInPasswordRe.classList.add("underline-blue");
        }else{
            singInPasswordRe.classList.add("underline-red");
        }
    }
    function passwordReBlur(){
        singInPasswordRe.classList.remove("underline-blue");
        singInPasswordRe.classList.remove("underline-red");
    }

    singInPasswordRe.addEventListener('input',passwordReValidCheck);
    singInPasswordRe.addEventListener('input',passwordReInput);
    singInPasswordRe.addEventListener('blur',passwordReBlur);

});


