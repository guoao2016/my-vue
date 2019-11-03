<template>
    <div>
        <label for = "">{{label}}</label>
        <div> 
            <slot></slot>
            <p v-if="errStatus">{{errMessage}}</p>
        </div>
    </div>
</template>
<script>
import Schema from 'async-validator';
export default {
    inject: ['kForm'],
    props: [
        'label',
        'prop'   
    ],
    data(){
        return {
            errMessage: '',
            errStatus: false
        }
    },
    mounted() {
        this.$on('validate', this.validator)
    },
    methods: {
        validator() {
            const rules = this.kForm.rules[this.porp];
            const value = this.kForm.model[this.prop];
            // window.console.log('开始校验')
            const descriptor = {[this.props] : rules}
            // 动态计算属性
            const schema = new Schema(descriptor);
            schema.validate({[this.props]: value},errors => {
                if(errors){
                    this.errMessage = errors[0].message;
                    this.errStatus = true;
                }else{
                    this.errMessage = '';
                    this.errStatus = false;
                }
            })
        }
    }
  
}
</script>
<style scoped>

</style>