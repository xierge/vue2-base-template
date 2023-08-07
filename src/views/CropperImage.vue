<template>
  <!-- 图片裁剪组件 -->
  <div class="cropper-content">
    <div class="cropper-box">
      <div class="cropper">
        <vue-cropper
          ref="cropper"
          :autoCrop="option.autoCrop"
          :autoCropHeight="option.autoCropHeight"
          :autoCropWidth="option.autoCropWidth"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :canScale="option.canScale"
          :centerBox="option.centerBox"
          :enlarge="option.enlarge"
          :fixed="option.fixed"
          :fixedBox="option.fixedBox"
          :fixedNumber="option.fixedNumber"
          :full="option.full"
          :height="option.height"
          :img="option.img"
          :info="option.info"
          :infoTrue="option.infoTrue"
          :maxImgSize="option.maxImgSize"
          :mode="option.mode"
          :original="option.original"
          :outputSize="option.outputSize"
          :outputType="option.outputType"
          @imgLoad="imgLoad"
          @realTime="realTime"
        >
        </vue-cropper>
      </div>
      <!--底部操作工具按钮-->
      <div class="footer-btn">
        <div class="scope-btn">
          <label class="btn" for="uploads">选择</label>
          <input
            id="uploads"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            style="position: absolute; clip: rect(0 0 0 0)"
            type="file"
            @change="selectImg($event)"
          />
          <el-button
            icon="el-icon-zoom-in"
            plain
            size="mini"
            type="danger"
            @click="changeScale(1)"
            >放大
          </el-button>
          <el-button
            icon="el-icon-zoom-out"
            plain
            size="mini"
            type="danger"
            @click="changeScale(-1)"
            >缩小
          </el-button>
          <el-button plain size="mini" type="danger" @click="rotateLeft"
            >↺ 左旋转
          </el-button>
          <el-button plain size="mini" type="danger" @click="rotateRight"
            >↻ 右旋转
          </el-button>
        </div>
        <div class="upload-btn">
          <el-button size="mini" type="success" @click="uploadImg('blob')"
            >上传 <i class="el-icon-upload"></i
          ></el-button>
        </div>
      </div>
    </div>
    <!--预览效果图-->
    <div class="show-preview">
      <div :style="previews.div" class="preview">
        <img :src="previews.url" :style="previews.img" />
      </div>
    </div>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";

export default {
  name: "CropperImage",
  components: {
    VueCropper,
  },
  props: ["Name"],
  data() {
    return {
      name: this.Name,
      previews: {},
      option: {
        img: "", //裁剪图片的地址
        outputSize: 1, //裁剪生成图片的质量(可选0.1 - 1)
        outputType: "jpeg", //裁剪生成图片的格式（jpeg || png || webp）
        info: true, //图片大小信息
        canScale: true, //图片是否允许滚轮缩放
        autoCrop: true, //是否默认生成截图框
        autoCropWidth: 230, //默认生成截图框宽度
        autoCropHeight: 350, //默认生成截图框高度
        fixed: true, //是否开启截图框宽高固定比例
        fixedNumber: [1.53, 1], //截图框的宽高比例
        full: false, //false按原比例裁切图片，不失真
        fixedBox: true, //固定截图框大小，不允许改变
        canMove: false, //上传图片是否可以移动
        canMoveBox: true, //截图框能否拖动
        original: false, //上传图片按照原始比例渲染
        centerBox: false, //截图框是否被限制在图片里面
        height: true, //是否按照设备的dpr 输出等比例图片
        infoTrue: false, //true为展示真实输出图片宽高，false展示看到的截图框宽高
        maxImgSize: 3000, //限制图片最大宽度和高度
        enlarge: 1, //图片根据截图框输出比例倍数
        mode: "230px 350px", //图片默认渲染方式
      },
    };
  },
  methods: {
    //初始化函数
    imgLoad(msg) {
      console.log("工具初始化函数=====" + msg);
    },
    //图片缩放
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    //向左旋转
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    //向右旋转
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    //实时预览函数
    realTime(data) {
      this.previews = data;
    },
    //选择图片
    selectImg(e) {
      let file = e.target.files[0];
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
        this.$message({
          message: "图片类型要求：jpeg、jpg、png",
          type: "error",
        });
        return false;
      }
      //转化为blob
      let reader = new FileReader();
      reader.onload = (e) => {
        let data;
        if (typeof e.target.result === "object") {
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        this.option.img = data;
      };
      //转化为base64
      reader.readAsDataURL(file);
    },
    // blob 转 base64
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    httpRequest(src) {
      let that = this;
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", src, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
          if (this.status == 200) {
            let myBlob = this.response;
            let files = new window.File(
              [myBlob],
              that.objData.prj_no + ".pdf",
              { type: myBlob.type }
            ); // myBlob.type 自定义文件名
            resolve(files);
          } else {
            reject(false);
          }
        };
        xhr.send();
      });
    },
    //上传图片
    uploadImg(type) {
      if (type === "blob") {
        //获取截图的blob数据
        this.$refs.cropper.getCropBlob(async (data) => {
          // let formData = new FormData();
          // formData.append('file',data,"DX.jpg")
          let img = window.URL.createObjectURL(data);
          this.toDataURL(img, (data) => {
            console.log(data);
          });
        });
      }
    },
    toDataURL(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
          callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open("GET", url);
      xhr.responseType = "blob";
      xhr.send();
    },
  },
};
</script>

<style scoped>
.cropper-content {
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
}

.cropper-box {
  flex: 1;
  width: 100%;
}

.cropper {
  width: auto;
  height: 300px;
}

.show-preview {
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}

.preview {
  overflow: hidden;
  border: 1px solid #67c23a;
  background: #cccccc;
}

.footer-btn {
  margin-top: 30px;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
}

.scope-btn {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  padding-right: 10px;
}

.upload-btn {
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}

.btn {
  outline: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 8px 15px;
  font-size: 12px;
  border-radius: 3px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  margin-right: 10px;
}
</style>
