<template>
  <div class="home">
    <div class="createPoem-container py-5 text-center container">
      <div class="col-lg-6 col-md-8 mx-auto">
        <img src="../assets/callout.svg" alt="" />
        <h2>随心写作，自由表达</h2>
        <button type="button" class="btn btn-primary" @click="startWriting">
          开始写文章
        </button>
      </div>
    </div>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <!-- 列表区域 -->
    <ColumnList :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import ColumnList from "../components/ColumnList.vue";
import request from "../request/request";
import { getPageDataApi } from "@/request/api";
export default defineComponent({
  name: "Home",
  setup(props) {
    const router = useRouter();
    /**
     * 描述：点击开始写文章
     * @return undefined
     */
    const startWriting = (): void => {
      router.push("/createPoem");
    };
    let currentPage = ref(1);
    let pageSize = ref(6);
    let columnListData = ref([]);
    const getPageData = async (): Promise<void> => {
      let res = await request({
        url: `${getPageDataApi}?currentPage=${currentPage.value}&pageSize=${pageSize.value}`,
      });
      columnListData.value = res.list;
    };
    onMounted(() => {
      getPageData();
      console.log(columnListData)
    });
    return {
      list: columnListData,
      startWriting,
    };
  },
  components: {
    ColumnList,
  },
});
</script>
<style lang="scss" scoped>
.createPoem-container {
  img {
    width: 50%;
  }
}
</style>
