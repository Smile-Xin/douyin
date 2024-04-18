<template>
  <div class="hello">
    <el-row :gutter="20">

      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>

      <el-col :span="16">
        <div class="grid-content bg-purple">

          <el-row>
            <el-col v-for="item in this.videos" :key="item.rank" :span="8">
              <!-- 视频卡片 -->
              <el-card @click.native="goToVideo(item.share_url)" class="video-card"
                :body-style="{ padding: '0px', height: '550px', cursor: 'pointer' }">
                <img :src="item.item_cover" class="image">
                <div style="padding: 14px;" class="demo2">
                  <div class="content">{{ item.title }}</div>
                  <div class="footer">
                    <div class="author">@{{ item.author }} </div>
                    <div class="play-count"><i class="el-icon-view"></i>{{ item.play_count / 10000 | numFilter }}W
                    </div>
                    <div class="comment-count"><i class="el-icon-chat-dot-round"></i>{{ item.comment_count }}</div>
                    <div class="digg-count"><span class="iconfont icon-dianzan"></span>{{ item.digg_count }}</div>
                  </div>
                </div>
              </el-card>

            </el-col>



          </el-row>

        </div>
      </el-col>

      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
var setCookie = function (name, value, hours) {
  if (hours !== 0) {     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    var expires = hours * 60 * 60 * 1000;
    var d = new Date();
    d.setTime(d.getTime() + (expires));
    document.cookie = name + "=" + value + ";expires=" + d.toGMTString();
  } else {
    document.cookie = name + "=" + value;
  }
};

var getCookie = function (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
};
export default {

  data() {
    return {
      token_url: "https://open.douyin.com/oauth/client_token/",
      videos_url: "https://open.douyin.com/data/extern/billboard/hot_video/",
      videos: [
        {
          "comment_count": 673,
          "hot_value": 50440215,
          "hot_words": "新海,秩美,上市,全新,海蓝,之谜,鎏金,精华",
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-p-0051/o84PlsVfnQAeoNOvAr8CNZNXRBbNmBAIDCgMDB~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=Wfd4OqyPdVvCz7LzjY2CG1lN2qc%3D&from=2563711402_large",
          "author": "LA MER海蓝之谜",
          "digg_count": 35524,
          "play_count": 71054756,
          "rank": 1,
          "share_url": "https://www.iesdouyin.com/share/video/7352771650552679692/?region=CN&mid=7352771698766236443&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "秩美上市|全新海蓝之谜鎏金精华"
        },
        {
          "comment_count": 224849,
          "digg_count": 1794246,
          "hot_value": 47620708,
          "play_count": 80563798,
          "author": "六六坨",
          "hot_words": "日常,姐妹,妈妈,男人,私密,星辰,感情,马赛,系列,达西,小小年纪,就要,桥洞,底下,带娃,萌娃",
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-p-0015/o0PDztJHAhMCISqFdBzgfBwbEsedAHIgYABrkn~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=Pb8wrfqsOfI1YM%2Ft7YqKqzcDsJU%3D&from=2563711402_large",
          "rank": 2,
          "share_url": "https://www.iesdouyin.com/share/video/7357660318794910985/?region=CN&mid=7018128240841689102&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "👶🏻:私密马赛妈妈酱，瓦达西小小年纪就要睡桥洞底下吗？ #男人带娃系列 #萌娃日常"
        },
        {
          "author": "哭天喊地六仙女",
          "comment_count": 203845,
          "digg_count": 1666346,
          "hot_value": 43272144,
          "title": "原来这歌有词儿！#甩葱歌 #魔性歌曲",
          "hot_words": "原来,这歌,词儿,甩葱歌,魔性,歌曲",
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-p-0015/oomGYBhdQO7mBt4AIHL3mAAlD9eQfDb0XgTnpD~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=dddfxjnLBJoY8ECtn%2F7cs%2FqI4tM%3D&from=2563711402_large",
          "play_count": 112009215,
          "rank": 3,
          "share_url": "https://www.iesdouyin.com/share/video/7357679472964898083/?region=CN&mid=7357679509606419263&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1"
        },
        {
          "share_url": "https://www.iesdouyin.com/share/video/7357697695751933220/?region=CN&mid=7357697736981875466&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "梦想的翅膀童声DJ版，我坚信光明就在远方，未来会给我一双梦想的翅膀#自信女孩 #像天空一样坚强 #自强不息奋斗不止 #面妹孔佳奇",
          "hot_words": "梦想,奋斗,远方,女孩,坚强,DJ,在远方,翅膀,梦想的翅膀,未来,天空,一双,自强不息,光明,不止,童声,坚信,自信,一样,面妹,孔佳奇",
          "item_cover": "https://p9-sign.douyinpic.com/tos-cn-p-0015/ogD9KLIbDwgfNvnMBgbPe6ADDpEYxJgvA8GmyA~tplv-dmt-logomcc:tos-cn-i-0813c001/osxb9mAGGA4DAyYhAAIAsEsbZ1ngdeEnAxDCf8:300:400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=yiRs%2FCIPqmR2gpCBJLHJEsOsVcE%3D&from=2563711402_large",
          "play_count": 68558649,
          "rank": 4,
          "author": "面妹《孔佳奇》",
          "comment_count": 27813,
          "digg_count": 915181,
          "hot_value": 36801142
        },
        {
          "author": "人民日报",
          "digg_count": 1480164,
          "hot_words": "我们,我们的,家族,书记,重庆,01,15,19,百姓,20,政策,真正,2019,重庆市,石柱土家族自治县,华溪村,习近平,总书记,问得,仔细,动情",
          "item_cover": "https://p6-sign.douyinpic.com/tos-cn-i-dy/caa592cc01f74c35b51054e3dc404120~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=UKT0Q%2BcHLKcNZXVYtng3gRNjsSM%3D&from=2563711402_large",
          "play_count": 58373382,
          "rank": 5,
          "share_url": "https://www.iesdouyin.com/share/video/7357753071650262291/?region=CN&mid=7357753146799753993&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "“政策对我们的百姓好，才是真正的好。”2019年4月15日，在重庆市石柱土家族自治县华溪村，习近平总书记问得仔细，说得动情。",
          "comment_count": 100137,
          "hot_value": 35177562
        },
        {
          "author": "陕西警方",
          "digg_count": 1379800,
          "hot_value": 34127562,
          "hot_words": "儿子,爸爸,怎么",
          "play_count": 93623581,
          "rank": 6,
          "share_url": "https://www.iesdouyin.com/share/video/7357656066835893542/?region=CN&mid=7357656118669822731&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "comment_count": 104993,
          "item_cover": "https://p26-sign.douyinpic.com/tos-cn-i-dy/24215d7fc0884215be884be6f318bc58~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=ydTez%2BvTN5CwYi3Xr064lL4oUWs%3D&from=2563711402_large",
          "title": "他1岁多的儿子，还不懂爸爸怎么了"
        },
        {
          "rank": 7,
          "share_url": "https://www.iesdouyin.com/share/video/7357756491996171559/?region=CN&mid=7357756574783343386&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "4月14日据中国妇女报报道 #年轻人对自己的婚礼下手了 婚礼现场播放《甄嬛传》等下饭神剧，典礼开始五分钟就开席… #你怎么看 #当代年轻人 #你怎么看",
          "digg_count": 408208,
          "hot_value": 32315848,
          "hot_words": "婚礼,开始,年轻人,中国,现场,甄嬛传,播放,中国妇女,怎么看,五分钟,14,日据,中国妇女报,报道,自己,下手,下饭,神剧,典礼,开席,当代",
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-i-0813/oI8cPsgDNAE5wBAYAzez3JCTAhANfAAA2gAIsJ~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=l9yrQxNlugmC8Sa%2FK7aO55itvI4%3D&from=2563711402_large",
          "play_count": 33843690,
          "author": "长城新媒体",
          "comment_count": 37093
        },
        {
          "hot_words": "11,央行,数据,显示,一季度,我国,人均,存款",
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-i-0813c001/ooA2AmKCyW2DAee97zQAd4ACzWgbCXP5AAHIyn~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=6f79PSSU4ivMvUxZeavuIXtdTeI%3D&from=2563711402_large",
          "play_count": 35650075,
          "comment_count": 388079,
          "hot_value": 32125638,
          "rank": 8,
          "share_url": "https://www.iesdouyin.com/share/video/7357946712679386383/?region=CN&mid=6749002503339117325&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "央行数据显示一季度，我国人均存款近11万",
          "author": "齐鲁晚报·果然视频",
          "digg_count": 94008
        },
        {
          "author": "SSZJ二狗",
          "play_count": 97576668,
          "rank": 9,
          "title": "#内容过于真实 胖人为啥胖！",
          "comment_count": 111236,
          "digg_count": 1283988,
          "hot_value": 30643583,
          "hot_words": "真实,内容,过于,为啥",
          "item_cover": "https://p11-sign.douyinpic.com/tos-cn-i-0813c001/oM26T0g2eDAYZAImAYAnIqEbbkAAbCANdnD9Ge~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=2jhOl47VLsrTENORggA1nN6gCdc%3D&from=2563711402_large",
          "share_url": "https://www.iesdouyin.com/share/video/7357660436398886156/?region=CN&mid=7103603759300904967&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1"
        },
        {
          "hot_value": 30642779,
          "hot_words": "钓鱼,五条,亚米级,嘴来,换饭,不及,店里,一道,鱼换,万物,美食",
          "rank": 10,
          "item_cover": "https://p11-sign.douyinpic.com/tos-cn-i-dy/4e7003d047cc47699a2f7c8ca4c0d7c0~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=3D3OxrlV9s%2F7nT%2B3iBIoZXkEjog%3D&from=2563711402_large",
          "play_count": 74690700,
          "share_url": "https://www.iesdouyin.com/share/video/7357638788744596772/?region=CN&mid=7357639060137200394&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "拿五条亚米级翘嘴来换饭，竟不及店里一道菜#鱼换万物 #钓鱼 #嗨皮钓鱼记 #美食",
          "author": "嗨皮钓鱼记（化氏双美）",
          "comment_count": 44989,
          "digg_count": 920366
        },
        {
          "hot_words": "妻子,49,男子,无偿献血,4900ml,省内,异地,用血",
          "item_cover": "https://p26-sign.douyinpic.com/tos-cn-i-0813c001/oMAb9efgA9B7hnHTIt7BYeA9ASDBNMqEAAEbET~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=CMjyEla1Od2dCZUl51fw2pNKsi8%3D&from=2563711402_large",
          "rank": 11,
          "share_url": "https://www.iesdouyin.com/share/video/7357738080410914099/?region=CN&mid=7107198922099017765&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "author": "长江云新闻",
          "comment_count": 175130,
          "digg_count": 272633,
          "hot_value": 29610066,
          "play_count": 32509421,
          "title": "男子无偿献血4900ml，妻子省内异地用血被拒？"
        },
        {
          "hot_value": 28820919,
          "item_cover": "https://p6-sign.douyinpic.com/tos-cn-i-0813c001/oMEbIAAAekqDAIzzzfAON3Ma3gIAxhAgCmcGCV~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=whjyU2Tp10SNHnlZyW3vybe6B%2B0%3D&from=2563711402_large",
          "play_count": 44630791,
          "share_url": "https://www.iesdouyin.com/share/video/7357633116133018916/?region=CN&mid=7357633147506314038&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "731罪证陈列馆 一位大叔在参观之后写下自己的留言 没有点保存 他写完走后我给他点上了保存#731罪证陈列馆 #日军暴行 #哈尔滨七三一罪证陈列馆 #日寇暴行",
          "author": "MTZ.",
          "digg_count": 656348,
          "rank": 13,
          "comment_count": 11453,
          "hot_words": "之后,日军暴行,七三一,31,大叔,罪证,留言,731,哈尔滨,陈列馆,一位,参观,写下,自己,没有,保存,日寇"
        },
        {
          "title": "站得高 泼得远  嘿嘿嘿 想不到吧 #当然要拍照记录啊 #泼水节 #德宏 #芒市 #偷偷藏不住",
          "rank": 14,
          "author": "阿瑞瑞阿",
          "comment_count": 84600,
          "digg_count": 784621,
          "hot_value": 28581728,
          "hot_words": "偷偷藏不住,记录,泼水节,泼得,嘿嘿嘿,想不到,当然,拍照,德宏,芒市",
          "item_cover": "https://p26-sign.douyinpic.com/tos-cn-p-0015/oUUBEDC2EhdyWCzAKQzAZzlBDITrCv3tgAtfce~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=k147IsqdXeQOXWJRGV2NpoWxkpk%3D&from=2563711402_large",
          "play_count": 109314399,
          "share_url": "https://www.iesdouyin.com/share/video/7356984360962247988/?region=CN&mid=6950176748520671269&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1"
        },
        {
          "share_url": "https://www.iesdouyin.com/share/video/7358024792139697427/?region=CN&mid=7358024821600553779&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "author": "电视剧城中之城",
          "hot_value": 28463468,
          "hot_words": "奖金,城中之城,第一,小慧,拿到,第一件,夏梦",
          "item_cover": "https://p6-sign.douyinpic.com/tos-cn-i-dy/0cd67839587941afb2a10048cf4e46bf~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=9LLRUy3lD0PG6e9g8t7tNeXIUSk%3D&from=2563711402_large",
          "rank": 15,
          "comment_count": 33235,
          "digg_count": 389443,
          "play_count": 54993203,
          "title": "#城中之城 小慧拿到奖金后第一件事…#夏梦"
        },
        {
          "hot_value": 28281299,
          "rank": 16,
          "share_url": "https://www.iesdouyin.com/share/video/7357896996868361510/?region=CN&mid=7357897042494081842&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "27岁女子曾花54万做丰胸手术，出现胸部不对称、疼痛等，检查发现假体含有骆驼、蝙蝠、黑猩猩等动物源性成分……女子目前怀孕7个月，焦虑未来哺乳问题",
          "author": "阜阳新闻网",
          "comment_count": 14091,
          "digg_count": 48917,
          "hot_words": "动物,对称,蝙蝠,黑猩猩,焦虑,发现,未来,27,女子,曾花,54,丰胸,手术,出现,胸部,疼痛,检查,假体,含有,骆驼,源性,成分,目前,怀孕,哺乳,问题",
          "item_cover": "https://p11-sign.douyinpic.com/tos-cn-p-0015/oUADngAGImTADvHBPcKnbAE9ALAeEfIg5YrmQb~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=O521cc3dmwNurFMwh0VoRE56CD8%3D&from=2563711402_large",
          "play_count": 31281240
        },
        {
          "item_cover": "https://p9-sign.douyinpic.com/tos-cn-i-dy/c503eb061d0d4496a55885191a56957f~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=kYPXEelZ5UEUcOflSZ%2FEBym%2Fz2E%3D&from=2563711402_large",
          "play_count": 32622373,
          "rank": 17,
          "hot_value": 28276964,
          "hot_words": "回应,医院,医生,前妻,举报,撤职,违纪,武汉市,第六,引进,多方",
          "digg_count": 224790,
          "share_url": "https://www.iesdouyin.com/share/video/7357891982091472164/?region=CN&mid=7357892082054220571&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "遭前妻举报撤职的违纪医生被武汉市第六医院引进？多方回应",
          "author": "大象新闻",
          "comment_count": 14108
        },
        {
          "item_cover": "https://p11-sign.douyinpic.com/tos-cn-i-0813/ooKjEtCmAgAIvA9OAhTmtAPAb1EzGfO8eNr3VA~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=6gV1byNrrV2t6h91pvE%2Bxw3vCK0%3D&from=2563711402_large",
          "author": "湖北日报",
          "comment_count": 11218,
          "digg_count": 166733,
          "hot_value": 28219590,
          "hot_words": "人员,间谍,妻子,亲戚,执行,国家,心机,死刑,安全,国家安全,机密,被判死刑,国家安全部,回顾,十个,重大,间谍案,科研人员,黄宇,出卖,核心,最终,连累,判刑",
          "play_count": 38767463,
          "rank": 18,
          "share_url": "https://www.iesdouyin.com/share/video/7357718947132689715/?region=CN&mid=7118979721718663170&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "#国家安全部回顾十个重大间谍案 ，#科研人员黄宇出卖核心机密被判死刑 ，最终被执行死刑，还连累妻子和亲戚被判刑。"
        },
        {
          "author": "电影彷徨之刃",
          "hot_value": 26685463,
          "share_url": "https://www.iesdouyin.com/share/video/7357910363012091162/?region=CN&mid=7183002425148737537&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "play_count": 33309008,
          "rank": 20,
          "title": "20秒看一个父亲能有多绝望 #犯罪电影彷徨之刃定档 #电影彷徨之刃",
          "comment_count": 44786,
          "digg_count": 1093459,
          "hot_words": "父亲,彷徨之刃,绝望,犯罪,电影,一个父亲,20,定档",
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-i-0813c001/ooIAADCNuIAklAZYQmjZcNAQRghEVCzAzEheAf~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=UTF%2FDOejqBtxW4GFR6ZTM4N5O%2B8%3D&from=2563711402_large"
        },
        {
          "title": "可爱😆😆#泼水节 #瑞丽",
          "digg_count": 579747,
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-p-0015/o4ZECvXuAzrD9CPbhxf0gXIheAHcAAzNAsBz4d~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=dyOoXPv0tdC06s56acw0hND4XuQ%3D&from=2563711402_large",
          "rank": 21,
          "share_url": "https://www.iesdouyin.com/share/video/7357663659432217856/?region=CN&mid=7357663694471318313&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "play_count": 39735070,
          "author": "玉颜清肌—杨敏",
          "comment_count": 47082,
          "hot_value": 26432104,
          "hot_words": "可爱,泼水节,瑞丽"
        },
        {
          "title": "第一次看见落地雷，太吓人了",
          "author": "玉竹青枫",
          "hot_value": 25820686,
          "rank": 22,
          "share_url": "https://www.iesdouyin.com/share/video/7357341775540833536/?region=CN&mid=7357341797133060918&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "play_count": 76383021,
          "comment_count": 52842,
          "digg_count": 920595,
          "hot_words": "第一次,看见,落地雷,吓人",
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-i-0813/o4UCA0xNAajzfAAMEO2iehLzgh5ANJArr7D3IA~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=9SvF4LBOwhoDumEMJxAgs4ibSLY%3D&from=2563711402_large"
        },
        {
          "rank": 23,
          "author": "电视剧承欢记",
          "hot_words": "伤害,杨紫,承欢记,决裂,母女,脱口而出,气话,彼此,亲近,刘婉玉,何赛飞",
          "item_cover": "https://p6-sign.douyinpic.com/tos-cn-i-dy/60acff9217184f319162f9f92e316eb1~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=ggKv7nygoEWzwNURwS4vIoPdEAo%3D&from=2563711402_large",
          "play_count": 33842513,
          "title": "#承欢记  脱口而出的气话，伤害着彼此最亲近的人 #麦承欢刘婉玉母女决裂 #杨紫 #何赛飞",
          "comment_count": 10520,
          "digg_count": 466119,
          "hot_value": 25399683,
          "share_url": "https://www.iesdouyin.com/share/video/7357798337480903987/?region=CN&mid=7265384522672277523&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1"
        },
        {
          "digg_count": 522435,
          "hot_value": 25145298,
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-i-0813c001/owNeAPbnNIav9gmAocusAHUL5CcAfDjA8AAhQg~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=opVNiFo%2FGt1TgdzGMV585ut%2FadQ%3D&from=2563711402_large",
          "rank": 24,
          "share_url": "https://www.iesdouyin.com/share/video/7357959142620826915/?region=CN&mid=7357959186967186215&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "真不是没钱   实在是对方太客气了！",
          "comment_count": 9284,
          "hot_words": "不是,实在,对方,客气",
          "play_count": 42809976,
          "author": "大力仑爱吃菠菜"
        },
        {
          "comment_count": 2948,
          "item_cover": "https://p6-sign.douyinpic.com/tos-cn-p-0051/oEr5XnFFIACyfZADUAmDLtqTVEENgKeDmXBttb~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=S9jvHzKV%2FRi9Mod3JDnRnHZwlzQ%3D&from=2563711402_large",
          "play_count": 49753996,
          "rank": 25,
          "share_url": "https://www.iesdouyin.com/share/video/7356520685004410112/?region=CN&mid=7356520757083589412&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "和百事一起，带着渴望，遇见下一个可能。2024，百事焕新，渴望就可能。",
          "author": "百事中国",
          "digg_count": 45369,
          "hot_value": 24835136,
          "hot_words": "渴望,下一个,遇见,24,20,百事,一起,可能,2024,焕新"
        },
        {
          "comment_count": 62888,
          "hot_words": "结果,回家,发现,车位,正想,发火,走近,一看,格局,太小",
          "item_cover": "https://p9-sign.douyinpic.com/tos-cn-i-0813c001/okfBOAzzDAk0AUyAhDidAeoCCXbtIqcAAQCgEz~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=96YlN35JfekyshEi3zbQF5YGhP8%3D&from=2563711402_large",
          "author": "小纹化",
          "digg_count": 939736,
          "hot_value": 23844615,
          "play_count": 36399967,
          "rank": 26,
          "share_url": "https://www.iesdouyin.com/share/video/7357651274239626536/?region=CN&mid=7357651323648592691&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "回家发现车位被占 正想发火呢，结果走近一看 是我格局太小了…"
        },
        {
          "play_count": 30814239,
          "comment_count": 12237,
          "digg_count": 72915,
          "hot_value": 23425367,
          "hot_words": "金手指,机会,梁朝伟,最佳,导演,15,一代,不再,金像奖,王晶称,应该,宣布,领奖,绝不,演出,年青,影帝",
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-i-dy/a3a82af3fe664481b189427d89974871~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=xIzJV6bYkQxuBWYO%2FfmsP42ZWIo%3D&from=2563711402_large",
          "author": "九派新闻",
          "rank": 27,
          "share_url": "https://www.iesdouyin.com/share/video/7357954304801557810/?region=CN&mid=7357954342412176140&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "4月15日，#导演王晶称梁朝伟应该宣布不再领奖 ： 《金手指》绝不是梁朝伟最佳演出，把机会给年青一代。#梁朝伟获金像奖影帝"
        },
        {
          "share_url": "https://www.iesdouyin.com/share/video/7357948571074694409/?region=CN&mid=7079900087349938184&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "#洗警 #泼水节狂欢",
          "author": "班长哥",
          "comment_count": 7296,
          "digg_count": 99898,
          "hot_value": 22731924,
          "hot_words": "泼水节,洗警,狂欢",
          "item_cover": "https://p9-sign.douyinpic.com/tos-cn-i-0813/oUD9HZg9wE7XAraAhmKgLezNfkNAAC0AAIGcA3~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=g7WaP2j2ksbW5vrJnK52ENdXrss%3D&from=2563711402_large",
          "play_count": 24904933,
          "rank": 28
        },
        {
          "digg_count": 86135,
          "hot_words": "人员,记者,发现,12,救援,左右,现场,15,独自,失联,研三,男生,王学峰,进山,失联超,山东,济南,中午,了解,佛慧山,北侧,山顶,附近,疑似,dou,知道",
          "rank": 29,
          "share_url": "https://www.iesdouyin.com/share/video/7357958074516114751/?region=CN&mid=7357958114647329562&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "author": "生活帮",
          "comment_count": 3128,
          "hot_value": 22520355,
          "item_cover": "https://p11-sign.douyinpic.com/tos-cn-i-dy/fdfa6986070f41ca9d6396bcbf1bd130~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=avn8w63tUEPY63u70Orjw4z390A%3D&from=2563711402_large",
          "play_count": 30578589,
          "title": "研三男生王学峰独自进山失联超4天！4月15日，山东济南，中午12点左右，记者在现场了解到，救援人员在佛慧山北侧山顶附近，发现疑似王学峰。#山东dou知道"
        },
        {
          "author": "无聊人类",
          "comment_count": 376121,
          "hot_value": 21970602,
          "item_cover": "https://p26-sign.douyinpic.com/tos-cn-p-0015/oYtka2gGbAQlxwR8Dn9mPkBMeDAC8AYBNTBgfs~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=gIf%2FxJx2yne6VR5Sr62D%2FRVCCNo%3D&from=2563711402_large",
          "rank": 30,
          "share_url": "https://www.iesdouyin.com/share/video/7356978667320249638/?region=CN&mid=7356978675935660854&u_code=0&titleType=&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "",
          "digg_count": 3042044,
          "hot_words": "",
          "play_count": 73003934
        },
        {
          "hot_words": "暂停,演唱会,薛之谦,一个人,互动,环节,观众,不假思索,旁边,男生,笑容,转头,询问,粉丝,镜头",
          "item_cover": "https://p6-sign.douyinpic.com/tos-cn-i-dy/0ff799f8b4d5405aa15a2287eb5fa7e9~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=MoQPNBFZBB%2BrPIFCHAZDr4C4J4Y%3D&from=2563711402_large",
          "share_url": "https://www.iesdouyin.com/share/video/7357984268317953289/?region=CN&mid=7357984344932813619&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "薛之谦演唱会互动环节，女观众不假思索说一个人来的，旁边男生笑容暂停 转头询问#薛之谦演唱会女粉丝镜头",
          "digg_count": 275649,
          "hot_value": 21864950,
          "play_count": 28389317,
          "rank": 31,
          "author": "瑞安新闻",
          "comment_count": 58332
        },
        {
          "author": "海报新闻",
          "play_count": 25854867,
          "rank": 32,
          "share_url": "https://www.iesdouyin.com/share/video/7357945029157063975/?region=CN&mid=7357945061730044684&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "comment_count": 3745,
          "digg_count": 36045,
          "hot_value": 21152936,
          "hot_words": "开始,对比,家族,变化,相对,失眠,嗅觉,章泽天,帕金森病,大拇指,已经,有点,发抖,并非,表现,手抖,减退,便秘,情绪,比较,早期",
          "item_cover": "https://p6-sign.douyinpic.com/tos-cn-i-dy/e1746e9d74fa42c1890231c50abc1289~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=t30wt4zpUmv4dgVmhFai%2FSNEmd4%3D&from=2563711402_large",
          "title": "章泽天自曝家族有帕金森病史，\"大拇指已经开始会有点发抖了\"，帕金森病并非只表现为\"手抖\"，嗅觉减退、失眠、便秘、情绪变化，都是帕金森病相对比较早期的表现"
        },
        {
          "play_count": 57942560,
          "share_url": "https://www.iesdouyin.com/share/video/7358017995408477440/?region=CN&mid=7151731622637849381&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "西双版纳泼水节让你感受不一样的热情 都说向你泼的水越多 获得的吉祥幸福就越多#泼水节还能这样玩 #没忍住笑出了声 #这么好玩的泼水节你确定不来吗 #云南泼水节有多热闹",
          "hot_value": 21076605,
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-i-0813c001/ogADz7ekE0YADAHC9cynbA895MAeAAOgAgxmI4~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=85mMRmxcu%2B1CeSnroIdckuUJw0M%3D&from=2563711402_large",
          "digg_count": 636730,
          "hot_words": "幸福,热情,热闹,吉祥,泼水节,西双版纳,感受,一样,水越,获得,这样,忍住,这么,好玩,确定,不来,云南",
          "rank": 33,
          "author": "灵魂舞者大鹏（新吉祥三宝）",
          "comment_count": 21163
        },
        {
          "hot_value": 20916014,
          "hot_words": "18,直播,去巴黎,错过,20,00,蒙牛,官方,直播间,奥运,门票,四年",
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-i-dy/2b642bbe12e54358b413152653919245~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=2vAr2pu3qjb2Lu89FLZHAUV7yBE%3D&from=2563711402_large",
          "share_url": "https://www.iesdouyin.com/share/video/7357531687414254889/?region=CN&mid=7357531722088565543&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "author": "蒙牛官方旗舰店",
          "digg_count": 73893,
          "rank": 34,
          "title": "4月18日20: 00来蒙牛官方直播间，抽巴黎奥运门票 #去巴黎看奥运都来找蒙牛 ，错过等四年!",
          "comment_count": 3810,
          "play_count": 47690960
        },
        {
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-i-dy/90527c25fcbc4e4fb09bc24441bddb28~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=u0bvFPU5xY%2BkdJvDF1OPPAOqoOg%3D&from=2563711402_large",
          "play_count": 29254354,
          "rank": 35,
          "title": "#城中之城 怎么过了二十年，受伤的还是我呀！#冯嘉怡",
          "author": "电视剧城中之城",
          "comment_count": 4026,
          "hot_value": 20665346,
          "digg_count": 405938,
          "hot_words": "十年,冯嘉怡,二十,城中之城,怎么,二十年,受伤,还是",
          "share_url": "https://www.iesdouyin.com/share/video/7357779876922936595/?region=CN&mid=7357780856947166006&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1"
        },
        {
          "digg_count": 1060529,
          "hot_value": 20589053,
          "hot_words": "英雄,牺牲,儿子,水晶,爸爸,致敬,致敬英雄,一幕,令人,泪目,追悼会,民警,一岁,拍打着,水晶棺",
          "author": "中国青年报",
          "comment_count": 39868,
          "item_cover": "https://p11-sign.douyinpic.com/tos-cn-i-dy/b64b3ca0aafa454895cf57237fcadb6d~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=pDVI5Ubl1xpO1cl3IQogpoq2gWA%3D&from=2563711402_large",
          "play_count": 26984065,
          "rank": 36,
          "share_url": "https://www.iesdouyin.com/share/video/7357715998096624930/?region=CN&mid=7357715939749841703&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "这一幕令人泪目！追悼会上，牺牲民警一岁多的儿子，拍打着水晶棺叫爸爸。#致敬英雄"
        },
        {
          "comment_count": 50291,
          "digg_count": 963151,
          "hot_words": "三胞胎,神奇,舞蹈,就是,这个,一下",
          "item_cover": "https://p26-sign.douyinpic.com/tos-cn-p-0015/oY8BZ7rbw3HmeAASIAL89gOngDIANLDaK1GeQm~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=RDlH%2Bb5k%2FnPTD%2FFeoRtVakm6xaA%3D&from=2563711402_large",
          "share_url": "https://www.iesdouyin.com/share/video/7357685867147840794/?region=CN&mid=7210036799710759736&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "就是这个舞蹈，三胞胎跳一下就火，好神奇呀",
          "author": "三胞胎爸爸阿陆",
          "play_count": 51208771,
          "rank": 37,
          "hot_value": 20285446
        },
        {
          "hot_words": "我的,我爸,爸爸,操作,万万想不到,年糕,全都,带娃,一顿,猛如虎",
          "item_cover": "https://p26-sign.douyinpic.com/tos-cn-i-0813/oUBeUOIAaeA5IHN1A77V2L2jASPoBEAQeAIM6s~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=Hp07XCOOrLANpKBSBhFt1ltAQlo%3D&from=2563711402_large",
          "play_count": 181844749,
          "title": "小年糕：我的词全都让我爸说了#爸爸带娃 #一顿操作猛如虎 #万万想不到",
          "author": "周大鑫和崔小灿",
          "comment_count": 116550,
          "digg_count": 1635929,
          "hot_value": 19933120,
          "rank": 38,
          "share_url": "https://www.iesdouyin.com/share/video/7356183853750357258/?region=CN&mid=7356183905411926821&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1"
        },
        {
          "hot_words": "演唱会,薛之谦,旁边,男生,外来,巡回演唱",
          "item_cover": "https://p26-sign.douyinpic.com/tos-cn-p-0015/o0BvKA2vEOQDee7QBAAeId4HXAUkBM4FPKBPCH~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=F1vrm94saAR6FYMNYElyC9e%2FrKg%3D&from=2563711402_large",
          "author": "三火妹妹",
          "digg_count": 159313,
          "hot_value": 19793482,
          "share_url": "https://www.iesdouyin.com/share/video/7357888088602987791/?region=CN&mid=7357888156621966143&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "旁边男生都要碎掉了#薛之谦天外来物巡回演唱会",
          "comment_count": 50048,
          "play_count": 20738322,
          "rank": 39
        },
        {
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-i-dy/dbc2e6f62fd54ede8262896276a77af5~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=YHp00INcNbYEvg%2F6cMwY6qu6xuc%3D&from=2563711402_large",
          "rank": 40,
          "share_url": "https://www.iesdouyin.com/share/video/7357768539140328730/?region=CN&mid=7357768741918182170&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "4月11日，湖南郴州。#孩子突发惊厥幼儿园老师教科书式救人  ，情况太过危急，事后老师直言“看到家长的那一刻，我绷不住哭了”！#救人瞬间",
          "author": "第1眼新闻",
          "comment_count": 23391,
          "digg_count": 438260,
          "hot_value": 19719222,
          "hot_words": "孩子,幼儿园,瞬间,老师,事后,哭了,11,湖南,郴州,突发,惊厥,教科书,救人,情况,太过,危急,直言,看到,家长,那一刻,不住",
          "play_count": 25835513
        },
        {
          "digg_count": 259429,
          "hot_value": 19629811,
          "item_cover": "https://p6-sign.douyinpic.com/tos-cn-i-dy/56bf67a6baba471196f97ab05052e00b~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=pzGsKSt%2FUH%2BPrjIQQolzMEtizmM%3D&from=2563711402_large",
          "share_url": "https://www.iesdouyin.com/share/video/7358074315113319689/?region=CN&mid=7113908334558824479&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "author": "四川日报",
          "comment_count": 120868,
          "rank": 41,
          "title": "12306回应年轻人卧铺挂帘子使老人没地坐：在不妨碍其他乘客情况下可使用。#热点 #火车 #卧铺",
          "hot_words": "回应,热点,乘客,年轻人,23,123,火车,其他,2306,12306,卧铺,帘子,老人,没地,妨碍,情况,使用",
          "play_count": 44877332
        },
        {
          "comment_count": 36639,
          "hot_words": "一天,日常,失败,情侣",
          "item_cover": "https://p26-sign.douyinpic.com/tos-cn-p-0015/oAA2IaEgC1AeSDO7ou9TaHbEAznBABkI6AQmfc~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=%2FNJGUAKG82%2FjldSfwlR671LcPnw%3D&from=2563711402_large",
          "play_count": 52115539,
          "rank": 42,
          "share_url": "https://www.iesdouyin.com/share/video/7358016477976366377/?region=CN&mid=7358016538579847963&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "又是失败的一天#情侣日常",
          "author": "牟牟刘啊",
          "digg_count": 1292012,
          "hot_value": 19506664
        },
        {
          "digg_count": 293081,
          "hot_value": 19463291,
          "hot_words": "初恋,女友,爱情,新郎,仪式,结婚,14,恋女,相爱,湖南,益阳,86,老人,迎娶,北大,初恋女友,两人,退休,校长,亲友,只有,三桌,酒席,没有,大操大办,十足",
          "title": "4月14日，湖南益阳，86岁老人迎娶北大初恋女友，“两人曾在北大相爱，新郎是退休校长”，亲友：只有三桌酒席，没有大操大办，但仪式感十足#爱情 #初恋 #结婚",
          "share_url": "https://www.iesdouyin.com/share/video/7357951716966386979/?region=CN&mid=6851804999098304526&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "author": "河南民生频道大参考",
          "comment_count": 64806,
          "item_cover": "https://p11-sign.douyinpic.com/tos-cn-i-dy/f4098a7728c94969822e1ab0f6c2901f~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=s4ffc7yHy%2Bk8t3RvZrb5Ei9M%2FvI%3D&from=2563711402_large",
          "play_count": 27180609,
          "rank": 43
        },
        {
          "hot_words": "独一无二,自制,情侣装,嘻嘻",
          "item_cover": "https://p11-sign.douyinpic.com/tos-cn-i-0813c001/o8FFbAzLdNApphIzADfNACgTJsDAgLEoeAzCAt~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=Fo79Dum6ao3x2kOSM9L4maWsgUI%3D&from=2563711402_large",
          "play_count": 56464037,
          "share_url": "https://www.iesdouyin.com/share/video/7357668283320929548/?region=CN&mid=7265942740410632994&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "author": "吴哈哈",
          "comment_count": 87413,
          "digg_count": 913953,
          "hot_value": 19395393,
          "rank": 44,
          "title": "自制独一无二的情侣装@陈嘻嘻"
        },
        {
          "author": "张河清教授",
          "item_cover": "https://p3-sign.douyinpic.com/tos-cn-i-0813c001/o01ARAth5gDHz5MDxICQeBA8A1EMf1AAzOAn6c~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=jzH9OUKLXNCG%2Fv6fLNYSyWXHx3Q%3D&from=2563711402_large",
          "rank": 45,
          "share_url": "https://www.iesdouyin.com/share/video/7358011408937733410/?region=CN&mid=7358011475237276466&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "title": "很喜欢学生送的小零食#记录美好生活 #张河清教授",
          "comment_count": 32674,
          "digg_count": 1192324,
          "hot_value": 19130933,
          "hot_words": "生活,教授,美好生活,记录,学生,喜欢,零食,河清",
          "play_count": 48228583
        },
        {
          "digg_count": 122026,
          "hot_value": 18749903,
          "hot_words": "消失,薛之谦,一起来,女生,几个,人一,毫不犹豫,回答,一人来,边上,男生,转头,询问,笑容,逐渐",
          "item_cover": "https://p6-sign.douyinpic.com/tos-cn-i-dy/ib01ea999057a4f229d71c974673ae85a~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=LVQqNe0OMQC4woK9tkCbxv99P6A%3D&from=2563711402_large",
          "title": "薛之谦问女生几个人一起来的，女生毫不犹豫回答一人来的， 边上男生转头询问笑容逐渐消失",
          "comment_count": 54928,
          "play_count": 19696143,
          "rank": 46,
          "share_url": "https://www.iesdouyin.com/share/video/7358004461333253386/?region=CN&mid=7358004541150726921&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "author": "江北融媒"
        },
        {
          "share_url": "https://www.iesdouyin.com/share/video/7357703411699125523/?region=CN&mid=7357703434348432147&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1",
          "author": "大大小小的窝❤️",
          "comment_count": 73893,
          "item_cover": "https://p11-sign.douyinpic.com/tos-cn-i-0813c001/osEb9mA8GAmhA0MbAAIA6NgtlDsgMfEzA9CC1e~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=0fTdOuHxFMOTQSG%2BzoZuiwVyKjw%3D&from=2563711402_large",
          "rank": 47,
          "title": "这个男人真的很让人安心@大大与小小 #情侣 #vlog日常",
          "digg_count": 834475,
          "hot_value": 18715516,
          "hot_words": "日常,男人,大与小,这个,真的,安心,大大,小小,情侣,vlog",
          "play_count": 56216722
        },
        {
          "author": "雪宝宝",
          "comment_count": 33116,
          "hot_words": "生活,精神,同学,娱乐,模仿,体育课,同学们,一段,体育精神,校园生活,危险,动作,请勿,课间",
          "play_count": 90932211,
          "title": "体育课上给同学们秀一段#体育精神 #校园生活 #危险动作请勿模仿 #课间娱乐",
          "digg_count": 1360108,
          "hot_value": 18631966,
          "item_cover": "https://p9-sign.douyinpic.com/tos-cn-i-0813/ooDNEWfWALDagKVaAAzAIADPeTzgYCAAAThUtM~c5_300x400.webp?lk3s=98cf21aa&x-expires=1714510800&x-signature=%2BKq3C6mW0swYngA0vNkGjlnE5K8%3D&from=2563711402_large",
          "rank": 48,
          "share_url": "https://www.iesdouyin.com/share/video/7357298687489396031/?region=CN&mid=7357298732892752666&u_code=0&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&from_ssr=1"
        }
      ],
      body: {
        grant_type: "client_credential",
        client_key: "awdw1h68c5ep74gt",
        client_secret: "dc000180ae8e73c3cb83c317690cbcc2"
      },
      token: ""
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    this.getToken()
    // console.log('created')
  },
  mounted() {
    // console.log('mounted')
  },
  methods: {
    // 点击视频卡片跳转到视频详情页
    goToVideo(share_url) {
      console.log(share_url)
      window.open(share_url)
    },
    sayHello() {
      // console.log('hello')
    },
    // 获取请求视频的token
    async getToken() {
      var token = getCookie("token")
      console.log("token", token)
      if (token !== "") {
        this.token = token
        this.getVideoList()
        console.log("have token", token)
        return
      }
      console.log("no token")
      const { data: res } = await this.$http.post(this.token_url, this.body)
      console.log("get token res", res)
      this.token = res.data.access_token
      if (res.message === "success") {
        setCookie("token", res.data.access_token, 2)
        console.log("set token", res.data.access_token)
        this.getVideoList()
      }
    },
    // 获取视频列表
    async getVideoList() {
      console.log(this.token)
      const { data: res } = await this.$http.get(this.videos_url, {
        headers: {
          "access-token": this.token
        }
      })
      console.log("111res",res)
      if (res.message === "success") {
        this.videos = res.data.list
        console.log("this.videos", this.videos)
      }
    }
  },
  filters: {
    numFilter(value) {
      let realVal = "";
      if (!isNaN(value) && value !== "") {
        // 截取当前数据到小数点后两位,改变toFixed的值即可截取你想要的数值
        realVal = parseFloat(value).toFixed(2);
      } else {
        realVal = "--";
      }
      return realVal;
    },
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-card {
  margin: 5px;
  border-radius: 10px;
  float: inline-start;
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

/* .bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
} */
@font-face {
  font-family: "iconfont"; /* Project id  */
  src: url('iconfont.ttf?t=1713337141627') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-dianzan:before {
  content: "\f010d";
}


.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}


.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix {
  position: relative;
  bottom: -5px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.demo2 {
  position: relative;
  display: inline-flex;
  flex-direction: column;

  height: 300px;
  /* min-height: 300px; */
  /* max-height: 300px; */
  width: 100%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  overflow: auto;
  /* background: #000; */
}

.demo2 .content {
  flex: auto;
  overflow: auto;
  /* background: #f9fafc; */
  width: 93%;
  height: 60px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.author {
  width: 50%;
  /* background: yellow; */
  float: left;

}

.footer {
  width: 100%;
  /* background: blue; */
  font-weight: 150;

}

.play-count {
  /* background: red; */
  /* float: right; */
}

.digg-count {
  /* background: green; */
  float: left;
}

.comment-count {
  width: 50%;
  /* background: yellow; */
  float: left;
}
</style>
