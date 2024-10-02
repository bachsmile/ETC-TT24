import * as yup from 'yup';

export const formMixin = {
  data() {
    return {
      formData: {},
      errors: {},
    };
  },
  methods: {
    async validateForm() {
      try {
        await this.schema.validate(this.formData, { abortEarly: false });
        this.errors = {};
        return true;
      } catch (error) {
        this.errors = error.inner.reduce((acc, err) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        return false;
      }
    },
    async handleSubmit() {
      const isValid = await this.validateForm();
      if (isValid) {
        this.onSubmit(this.formData);
      }
    },
  },
};
