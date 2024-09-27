<template>
  <div class="containerInput" :style="{ width: typeUi === 1 ? '100%' : '50%' }">
    <div v-if="inputType === 'checkbox'" class="checkboxContainer">
      <input :id="name" type="checkbox" v-model="inputValue" @change="updateValue" />
      <label :for="name">{{ lable }}</label>
    </div>

    <div class="a" v-else>
      <label :for="name">{{ lable }}*</label>
      <div class="wapperInput">
        <img v-if="activeImg" :src="require('../../assets/vietnamICon.jpg')" alt="" />

        <input
          :id="name"
          v-model="inputValue"
          :style="{ padding: activeImg ? '10px 14px 10px 46px' : '10px 14px' }"
          :placeholder="lable"
          :type="computedInputType"
          @input="updateValue"
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
    lable: {
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
  methods: {
    updateValue(event) {
      this.inputValue = event.target.value;
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
}
.containerInput label {
  font-weight: 500;
  text-align: left;
  line-height: 20px;
}
.containerInput input {
  padding: 10px 14px;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px 0px #1018280d;
  border-radius: 8px;
  width: 100%;
  height: 100%;
}

.containerInput input:focus {
  border: 1px solid #535454;
}

.wapperInput {
  position: relative;
  width: 100%;
  max-height: 100%;
  height: 40px;
}

.wapperInput img {
  position: absolute;
  z-index: 2;
  height: 20px;
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

.checkboxContainer {
  display: flex;
  align-items: start;
  gap: 8px;
}

.checkboxContainer label {
  color: #344054;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
}

.checkboxContainer input[type='checkbox'] {
  margin-top: 5px;
  margin-right: 8px;
  width: max-content;
}
</style>
