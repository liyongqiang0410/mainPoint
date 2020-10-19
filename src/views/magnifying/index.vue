<template>
  <div class="pages">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <magnifying :url="'https://i.picsum.photos/id/321/960/540.jpg?hmac=q286_P4jjwolFBEgz0duLujT3wlI09BYNKzFugH07H4'"></magnifying>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <magnifying :url="'https://i.picsum.photos/id/109/960/540.jpg?hmac=1NHSEgfl7Fj3BUru4Zhtn9-qe1E7v8kr6UeDeZp4agU'" :type="'circle'"></magnifying>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import magnifying from '@/components/magnifying'
export default {
  name: 'my-Magnifying',
  components: {
    magnifying
  },

}
</script>