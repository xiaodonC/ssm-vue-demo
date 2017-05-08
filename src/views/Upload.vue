<template>
<el-col class="wrapper" :span="24">
  <el-col :span="8" :offset="1" class="brandselect">
    <span class="demonstration">Please select brand:</span>
    <el-select v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
    </el-select>
  </el-col>
  <el-col :span="8" :offset="7" class="brandselect">
    <span class="demonstration">Please select date:</span>
    <el-date-picker
      v-model="datevalue"
      type="week"
      format="yyyy-WW-week"
      placeholder="select date">
    </el-date-picker>
  </el-col>
  <el-col :span="6" :offset="9">
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </el-col>

</el-col>
</template>

<script>
export default {
  name:'upload',
  data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }],
        value: '',
        datevalue: ''
      }
    }
}
</script>

<style>
.wrapper{
  margin-top: 10px;
  width: 100%;
  height: 300px;
  border: 2px solid #20a0ff;
}
.brandselect{
  padding-top: 10px;
  padding-left: 10px;
  margin-bottom: 20px;
}

</style>
