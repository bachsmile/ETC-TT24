<template>
  <div class="filter-group">
    <label for="datepicker-dateformat1">{{propName}}</label>
    <b-form-datepicker
      id="datepicker-dateformat1"
      :date-format-options="{
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        weekday: 'short',
      }"
      locale="en"
    ></b-form-datepicker>
  </div>
</template>
<script>
  export default {
    name: "CmCelendar",
    props: {
      propName: {
        type: [String],
        default: 'Celendar'
      },
    },
  }
</script>