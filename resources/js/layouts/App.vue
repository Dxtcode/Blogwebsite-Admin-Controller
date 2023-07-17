<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" fixed app>
            <v-list dense>
                <router-link to="/categorylist">
                    <v-list-item link>
                        <v-list-item-content>
                            <v-list-item-title>Create Category</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <hr/>
                <router-link to="/createcategories">
                    <v-list-item link>
                        <v-list-item-content>
                            <v-list-item-title>Create Post</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <hr/>
                <router-link to="">
                    <v-list-item link>
                        <v-list-item-content>
                            <v-list-item-title>Create List</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <hr/>
                <v-list-item link @click="logout">
                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <hr/>
            </v-list>

        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark fixed>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title> <h4>Blog Website Controller</h4> </v-toolbar-title>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>


    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
        };
    },
    props: {
        source: String,
    },

    // methods: {
    //         logout(e) {
    //             e.preventDefault()
    //             this.$axios.get('/sanctum/csrf-cookie').then(response => {
    //                 this.$axios.post('/api/logout')
    //                 .then(response => {
    //                     if(response.data.success) {
    //                         window.location.href = "/login"
    //                     } else {
    //                         console.log(response);
    //                     }
    //                 })
    //                 .catch(function (error) {
    //                     console.error(error);
    //                 });
    //             })
    //         }
    //     },
};
</script>
