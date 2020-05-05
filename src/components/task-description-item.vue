<template>
    <v-simple-table>
        <tbody>
        <tr>
            <th v-if="$attrs.subscription">
                {{ $attrs.subscription }}
            </th>
            <th>
                <slot>{{ $attrs.value }}</slot>
            </th>
        </tr>
        </tbody>
    </v-simple-table>
</template>

<script>
    export default {
        name: "task-description-item"
    }
</script>

<style scoped>

</style>
