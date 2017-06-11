var center = '北京';

var chinaCitys = [
    ['上海', [121.4648,31.2891]],
    ['东莞', [113.8953,22.901]],
    ['东营', [118.7073,37.5513]],
    ['中山', [113.4229,22.478]],
    ['临汾', [111.4783,36.1615]],
    ['临沂', [118.3118,35.2936]],
    ['丹东', [124.541,40.4242]],
    ['丽水', [119.5642,28.1854]],
    ['乌鲁木齐', [87.9236,43.5883]],
    ['佛山', [112.8955,23.1097]],
    ['保定', [115.0488,39.0948]],
    ['兰州', [103.5901,36.3043]],
    ['包头', [110.3467,41.4899]],
    ['北京', [116.4551,40.2539]],
    ['北海', [109.314,21.6211]],
    ['南京', [118.8062,31.9208]],
    ['南宁', [108.479,23.1152]],
    ['南昌', [116.0046,28.6633]],
    ['南通', [121.1023,32.1625]],
    ['厦门', [118.1689,24.6478]],
    ['台州', [121.1353,28.6688]],
    ['合肥', [117.29,32.0581]],
    ['呼和浩特', [111.4124,40.4901]],
    ['咸阳', [108.4131,34.8706]],
    ['哈尔滨', [127.9688,45.368]],
    ['唐山', [118.4766,39.6826]],
    ['嘉兴', [120.9155,30.6354]],
    ['大同', [113.7854,39.8035]],
    ['大连', [122.2229,39.4409]],
    ['天津', [117.4219,39.4189]],
    ['太原', [112.3352,37.9413]],
    ['威海', [121.9482,37.1393]],
    ['宁波', [121.5967,29.6466]],
    ['宝鸡', [107.1826,34.3433]],
    ['宿迁', [118.5535,33.7775]],
    ['常州', [119.4543,31.5582]],
    ['广州', [113.5107,23.2196]],
    ['廊坊', [116.521,39.0509]],
    ['延安', [109.1052,36.4252]],
    ['张家口', [115.1477,40.8527]],
    ['徐州', [117.5208,34.3268]],
    ['德州', [116.6858,37.2107]],
    ['惠州', [114.6204,23.1647]],
    ['成都', [103.9526,30.7617]],
    ['扬州', [119.4653,32.8162]],
    ['承德', [117.5757,41.4075]],
    ['拉萨', [91.1865,30.1465]],
    ['无锡', [120.3442,31.5527]],
    ['日照', [119.2786,35.5023]],
    ['昆明', [102.9199,25.4663]],
    ['杭州', [119.5313,29.8773]],
    ['枣庄', [117.323,34.8926]],
    ['柳州', [109.3799,24.9774]],
    ['株洲', [113.5327,27.0319]],
    ['武汉', [114.3896,30.6628]],
    ['汕头', [117.1692,23.3405]],
    ['江门', [112.6318,22.1484]],
    ['沈阳', [123.1238,42.1216]],
    ['沧州', [116.8286,38.2104]],
    ['河源', [114.917,23.9722]],
    ['泉州', [118.3228,25.1147]],
    ['泰安', [117.0264,36.0516]],
    ['泰州', [120.0586,32.5525]],
    ['济南', [117.1582,36.8701]],
    ['济宁', [116.8286,35.3375]],
    ['海口', [110.3893,19.8516]],
    ['淄博', [118.0371,36.6064]],
    ['淮安', [118.927,33.4039]],
    ['深圳', [114.5435,22.5439]],
    ['清远', [112.9175,24.3292]],
    ['温州', [120.498,27.8119]],
    ['渭南', [109.7864,35.0299]],
    ['湖州', [119.8608,30.7782]],
    ['湘潭', [112.5439,27.7075]],
    ['滨州', [117.8174,37.4963]],
    ['潍坊', [119.0918,36.524]],
    ['烟台', [120.7397,37.5128]],
    ['玉溪', [101.9312,23.8898]],
    ['珠海', [113.7305,22.1155]],
    ['盐城', [120.2234,33.5577]],
    ['盘锦', [121.9482,41.0449]],
    ['石家庄', [114.4995,38.1006]],
    ['福州', [119.4543,25.9222]],
    ['秦皇岛', [119.2126,40.0232]],
    ['绍兴', [120.564,29.7565]],
    ['聊城', [115.9167,36.4032]],
    ['肇庆', [112.1265,23.5822]],
    ['舟山', [122.2559,30.2234]],
    ['苏州', [120.6519,31.3989]],
    ['莱芜', [117.6526,36.2714]],
    ['菏泽', [115.6201,35.2057]],
    ['营口', [122.4316,40.4297]],
    ['葫芦岛', [120.1575,40.578]],
    ['衡水', [115.8838,37.7161]],
    ['衢州', [118.6853,28.8666]],
    ['西宁', [101.4038,36.8207]],
    ['西安', [109.1162,34.2004]],
    ['贵阳', [106.6992,26.7682]],
    ['连云港', [119.1248,34.552]],
    ['邢台', [114.8071,37.2821]],
    ['邯郸', [114.4775,36.535]],
    ['郑州', [113.4668,34.6234]],
    ['鄂尔多斯', [108.9734,39.2487]],
    ['重庆', [107.7539,30.1904]],
    ['金华', [120.0037,29.1028]],
    ['铜川', [109.0393,35.1947]],
    ['银川', [106.3586,38.1775]],
    ['镇江', [119.4763,31.9702]],
    ['长春', [125.8154,44.2584]],
    ['长沙', [113.0823,28.2568]],
    ['长治', [112.8625,36.4746]],
    ['阳泉', [113.4778,38.0951]],
    ['青岛', [120.4651,36.3373]],
    ['韶关', [113.7964,24.7028]]
]
        
var data = {
    "citys": [
        ["Beijing","中国关防","中国",116.23,39.55], 
        ["Abidjan","阿比让","科特迪瓦",4.01,5.19],
        ["Abu Dhabi","阿布扎比","阿联酋",54.23,24.27],
        ["Abuja","阿布贾","尼日利亚",7.11,9.12],
        ["Acapulco","阿卡普尔科","墨西哥",-99.56,16.51],
        ["Accra","阿克拉","加纳",0.15,5.33],
        ["Adak","艾达克岛","美国",176.39,51.52],
        ["Adamstown","亚当斯敦","英国",-130.05,-25.04],
        ["Addis Ababa","亚的斯亚贝巴","埃塞俄比亚",38.42,9.03],
        ["Adelaide","阿得莱德","澳大利亚",138.36,-34.56],
        ["Aden","亚丁","也门",45.,12.5],
        ["Agra","阿格拉","印度",78.,27.09],
        ["Aguascalientes","阿瓜斯卡连特斯","墨西哥",-102.18,21.51],
        ["Ahmedabad","艾哈迈达巴德","印度",72.4,23.03],
        ["Akron","阿科隆","美国",-81.31,41.04],
        ["Al Jizah","吉萨","埃及",31.12,30.01],
        ["Albany","奥尔巴尼","美国",-73.47,42.4],
        ["Albuquerque","阿尔布开克","美国",-106.4,35.07],
        ["Alexandria","亚历山大","埃及",29.55,31.13],
        ["Algiers","阿尔及尔","阿尔及利亚",3.13,36.42],
        ["Almaty","阿拉木图","哈萨克斯坦",76.55,43.19],
        ["Alofi","阿洛菲","纽埃",-169.55,-19.03],
        ["Ambon","安汶","印度尼西亚",128.1,-4.5],
        ["Amman","安曼","约旦",35.56,31.57],
        ["Amsterdam","阿姆斯特丹","荷兰",4.52,52.21],
        ["Anadyr","阿纳德尔","俄罗斯",177.32,64.4],
        ["Anaheim","阿纳海姆","美国",-117.52,33.5],
        ["Anchorage","安克雷奇","美国",-149.52,61.13],
        ["Andorra La Vella","安道尔","安道尔",1.31,42.3],
        ["Ankara","安卡拉","土耳其",32.54,40.02],
        ["Antananarivo","塔那那利佛","马达加斯加",47.31,-18.55],
        ["Apia","阿皮亚","萨摩亚群岛",-171.45,-13.48],
        ["Aqtau","阿克陶","哈萨克",50.16,44.31],
        ["Aqtobe","阿克托贝","哈萨克",57.1,50.17],
        ["Arlington","阿灵顿","美国",-97.07,32.41],
        ["Ashgabat","阿什哈巴德","土库曼斯坦",-58.24,37.58],
        ["Asmara","阿斯马拉","厄立特里亚",-38.58,15.2],
        ["Astana","阿斯塔纳","哈萨克",71.3,51.1],
        ["Asuncion","亚松森","巴拉圭",-57.4,-25.15],
        ["Athens","雅典","希腊",23.44,38.02],
        ["Atlanta","亚特兰大","美国",-84.25,33.46],
        ["Auckland","奥克兰","新西兰",174.45,-36.55],
        ["Augusta","奥克斯塔","美国",-69.46,44.19],
        ["Aurora","奥罗拉","美国",-104.43,39.42],
        ["Austin","奥斯丁","美国",-97.44,30.17],
        ["Azores","亚速尔群岛","葡萄牙",-28.,38.3],
        ["Baghdad","巴格达","伊拉克",44.22,33.14],
        ["Baku","巴库","阿塞拜疆",49.53,40.22],
        ["Balikpapan","巴厘巴板","印度尼西亚",116.5,-1.15],
        ["Baltimore","巴尔的摩","美国",-76.37,39.17],
        ["Bamako","巴马科","马里",-7.59,12.4],
        ["Bandar Seri Begawan","斯里巴加湾港","文莱",114.58,4.56],
        ["Bandung","万隆","印度尼西亚",107.34,-6.57],
        ["Bangalore","班加罗尔","印度",77.34,12.58],
        ["Bangkok","曼谷","泰国",100.29,13.5],
        ["Bangui","班吉","中非共和国",18.37,4.23],
        ["Banjul","班珠尔","冈比亚",-16.39,13.28],
        ["Barcelona","巴塞罗那","西班牙",2.06,41.18],
        ["Barnaul","巴尔瑙尔","俄罗斯",83.47,53.21],
        ["Basel","巴塞尔","瑞士",7.36,47.34],
        ["Basra","巴士拉","伊拉克",47.49,30.3],
        ["Basse-Terre","巴斯特尔","法国",-61.32,16.14],
        ["Basseterre","巴斯特尔","圣斯茨和尼维斯",-62.43,17.18],
        ["Bastia","巴斯蒂亚","法国",9.26,42.41],
        ["Baton Rouge","巴吞鲁日","美国",-91.08,30.27],
        ["Beirut","贝鲁特","黎巴嫩",35.3,33.52],
        ["Belfast","贝尔法斯特","英国",-5.57,54.36],
        ["Belgrade","贝尔格莱德","塞尔维亚",20.28,44.49],
        ["Belmopan","贝尔莫潘","伯利兹",-88.46,17.25],
        ["Berlin","柏林","德国",13.2,52.31],
        ["Bern","伯尔尼","瑞士",7.26,46.57],
        ["Bethlehem","伯利恒","西岸",35.12,31.42],
        ["Bhubaneshwar","布巴内斯","印度",85.5,20.15],
        ["Billings","比林斯","美国",-108.27,45.47],
        ["Birmingham","伯明翰","英国",-1.55,52.3],
        ["Birmingham","伯明翰","美国",-86.55,33.3],
        ["Bishkek","比什凯克","吉尔吉斯",74.46,42.53],
        ["Bismarck","俾斯麦酒","美国",-100.47,46.49],
        ["Bissau","比绍","几内亚比绍",-15.39,11.52],
        ["Blanc-Sablon","勃朗峰-萨伯隆","加拿大",-57.08,51.26],
        ["Bogota","波哥大","哥伦比亚",-74.05,4.38],
        ["Boise","博伊西","美国",-116.13,43.37],
        ["Boston","波士顿","美国",-71.05,42.19],
        ["Brades","布雷德斯","英国",-62.12,16.46],
        ["Brampton","布兰普顿","加拿大",-79.46,43.41],
        ["Brasilia","巴西利亚","巴西",-47.57,-15.45],
        ["Bratislava","布拉迪斯拉发","斯洛伐克共和国",17.07,48.09],
        ["Brazzaville","布拉柴维尔","刚果",15.14,-4.14],
        ["Bridgetown","布里奇顿","巴巴多斯",-59.37,13.06],
        ["Brisbane","布里斯班","澳大利亚",153.02,-27.28],
        ["Brussels","布鲁塞尔","比利时",4.21,50.51],
        ["Bucharest","布加勒斯特","罗马尼亚",26.1,44.23],
        ["Budapest","布达佩斯","匈牙利",19.15,47.26],
        ["Buenos Aires","布宜诺斯艾利斯","阿根廷",-58.3,-34.2],
        ["Buffalo","布法罗","美国",-78.55,42.52],
        ["Bujumbura","布琼布拉","布隆迪",29.21,-3.22],
        ["Cairo","开罗","埃及",31.17,30.],
        ["Calgary","卡尔加里","加拿大",-114.05,51.05],
        ["Cali","卡利","哥伦比亚",-76.3,3.24],
        ["Canberra","堪培拉","澳大利亚",149.08,-35.18],
        ["Cancun","坎昆","墨西哥",-86.51,21.1],
        ["Cape Town","开普敦","南非",18.27,-33.55],
        ["Caracas","加拉加斯","委内瑞拉",-66.58,10.3],
        ["Cardiff","加地夫","英国",-3.11,51.28],
        ["Carson City","卡森城","美国",-118.46,39.1],
        ["Casablanca","卡萨布兰卡","摩洛哥",-7.37,33.36],
        ["Castries","卡斯特里","圣卢西亚",-60.59,14.01],
        ["Cayenne","卡宴","法国",-52.18,4.55],
        ["Cebu City","宿务岛","菲律宾",123.54,10.17],
        ["Charleston","查尔斯顿","美国",-81.4,38.23],
        ["Charlotte","夏洛特","美国",-80.5,35.05],
        ["Charlottetown","夏洛特敦","加拿大",-63.09,46.14],
        ["Chatham Island","查塔姆岛","新西兰",-176.35,-44.],
        ["Chelyabinsk","车里雅宾斯克","俄罗斯",61.25,55.1],
        ["Chennai","钦奈","印度",80.18,13.05],
        ["Cheyenne","夏延文","美国",-104.49,41.08],
        ["Chicago","芝加哥","美国",-87.41,41.51],
        ["Chihuahua","奇瓦瓦","墨西哥",-106.05,28.38],
        ["Chisinau","基希讷乌","摩尔多瓦",28.5,47.],
        ["Chittagong","吉大港","孟加拉国",91.48,22.2],
        ["Choibalsan","乔巴山","蒙古",114.3,48.04],
        ["Christchurch","基督城","新西兰",172.37,-43.32],
        ["Cincinnati","辛辛那提","美国",-84.3,39.1],
        ["Cleveland","克利夫兰","美国",-81.41,41.3],
        ["Colombo","科伦坡","斯里兰卡",79.52,6.55],
        ["Columbia","哥伦比亚","美国",-81.,34.01],
        ["Columbus","哥伦布","美国",-82.59,39.59],
        ["Conakry","科纳克里","几内亚",-13.43,9.3],
        ["Concord","康科特","美国",-71.32,43.13],
        ["Copenhagen","哥本哈根","丹麦",12.34,55.43],
        ["Cordoba","科尔多瓦","西班牙",-4.46,37.53],
        ["Dakar","达喀尔","塞内加尔",-17.27,14.38],
        ["Dallas","达拉斯","美国",-96.47,32.47],
        ["Damascus","大马士革","叙利亚",36.19,33.3],
        ["Dar es Salaam","达累斯萨拉姆","坦桑尼亚",39.18,-6.51],
        ["Darwin","达尔文","澳大利亚",130.51,-12.28],
        ["Delhi","德令哈","印度",77.14,28.4],
        ["Denpasar","登巴萨","印度尼西亚",115.14,-8.4],
        ["Denver","丹佛","美国",-104.59,39.43],
        ["Des Moines","得梅因","美国",-93.38,41.36],
        ["Detroit","底特律","美国",-83.05,42.23],
        ["Dhaka","达卡","孟加拉国",90.24,23.51],
        ["Dili","帝力","东帝汶",125.35,-8.35],
        ["Djibouti","吉布提","吉布提",42.5,12.],
        ["Dodoma","多多马","坦桑尼亚",35.4,-6.1],
        ["Doha","多哈","卡塔尔",51.34,25.15],
        ["Dover","多佛尔","美国",-75.32,39.1],
        ["Dubai","迪拜","阿联酋",55.17,25.13],
        ["Dublin","都柏林","爱尔兰",-6.15,53.26],
        ["Durban","德班","南非",31.03,-29.53],
        ["Dushanbe","杜尚别","塔吉克斯坦",68.51,38.38],
        ["Dusseldorf","杜塞尔多夫","德国",6.47,51.13],
        ["Easter Island","复活节岛","智利",-109.2,-27.05],
        ["Edinburgh","爱丁堡","英国",-3.13,55.57],
        ["Edmonton","埃德蒙顿","加拿大",-113.25,53.34],
        ["El Aaiun","阿尤恩","西撒哈拉",-13.12,27.09],
        ["El Paso","埃尔帕索","美国",-106.29,31.45],
        ["Endeh","英德","印度尼西亚",121.4,-8.51],
        ["Esfahan","伊斯法罕","伊朗",51.4,32.42],
        ["Fairbanks","费尔班克斯","美国",-147.43,64.5],
        ["Faisalabad","费萨拉巴德","巴基斯坦",73.09,31.25],
        ["Fernando de Noronha","费尔南多-迪诺罗尼亚","巴西",-32.25,-3.54],
        ["Fort-de-France","法兰西堡","法国",-61.05,14.36],
        ["Fort Worth","福特沃斯","美国",-97.2,32.45],
        ["Frankfort","法兰克福","美国",-84.52,38.12],
        ["Frankfurt","法兰克福","德国",8.34,50.02],
        ["Freetown","费里敦","塞拉利昂",-13.17,8.3],
        ["Fresno","弗雷斯诺","美国",-119.45,36.45],
        ["Fukuoka","福冈","日本",130.21,33.39],
        ["Funafuti","福纳佛提","图瓦卢",179.13,-8.31],
        ["Funchal","丰沙尔","葡萄牙",-16.54,32.38],
        ["Gaborone","哈博罗内","博茨瓦纳",25.55,-24.45],
        ["Galapagos Islands","加拉帕戈斯群岛","厄瓜多尔",-89.36,-0.54],
        ["Gambier Islands","甘比尔群岛","法国",-134.57,-23.08],
        ["Gatineau","加蒂诺","加拿大",-75.4,45.29],
        ["Gaza","加沙","加沙地带",34.28,31.3],
        ["Gdansk","格但斯克","波兰",18.38,54.22],
        ["Geneva","日内瓦","瑞士",6.04,46.14],
        ["Georgetown","乔治敦","圭亚那",-58.1,6.46],
        ["Georgetown","乔治敦","英国",-81.23,19.2],
        ["Gibraltar","直布罗陀","英国",-5.22,36.07],
        ["Glasgow","格拉斯哥","英国",-4.15,55.52],
        ["Guadalajara","瓜达拉哈拉","墨西哥",-103.21,20.4],
        ["Guam","关岛","美国",144.4,13.3],
        ["Guatemala","危地马拉","危地马拉",-90.22,14.38],
        ["Guayaquil","瓜亚基尔","厄瓜多尔",-79.54,-2.13],
        ["Halifax","哈利法克斯","加拿大",-63.35,44.38],
        ["Hamburg","汉堡","德国",10.,53.33],
        ["Hamilton","汉密尔顿","百慕大群岛",-64.47,32.18],
        ["Hamilton","汉密尔顿","加拿大",-79.51,43.15],
        ["Hanoi","河内","越南",105.53,21.01],
        ["Harare","哈拉雷","津巴布韦",31.04,-17.49],
        ["Harrisburg","哈里斯堡","美国",-76.53,40.16],
        ["Hartford","哈特福德","美国",-72.41,41.46],
        ["Havana","哈瓦那","古巴",-82.23,23.08],
        ["Helena","赫勒拿","美国",-112.02,46.35],
        ["Helsinki","赫尔辛基","芬兰",24.53,60.1],
        ["Hiroshima","广岛","日本",132.27,34.23],
        ["Ho Chi Minh","胡志明","越南",106.43,10.46],
        ["Hobart","荷伯特","澳大利亚",147.18,-42.54],
        ["Honiara","霍尼亚拉","所罗门群岛",160.12,-9.32],
        ["Honolulu","檀香山","美国",-157.5,21.19],
        ["Houston","休斯顿","美国",-95.23,29.45],
        ["Hovd","科布多","蒙古",90.45,46.4],
        ["Hyderabad","海得拉巴","印度",78.26,17.22],
        ["Incheon","仁川","韩国",126.38,37.3],
        ["Indianapolis","印第安纳波利斯","美国",-86.08,39.47],
        ["Indore","印多尔","印度",75.54,22.42],
        ["Iqaluit","伊卡瑞特","加拿大",-68.3,63.45],
        ["Islamabad","伊斯兰堡","巴基斯坦",73.08,33.4],
        ["Istanbul","伊斯坦布尔","土耳其",28.58,41.02],
        ["Izmir","伊兹密尔","土耳其",27.09,38.24],
        ["Jackson","杰克逊","美国",-90.11,32.2],
        ["Jacksonville","杰克逊维尔","美国",-81.4,30.2],
        ["Jaipur","斋浦尔","印度",75.5,26.53],
        ["Jakarta","雅加达","印度尼西亚",106.45,-6.08],
        ["Jayapura","查亚普拉","印度尼西亚",140.38,-2.28],
        ["Jeddah","吉达","沙特阿拉伯",39.1,21.3],
        ["Jefferson City","杰斐逊城","美国",-92.11,38.34],
        ["Jersey City","泽西城","美国",-74.03,40.42],
        ["Jerusalem","耶路撒冷","以色列",35.13,31.47],
        ["Johannesburg","约翰内斯堡","南非",27.54,-26.08],
        ["Juneau","朱诺","美国",-134.25,58.18],
        ["Kabul","喀布尔","阿富汗",69.1,34.3],
        ["Kaliningrad","加里宁格勒","俄罗斯",20.3,54.43],
        ["Kamchatka","堪察加","俄罗斯",158.39,53.01],
        ["Kampala","坎帕拉","乌干达",32.35,0.19],
        ["Kano Nigeria","尼日利亚卡诺","尼日利亚",8.31,12.],
        ["Kanpur","坎普尔","印度",80.14,26.27],
        ["Kansas City","堪萨斯城","美国",-94.33,39.02],
        ["Karachi","卡拉奇","巴基斯坦",67.02,24.51],
        ["Kathmandu","加德满都餐厅","尼泊尔",85.19,27.42],
        ["Kaunas","考纳斯","立陶宛",23.54,54.54],
        ["Kawasaki","川崎","日本",139.43,35.32],
        ["Kazan","喀山","俄罗斯",49.1,55.45],
        ["Khartoum","喀士穆","苏丹",32.36,15.34],
        ["Khon Kaen","孔敬","泰国",102.5,16.25],
        ["Khulna","库尔纳","孟加拉国",89.34,22.49],
        ["Kigali","基加利","卢旺达",30.05,-1.59],
        ["Kingston","京斯敦","澳大利亚",167.58,-29.03],
        ["Kingston","京斯敦","牙买加",-76.48,17.58],
        ["Kingstown","金斯敦","圣文森特和格林纳丁斯",-61.14,13.12],
        ["Kinshasa","金沙萨","刚果民主共和国",15.18,-4.18],
        ["Kiritimati","圣诞岛","基里巴斯",-157.2,1.52],
        ["Kitakyushu","北九州","日本",130.49,33.52],
        ["Knoxville","诺克斯维尔","美国",-83.56,35.58],
        ["Kobe","神户","日本",135.1,34.41],
        ["Kolkata","加尔各答","印度",88.2,22.34],
        ["Koror","科罗尔","帕劳",134.3,7.3],
        ["Krakow","克拉科夫","波兰",19.55,50.03],
        ["Krasnoyarsk","克拉斯诺亚尔斯克","俄罗斯",92.46,56.05],
        ["Kuala Lumpur","吉隆坡","马来西亚",101.42,3.08],
        ["Kupang","古邦","印度尼西亚",123.38,-10.23],
        ["Kuwait City","科威特省","科威特",48.,29.2],
        ["Kyiv","基辅","乌克兰",30.29,50.28],
        ["Kyoto","京都","日本",135.45,35.],
        ["La Coruna","拉柯鲁尼亚","西班牙",-8.24,43.22],
        ["La Paz","拉巴斯","玻利维亚",-68.09,-16.3],
        ["La Plata","拉普拉塔","阿根廷",-57.57,-34.55],
        ["Lagos","拉各斯","尼日利亚",3.02,6.35],
        ["Lahore","拉合尔","巴基斯坦",74.22,31.34],
        ["Las Palmas","拉斯帕尔马斯","西班牙",-15.27,28.08],
        ["Las Vegas","拉斯维加斯","美国",-115.1,36.1],
        ["Lausanne","洛桑","瑞士",6.39,46.32],
        ["Laval","拉瓦尔","加拿大",-73.45,45.35],
        ["Leon","莱昂","墨西哥",-101.42,21.1],
        ["Lexington-Fayette","法耶特","美国",-84.27,38.02],
        ["Libreville","利伯维尔","加蓬",9.25,0.3],
        ["Lilongwe","利隆圭","马拉维",33.49,-13.58],
        ["Lima","利马","秘鲁",-76.55,-12.06],
        ["Lincoln","林肯","美国",-96.4,40.49],
        ["Lisbon","里斯本","葡萄牙",-9.05,38.42],
        ["Little Rock","小石城","美国",-92.19,34.44],
        ["Liverpool","利物浦","英国",-3.,53.25],
        ["Ljubljana","卢布尔雅那","斯洛文尼亚",14.31,46.03],
        ["Lodz","罗兹","波兰",19.28,51.49],
        ["Lome","洛美","多哥",1.21,6.1],
        ["London","伦敦","加拿大",-81.14,42.59],
        ["London","伦敦","英国",-0.07,51.3],
        ["Long Beach","长滩","美国",-118.09,33.47],
        ["Longueuil","隆格伊","加拿大",-73.3,45.32],
        ["Lord Howe Island","豪勋爵岛","澳大利亚",159.,-33.3],
        ["Los Angeles","洛杉矶","美国",-118.22,34.05],
        ["Louisville","路易斯维尔","美国",-85.48,38.13],
        ["Luanda","罗安达","安哥拉",13.2,-8.5],
        ["Lubumbashi","卢本巴希","刚果民主共和国",27.29,-11.44],
        ["Lucknow","勒克瑙","印度",80.54,26.5],
        ["Ludhiana","鲁得希阿那","印度",75.52,30.56],
        ["Lusaka","卢萨卡","赞比亚",28.14,-15.2],
        ["Luxembourg","卢森堡","卢森堡",6.08,49.37],
        ["Madison","麦迪逊","美国",-89.23,43.05],
        ["Madrid","马德里","西班牙",-3.42,40.26],
        ["Madurai","马杜赖","印度",78.07,9.55],
        ["Majuro","马朱罗","马绍尔群岛",171.12,7.09],
        ["Makkah","麦加","沙特阿拉伯",39.49,21.26],
        ["Malabo","马拉博","赤道几内亚",8.48,3.45],
        ["Malang","马朗","印度尼西亚",112.45,-7.59],
        ["Male","马累","马尔代夫",73.28,4.1],
        ["Mamoutzou","马穆楚","法国",45.14,-12.47],
        ["Manado","美娜多","印度尼西亚",124.58,1.3],
        ["Managua","马那瓜","尼加拉瓜",-86.18,12.06],
        ["Manama","麦纳麦","巴林",50.36,26.12],
        ["Manaus","马瑙斯","巴西",-60.,-3.06],
        ["Manila","马尼拉","菲律宾",121.,14.37],
        ["Maputo","马普托","莫桑比克",32.35,-25.58],
        ["Mar del Plata","马德普拉塔","阿根廷",-57.32,-38.],
        ["Markham","马卡姆","加拿大",-79.19,43.49],
        ["Maseru","马塞卢","莱索托",27.28,-29.18],
        ["Mataram","马塔兰","印度尼西亚",116.07,-8.36],
        ["Mazatlan","马萨特兰","墨西哥",-106.25,23.13],
        ["Mbabane","姆巴巴纳","斯威士兰",31.08,-26.19],
        ["Medan","棉兰","印度尼西亚",98.39,3.35],
        ["Medellin","麦德林","哥伦比亚",-75.36,6.15],
        ["Melbourne","墨尔本","澳大利亚",144.58,-37.49],
        ["Memphis","孟菲斯","美国",-90.,35.05],
        ["Mendoza","门多萨","阿根廷",-68.5,-32.54],
        ["Merida","梅里达","墨西哥",-89.37,20.58],
        ["Mesa","梅萨","美国",-111.44,33.25],
        ["Mexicali","墨西卡利","墨西哥",-115.27,32.38],
        ["Mexico City","墨西哥城","墨西哥",-99.09,19.28],
        ["Miami","迈阿密","美国",-80.13,25.47],
        ["Midland","米德兰","美国",-102.05,32.],
        ["Midway","中途岛","美国",-177.22,28.13],
        ["Milan","米兰","意大利",9.1,45.28],
        ["Milwaukee","密尔沃基雄鹿","美国",-87.57,43.03],
        ["Minneapolis","明尼阿波利斯","美国",-93.15,45],
        ["Minsk","明斯克","白俄罗斯",27.3,53.51],
        ["Mississauga","米西索加","加拿大",-79.36,43.41],
        ["Mobile","莫比尔","美国",-88.05,30.4],
        ["Mogadishu","摩加迪沙","索马里",45.21,2.02],
        ["Monaco","摩纳哥","摩纳哥",7.25,43.4],
        ["Monrovia","蒙罗维亚","利比里亚",-10.46,6.2],
        ["Monterrey","蒙特雷","墨西哥",-100.2,25.4],
        ["Montevideo","蒙得维的亚","乌拉圭",-56.11,-34.53],
        ["Montgomery","蒙哥马利","美国",-86.2,32.22],
        ["Montpelier","蒙彼利埃","美国",-72.34,44.16],
        ["Montreal","蒙特利尔","加拿大",-73.35,45.3],
        ["Moroni","莫罗尼","科摩罗",43.19,-11.4],
        ["Moscow","莫斯科","俄罗斯",37.37,55.45],
        ["Mumbai","孟买","印度",72.51,18.56],
        ["Munich","慕尼黑","德国",11.35,48.08],
        ["Murmansk","摩尔曼斯克","俄罗斯",33.08,68.59],
        ["Muscat","马斯喀特","阿曼",58.37,23.36],
        ["Nagoya","名古屋","日本",136.55,35.1],
        ["Nagpur","那格浦尔","印度",79.12,21.1],
        ["Nairobi","内罗毕","肯尼亚",36.49,-1.17],
        ["Naples","那不勒斯","意大利",14.14,40.5],
        ["Nashville","纳什维尔","美国",-86.46,36.1],
        ["Nassau","拿骚","巴哈马",-77.2,25.03],
        ["Ndjamena","恩贾梅纳","乍得",14.59,12.1],
        ["Neuquen","内乌肯","阿根廷",-68.04,-38.57],
        ["New Delhi","新德里","印度",77.13,28.37],
        ["New Orleans","新奥尔良","美国",-90.05,29.58],
        ["New York","纽约","美国",-73.55,40.44],
        ["Newark","纽瓦克","美国",-74.1,40.43],
        ["Niamey","尼亚美","尼日尔",2.05,13.32],
        ["Nice","尼斯","法国",7.16,43.42],
        ["Nicosia","尼科西亚","塞浦路斯",33.23,35.11],
        ["Nizhny Novgorod","下诺夫哥罗德","俄罗斯",44.01,56.2],
        ["Nome","诺姆","美国",-165.24,64.32],
        ["Norfolk","诺福克","美国",-76.18,36.54],
        ["Nouakchott","努瓦克肖特","毛里塔尼亚",-15.58,18.09],
        ["Noumea","努美阿","法国",166.27,-22.16],
        ["Novgorod","诺夫哥罗德","俄罗斯",31.2,58.3],
        ["Novosibirsk","新西伯利亚","俄罗斯",82.55,55.04],
        ["Nukualofa","努库阿洛法","汤加",-175.12,-21.07],
        ["Nuuk","努克","丹麦",-51.4,64.1],
        ["Oakland","奥克兰","美国",-122.13,37.47],
        ["Odesa","敖德萨","乌克兰",30.46,46.3],
        ["Okayama","冈山","日本",133.54,34.4],
        ["Oklahoma City","俄克拉何马城","美国",-97.32,35.29],
        ["Omsk","鄂木斯克","俄罗斯",73.22,55.],
        ["Oranjestad","奥拉涅斯塔克","荷兰",-69.58,12.3],
        ["Orlando","奥兰多","美国",-81.22,28.3],
        ["Osaka","大阪","日本",135.3,34.4],
        ["Oslo","奥斯陆","挪威",10.41,59.56],
        ["Ottawa","渥太华","加拿大",-75.43,45.25],
        ["Ouagadougou","瓦加杜古","布基纳法索",-1.4,12.2],
        ["Pago Pago","帕果帕果","美国",-170.42,-14.16],
        ["Palembang","巨港","印度尼西亚",104.5,-2.59],
        ["Palikir","波赫恩","密克罗尼西亚",158.1,6.55],
        ["palma","帕尔马","西班牙",2.39,39.26],
        ["Panama","巴拿马","巴拿马",-79.3,8.57],
        ["Papeete","帕皮提","法国",-149.34,-17.32],
        ["Paramaribo","帕拉马里博","苏里南",-55.14,5.52],
        ["paris","巴黎","法国",2.2,48.51],
        ["Patna","巴特那","印度",85.12,25.37],
        ["Pensacola","彭沙科拉","美国",87.12,30.3],
        ["Perm","彼尔姆","联邦政府",56.1,58.01],
        ["Perth","珀斯","澳大利亚",115.49,-31.58],
        ["Peshawar","白沙瓦","巴基斯坦",71.4,34.01],
        ["Philadelphia","费拉德尔菲亚","美国",-75.09,40.],
        ["Phnom Penh","金边","柬埔寨",104.55,11.35],
        ["Phoenix","菲尼克斯","美国",-112.05,33.3],
        ["Pierre","皮尔","美国",-100.2,44.22],
        ["Pittsburgh","匹兹堡","美国",-80,40.26],
        ["Podgorica","波德戈里察","门的内哥罗",19.28,42.27],
        ["Port-au-Prince","太子港","海地",-72.2,18.32],
        ["Port-aux-Francais","法兰西港","法国",70.13,-49.21],
        ["Port Elizabeth","伊丽莎白港","南非",25.36,-33.57],
        ["Port Louis","路易港","毛里求斯",57.29,-20.09],
        ["Port Moresby","莫尔兹比港","巴布亚新几内亚",147.07,-9.3],
        ["Port of Spain","西班牙港","特立尼达和多巴哥",-61.31,10.38],
        ["Port Vila","维拉港","瓦努阿图",168.19,-17.44],
        ["Portland","波特兰","美国",-122.39,45.31],
        ["Porto","波尔图","葡萄牙",-8.37,41.09],
        ["Porto Alegre","阿雷格里港","巴西",-51.14,-30.02],
        ["Porto Novo","波多诺伏","贝宁",2.47,6.3],
        ["Poznan","波兹南","波兰",16.53,52.25],
        ["Prague","布拉格","捷克",14.25,50.05],
        ["Praia","普拉亚","佛得角",-23.31,14.55],
        ["Pretoria","比勒陀利亚","南非",28.11,-25.43],
        ["Pristina","普里什蒂纳","科索沃",21.1,42.39],
        ["Providence","普罗维登斯","美国",-71.25,41.49],
        ["Pune","浦那","印度",73.58,18.34],
        ["Pusan","釜山","韩国",129.02,35.05],
        ["Pyongyang","平壤","朝鲜",125.47,39.],
        ["Quebec","魁北克","加拿大",-71.15,46.5],
        ["Quito","基多","厄瓜多尔",-78.3,-0.14],
        ["Raba","拉巴","印度尼西亚",118.45,-8.27],
        ["Rabat","拉巴特","摩洛哥",-6.51,34.02],
        ["Raleigh","瑞丽","美国",-78.39,35.47],
        ["Rapid City","拉皮德城","美国",-103.13,44.05],
        ["Rarotonga","拉罗汤加岛","库克群岛",-160.16,-21.2],
        ["Rawaki","拉瓦基","基里巴斯",-171.05,-3.08],
        ["Recife","累西腓","巴西",-34.53,-8.06],
        ["Regina","里贾那","加拿大",-104.38,50.3],
        ["Reykjavik","雷克雅未克","冰岛",-21.58,64.09],
        ["Richmond","里士满","美国",-77.28,37.32],
        ["Riga","里加","拉脱维亚",24.05,56.53],
        ["Rio Branco","里奥布兰科","巴西",-67.49,-9.59],
        ["Rio de Janeiro","里约热内卢","巴西",-43.15,-22.54],
        ["Riverside","河滨市","美国",-117.23,33.56],
        ["Riyadh","利雅得","沙特阿拉伯",46.44,24.39],
        ["Road Town","罗德城","英国",-64.3,18.3],
        ["Rochester","罗彻斯特","美国",-77.37,43.12],
        ["Rome","罗马","意大利",12.37,41.52],
        ["Rosario","罗萨里奥","阿根廷",-60.4,-32.57],
        ["Roseau","罗索","多米尼克",-61.23,15.18],
        ["Rotterdam","鹿特丹","荷兰",4.29,51.55],
        ["Ryazan","梁赞","俄罗斯",39.45,54.37],
        ["Sacramento","萨克拉门托","美国",-121.28,38.34],
        ["Saint-Denis","圣蒂尼斯","法国",55.28,-20.52],
        ["Saint Georges","圣乔治","格林纳达",-61.44,12.04],
        ["Saint Helier","圣赫利尔","英国",-2.07,49.11],
        ["Saint John","圣约翰","加拿大",-66.03,45.16],
        ["Saint Johns","圣约翰","安提瓜和巴布达",-61.51,17.07],
        ["Saint-Petersburg","圣彼得堡","俄罗斯",30.25,59.55],
        ["Saipan","塞班岛","美国",145.45,15.12],
        ["Salem","塞伦","美国",-123.02,44.56],
        ["Salt Lake City","盐湖城","美国",-111.52,40.46],
        ["Salta","萨尔塔","阿根廷",-65.24,-24.47],
        ["Salvador","萨尔瓦多","巴西",-38.29,-12.58],
        ["Salzburg","萨尔茨保","奥地利",13.03,47.54],
        ["Samara","萨马拉","俄罗斯",50.15,53.1],
        ["San Antonio","圣安东尼奥","美国",-98.3,29.25],
        ["San Bernardino","圣博娜迪诺","美国",-117.17,34.06],
        ["San Diego","圣地亚哥","美国",-117.09,32.43],
        ["San Francisco","旧金山","美国",-122.26,37.46],
        ["San Jose","圣何塞","哥斯达黎加",-84.04,9.59],
        ["San Jose","圣何塞","美国",-121.53,37.2],
        ["San Juan","圣胡安","波多黎各",-66.08,18.29],
        ["San Luis Potosi","圣路易波托西","墨西哥",-100.59,22.09],
        ["San Marino","圣马力诺","圣马力诺",12.28,43.55],
        ["San Salvador","圣萨尔瓦多","萨尔瓦多",-89.1,13.4],
        ["Sana","萨那","也门",44.14,15.23],
        ["Santa Ana","圣安那","萨尔瓦多",-89.31,14.],
        ["Santa Fe","圣达菲","美国",-105.57,35.4],
        ["Santiago","圣地亚哥","智利",-70.4,-33.26],
        ["Santo Domingo","圣多明各","多米尼加",-69.57,18.3],
        ["Sao Paulo","圣保罗","巴西",-46.38,-23.34],
        ["Sao Tome","圣多美","圣多美和普林西比",6.44,0.2],
        ["Sapporo","扎幌","日本",141.21,43.05],
        ["Sarajevo","萨拉热窝","波黑",18.26,43.52],
        ["Saskatoon","萨斯卡通","加拿大",-106.4,52.1],
        ["Seattle","西雅图","美国",-122.2,47.38],
        ["Semarang","三宝垄","印度尼西亚",110.29,-6.58],
        ["Sendai","仙台","日本",140.52,38.16],
        ["Seoul","首尔","韩国",127.03,37.35],
        ["Sialkot","锡亚尔科特","巴基斯坦",74.35,32.29],
        ["Singapore","新加坡","新加坡",103.45,1.22],
        ["Singaraja","新卡拉雅","印度尼西亚",115.07,-8.06],
        ["Sioux Falls","苏福尔斯","美国",-96.42,43.34],
        ["Skopje","斯科普里","马其顿",21.3,41.35],
        ["Sofia","索非亚","保加利亚",23.2,42.43],
        ["St.Johns","圣约翰","加拿大",-52.41,47.34],
        ["St.Louis","圣路易斯","美国",-90.15,38.4],
        ["St.Paul","圣保罗","美国",-93.1,45.],
        ["St.Petersburg","圣彼得堡","美国",-82.38,27.45],
        ["Stanley","斯坦利","美国",-57.52,-51.42],
        ["Stockholm","斯德哥尔摩","瑞典",18.,59.23],
        ["Stockton","斯托克顿","美国",-121.18,37.58],
        ["Sucre","苏克雷","玻利维亚",-65.16,-19.02],
        ["Surabaya","苏腊巴亚","印度尼西亚",112.45,-7.14],
        ["Surakarta","苏腊卡尔塔","印度尼西亚",110.5,-7.32],
        ["Surat","苏拉特","印度",72.54,21.1],
        ["Surrey","萨里","加拿大",-122.51,49.11],
        ["Suva","苏瓦","斐济",178.25,-18.08],
        ["Sydney","悉尼","澳大利亚",151.17,-33.55],
        ["Szczecin","什切青","波兰",14.32,53.25],
        ["Taegu","大丘","韩国",128.36,35.52],
        ["Taiohae","泰奥海伊","法国",-139.3,-9.],
        ["Tallinn","塔林","爱沙尼亚",24.48,59.22],
        ["Tampa","坦帕","美国",-82.38,27.58],
        ["Tangier","丹吉尔","摩洛哥",-5.45,35.48],
        ["Tarawa","塔拉瓦","基里巴斯",173.,1.25],
        ["Tashkent","塔什干","乌兹别克",69.13,41.16],
        ["Tbilisi","第比利斯","乔治亚州",44.48,41.43],
        ["Tegucigalpa","特古西加尔巴","洪都拉斯",-87.14,14.05],
        ["Tehran","德黑兰","伊朗",51.3,35.45],
        ["Tel Aviv","特拉维夫","以色列",34.46,32.05],
        ["Ternate","特尔纳特","印度尼西亚",127.23,0.48],
        ["The Settlement","新村","澳大利亚",105.4,-10.3],
        ["TheValley","瓦利","安圭拉岛",-63.04,-18.13],
        ["Thimphu","廷布","不丹",89.4,-27.29],
        ["Thiruvananthapuram","特里凡得琅","印度",76.57,8.3],
        ["Tijuana","提华纳","墨西哥",-117.01,32.32],
        ["Tirane","地拉那","阿尔巴尼亚",19.48,41.2],
        ["Tokyo","东京","日本",139.44,35.41],
        ["Toledo","托莱多","美国",-83.35,41.4],
        ["Topeka","托皮卡","美国",-95.41,39.02],
        ["Toronto","多伦多","加拿大",-79.22,43.4],
        ["Torshavn","托沙芬","丹麦",-6.46,62.01],
        ["Trenton","特伦顿","美国",-74.46,40.13],
        ["Tripoli","的黎波里","利比亚",13.12,32.58],
        ["Tucson","图森","美国",-110.58,32.13],
        ["Tucuman","图库曼","阿根廷",-65.2,-26.3],
        ["Tunis","突尼斯","突尼斯",10.1,36.47],
        ["Turin","都灵","意大利",7.4,45.04],
        ["Tyumen","秋明","俄罗斯",65.32,57.09],
        ["Ufa","乌法","俄罗斯",55.58,54.45],
        ["Ulaanbaatar","乌兰巴托","蒙古",106.53,47.55],
        ["Unalaska","安那拉斯加","美国",-166.43,53.51],
        ["Vadodara","巴罗达","印度",73.14,22.19],
        ["Vaduz","瓦杜兹","列支敦士登",9.31,47.09],
        ["Valletta","瓦莱塔","马耳他",14.31,35.53],
        ["Vancouver","温哥华","加拿大",-123.06,49.13],
        ["Varanasi","瓦腊纳西","印度",83.,25.2],
        ["Vatican City","梵蒂冈城","梵蒂冈",12.27,41.54],
        ["Venice","威尼斯","意大利",12.2,45.26],
        ["Veracruz","韦拉克鲁斯","墨西哥",-96.1,19.11],
        ["Victoria","维多利亚","加拿大",-123.21,48.25],
        ["Victoria","维多利亚","塞舌尔",55.28,-4.4],
        ["Vienna","维也纳","奥地利",16.22,48.13],
        ["Vientiane","万象","老挝",102.48,18.01],
        ["Vilnius","维尔纽斯","立陶宛",25.19,54.4],
        ["Virginia Beach","弗吉尼亚海滨市","美国",-76.02,36.44],
        ["Visakhapatnam","维萨卡帕特南","印度",83.24,17.42],
        ["Vladivostok","符拉迪沃斯托克","俄罗斯",131.53,43.09],
        ["Warsaw","华沙","波兰",21.,52.15],
        ["Washington DC","攻击目标","美国",-77.02,38.53],
        ["Wellington","惠灵顿","新西兰",174.47,-41.17],
        ["Whitehorse","怀特霍斯","加拿大",-135.08,60.41],
        ["Wichita","卫奇塔","美国",-97.2,37.43],
        ["Willemstad","威廉斯塔德","荷兰",-68.56,12.12],
        ["Windhoek","温得和克","纳米比亚",17.06,-22.34],
        ["Windsor","温泽","加拿大",-83.01,42.18],
        ["Winnipeg","温尼伯","加拿大",-97.1,49.53],
        ["Wroclaw","弗罗茨瓦夫","波兰",17.,51.05],
        ["Yakutsk","雅库茨克","俄罗斯",129.51,62.1],
        ["Yamoussoukro","亚穆苏克罗","科特迪瓦",-5.18,6.51],
        ["Yangon","仰光","缅甸",96.09,16.46],
        ["Yaounde","雅温得","喀麦隆",11.31,3.51],
        ["Yaren","亚伦","瑙鲁",166.55,-0.32],
        ["Yekaterinburg","叶卡捷琳堡","俄罗斯",60.35,56.52],
        ["Yellowknife","耶洛奈夫","加拿大",-114.29,62.3],
        ["Yerevan","耶烈万","亚美尼亚共",44.31,40.1],
        ["Yokohama","横滨","日本",139.39,35.27],
        ["Yuzhno-Sakhalinsk","南萨哈林斯克","俄罗斯",142.44,46.58],
        ["Zagreb","萨格勒布","克罗地亚",15.58,45.49],
        ["Zurich","苏黎世","瑞士",8.32,47.22]
    ]
};