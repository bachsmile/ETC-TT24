<template>
    <button type="submit" class="submit-btn">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'SubmitButton',
  };
  </script>
  <style scope>

.submit-btn {
  width: 100%;
  padding: 0.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem;
}
</style>