<template>
  <div>
    <b-row cols="12" md="6">
      <b-col>
        <!-- <PreviewPd /> -->
        var1 {{ var1 }}
      </b-col>
      <b-col>
        <DetailPd ref="refDetail" />
      </b-col>
    </b-row>

    <CmButton @click="handleClick" />
  </div>
</template>

<script>
import CmButton from '@/components/common/CmButton.vue';
import DetailPd from './components/DetailPd.vue';
// Removed unused import
import MethodsUtil from '@/utils/MethodsUtil';
import { computed, reactive, ref } from 'vue';

export default {
  name: "ProductDetail",
  components: {
    DetailPd, // Removed PreviewPd from here
    CmButton
  },
  props: {

  },
  setup() {
    const var1 = ref(1123)
    const var2 = reactive({
      ob: 123
    })

    console.log('var2', var2);

    function name(params) {
      console.log('name');

    }
    return {
      var1,
      var2,
      name
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    const params = {
      id: 1
    }
    MethodsUtil.requestApiCustom('https://jsonplaceholder.typicode.com/posts/1/comments', 'GET', params).then((value) => {

      // Handle response here if needed
    })

    console.log('ref', this.$refs);
    this.$refs.refDetail.click();
    this.name();

  },
  methods: {
    handleClick() {
      this.$router.push({ name: 'product-detail-card', params: { id: 1 } })
    }
  },
}
</script>

<style lang="scss" scoped></style>
