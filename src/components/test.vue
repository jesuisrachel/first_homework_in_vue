<template>
    <div>
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <el-form>
            <el-form-item label="活动名称">
                <div v-for="(item, index) in fullName" :key="index"> 
                    <el-input v-model="fullName[index]"></el-input> 
                </div>
                <el-button type="primary" icon="el-icon-plus" @click="addHobbies()"></el-button>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        form:{
            name:"跑|跳|蹦"
        },
        arr:''
      };
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.form.name.split("|");
            },
            // setter
            set: function (newValue) {
                console.log("change");
                this.arr= newValue.join("|");
                console.log(arr);
            }
        }
    },
    methods: {
      addHobbies(){
         this.form.name=this.form.name.concat("|");
      }
    }
  };
</script>
