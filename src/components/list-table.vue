<template>
    <v-container fluid>
        <v-expansion-panels>
            <v-expansion-panel v-for="item in $attrs.list" :key="item.name">
                <v-expansion-panel-header>{{ item.name }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <task-description-item :subscription="'DATE' | getMessage">
                        {{ item.time | formatDate }}
                    </task-description-item>
                    <task-description-item :subscription="'TIME' | getMessage">
                        {{ item.time | formatTime }}
                    </task-description-item>
                    <task-description-item>
                        {{ item.description }}
                    </task-description-item>
                    <br/>
                    <v-row justify="center">
                        <v-btn large @click="$router.push(`/task/${item.id}`)" text>
                            {{ 'EDIT' | getMessage }}
                        </v-btn>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
    import TaskDescriptionItem from './task-description-item';
    export default {
        name: "list-table",
        components: { TaskDescriptionItem },
        data() {
            return {
                headers: [
                    {}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
