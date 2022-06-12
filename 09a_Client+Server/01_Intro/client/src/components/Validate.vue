<template>
    <div>
        <h2>Jetzt Validieren</h2>
        <p>
            <input type="text" placeholder="Vorname" v-model="state.firstname"/>
            <span v-if="v$.firstname.$error">
                {{ v$.firstname.$error[0].$message}}
            </span>
        </p>
        <p>
            <input type="text" placeholder="Nachname" v-model="state.lastname"/>
            <span v-if="v$.lastname.$error">
                {{ v$.lastname.$error[0].$message}}
            </span>
        </p>
        <p>
             <input type="text" placeholder="Adresse" v-model="state.address"/>
            <span v-if="v$.address.$error">
                {{ v$.address.$error[0].$message}}
            </span>
        </p>
        <p>
            <input type="text" placeholder="PLZ" v-model="state.PLZ"/>
            <span v-if="v$.PLZ.$error">
                {{ v$.PLZ.$error[0].$message}}
            </span>
        </p>
        <p>
             <input type="text" placeholder="Ort" v-model="state.Ort"/>
            <span v-if="v$.Ort.$error">
                {{ v$.Ort.$error[0].$message}}
            </span>
        </p>

        <button @click="submitForm">Bestellung Abschliessen</button>
    </div>
</template>


<script>
    import useValidate from "@vuelidate/core";
    import { required, minLength, numeric } from "@vuelidate/validators";
    import {mapState} from "vuex";
    import {reactive} from "@vue/composition-api";
    import {computed} from "@vue/composition-api";
    export default {
        name: 'Validate',
        computed: mapState(['validate']),

        setup() {
            const state = reactive({
                firstname: '',
                lastname: '',
                address: '',
                PLZ: '',
                Ort: '',
            })

            const rules = computed(() => {
                return {
                    firstname: {required, minLenght: minLength(3)},
                    lastname: {required, minLenght: minLength(5)},
                    address: {required},
                    PLZ: {required, numeric},
                    Ort: {required},
                }
            })

            const v$ = useValidate(rules, state)
            return {
                state,
                v$,
            }
        },
        methods: {
            submitForm() {
                this.v$
                if (!this.v$.$error) {
                    alert('Bestellung abgeschlossen')
                }else {
                    alert('Form failed validation')
                }

            },
        },
    }
</script>