<template>
<el-col class="wrapper" :span="24">
  <el-col class="uploadSelect" :span="24">
    <el-col :span="8">
      <span class="demonstration">Please select brand:</span>
      <el-select v-model="value" clearable placeholder="select brand">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
      </el-select>
    </el-col>
    <el-col :span="8">
      <span class="demonstration">Please select date:</span>
      <el-date-picker
        v-model="datevalue"
        type="week"
        format="yyyy-WW-week"
        placeholder="select date">
      </el-date-picker>
    </el-col>
    <el-col :span="8">
      <el-upload
        class="upload-demo"
        action="http://9.197.93.207/components/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :on-success="uploadSuccess"
        :on-error="uploadFail">
        <el-button size="normal" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-col>
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
          label: 'brand1'
        }, {
          value: '选项2',
          label: 'brand2'
        }, {
          value: '选项3',
          label: 'brand3'
        }],
        value: '',
        datevalue: '',
        fileList: []
      }
    },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    uploadSuccess(response,file,fileList) {
      this.$notify({
          title: 'Success',
          message: 'Uploaded data into DB!',
          type: 'success'
        });
    },
    uploadFail(err,file,fileList) {
      this.$notify.error({
          title: 'Fail',
          message: 'Fail to upload data!'
        });
    }
  }
}
</script>

<style>
.wrapper{
  margin-top: 10px;
  width: 100%;
  border: 2px solid #20a0ff;
}
.uploadSelect{
  padding: 10px;
}
.el-upload__tip{
  margin-left: 10px;
}
</style>
