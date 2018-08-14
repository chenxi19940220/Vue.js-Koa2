<template>
  <div>
    商品详情页面
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'

export default {
  data () {
    return {
      goodsId: '0115ebdaa7b74269aae8239c7faf370b'
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios({
        url: url.getDetailGoodsInfo,
        method: 'post',
        data: { goodsId: this.goodsId }
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
