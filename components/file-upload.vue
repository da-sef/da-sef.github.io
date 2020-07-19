<template>
  <div>
    <FilePond
      ref="input"
      name="file"
      :allow-multiple="allowMultiple"
      allow-file-type-validation="true"
      accepted-file-types="application/pdf"
      :server="{ process, revert, restore, load, fetch }"
      :files="files2"
      @init="handleFilePondInit"
    />
    <p v-if="rule" class="caption red--text">
      Archivo requerido
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex"
import vueFilePond from "vue-filepond"
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import "filepond/dist/filepond.min.css"

const FilePond = vueFilePond(FilePondPluginFileValidateType)

export default {
  name: "FileUpload",
  components: {
    FilePond
  },
  data(){
    return {
      first: true,
      files: [], // files uploaded, input
      files2: [] // all files
    }
  },
  computed: {
    allowMultiple(){
      return true
    },
    rule(){
      return this.required && !this.first && this.files.length === 0
    },
    ...mapState([
      "user"
    ])
  },
  watch: {
    files: {
      handler(val, oldVal){
        if(this.first){
          this.first = false
        }

        this.$emit("input", val)
        this.$emit("filesUpdate", val)
      },
      deep: true
    }
  },
  methods: {
    process(fieldName, file, metadata, load, error, progress, abort){
      const self = this

      try {
        progress(true, 0, 1024)
        const uploadTask = this.$fireStorage.ref()
          .child(`${this.user.email}/${file.name}`)
          .put(file, metadata)

        uploadTask.on(
          this.$fireStorageObj.TaskEvent.STATE_CHANGED,
          function(snapshot){
            progress(true, snapshot.bytesTransferred, snapshot.totalBytes)
          },
          function(e){
            self.handleError(error, e)
          },
          function(){
            load(uploadTask.snapshot.ref.fullPath)
            self.files.push(uploadTask.snapshot.ref.fullPath)
          }
        )

        return {
          abort(){
            abort()
            uploadTask.cancel()
          }
        }
      } catch(e){
        this.handleError(error, e)

        return {
          abort(){
            abort()
          }
        }
      }
    },
    revert(uniqueFileId, load, error){
      const self = this

      this.$fireStorage.ref().child(uniqueFileId).delete()
        .then(function(){
          const index = self.files.indexOf(uniqueFileId)
          if(index > -1){
            self.files.splice(index, 1)
          }

          load()
        })
        .catch(function(e){
          this.handleError(error, e)
        })
    },
    load(uniqueFileId, load, error){
      error()
    },
    fetch(url, load, error, progress, abort, headers){
      error("Solo archivos locales")
    },
    restore(uniqueFileId, load, error, progress, abort, headers){
      error()
    },
    handleError(error, e){
      switch(e.code){
      case "storage/canceled":
        break
      default: error(e.message)
      }
    },
    handleFilePondInit(){
      this.$refs.input.getFiles()
    }
  },
  component: {
    FilePond
  }
}
</script>
