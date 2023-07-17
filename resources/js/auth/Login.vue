<template>
    <v-sheet class="bg-deep-blue purple pa-12" rounded>
        <v-alert v-if="error !== null" color="error" dismissible>
            <strong>{{ error }}</strong>
        </v-alert>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-card-title>
                <h2 class="login-title">Passablog</h2>
            </v-card-title>
            <v-card-subtitle>
                <h2 class="login-title">Admin CMS</h2>
            </v-card-subtitle>
            <v-form v-model="form" @submit.prevent="handleSubmit">
                <v-text-field
                    id="email"
                    v-model="email"
                    :readonly="loading"
                    :rules="[required]"
                    class="mb-2"
                    clearable
                    label="Email"
                    placeholder="Enter your email"
                ></v-text-field>

                <v-text-field
                    id="password"
                    v-model="password"
                    :readonly="loading"
                    :rules="[required]"
                    clearable
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                ></v-text-field>

                <br />

                <v-btn
                    :loading="loading"
                    block
                    color="success"
                    size="large"
                    type="submit"
                    variant="elevated"
                >
                    Login
                </v-btn>
            </v-form>
        </v-card>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {
            form: false,
            email: "",
            password: "",
            loading: false,
            error: null,
        };
    },
    methods: {
        required(v) {
            return !!v || "Field is required";
        },
        handleSubmit(e) {
            if (!this.form) return;
            this.loading = true;
            setTimeout(() => {


                if (this.password.length > 0) {
                    this.$axios.get("/sanctum/csrf-cookie").then((response) => {
                        this.$axios
                            .post("api/login", {
                                email: this.email,
                                password: this.password,
                            })
                            .then((response) => {
                                console.log(response.data.success);
                                if (response.data.success) {
                                    window.location.href = "/dashboard";
                                    this.loading = false;
                                } else {
                                    this.error = response.data.message;
                                    this.loading = false;
                                }
                            })
                            .catch(function (error) {
                                console.error(error);
                            });
                    });
                }
            }, 2000);

            e.preventDefault();
        },
    },
};
</script>
