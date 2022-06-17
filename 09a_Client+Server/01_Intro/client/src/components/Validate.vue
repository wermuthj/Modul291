<template>
    <div>
        <h2>Jetzt Validieren</h2>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label> Name</label>
                <input type="text" v-model="name" class="form-control">
                <span v-if="!$v.name.required && $v.name.$dirty" class="text-danger"> Name is required!</span>
                <span v-if="!$v.name.alpha && $v.name.$dirty" class="text-danger"> Name must be alphabetic!</span>
            </div>

            <div class="form-group">
                <label> Email</label>
                <input type="text" v-model="emails" class="form-control">
                <span v-if="(!$v.emails.required || !$v.emails.email) && $v.emails.$dirty" class="text-danger"> Valid email is required!</span>
            </div>

            <div class="form-group">
                <label> Adresse </label>
                <input type="text" v-model="address" class="form-control">
                <span v-if="!$v.address.required && $v.address.$dirty" class="text-danger"> Address is required!</span>
            </div>

            <div class="form-group">
                <label> Ort </label>
                <input type="text" v-model="ort" class="form-control">
                <span v-if="!$v.ort.required && $v.ort.$dirty" class="text-danger"> Ort is required!</span>
            </div>

            <div class="form-group">
                <label> PLZ </label>
                <input type="text" v-model="plz" class="form-control">
                <span v-if="(!$v.plz.required || !$v.plz.numeric) && $v.plz.$dirty" class="text-danger"> Valid PLZ is required!</span>
            </div>
            <input type="submit" class="btn btn-primary mt-2">
        </form>
    </div>
</template>


<script>
    import { required, numeric, alpha, email } from 'vuelidate/lib/validators'
    import {mapState} from "vuex"
    export default {
        name: 'Validate',
        computed: mapState(['validate']),

        data: () => ({
            name: '',
            emails: '',
            address:'',
            ort:'',
            plz:'',
        }),
        validations: {
            name: {required, alpha},
            emails: {required, email},
            address: {required},
            ort: {required},
            plz: {required, numeric}
        },
        methods: {
            submitForm() {
                this.$v.$touch();
                if(!this.$v.$invalid) {
                    console.log(`Name: ${this.name}, Email: ${this.emails}, address: ${this.address}, ort: ${this.ort}, plz: ${this.plz} `)
                };
            }
        }
     }
</script>