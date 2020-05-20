<template>
    <v-container v-if="$attrs.list && $attrs.list.length > 0" fluid>
        <v-expansion-panels>
            <v-expansion-panel v-for="item in $attrs.list" :key="item.name">
                <v-expansion-panel-header>{{ item.name }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <task-description-item :subscription="'DATE' | getMessage">
                        {{ item.date | formatDate }}
                    </task-description-item>
                    <task-description-item :subscription="'TIME' | getMessage">
                        {{ item.date | formatTime }}
                    </task-description-item>
                    <task-description-item>
                        {{ item.description }}
                    </task-description-item>
                    <br/>
                    <v-row justify="center">
                        <v-btn large @click="() => $attrs.selectItem(item.id)" text>
                            {{ 'EDIT' | getMessage }}
                        </v-btn>
                        &nbsp;
                        <v-btn large @click="() => $attrs.deleteItem(item.id)" text>
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
    <v-container v-else>
        {{ 'NO_TASKS' | getMessage }}
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
