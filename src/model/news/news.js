import Base from '@/model/base'
import Moment from 'moment'
import xhr from '@/plugin/main'
import Vue from 'vue'

let News = class News extends Base{
  constructor(data){
    data = data?data:{}
    data.current_model = News //当前模型

    data.add_url = `${process.env.API.FRIENDS}/friends/demo`
    data.get_list_url =`${process.env.API.NEWS}/news/articlelist`
    data.get_detail_url = `${process.env.API.FRIENDS}/friends/demo`
    data.update_url =`${process.env.API.FRIENDS}/friends/demo`
    data.delete_url = `${process.env.API.FRIENDS}/friends/demo`
    super(data)

    // this.cover = data.cover_pic || require('@/assets/images/friends/user/png')
    // this.userName = data.username || '匿名用户'
    // this.date = Moment((data.date || 0) * 1000).format('YYYY-MM-DD')
    // this.main = data.main || ''
    this.imgList = data.imgList || []
    // this.comment = data.comment || ''
    // this.like = data.like || 0
    this.type = data.type||'default'

    this.aid = data.aid || ''
    this.article_subject_sid = data.article_subject_sid || ''
    this.author = data.author || ''
    this.category_code = data.category_code || ''
    this.content = data.content || ''
    this.content_pic = data.content_pic || ''
    this.pic = data.pic || ''
    this.date = Moment(data.publish_time*1000).format('YYYY-MM-DD') || ''
    this.pv = data.pv || ''
    this.summary = data.summary || ''
    this.title = data.title || ''
    this.comment_num = data.comment_num ||0


    this.totallists = {
      data: [],
      nav: [],
      subject: [],
      pages:{
        p: 0,
        rows:10,
        total_pages:1
      }
    }
  }

  setGetListParams(){
    return {
      category_id:this.type
    }
  }


  //获取列表数据
  get_news (list, callback) {
    let self = this
    xhr.get_list({
      url: this.get_list_url,
      list:list || this.totallists,
      data:this.setGetListParams(),
      model: this.current_model,
      resultCallback(res, model) {
        self.totallists.subject = []
        self.totallists.nav = res.data.all_category
        self.totallists.data = self.totallists.data.concat(res.data.data)
        self.totallists.subject = res.data.all_subject
        if(typeof callback === 'function') {
          callback()
        }
      }
    })
  }
}

export default News
