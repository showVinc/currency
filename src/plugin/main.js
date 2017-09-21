import axios from '@/plugin/axios'
import Vue from 'vue'

let tip = new Vue({})

export default {
  get_list(obj) {
    let p = obj.list.pages.p || 1
    let rows = obj.list.pages.rows || 10
    let params = {
      p,
      rows
    }
    if (obj.data) {
      for (let key in obj.data) {
        params[key] = obj.data[key]
      }
    }
    axios.get(obj.url,{params:params}).then(res => {
      if (!res.data.errcode) {
        let res_data = res.data.data
        if (typeof obj.callback === 'function') {
          obj.callback(res, obj.model)
        } else {
          for(let el in res.data.all_subject){
            obj.list.subject.push(res.data.all_subject[el])
          }
          for (let key in res_data) {
           obj.list.data.push(new obj.model(res_data[key]))
          }
          for(let i = 0;i<obj.list.data.length;i++){
            obj.list.data[i].content_pic =  obj.list.data[i].content_pic.split(',')
          }
          obj.list.pages=res.data.page
          if (typeof obj.resultCallback === 'function') {
            obj.resultCallback(res, obj.model)
          }
        }
      } else {
        tip.$messagebox.alert(res.data.errmsg)
      }
    }).catch(err => {
      console.log(err)
    })
  },
  GetQueryString(name, data) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    data = data || ''
    let r = window.location.hash.replace(`#/${data}?`, '').match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
}
