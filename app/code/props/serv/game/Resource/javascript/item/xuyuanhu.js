
// 许愿壶脚本
importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(java.util);

function PutItem(jssystem,self,user,config,count,num)
{
    var dropsystem = jssystem.GetDropSystem();
    var shapelist = jssystem.GetIntAyyayList();
    var kernel = jssystem.GetKernel();

    if(kernel.QueryInt(self,PropertyIndex.ItemFoldNum) < count)
    {
        return;
    }

    //var placeItemInfo = new PlaceItemInfo(config,count);
    //placeItemInfo.SetIntProp(PropertyIndex.ItemBindingStatus,kernel.QueryInt(self,PropertyIndex.ItemBindingStatus));
    //var list = new ArrayList();
    //for (var i = 0; i < count; i++)
    //{
        //jssystem.ArrayListAddInt(shapelist, ContainerDefine.ITEMSHAPESIX);
        //list.add(placeItemInfo);
    //}

    var packsystem = jssystem.GetPackSystem();
    //if (!packsystem.CheckItemListPlacePack(user, list))
    //{
        //kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_071", null);
        //return;
    //}
    //----test---
    var dropitemlist = jssystem.GetDropArrayList();
    for(var i = 0; i < count; i ++)
    {
       var item = kernel.Create(config);
       if (!kernel.Exists(item))
       {
           return;
       }
       jssystem.ArrayListAddObj(dropitemlist, item);
    }
    if(!packsystem.CheckPackPlaceItems(user, dropitemlist))
    {
       for(var i = 0; i < dropitemlist.size(); i ++)
       {
           kernel.DestroySelf(dropitemlist.get(i));
       }
       kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_071", null);
       return;
    }
    //没有放进去的删除
    var toboxlist = packsystem.AutoPlacePackItems(user, dropitemlist);
    if (toboxlist.size() != dropitemlist.size())
    {
        for (var i = 0; i < dropitemlist.size(); i++)
        {
            var falg = 0;
            for (var j = 0; j < toboxlist.size(); j++)
            {
                if (dropitemlist.get(i).equals(toboxlist.get(j)))
                {
                    falg = 1;
                }
            }

            if (falg == 0)
            {
                kernel.DestroySelf(dropitemlist.get(i));
                dropitemlist.remove(i);
            }
        }
    }
    var BandingStatus = kernel.QueryInt(self,PropertyIndex.ItemBindingStatus);
    for(var i = 0; i < dropitemlist.size(); i ++)
    {
        var dItem = dropitemlist.get(i);
        // 改变绑定状态
        kernel.SetInt(dItem, PropertyIndex.ItemBindingStatus, BandingStatus);
        //是装备就鉴定
        var itemClass = kernel.GetClassIndex(dItem);

        if (itemClass == ClassIndex.CLASS_EQUIPITEM && num > 0)
        {
            var identifysystem = jssystem.GetIdentifySystem();
            var vars = new VarList();
            vars.AddInt(num);
            //设置鉴定属性数量接口
            identifysystem.SetEquipIdentifyPropCount(dItem, vars);
            //identifysystem.FlushEquipIdentifyProp(item);
        }
    }
    //---

    //config
    var itemname = kernel.QueryConfigString(config,PropertyIndex.ItemName);
    
    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1 * count);

    //packsystem.PlacePackItemList(user,list);

    var varlist = new VarList();
    varlist.AddString(itemname);
    varlist.AddInt(count);
    kernel.ShowMsgBox(user,MsgBoxDefine.MSGBOX_NORMAL,TypeDefine.MSGBOX_ID_OK, "lg_WishPot_Tips", varlist, null);
}

function OnUse(jssystem, self, user,type)
{
    var kernel = jssystem.GetKernel();
    var count = type % 1000;
    var index = (type - count) / 1000;

    switch(index)
    {
        case 1:
        {
            PutItem(jssystem,self,user,"i290003",count,0);
            break;
        }
        case 2:
        {
            PutItem(jssystem,self,user,"i290009",count,0);
            break;
        }
        case 3:
        {
            PutItem(jssystem,self,user,"i290012",count,0);
            break;
        }
        case 4:
        {
            PutItem(jssystem,self,user,"i290014",count,0);
            break;
        }
        case 5:
        {
            PutItem(jssystem,self,user,"i290016",count,0);
            break;
        }
        case 6:
        {
            PutItem(jssystem,self,user,"i290017",count,0);
            break;
        }
        case 7:
        {
            PutItem(jssystem,self,user,"i290018",count,0);
            break;
        }
        case 8:
        {
            PutItem(jssystem,self,user,"i290019",count,0);
            break;
        }
        case 9:
        {
            PutItem(jssystem,self,user,"i290020",count,0);
            break;
        }
        case 10:
        {
            PutItem(jssystem,self,user,"i290006",count,0);
            break;
        }
        case 11:
        {
            PutItem(jssystem,self,user,"i290007",count,0);
            break;
        }
        case 12:
        {
            PutItem(jssystem,self,user,"i290010",count,0);
            break;
        }
        case 13:
        {
            PutItem(jssystem,self,user,"i290011",count,0);
            break;
        }
        case 14:
        {
            PutItem(jssystem,self,user,"i290013",count,0);
            break;
        }
        case 15:
        {
            PutItem(jssystem,self,user,"i290015",count,0);
            break;
        }
        case 16:
        {
            PutItem(jssystem,self,user,"i290021",count,0);
            break;
        }
        case 17:
        {
            PutItem(jssystem,self,user,"i290022",count,0);
            break;
        }
        case 18:
        {
            PutItem(jssystem,self,user,"i290023",count,0);
            break;
        }
        case 19:
        {
            PutItem(jssystem,self,user,"i290052",count,0);
            break;
        }
        case 20:
        {
            PutItem(jssystem,self,user,"i290054",count,0);
            break;
        }
        case 21:
        {
            PutItem(jssystem,self,user,"i290076",count,0);
            break;
        }
        case 22:
        {
            PutItem(jssystem,self,user,"i290001",count,0);
            break;
        }
        case 23:
        {
            PutItem(jssystem,self,user,"i290004",count,0);
            break;
        }
        case 24:
        {
            PutItem(jssystem,self,user,"i290005",count,0);
            break;
        }
        case 25:
        {
            PutItem(jssystem,self,user,"i290008",count,0);
            break;
        }
        case 26:
        {
            PutItem(jssystem,self,user,"i290045",count,0);
            break;
        }
        case 27:
        {
            PutItem(jssystem,self,user,"i290046",count,0);
            break;
        }
        case 28:
        {
            PutItem(jssystem,self,user,"i290047",count,0);
            break;
        }
        case 29:
        {
            PutItem(jssystem,self,user,"i290048",count,0);
            break;
        }
        case 30:
        {
            PutItem(jssystem,self,user,"i290049",count,0);
            break;
        }
        case 31:
        {
            PutItem(jssystem,self,user,"i290051",count,0);
            break;
        }
        case 32:
        {
            PutItem(jssystem,self,user,"i290055",count,0);
            break;
        }
        case 33:
        {
            PutItem(jssystem,self,user,"i290056",count,0);
            break;
        }
        case 34:
        {
            PutItem(jssystem,self,user,"i290057",count,0);
            break;
        }
        case 35:
        {
            PutItem(jssystem,self,user,"i290084",count,0);
            break;
        }
        case 36:
        {
            PutItem(jssystem,self,user,"i290026",count,0);
            break;
        }
        case 37:
        {
            PutItem(jssystem,self,user,"i290032",count,0);
            break;
        }
        case 38:
        {
            PutItem(jssystem,self,user,"i290033",count,0);
            break;
        }
        case 39:
        {
            PutItem(jssystem,self,user,"i290034",count,0);
            break;
        }
        case 40:
        {
            PutItem(jssystem,self,user,"i290036",count,0);
            break;
        }
        case 41:
        {
            PutItem(jssystem,self,user,"i290039",count,0);
            break;
        }
        case 42:
        {
            PutItem(jssystem,self,user,"i290061",count,0);
            break;
        }
        case 43:
        {
            PutItem(jssystem,self,user,"i290063",count,0);
            break;
        }
        case 44:
        {
            PutItem(jssystem,self,user,"i290065",count,0);
            break;
        }
        case 45:
        {
            PutItem(jssystem,self,user,"i290028",count,0);
            break;
        }
        case 46:
        {
            PutItem(jssystem,self,user,"i290060",count,0);
            break;
        }
        case 47:
        {
            PutItem(jssystem,self,user,"i290062",count,0);
            break;
        }
        case 48:
        {
            PutItem(jssystem,self,user,"i290064",count,0);
            break;
        }
        case 49:
        {
            PutItem(jssystem,self,user,"i290066",count,0);
            break;
        }
        case 50:
        {
            PutItem(jssystem,self,user,"i290069",count,0);
            break;
        }
        case 51:
        {
            PutItem(jssystem,self,user,"i290027",count,0);
            break;
        }
        case 52:
        {
            PutItem(jssystem,self,user,"i290029",count,0);
            break;
        }
        case 53:
        {
            PutItem(jssystem,self,user,"i290035",count,0);
            break;
        }
        case 54:
        {
            PutItem(jssystem,self,user,"i290037",count,0);
            break;
        }
        case 55:
        {
            PutItem(jssystem,self,user,"i290058",count,0);
            break;
        }
        case 56:
        {
            PutItem(jssystem,self,user,"i290072",count,0);
            break;
        }
        case 57:
        {
            PutItem(jssystem,self,user,"i290074",count,0);
            break;
        }
        case 58:
        {
            PutItem(jssystem,self,user,"i290085",count,0);
            break;
        }
        case 59:
        {
            PutItem(jssystem,self,user,"i290090",count,0);
            break;
        }
        case 60:
        {
            PutItem(jssystem,self,user,"i290087",count,0);
            break;
        }
        case 61:
        {
            PutItem(jssystem,self,user,"i290088",count,0);
            break;
        }
        case 62:
        {
            PutItem(jssystem,self,user,"i290086",count,0);
            break;
        }
        case 63:
        {
            PutItem(jssystem,self,user,"i290089",count,0);
            break;
        }
		case 64:
        {
            PutItem(jssystem,self,user,"i2927010",count,0);
            break;
        }
		case 65:
        {
            PutItem(jssystem,self,user,"i2927040",count,0);
            break;
        }
		case 66:
        {
            PutItem(jssystem,self,user,"i2927050",count,0);
            break;
        }
		case 67:
        {
            PutItem(jssystem,self,user,"i2927080",count,0);
            break;
        }
		case 68:
        {
            PutItem(jssystem,self,user,"i2927450",count,0);
            break;
        }
		case 69:
        {
            PutItem(jssystem,self,user,"i2927460",count,0);
            break;
        }
		case 70:
        {
            PutItem(jssystem,self,user,"i2927470",count,0);
            break;
        }
		case 71:
        {
            PutItem(jssystem,self,user,"i2927480",count,0);
            break;
        }
		case 72:
        {
            PutItem(jssystem,self,user,"i2927490",count,0);
            break;
        }
		case 73:
        {
            PutItem(jssystem,self,user,"i2927510",count,0);
            break;
        }
		case 74:
        {
            PutItem(jssystem,self,user,"i2927560",count,0);
            break;
        }
		case 75:
        {
            PutItem(jssystem,self,user,"i2927550",count,0);
            break;
        }
		case 76:
        {
            PutItem(jssystem,self,user,"i2927840",count,0);
            break;
        }
		case 77:
        {
            PutItem(jssystem,self,user,"i2927570",count,0);
            break;
        }
		case 78:
        {
            PutItem(jssystem,self,user,"i2927580",count,0);
            break;
        }
		case 79:
        {
            PutItem(jssystem,self,user,"i2927290",count,0);
            break;
        }
		 case 80:
        {
            PutItem(jssystem,self,user,"i2927270",count,0);
            break;
        }
		case 81:
        {
            PutItem(jssystem,self,user,"i2927370",count,0);
            break;
        }
		case 82:
        {
            PutItem(jssystem,self,user,"i2927350",count,0);
            break;
        }
		case 83:
        {
            PutItem(jssystem,self,user,"i2927720",count,0);
            break;
        }
		case 84:
        {
            PutItem(jssystem,self,user,"i2927740",count,0);
            break;
        }
		case 85:
        {
            PutItem(jssystem,self,user,"i2927850",count,0);
            break;
        }
		case 86:
        {
            PutItem(jssystem,self,user,"i2927900",count,0);
            break;
        }
		case 87:
        {
            PutItem(jssystem,self,user,"i291801",count,0);
            break;
        }
		case 88:
        {
            PutItem(jssystem,self,user,"i291804",count,0);
            break;
        }
		case 89:
        {
            PutItem(jssystem,self,user,"i291805",count,0);
            break;
        }
		case 90:
        {
            PutItem(jssystem,self,user,"i291808",count,0);
            break;
        }
		case 91:
        {
            PutItem(jssystem,self,user,"i291845",count,0);
            break;
        }
		case 92:
        {
            PutItem(jssystem,self,user,"i291846",count,0);
            break;
        }
	    case 93:
        {
            PutItem(jssystem,self,user,"i291847",count,0);
            break;
        }
		case 94:
        {
            PutItem(jssystem,self,user,"i291848",count,0);
            break;
        }
		case 95:
        {
            PutItem(jssystem,self,user,"i291849",count,0);
            break;
        }
		case 96:
        {
            PutItem(jssystem,self,user,"i291851",count,0);
            break;
        }
		case 97:
        {
            PutItem(jssystem,self,user,"i291856",count,0);
            break;
        }
		case 98:
        {
            PutItem(jssystem,self,user,"i291855",count,0);
            break;
        }
		case 99:
        {
            PutItem(jssystem,self,user,"i291884",count,0);
            break;
        }
		case 100:
        {
            PutItem(jssystem,self,user,"i291857",count,0);
            break;
        }
		case 101:
        {
            PutItem(jssystem,self,user,"i291858",count,0);
            break;
        }
		case 102:
        {
            PutItem(jssystem,self,user,"i291829",count,0);
            break;
        }
		case 103:
        {
            PutItem(jssystem,self,user,"i291827",count,0);
            break;
        }
		case 104:
        {
            PutItem(jssystem,self,user,"i291837",count,0);
            break;
        }
		case 105:
        {
            PutItem(jssystem,self,user,"i291835",count,0);
            break;
        }
		case 106:
        {
            PutItem(jssystem,self,user,"i291872",count,0);
            break;
        }
		case 107:
        {
            PutItem(jssystem,self,user,"i291874",count,0);
            break;
        }
		case 108:
        {
            PutItem(jssystem,self,user,"i291885",count,0);
            break;
        }
		case 109:
        {
            PutItem(jssystem,self,user,"i291890",count,0);
            break;
        }
		case 110:
        {
            PutItem(jssystem,self,user,"i28300218",count,0);
            break;
        }
		case 111:
        {
            PutItem(jssystem,self,user,"i28300318",count,0);
            break;
        }
		case 112:
        {
            PutItem(jssystem,self,user,"i28300618",count,0);
            break;
        }
		case 113:
        {
            PutItem(jssystem,self,user,"i28301618",count,0);
            break;
        }
		case 114:
        {
            PutItem(jssystem,self,user,"i28301818",count,0);
            break;
        }
		case 115:
        {
            PutItem(jssystem,self,user,"i28302518",count,0);
            break;
        }
		case 116:
        {
            PutItem(jssystem,self,user,"i28302618",count,0);
            break;
        }
		case 117:
        {
            PutItem(jssystem,self,user,"i28302718",count,0);
            break;
        }
		case 118:
        {
            PutItem(jssystem,self,user,"i28100818",count,0);
            break;
        }
		case 119:
        {
            PutItem(jssystem,self,user,"i28302818",count,0);
            break;
        }
		case 120:
        {
            PutItem(jssystem,self,user,"i28302918",count,0);
            break;
        }
		case 121:
        {
            PutItem(jssystem,self,user,"i28303018",count,0);
            break;
        }
		case 122:
        {
            PutItem(jssystem,self,user,"i28301518",count,0);
            break;
        }		
		case 123:
        {
            PutItem(jssystem,self,user,"i28301718",count,0);
            break;
        }
		case 124:
        {
            PutItem(jssystem,self,user,"i28301918",count,0);
            break;
        }
		case 125:
        {
            PutItem(jssystem,self,user,"i28303118",count,0);
            break;
        }
		case 126:
        {
            PutItem(jssystem,self,user,"i28300221",count,0);
            break;
        }		
		case 127:
        {
            PutItem(jssystem,self,user,"i28300321",count,0);
            break;
        }
		case 128:
        {
            PutItem(jssystem,self,user,"i28300621",count,0);
            break;
        }
		case 129:
        {
            PutItem(jssystem,self,user,"i28301621",count,0);
            break;
        }
		case 130:
        {
            PutItem(jssystem,self,user,"i28301821",count,0);
            break;
        }
		case 131:
        {
            PutItem(jssystem,self,user,"i28302521",count,0);
            break;
        }		
		case 132:
        {
            PutItem(jssystem,self,user,"i28302621",count,0);
            break;
        }
		case 133:
        {
            PutItem(jssystem,self,user,"i28302721",count,0);
            break;
        }
		case 134:
        {
            PutItem(jssystem,self,user,"i28100821",count,0);
            break;
        }
		case 135:
        {
            PutItem(jssystem,self,user,"i28302821",count,0);
            break;
        }
		case 136:
        {
            PutItem(jssystem,self,user,"i28302921",count,0);
            break;
        }
		case 137:
        {
            PutItem(jssystem,self,user,"i28303021",count,0);
            break;
        }
		case 138:
        {
            PutItem(jssystem,self,user,"i28301521",count,0);
            break;
        }
		case 139:
        {
            PutItem(jssystem,self,user,"i28301721",count,0);
            break;
        }
		case 140:
        {
            PutItem(jssystem,self,user,"i28301921",count,0);
            break;
        }
		case 141:
        {
            PutItem(jssystem,self,user,"i28303121",count,0);
            break;
        }
		case 142:
        {
            PutItem(jssystem,self,user,"i2940030",count,0);
            break;
        }
		case 143:
        {
            PutItem(jssystem,self,user,"i2940040",count,0);
            break;
        }
		case 144:
        {
            PutItem(jssystem,self,user,"i2940050",count,0);
            break;
        }
		case 145:
        {
            PutItem(jssystem,self,user,"i2940060",count,0);
            break;
        }
		case 146:
        {
            PutItem(jssystem,self,user,"i2940070",count,0);
            break;
        }
		case 147:
        {
            PutItem(jssystem,self,user,"i2940080",count,0);
            break;
        }
		case 148:
        {
            PutItem(jssystem,self,user,"i2940090",count,0);
            break;
        }
		case 149:
        {
            PutItem(jssystem,self,user,"i2940110",count,0);
            break;
        }
		case 150:
        {
            PutItem(jssystem,self,user,"i2940130",count,0);
            break;
        }
		case 151:
        {
            PutItem(jssystem,self,user,"i2940140",count,0);
            break;
        }
		case 152:
        {
            PutItem(jssystem,self,user,"i2945430",count,0);
            break;
        }
		case 153:
        {
            PutItem(jssystem,self,user,"i2945440",count,0);
            break;
        }
		case 154:
        {
            PutItem(jssystem,self,user,"i2945450",count,0);
            break;
        }
		case 155:
        {
            PutItem(jssystem,self,user,"i2945460",count,0);
            break;
        }
		case 156:
        {
            PutItem(jssystem,self,user,"i2945470",count,0);
            break;
        }
		case 157:
        {
            PutItem(jssystem,self,user,"i2945480",count,0);
            break;
        }
		case 158:
        {
            PutItem(jssystem,self,user,"i2945490",count,0);
            break;
        }
		case 159:
        {
            PutItem(jssystem,self,user,"i2945510",count,0);
            break;
        }
		case 160:
        {
            PutItem(jssystem,self,user,"i2945530",count,0);
            break;
        }
		case 161:
        {
            PutItem(jssystem,self,user,"i2945540",count,0);
            break;
        }
		case 162:
        {
            PutItem(jssystem,self,user,"i180030",count,0);
            break;
        }
		case 163:
        {
            PutItem(jssystem,self,user,"i180031",count,0);
            break;
        }
		case 164:
        {
            PutItem(jssystem,self,user,"i180032",count,0);
            break;
        }
		case 165:
        {
            PutItem(jssystem,self,user,"i180033",count,0);
            break;
        }
		case 166:
        {
            PutItem(jssystem,self,user,"i180034",count,0);
            break;
        }
		case 167:
        {
            PutItem(jssystem,self,user,"i180026",count,0);
            break;
        }
		case 168:
        {
            PutItem(jssystem,self,user,"i180021",count,0);
            break;
        }
		case 176:
        {
            PutItem(jssystem,self,user,"i491045",count,0);
            break;
        }
		case 177:
        {
            PutItem(jssystem,self,user,"i491046",count,0);
            break;
        }
		case 178:
        {
            PutItem(jssystem,self,user,"i491047",count,0);
            break;
        }
		case 179:
        {
            PutItem(jssystem,self,user,"i491048",count,0);
            break;
        }
		case 180:
        {
            PutItem(jssystem,self,user,"i491049",count,0);
            break;
        }
		case 181:
        {
            PutItem(jssystem,self,user,"i491050",count,0);
            break;
        }
		case 182:
        {
            PutItem(jssystem,self,user,"i491051",count,0);
            break;
        }
		case 183:
        {
            PutItem(jssystem,self,user,"i491052",count,0);
            break;
        }
		case 184:
        {
            PutItem(jssystem,self,user,"i290067",count,0);
            break;
        }	
		case 185:
        {
            PutItem(jssystem,self,user,"i290031",count,0);
            break;
        }
		case 186:
        {
            PutItem(jssystem,self,user,"i2927670",count,0);
            break;
        }
		case 187:
        {
            PutItem(jssystem,self,user,"i2927310",count,0);
            break;
        }
		case 188:
        {
            PutItem(jssystem,self,user,"i290053",count,0);
            break;
        }	
		case 189:
        {
            PutItem(jssystem,self,user,"i290044",count,0);
            break;
        }
		case 190:
        {
            PutItem(jssystem,self,user,"i2927530",count,0);
            break;
        }
		case 191:
        {
            PutItem(jssystem,self,user,"i2927440",count,0);
            break;
        }
		case 201:
        {
            PutItem(jssystem,self,user,"i298001",count,4);
            break;
        }
		case 202:
        {
            PutItem(jssystem,self,user,"i298002",count,4);
            break;
        }
		case 203:
        {
            PutItem(jssystem,self,user,"i298003",count,4);
            break;
        }
		case 204:
        {
            PutItem(jssystem,self,user,"i298004",count,4);
            break;
        }
		case 205:
        {
            PutItem(jssystem,self,user,"i298005",count,4);
            break;
        }
		case 206:
        {
            PutItem(jssystem,self,user,"i298006",count,4);
            break;
        }
		case 207:
        {
            PutItem(jssystem,self,user,"i298007",count,4);
            break;
        }
		case 208:
        {
            PutItem(jssystem,self,user,"i298008",count,4);
            break;
        }
		case 209:
        {
            PutItem(jssystem,self,user,"i298009",count,4);
            break;
        }
		case 210:
        {
            PutItem(jssystem,self,user,"i298010",count,4);
            break;
        }
		case 211:
        {
            PutItem(jssystem,self,user,"i210121",count,4);
            break;
        }
		case 212:
        {
            PutItem(jssystem,self,user,"i210122",count,4);
            break;
        }
		case 213:
        {
            PutItem(jssystem,self,user,"i210123",count,4);
            break;
        }
		case 214:
        {
            PutItem(jssystem,self,user,"i210124",count,4);
            break;
        }
		case 215:
        {
            PutItem(jssystem,self,user,"i210125",count,4);
            break;
        }
		case 216:
        {
            PutItem(jssystem,self,user,"i300126",count,4);
            break;
        }
		case 217:
        {
            PutItem(jssystem,self,user,"i300127",count,4);
            break;
        }
		case 218:
        {
            PutItem(jssystem,self,user,"i300128",count,4);
            break;
        }
		case 219:
        {
            PutItem(jssystem,self,user,"i300129",count,4);
            break;
        }
		case 220:
        {
            PutItem(jssystem,self,user,"i300130",count,4);
            break;
        }
		case 221:
        {
            PutItem(jssystem,self,user,"i210126",count,4);
            break;
        }
		case 222:
        {
            PutItem(jssystem,self,user,"i210127",count,4);
            break;
        }
		case 223:
        {
            PutItem(jssystem,self,user,"i210128",count,4);
            break;
        }
		case 224:
        {
            PutItem(jssystem,self,user,"i300131",count,4);
            break;
        }
		case 225:
        {
            PutItem(jssystem,self,user,"i300132",count,4);
            break;
        }
		case 226:
        {
            PutItem(jssystem,self,user,"i300133",count,4);
            break;
        }
		case 227:
        {
            PutItem(jssystem,self,user,"i286651",count,4);
            break;
        }
		case 228:
        {
            PutItem(jssystem,self,user,"i286652",count,4);
            break;
        }
		case 229:
        {
            PutItem(jssystem,self,user,"i286653",count,4);
            break;
        }
		case 230:
        {
            PutItem(jssystem,self,user,"i286654",count,4);
            break;
        }
		case 231:
        {
            PutItem(jssystem,self,user,"i286655",count,4);
            break;
        }
		case 232:
        {
            PutItem(jssystem,self,user,"i286661",count,4);
            break;
        }
		case 233:
        {
            PutItem(jssystem,self,user,"i286662",count,4);
            break;
        }
		case 234:
        {
            PutItem(jssystem,self,user,"i286663",count,4);
            break;
        }
		case 235:
        {
            PutItem(jssystem,self,user,"i286664",count,4);
            break;
        }
		case 236:
        {
            PutItem(jssystem,self,user,"i286665",count,4);
            break;
        }
		case 237:
        {
            PutItem(jssystem,self,user,"i286671",count,4);
            break;
        }
		case 238:
        {
            PutItem(jssystem,self,user,"i286672",count,4);
            break;
        }
		case 239:
        {
            PutItem(jssystem,self,user,"i286673",count,4);
            break;
        }
		case 240:
        {
            PutItem(jssystem,self,user,"i286674",count,4);
            break;
        }
		case 241:
        {
            PutItem(jssystem,self,user,"i286675",count,4);
            break;
        }
		case 242:
        {
            PutItem(jssystem,self,user,"i180049",count,0);
            break;
        }
		case 243:
        {
            PutItem(jssystem,self,user,"i180050",count,0);
            break;
        }
		case 244:
        {
            PutItem(jssystem,self,user,"i180051",count,0);
            break;
        }
		case 245:
        {
            PutItem(jssystem,self,user,"i180052",count,0);
            break;
        }
		case 246:
        {
            PutItem(jssystem,self,user,"i180053",count,0);
            break;
        }
		case 247:
        {
            PutItem(jssystem,self,user,"i180054",count,0);
            break;
        }
		case 248:
        {
            PutItem(jssystem,self,user,"i180055",count,0);
            break;
        }
		case 249:
        {
            PutItem(jssystem,self,user,"i180056",count,0);
            break;
        }	
		case 250:
        {
            PutItem(jssystem,self,user,"i180057",count,0);
            break;
        }
		case 251:
        {
            PutItem(jssystem,self,user,"i180058",count,0);
            break;
        }
		case 252:
        {
            PutItem(jssystem,self,user,"i180059",count,0);
            break;
        }
		case 253:
        {
            PutItem(jssystem,self,user,"i180060",count,0);
            break;
        }	
		case 254:
        {
            PutItem(jssystem,self,user,"i180061",count,0);
            break;
        }
		case 255:
        {
            PutItem(jssystem,self,user,"i180062",count,0);
            break;
        }
		case 256:
        {
            PutItem(jssystem,self,user,"i110701",count,0);
            break;
        }
		case 257:
        {
            PutItem(jssystem,self,user,"i110702",count,0);
            break;
        }
		case 258:
        {
            PutItem(jssystem,self,user,"i110703",count,0);
            break;
        }
		case 259:
        {
            PutItem(jssystem,self,user,"i110704",count,0);
            break;
        }
		case 260:
        {
            PutItem(jssystem,self,user,"i110705",count,0);
            break;
        }
		case 261:
        {
            PutItem(jssystem,self,user,"i110706",count,0);
            break;
        }
		case 262:
        {
            PutItem(jssystem,self,user,"i510002",count,0);
            break;
        }
		case 263:
        {
            PutItem(jssystem,self,user,"i190235",count,0);
            break;
        }
		case 264:
        {
            PutItem(jssystem,self,user,"i190236",count,0);
            break;
        }
		case 265:
        {
            PutItem(jssystem,self,user,"i190237",count,0);
            break;
        }
		case 266:
        {
            PutItem(jssystem,self,user,"i190238",count,0);
            break;
        }
		case 267:
        {
            PutItem(jssystem,self,user,"i190239",count,0);
            break;
        }
		case 268:
        {
            PutItem(jssystem,self,user,"i190240",count,0);
            break;
        }
		case 269:
        {
            PutItem(jssystem,self,user,"i190241",count,0);
            break;
        }
		case 270:
        {
            PutItem(jssystem,self,user,"i190242",count,0);
            break;
        }
		case 271:
        {
            PutItem(jssystem,self,user,"i283037",count,0);
            break;
        }
		case 272:
        {
            PutItem(jssystem,self,user,"i283039",count,0);
            break;
        }
		case 273:
        {
            PutItem(jssystem,self,user,"i283040",count,0);
            break;
        }
		case 274:
        {
            PutItem(jssystem,self,user,"i283041",count,0);
            break;
        }
		case 275:
        {
            PutItem(jssystem,self,user,"i283042",count,0);
            break;
        }
		case 276:
        {
            PutItem(jssystem,self,user,"i283043",count,0);
            break;
        }
		case 277:
        {
            PutItem(jssystem,self,user,"i283038",count,0);
            break;
        }
		case 278:
        {
            PutItem(jssystem,self,user,"i283044",count,0);
            break;
        }
		case 279:
        {
            PutItem(jssystem,self,user,"i283045",count,0);
            break;
        }
		case 280:
        {
            PutItem(jssystem,self,user,"i28303727",count,0);
            break;
        }
		case 281:
        {
            PutItem(jssystem,self,user,"i28303927",count,0);
            break;
        }
		case 282:
        {
            PutItem(jssystem,self,user,"i28304027",count,0);
            break;
        }
		case 283:
        {
            PutItem(jssystem,self,user,"i28304127",count,0);
            break;
        }
		case 284:
        {
            PutItem(jssystem,self,user,"i28304227",count,0);
            break;
        }
		case 285:
        {
            PutItem(jssystem,self,user,"i28304327",count,0);
            break;
        }
		case 286:
        {
            PutItem(jssystem,self,user,"i28303827",count,0);
            break;
        }

		case 287:
        {
            PutItem(jssystem,self,user,"i28304427",count,0);
            break;
        }

	    case 288:
        {
            PutItem(jssystem,self,user,"i28304527",count,0);
            break;
        }
        	case 289:
        {
            PutItem(jssystem,self,user,"i290024",count,0);
            break;
        }

		case 290:
        {
            PutItem(jssystem,self,user,"i2927240",count,0);
            break;
        }

		case 291:
        {
            PutItem(jssystem,self,user,"i290070",count,0);
            break;
        }

		case 292:
        {
            PutItem(jssystem,self,user,"i2927700",count,0);
            break;
        }

		case 293:
        {
            PutItem(jssystem,self,user,"i290050",count,0);
            break;
        }

		case 294:
        {
            PutItem(jssystem,self,user,"i2927500",count,0);
            break;
        }

		case 295:
        {
            PutItem(jssystem,self,user,"i290030",count,0);
            break;
        }

		case 296:
        {
            PutItem(jssystem,self,user,"i2927300",count,0);
            break;
        }



	
	



	        default:
        {
            return;
        }
    }


}