# -*- coding: utf-8
class RoughDeal():
    def __init__(self):

        self.origin = None #暂时不管
        self.origin_thread_id = None # 商品在网站的id
        self.origin_thread_url = None # 商品在网站的唯一url
        self.origin_post_at = None # 发布时间
        self.origin_deal_price = None # 打折价格
        self.url = None # 商品url
        self.title = None # 商品标题
        self.main_image = None  # 图片
        self.store = None   # 商品所在店铺 -- 有就抓
        self.description = None # 商品描述
        self.editor_notes = None    # 发布人给的提醒--有就抓
        self.crawl_date = None  # 抓取时间 -- 可使用datetima.now()
