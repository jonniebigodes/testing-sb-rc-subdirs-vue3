<template>
  <div>
    <h1>This is a example component with an asset loaded in a subdirectory</h1>
    <img :src="asset" :alt="description" width="400" height="400" />
  </div>
</template>

<script>
export default {
  name: 'example-image',
  props: {
    asset: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
