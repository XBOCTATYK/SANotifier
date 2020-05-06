<template>
    <v-content>
        <v-text-field
                @click="openDialog"
                :value="$attrs.value"
                :label="$attrs.label"
                name="modal"
                text
        ></v-text-field>
        <v-dialog
                v-model="opened"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
                scrollable
        >
            <v-card large>
                <v-content>
                    <v-toolbar flat dark>
                        <v-btn icon dark @click="closeWithoutSaving">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-row justify="center">
                        <slot></slot>
                    </v-row>
                    <br/>
                    <v-row justify="center">
                        <v-btn large flat @click="closeDialog">OK</v-btn>
                    </v-row>
                </v-content>
            </v-card>
        </v-dialog>
    </v-content>
</template>

<script>
    export default {
        name: "modal-selector",
        data() {
            return {
                opened: false,
                initValue: null,
            }
        },
        methods: {
            openDialog() {
                this.opened = true;
                this.onOpen();
            },
            closeDialog() {
                this.opened = false;
            },
            closeWithoutSaving() {
                this.closeDialog();
                this.$attrs.change(this.initValue);
            },
            onOpen() {
                this.initValue = this.$attrs.value;
            }
        }
    }
</script>

<style scoped>

</style>
