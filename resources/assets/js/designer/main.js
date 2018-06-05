import Vue from 'vue'
import Designer from './Designer'
import Editor from '@tinymce/tinymce-vue'


// Bootstrap our Designer application
new Vue({
  el: '#designer-container',
  components: { Designer },
  template: '<Designer/>'
})
