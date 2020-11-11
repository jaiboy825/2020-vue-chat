<template>
    <div>
        <h1>회원가입</h1>
        <div class="row">
            <div class="col-8 offset-2">
                <form @submit.prevent="sendForm">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" v-model="formData.email" ref="email" class="form-control" id="email" placeholder="이메일을 입력하세요">
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="사용할 이름을 입력하세요">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="formData.password" class="form-control" id="password" placeholder="비밀번호를 입력하세요">
                    </div>
                    <div class="form-group">
                        <label for="passwordc">Password Confirm</label>
                        <input type="password" v-model="formData.passwordc" class="form-control" id="passwordc" placeholder="비밀번호 확인을 입력하세요">
                    </div>
                    <button type="submit" class="btn btn-primary">회원가입</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:"registerComponent",
    data(){
        return {
            formData:{
                email:'',
                name:'',
                password:'',
                passwordc:''
            },
            swalData:{                
                title: '서버 메시지',
                text: ''
            }
        }
    },
    watch:{
        formData: {
            deep:true,
            handler(n, o){
                if(this.formData.email === "") {
                    this.$refs.email.classList.remove("is-valid");
                    this.$refs.email.classList.add("is-invalid");
                }else{
                    this.$refs.email.classList.remove("is-invalid");
                    this.$refs.email.classList.add("is-valid");
                }
            }
        }
    },
    methods:{
        sendForm(){
            let msg = "";
            const {name, email, password, passwordc} = this.formData;
            if(name === "" || email === "" || password === "" ){
                msg = "필수 값이 비어있습니다.";
            }
            if(password !== passwordc){
                msg = "비밀번호가 일치하지 않습니다.";
            }
            if(msg !== ""){
                this.swalData.text = msg;
                swal.fire(this.swalData);
                return;
            }

            axios.post('/api/register', this.formData).then(res => {
                const data = res.data;
                this.swalData.text = data.msg;
                if(data.success){
                    swal.fire(this.swalData).then(result =>{
                        this.$router.push("/login");
                    });
                }else{
                    swal.fire(this.swalData);
                }
            });
        }
    }
}
</script>
<style scoped>

</style>