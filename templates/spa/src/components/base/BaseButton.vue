<template>
    <button @click="emitClick" :class="btnClass" :type="type">
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: "BaseButton",
    props: {
        type: {
            type: String,
            default: "button"
        },
        btnClass: {
            type: String,
            default: ""
        }
    },

    methods: {
        emitClick() {
            this.$emit('click');
        }
    }
}
</script>

<style lang="postcss" scoped>
/* Add your default style here */
</style>