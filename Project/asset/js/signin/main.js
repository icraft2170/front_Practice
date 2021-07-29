{

    function commit(){
        const popup = document.querySelector(".popup-box");
        popup.remove();
        return;
    }

}



window.addEventListener("load",function(){
    const content = document.querySelector(".sign-in__content");
    const form = content.querySelector(".sign-in__form");
 
    // input
    const email = form.querySelector(".input__email");
    const password = form.querySelector(".input__password");
    const passwordRe = form.querySelector(".input__password--re");
    const name = form.querySelector(".input__name");
    const number = form.querySelector(".input__number");
    
    
    
    // passwordIcon
    const pwdConfirm = form.querySelector(".sign-in--label--password");
    const pwdReConfirm = form.querySelector(".sign-in--label--passwordRe");

    // 패스워드 내용확인
    pwdConfirm.addEventListener('mousedown', function(){
            password.setAttribute('type','text');
            pwdConfirm.textContent = 'visibility';
    });

    pwdConfirm.addEventListener('mouseup',function(){
            password.setAttribute('type','password');
            pwdConfirm.textContent = 'visibility_off';
    });


    pwdReConfirm.addEventListener('mousedown', function(){
            passwordRe.setAttribute('type','text');
            pwdReConfirm.textContent = 'visibility';
    });

    pwdReConfirm.addEventListener('mouseup', function(){
            passwordRe.setAttribute('type','password');
            pwdReConfirm.textContent = 'visibility_off';
    });        



    // email input js
    {
    email.addEventListener('focus',function(){
        if(!email.parentElement.classList.contains("error-border")){
            email.parentElement.classList.add("blue-border");
        }
    })

    email.addEventListener('blur',function(){
        const errorDiv = form.querySelector('.sign-in__id--error');
        const idCheckIcon = form.querySelector(".sign-in--label--id");
        const regExp =/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        let checked;

        const template = `
        <ul>
            {{__error__text__}}
        </ul>`
        
        if(regExp.test(email.value)){
            idCheckIcon.textContent = "done";
            checked="";
            email.parentElement.classList.remove("error-border");
            email.parentElement.classList.add("blue-border");
        }else if(email.value == undefined
            ||email.value==""
            ||email.value==null){
           checked = `<li"><span class="material-icons error-icon">error</span>이메일을 입력하세요</li>`
           email.parentElement.classList.remove("blue-border");
           email.parentElement.classList.add("error-border");
        }else{
            idCheckIcon.textContent = "";
            checked = `<li><span class="material-icons error-icon">error</span>이메일의 형식이 올바르지 않습니다.</li>`
            email.parentElement.classList.remove("blue-border");
            email.parentElement.classList.add("error-border");
        }

        errorDiv.innerHTML = template.replace('{{__error__text__}}',checked);
    })
    
    }


      //password input
    {
        const checkedDiv = form.querySelector('.sign-in__pwd--error');
        const checkedDivRe = form.querySelector('.sign-in__pwdRe--error');
        const pwdCheckIcon = form.querySelector(".sign-in--label--password");
        const regExp =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
        let checked=`
            <li class="error-message-gray"><span class="material-icons error-icon--gray">close</span>영문/숫자/특수문자 조합 (8~20자)</li>
            <li class="error-message-gray"><span class="material-icons error-icon--gray">close</span>아이디(이메일) 제외</li>
        `;
        let checkedRe=``;
        const template = `
        <ul>
            {{__error__text__}}
        </ul>`

      
        password.addEventListener('focus',function(){
            if(!password.parentElement.classList.contains("error-border")){
                password.parentElement.classList.add("blue-border");
            }
            checkedDiv.innerHTML = template.replace('{{__error__text__}}',checked);
        })

        password.addEventListener('blur',function(){
            if(password.value == undefined
                ||password.value==""
                ||password.value==null){
            checked = `
                <li class="error-message"><span class="material-icons error-icon">close</span>영문/숫자/특수문자 조합 (8~20자)</li>
                <li class="error-message"><span class="material-icons error-icon">close</span>아이디(이메일) 제외</li>
            `
            password.parentElement.classList.remove("blue-border");
            password.parentElement.classList.add("error-border");
            }
            checkedDiv.innerHTML = template.replace('{{__error__text__}}',checked);
        });

        password.addEventListener('input',function(){
            pwdCheckIcon.classList.remove("checked-color")
            
            if(regExp.test(password.value)&&password.value!=email.value){
                checked=`
                    <li class="checked-color--green"><span class="material-icons checked-icon">check</span>사용 가능한 비밀번호입니다.</li>`;
                password.parentElement.classList.add("blue-border");
            }else if(!regExp.test(password.value)&&password.value!=email.value){
                checked = `
                <li class="error-message"><span class="material-icons error-icon">close</span>영문/숫자/특수문자 조합 (8~20자)</li>
                <li class="checked-color--green"><span class="material-icons checked-icon">check</span>아이디(이메일) 제외</li>
                `
                password.parentElement.classList.remove("blue-border");
                password.parentElement.classList.add("error-border");
            }else if(regExp.test(password.value)&&password.value==email.value){
                checked = `
                <li class="checked-color--green"><span class="material-icons checked-icon">check</span>영문/숫자/특수문자 조합 (8~20자)</li>
                <li class="error-message"><span class="material-icons error-icon">close</span>아이디(이메일) 제외</li>
                `
                password.parentElement.classList.remove("blue-border");
                password.parentElement.classList.add("error-border");
            }else{
                checked = `
                <li class="error-message"><span class="material-icons error-icon">close</span>영문/숫자/특수문자 조합 (8~20자)</li>
                <li class="error-message"><span class="material-icons error-icon">close</span>아이디(이메일) 제외</li>
                `
                password.parentElement.classList.remove("blue-border");
                password.parentElement.classList.add("error-border");
            }

            checkedDiv.innerHTML = template.replace('{{__error__text__}}',checked);


            if(password.value===passwordRe.value){
                checkedRe=`
                    <li class="checked-color--green"><span class="material-icons checked-icon">check</span>새 비밀번호가 일치합니다.</li>`;
                passwordRe.parentElement.classList.add("blue-border");
            }else{
                checkedRe = `
                <li class="error-message"><span class="material-icons error-icon">close</span>새 비밀번호가 일치하지 않습니다.</li>
                `
                passwordRe.parentElement.classList.remove("blue-border");
                passwordRe.parentElement.classList.add("error-border");
            }
            checkedDivRe.innerHTML = template.replace('{{__error__text__}}',checkedRe);
        })
    }

    // password-re
    {
        const checkedDiv = form.querySelector('.sign-in__pwdRe--error');
        const pwdCheckIcon = form.querySelector(".sign-in--label--passwordRe");
        let checked=`
            <li class="error-message-gray"><span class="material-icons error-icon--gray">close</span>확인을 위해 새 비밀번호를 다시 입력해주세요</li>
        `;
        const template = `
        <ul>
            {{__error__text__}}
        </ul>`

        passwordRe.addEventListener('focus',function(){
            if(!passwordRe.parentElement.classList.contains("error-border")){
                passwordRe.parentElement.classList.add("blue-border");
            }
            checkedDiv.innerHTML = template.replace('{{__error__text__}}',checked);
        })

        passwordRe.addEventListener('blur',function(){
            if(passwordRe.value == undefined
                ||passwordRe.value==""
                ||passwordRe.value==null){
            checked = `
                <li class="error-message"><span class="material-icons error-icon">close</span>확인을 위해 새 비밀번호를 다시 입력해주세요</li>
            `
            passwordRe.parentElement.classList.remove("blue-border");
            passwordRe.parentElement.classList.add("error-border");
            }
            checkedDiv.innerHTML = template.replace('{{__error__text__}}',checked);
        });

        passwordRe.addEventListener('input',function(){
            pwdCheckIcon.classList.remove("checked-color")
            
            if(password.value===passwordRe.value){
                checked=`
                    <li class="checked-color--green"><span class="material-icons checked-icon">check</span>새 비밀번호가 일치합니다.</li>`;
                passwordRe.parentElement.classList.add("blue-border");
            }else{
                checked = `
                <li class="error-message"><span class="material-icons error-icon">close</span>새 비밀번호가 일치하지 않습니다.</li>
                `
                passwordRe.parentElement.classList.remove("blue-border");
                passwordRe.parentElement.classList.add("error-border");
            }
            checkedDiv.innerHTML = template.replace('{{__error__text__}}',checked);
        })
    }



    // 이름 체크
    {
        const checkedDiv = form.querySelector(".sign-in__name--error");
        const nameCheckIcon = form.querySelector(".sign-in--label--name");
        const regExp = /^[가-힣]{2,20}|[a-zA-Z]{2,20}$/;
        
        let checked=``;
        
        const template = `
        <ul>
            {{__error__text__}}
        </ul>`


        name.addEventListener('focus',function(){
            if(!name.parentElement.classList.contains("error-border")){
                name.parentElement.classList.add("blue-border");
            }
        })

        name.addEventListener('blur',function(){
            if(regExp.test(name.value)){
              nameCheckIcon.textContent = "done";  
              checked="";
              name.parentElement.classList.remove("error-border");
              name.parentElement.classList.add("blue-border");
            }else{
                checked=`<li class="error-message"><span class="material-icons error-icon">close</span>이름을 정확히 입력하세요.</li>`
                nameCheckIcon.textContent = "";
                name.parentElement.classList.remove("blue-border");
                name.parentElement.classList.add("error-border");  
            }

            checkedDiv.innerHTML = template.replace('{{__error__text__}}',checked);
        })


    }

    // 휴대전화번호 체크
    {
        const checkedDiv = form.querySelector(".sign-in__number--error");
        const numberCheckIcon = form.querySelector(".sign-in--label--number");
        const regExp= /^01(?:0|1)(?:\d{8})|01(?:[6-9])(?:\d{7})$/;
        
        let checked=``;
        
        const template = `
        <ul>
            {{__error__text__}}
        </ul>`

        number.addEventListener('focus',function(){
            if(!number.parentElement.classList.contains("error-border")){
                number.parentElement.classList.add("blue-border");
            }
        })


        number.addEventListener('blur',function(){
            if(regExp.test(number.value)){
                checked = '';
                number.parentElement.classList.remove("error-border");
                number.parentElement.classList.add("blue-border");
                numberCheckIcon.textContent = "done";
            }else{
                number.parentElement.classList.remove("blue-border");
                number.parentElement.classList.add("error-border");
                numberCheckIcon.textContent = "";
                checked = '<li class="error-message"><span class="material-icons error-icon">close</span>휴대폰 번호를 올바르게 입력해주세요.</li>';

            }

            checkedDiv.innerHTML = template.replace('{{__error__text__}}',checked);
        });



    }





    // 체크박스 All / 체크박스 동작 제어
    {
        const checkContent = form.querySelector(".sign-in-checkbox");
        let allChecked = false;
        const allCheckBox = checkContent.querySelector(".check-box--all");
        const checkBoxes = checkContent.querySelectorAll(".sign-in__check");


        allCheckBox.addEventListener('change',function(){
            if(allCheckBox.checked == true){
                allChecked = true;
            }else{
                allChecked = false;
            }

            if(allChecked == true){
                for(let i = 0; i < checkBoxes.length; i++){
                    checkBoxes[i].checked = true;
                }
            }else{
                for(let i = 0; i < checkBoxes.length; i++){
                    checkBoxes[i].checked = false;
                }
            }

        });



        for(let i = 0; i < checkBoxes.length; i++){
            checkBoxes[i].addEventListener('change',function(){

                for(let i = 0; i < checkBoxes.length; i++){
                    if(checkBoxes[i].checked==false){
                        allChecked = false;
                        break;
                    }else{
                        allChecked = true;
                    }
                }

                if(allChecked == true){
                    allCheckBox.checked = true;
                }else{
                    allCheckBox.checked = false;
                }

            });
        }

    }

    // 체크박스 팝업창
    {
        // popup--serviceTerms
        // popup--personalCollection
        // popup--personalOffer


        

        const checkContent = form.querySelector(".sign-in-checkbox");
        const serviceTerms = checkContent.querySelector(".popup--serviceTerms");
        const personalCollection = checkContent.querySelector(".popup--personalCollection");
        const personalOffer = checkContent.querySelector(".popup--personalOffer");
        const popup = document.querySelector('.popup');
        const scrip = this.document.querySelector('.script');
        const popupBox = document.querySelector('.popup .popup-box');
        const close = document.querySelector('.popup-box .header .close-icons');
        const commit = document.querySelector('.popup-box .footer .commit');
        let title ='';
        let content ='';
        
        
        const template = `
            <div class="popup-box">
                <div class="header">
                    <div class="title">
                        {{__title__}}
                    </div>
                    <div class="close-icons" >
                        <button class="material-icons" onclick="commit();">close</button>
                    </div>
                </div>

                <div class="body">
                    {{__popup_content__}}
                </div>

                <div class="footer">
                    <button class="commit" onclick="commit();">확인</button>
                <div>
            <div>
         
        `


        serviceTerms.addEventListener('click',function(){
            title = `이용약관`;
            content = `[ 쿠팡 이용 약관 ]
            제1장 총칙
            
            제 1 조 (목적)
            이 약관은 쿠팡 주식회사(이하 “회사”)가 운영하는 사이버몰에서 제공하는 서비스와 이를 이용하는 회원의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
            
            제 2 조 (용어의 정의)
            이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 그리고 여기에서 정의되지 않은 이 약관상의 용어의 의미는 일반적인 거래관행에 따릅니다.
            1. “사이버몰”이란 회사가 상품 또는 용역 등(일정한 시설을 이용하거나 용역을 제공받을 수 있는 권리를 포함하며, 이하 “상품 등”)을 회원에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 상품 등을 거래할 수 있도록 설정한 가상의 영업장(http://www.coupang.com 등 회사가 운영하는 웹사이트 및 모바일 웹, 앱 등을 모두 포함)을 의미합니다.
            2. “회원”이라 함은 사이버몰에 회원등록을 한 자로서, 계속적으로 사이버몰에서 제공하는 서비스를 이용할 수 있는 자를 말합니다.
            3. “아이디(ID)”라 함은 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하여 등록된 전자우편주소를 말합니다.
            4. “비밀번호(Password)”라 함은 회원의 동일성 확인과 회원의 권익 및 비밀보호를 위하여 회원 스스로가 설정하여 사이버몰에 등록한 문자와 숫자 등의 조합을 말합니다.
            5. “마켓플레이스 서비스(MarketPlace Service)”라 함은 회사가 사이버몰을 통하여 제공하는 통신판매중개 서비스 및 관련 부가서비스 일체를 말합니다.
            6. “판매자”라 함은 “쿠팡 서비스 이용 약관-사업자용”을 승인하고 회사와 마켓플레이스 서비스(MarketPlace Service) 이용계약을 체결한 자 또는 마켓플레이스 서비스(MarketPlace Service)를 이용하여 실제로 상품을 판매하는 자를 말합니다.
            7. “할인쿠폰”이라 함은 상품 등을 구매할 때나 사이버몰이 제공하는 서비스를 이용할 때 표시된 금액 또는 비율만큼 할인 받을 수 있는 쿠폰을 말합니다.
            8. “쿠팡캐시 등”이라 함은 쿠팡캐시, 쿠페이머니 등 쿠팡페이㈜(이하 “쿠팡페이”)가 발행ㆍ관리하는 선불식전자지급수단으로서 쿠팡 및 회사와 계약한 제휴사에서 상품 등을 구매하고 그 대가를 지급하는 데 사용할 수 있는 지급수단을 말합니다.
            9. “제휴사”란 회사와 계약을 체결하여 회원에게 상품 등을 거래하거나 각종 정보 및 혜택 등을 제공하거나 회원이 쿠팡캐시 등을 사용, 교환할 수 있는 온라인 및 오프라인 업체를 의미합니다. 제휴사는 쿠팡 및 회사가 제공하는 개별 서비스 홈페이지에 고지되어 있으며, 회사 및 제휴사의 사정에 따라 해지 또는 추가될 수 있습니다.
            
            
            제 3 조 (약관의 명시와 설명 및 개정)
            ① 회사는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 주소를 포함), 전화번호, 모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업신고번호, 개인정보관리책임자 등을 회원이 쉽게 확인할 수 있도록 사이버몰의 초기 서비스 화면에 게시합니다. 다만, 약관의 구체적 내용은 회원이 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
            ② 회사는 『전자상거래 등에서의 소비자보호에 관한 법률』, 『약관의 규제에 관한 법률』, 『전자문서 및 전자거래기본법』, 『전자금융거래법』, 『전자서명법』, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』, 『소비자기본법』 등 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
            ③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 사이버몰의 화면에 그 적용일자 7일(다만, 회원에게 불리한 내용으로 변경하는 경우에는 30일) 이전부터 적용일자 전일까지 공지합니다.
            ④ 제3항에 의해 변경된 약관은 관련 법령에 특별한 규정 기타 부득이한 사유가 없는 한 그 적용일자 이전으로 소급하여 적용되지 아니합니다.
            ⑤ 제3항에 따라 공지된 적용일자 이후에 회원이 명시적으로 거부의사를 표명하지 않을 경우에는 개정된 약관에 동의하는 것으로 간주하며, 변경된 약관에 동의하지 않는 회원은 회원 탈퇴를 요청할 수 있습니다. 제3항의 조치에도 불구하고 약관의 개정 사실을 알지 못함으로써 발생하는 회원의 피해에 대하여 회사는 책임을 지지 않습니다.
            ⑥ 회사는 제공하는 서비스 내의 개별 서비스에 대한 별도의 약관 또는 이용조건을 둘 수 있으며 개별 서비스에서 별도로 적용되는 약관에 대한 동의는 회원이 개별 서비스를 최초로 이용할 경우 별도의 동의절차를 거치게 됩니다. 이 경우 개별 서비스에 대한 이용약관 등이 이 약관에 우선합니다.
            ⑦ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 『전자상거래 등에서의 소비자보호에 관한 법률』, 『약관의 규제에 관한 법률』, 공정거래위원회가 정하는 『전자상거래 등에서의 소비자 보호지침』 등 관련 법령 및 상관례에 따릅니다.
            ⑧ 이 약관의 규정이 대한민국의 강행법규와 상충되는 경우에는 그 강행법규에 따릅니다. 이 경우 다른 조항의 효력에는 영향을 미치지 아니합니다.
            
            제 4 조 (서비스의 제공 및 변경)
            ① 회사는 다음 각 호와 같은 서비스를 제공합니다.
            1. 전자상거래 서비스(통신판매중개서비스 포함) 및 이에 수반 되는 기타 서비스
            2. 기타 회사가 정하는 서비스 또는 업무
            ② 회사는 상품 등의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 상품 등의 내용을 변경할 수 있습니다. 이 경우에는 변경된 상품 등의 내용을 명시하여 현재의 상품 등의 내용을 게시한 곳에 즉시 공지합니다.
            ③ 회사가 제공하기로 회원과 계약을 체결한 서비스의 내용을 상품 등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 회원에게 통지 가능한 주소로 즉시 통지합니다.
            `;
            popup.innerHTML = template.replace('{{__title__}}',title).replace('{{__popup_content__}}',content);
        });




        personalCollection.addEventListener('click',function(){
            title = `개인정보 수집및 이용동의`;
            content = `□ 개인(신용)정보 수집 및 이용동의

            쿠팡은 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하’정보통신망법’)과 개인정보 보호법 등 국내 관련 법령을 준수합니다, 쿠팡의 회원 가입을 신청하시는 이용자에게 개인정보의 수집항목 및 이용목적, 개인정보의 보유 및 이용기간에 대하여 아래와 같이 안내드립니다.
            
            1. 수집하는 개인정보 항목
            1) 회원가입 시 : 아이디(이메일), 비밀번호, 이름, 휴대전화번호
            2) 이름, 생년월일, 성별, 통신사명, 휴대전화번호, 동일인식별정보(CI), 중복가입확인정보(DI), 내/외국인정보, 카드사명, 카드번호
            3) 수취인정보(이름, 연락처, 주소), 숙박 예약자 및 동반인정보(국/영문 이름, 생년월일 등), 개인고유통관부호
            4) 서비스 이용기록, 접속로그, 쿠키, 접속IP정보, 결제기록, 단말기 정보(OS종류 및 버전)
            5) 쿠팡이츠 서비스 이용자에 한하여 이름, 연락처, 음식점 소재지, 개인 위치 정보
            
            2. 수집 및 이용목적
            1) 서비스 가입, 개인 식별, 본인 확인, 고객 상담, 서비스 이용 철회 처리 등의 회원 관리
            2) 상품 구매 및 판매에 따른 본인인증, 구매 및 요금 결제, 상품 및 서비스의 배송
            3) 서비스 방문 및 이용 기록의 분석과 서비스 이용에 대한 통계 등을 기반으로 맞춤형 서비스 제공 및 기존 서비스 개선, 신규 서비스 요소 개발 등 서비스 이용 환경 구축
            4) 부정 이용(거래) 등의 법령 및 이용약관을 위배하거나 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 이용자에 대한 제한 조치 및 제재, 계정도용 및 부정거래 방지, 약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영
            5) 특정 금융거래정보의 보고 및 이용 등에 관한 법률 상의 고객 확인 의무 및 강화된 고객 확인 수행
            6) 광고성 정보 제공 등 마케팅 및 프로모션 소식 전달, 이벤트 정보 및 참여기회 제공
            7) 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한 통계, 서비스 분석 및 통계에 따른 맞춤 서비스 제공 및 광고 게재
            8) 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축
            
            3. 보유 및 이용기간, 파기
            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되거나, 회원 탈퇴 요청 시 지체없이 재생이 불가능한 방법으로 파기합니다. 단, 아래의 정보에 대해서는 다음과 같은 이유로 명시한 기간 동안 보관합니다.
            1) 부정거래 방지 및 금융사고 조사를 위하여 회사의 내부 방침에 따라 개인정보 수집∙이용 동의 철회 시 탈퇴 데이터 베이스에서 6개월간 보관 후 삭제.
            2) 전자상거래 등에서의 소비자 보호에 관한 법률, 전자금융거래법, 통신비밀보호법 등 법령에서 일정기간 정보의 보관을 규정하는 경우, 이 기간 동안 법령의 규정에 따라 개인정보를 보관하며, 다른 목적으로는 절대 이용하지 않습니다.
            - 전자상거래 등에서의 소비자보호에 관한 법률 : 대금결제 및 재화 등의 공급에 관한 기록(5년), 계약 또는 청약철회 등에 관한 기록(5년), 소비자의 불만 또는 분쟁 처리에 관한 기록(3년), 표시·광고에 관한 기록(6개월)
            - 전자금융거래법 : 전자금융 거래에 관한 기록(5년)
            - 위치정보의 보호 및 이용 등에 관한 법률 : 위치정보취급대장(6개월)
            - 통신비밀보호법 : 웹사이트 방문 기록 (3개월)
            3) 전자적 파일 형태의 경우 복구 및 재생이 되지 않도록 기술적인 방법을 이용하여 안전하게 삭제하며, 출력물 등은 분쇄하거나 소각하는 방식 등으로 파기합니다.
            4) 쿠팡에서는 ‘개인정보 유효기간제’에 따라 1년간 서비스를 이용하지 않은 회원의 개인정보를 별도로 분리 보관하여 관리하고 있습니다.
            
            4. 동의를 거부할 권리 및 거부 경우의 불이익
            귀하께서는 쿠팡이 위와 같이 수집하는 개인정보에 대해, 동의하지 않거나 개인정보를 기재하지 않음으로써 거부할 수 있습니다. 다만, 이때 회원에게 제공되는 서비스가 제한될 수 있습니다.
            
            `;
            popup.innerHTML = template.replace('{{__title__}}',title).replace('{{__popup_content__}}',content);
            
         
        });

        personalOffer.addEventListener('click',function(){
            title = `개인정보 제공 동의`;
            content = `□ 개인(신용)정보 제공 동의

            주문과 결제가 이루어진 경우, 상담 및 배송 등의 원활한 거래 이행을 위하여 관련된 정보를 필요한 범위 내에서 판매자(제3자)에게 전달합니다.
            
            1.개인(신용)정보를 제공받는 자
            쿠팡은 원칙적으로 이용자의 동의 없이 개인정보를 외부에 제공하지 않으며, 관련 법령에 의거하여 개인정보 제출 의무가 발생하거나, 간편결제 서비스를 통한 주문 및 결제 등의 거래 이행을 위하여 이와 관련된 정보를 필요한 범위 내에서 이용자 동의를 받아 제3자에게 제공합니다.
            1) 쿠폰/공연/전시/체험상품, 여행 상품, 해외직구상품, 배송 서비스 제공 업체
            2) 쿠팡페이 주식회사
            3) 관할 세무서
            
            2. 제공되는 개인(신용)정보 항목
            이름, 휴대전화번호, 배송지(주소) 정보, 이메일, 개인고유통관부호(해외배송상품), 숙박 예약자 및 동반인정보(국/영문 이름, 생년월일 등), 국세청 고시에 따른 주류 판매 상세 정보(구매자의 성명, 생년월일, 주소, 주문일자, 상표명, 수량, 주문금액), 거래정보
            
            3. 제공 및 활용 목적
            1) 서비스제공, 구매자확인, 해피콜, 통관업무처리, 예약확인.
            2) 국세청 고시에 따른 주류 통신판매 주문에 대한 분기별 명세에 대하여 세무서 제출
            3) 특정금융거래정보의 보고 및 이용 등에 관한 법률에 따른 고객확인, 의심거래보고 등 자금세탁방지 규제 준수 목적
            
            4. 보유 및 이용기간
            이용자가 요청한 재화 또는 서비스의 제공 목적이 달성된 후 즉시 파기합니다. 다만, 관계법령에 정해진 규정에 따라 법정기간 동안 보관 합니다.
            
            5. 동의를 거부할 권리 및 거부 경우의 불이익
            개인정보 제공은 서비스 이용을 위해 꼭 필요합니다. 개인정보 제공을 거부하실 수 있으나, 이 경우 서비스 이용이 제한될 수 있습니다. 개인정보 제3자 제공은 구매시에만 이뤄지며, 명확한 내용은 구매 시 안내하여 드립니다. 또한 로켓배송상품은 쿠팡이 직접 배송하는 상품으로서 개인정보를 제3자(판매자)에게 제공하지 않습니다.
            `;
            popup.innerHTML = template.replace('{{__title__}}',title).replace('{{__popup_content__}}',content);
        });





    }






});