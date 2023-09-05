<script setup>
const emits = defineEmits(['sorting']);
const props = defineProps({
	heads: {
		type: Array,
		required: false,
	},
	columnTemplates: {
		type: String,
		required: false,
	},
});

const clickOnHead = (name) => {
	if (name !== 'Cover') {
		emits('sorting', name.toLowerCase());
	}
};
</script>

<template>
	<div class="table-wrapper">
		<div class="table">
			<div
				class="table-head"
				:style="{ 'grid-template-columns': columnTemplates }"
			>
				<div
					class="table-head__name"
					v-for="(head, i) of heads"
					:key="`i${head}`"
					@click="clickOnHead(head)"
				>
					{{ head }}
				</div>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.table {
  background-color: #fff;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 15px;
  &-wrapper {
    display: flex;
    justify-content: center;
  }
  &-head {
    padding: 5px 16px;
    display: grid;
    column-gap: 10px;
    align-items: center;
    border-bottom: 2px solid #EEEFF4;
    background: #fff;
    &__name {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #999;
      cursor: pointer;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
}
</style>