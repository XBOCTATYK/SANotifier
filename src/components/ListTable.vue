<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in $attrs.list" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.time }}</td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    export default {
        name: "ListTable",
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
