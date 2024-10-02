<template>
  <div class="containerInput">
    <div class="a">
      <label :for="name">{{ label }}*</label>
      <div class="wapperInput">
        <img v-if="activeImg" :src="require('../assets/vietnamICon.jpg')" alt="" />
        <input
          :id="name"
          v-model="inputValue"
          :class="activeImg ? 'activeImg' : ''"
          :placeholder="label"
          :type="computedInputType"
        />
        <div v-if="showContent" @click="toggleShowContent">
          <i class="fa-regular" :class="isVisible ? 'fa-eye-slash' : 'fa-eye'"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
    typeUi: {
      type: Number,
      default: 1,
    },
    activeImg: {
      type: Boolean,
      default: false,
    },
    showContent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: false,
      inputValue: this.modelValue,
    };
  },
  computed: {
    computedInputType() {
      return this.isVisible ? 'text' : this.inputType;
    },
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newValue) {
        this.inputValue = newValue;
      },
    },
  },
  methods: {
    emitValue() {
      this.$emit('input', this.inputValue);
    },
    toggleShowContent() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.containerInput {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #344054;
  font-size: 14px;
  height: max-content;
  width: 100%;
}
.containerInput label {
  font-weight: 500;
  text-align: left;
  line-height: 20px;
}
.containerInput input {
  padding: 10px 12px;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px 0px #1018280d;
  border-radius: 8px;
  width: 100%;
}

.containerInput input:focus {
  border: 1px solid #535454;
}

.wapperInput {
  position: relative;
  width: 100%;
  max-height: 100%;
  height: 38px;
}

.wapperInput img {
  position: absolute;
  z-index: 2;
  height: 18px;
  width: 8%;
  left: 0;
  bottom: 50%;
  transform: translate(20%, 50%);
  cursor: pointer;
}

.wapperInput > div {
  position: absolute;
  z-index: 2;
  height: 20px;
  width: 8%;
  right: 0;
  bottom: 50%;
  transform: translate(-60%, 50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.a {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.activeImg {
  padding: 10px 14px 10px 46px !important;
}
</style>
