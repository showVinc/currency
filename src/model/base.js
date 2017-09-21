import xhr from '@/plugin/main'

export default class Base{
  constructor(data){
    data = data?data:{}
    this.id = data.id || ''
    this.current_model = data.current_model || '' //当前模型

    this.add_url = data.add_url || ''
    this.get_list_url = data.get_list_url || ''
    this.get_detail_url = data.get_detail_url || ''
    this.update_url = data.update_url || ''
    this.delete_url = data.delete_url || ''


    this.datalists = {    //  列表获取时，所有数据（分页获取、正常情况下的获取， 没有筛选关键词之类的）
      data: [],
      nav:[],
      current: 1,
      pages: 1,
      rows :10
    }
  }

  setGetListParams(){
    return {}
  }


  setAttribute(name, value) {
    this[name] = value
  }

  getAttribute(name) {
    return this[name]
  }

  setPostParam () {
    return {}
  }

  setPutParam () {
    let data = this.setPostParam()
    data.id = this.id
    return data
  }

  setDetailParam () {
    return {
      id: this.id
    }
  }

  setDeleteOneParam () {
    return {
      id: this.id
    }
  }

  setDeleteBatchParam () {
    return {}
  }

  add () {
    xhr.post_data({
      url: this.add_url,
      data: this.setPostParam()
    })
  }

  update () {
    xhr.put_data({
      url: this.update_url,
      data: this.setPutParam()
    })
  }

  //获取列表数据
  get_list (list) {
    xhr.get_list({
      url: this.get_list_url,
      list: list || this.datalists,
      data:this.setGetListParams(),
      model: this.current_model
    })
  }

  get_detail (detail) {
    xhr.get_detail({
      url: this.get_detail_url,
      data: this.setDetailParam(),
      detail: detail
    })
  }

  delete_one () {
    xhr.delete_one({
      url: this.delete_url,
      data: this.setDeleteOneParam()
    })
  }

  delete_batch() {

  }
}
