<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card shadow-sm" style="width: 18rem">
        <img
          :src="column.avatar && column.avatar.fitUrl"
          :alt="column.title"
          class="rounded-circle border border-light w-25 my-3"
        />
        <div class="card-body text-center">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">
            {{ column.description }}
          </p>
          <router-link
            :to="{ name: 'Column', params: { id: column.id } }"
            class="btn btn-outline-primary"
            >进入专栏</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// PropType用作类型断言
import { computed, defineComponent, PropType } from "vue";
import {ColumnProps} from '../testData';
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map((column) => {
        if (!column.avatar) {
          column.avatar = require("@/assets/avatar.jpg");
        }
        return column;
      });
    });
    return {
      columnList,
    };
  },
});
</script>
