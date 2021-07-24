
// 许愿壶脚本
importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(java.util);

function PutItem(jssystem,self,user,config,count)
{
    var dropsystem = jssystem.GetDropSystem();
    var shapelist = jssystem.GetIntAyyayList();
    var kernel = jssystem.GetKernel();

    if(kernel.QueryInt(self,PropertyIndex.ItemFoldNum) < count)
    {
        return;
    }    

    var placeItemInfo = new PlaceItemInfo(config,count);
    placeItemInfo.SetIntProp(PropertyIndex.ItemBindingStatus,kernel.QueryInt(self,PropertyIndex.ItemBindingStatus));
    var list = new ArrayList();
    //for (var i = 0; i < count; i++)
    {
        //jssystem.ArrayListAddInt(shapelist, ContainerDefine.ITEMSHAPESIX);
        list.add(placeItemInfo);
    }

    var packsystem = jssystem.GetPackSystem();
    if (!packsystem.CheckItemListPlacePack(user, list))
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_071", null);
        return;
    }

    //config
    var itemname = kernel.QueryConfigString(config,PropertyIndex.ItemName);
    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1 * count);

    packsystem.PlacePackItemList(user,list);

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
            PutItem(jssystem,self,user,"i290003",count);
            break;
        }
        case 2:
        {
            PutItem(jssystem,self,user,"i290009",count);
            break;
        }
        case 3:
        {
            PutItem(jssystem,self,user,"i290012",count);
            break;
        }
        case 4:
        {
            PutItem(jssystem,self,user,"i290014",count);
            break;
        }
        case 5:
        {
            PutItem(jssystem,self,user,"i290016",count);
            break;
        }
        case 6:
        {
            PutItem(jssystem,self,user,"i290017",count);
            break;
        }
        case 7:
        {
            PutItem(jssystem,self,user,"i290018",count);
            break;
        }
        case 8:
        {
            PutItem(jssystem,self,user,"i290019",count);
            break;
        }
        case 9:
        {
            PutItem(jssystem,self,user,"i290020",count);
            break;
        }
        case 10:
        {
            PutItem(jssystem,self,user,"i290006",count);
            break;
        }
        case 11:
        {
            PutItem(jssystem,self,user,"i290007",count);
            break;
        }
        case 12:
        {
            PutItem(jssystem,self,user,"i290010",count);
            break;
        }
        case 13:
        {
            PutItem(jssystem,self,user,"i290011",count);
            break;
        }
        case 14:
        {
            PutItem(jssystem,self,user,"i290013",count);
            break;
        }
        case 15:
        {
            PutItem(jssystem,self,user,"i290015",count);
            break;
        }
        case 16:
        {
            PutItem(jssystem,self,user,"i290021",count);
            break;
        }
        case 17:
        {
            PutItem(jssystem,self,user,"i290022",count);
            break;
        }
        case 18:
        {
            PutItem(jssystem,self,user,"i290023",count);
            break;
        }
        case 19:
        {
            PutItem(jssystem,self,user,"i290052",count);
            break;
        }
        case 20:
        {
            PutItem(jssystem,self,user,"i290054",count);
            break;
        }
        case 21:
        {
            PutItem(jssystem,self,user,"i290076",count);
            break;
        }
        case 22:
        {
            PutItem(jssystem,self,user,"i290001",count);
            break;
        }
        case 23:
        {
            PutItem(jssystem,self,user,"i290004",count);
            break;
        }
        case 24:
        {
            PutItem(jssystem,self,user,"i290005",count);
            break;
        }
        case 25:
        {
            PutItem(jssystem,self,user,"i290008",count);
            break;
        }
        case 26:
        {
            PutItem(jssystem,self,user,"i290045",count);
            break;
        }
        case 27:
        {
            PutItem(jssystem,self,user,"i290046",count);
            break;
        }
        case 28:
        {
            PutItem(jssystem,self,user,"i290047",count);
            break;
        }
        case 29:
        {
            PutItem(jssystem,self,user,"i290048",count);
            break;
        }
        case 30:
        {
            PutItem(jssystem,self,user,"i290049",count);
            break;
        }
        case 31:
        {
            PutItem(jssystem,self,user,"i290051",count);
            break;
        }
        case 32:
        {
            PutItem(jssystem,self,user,"i290055",count);
            break;
        }
        case 33:
        {
            PutItem(jssystem,self,user,"i290056",count);
            break;
        }
        case 34:
        {
            PutItem(jssystem,self,user,"i290057",count);
            break;
        }
        case 35:
        {
            PutItem(jssystem,self,user,"i290084",count);
            break;
        }
        case 36:
        {
            PutItem(jssystem,self,user,"i290026",count);
            break;
        }
        case 37:
        {
            PutItem(jssystem,self,user,"i290032",count);
            break;
        }
        case 38:
        {
            PutItem(jssystem,self,user,"i290033",count);
            break;
        }
        case 39:
        {
            PutItem(jssystem,self,user,"i290034",count);
            break;
        }
        case 40:
        {
            PutItem(jssystem,self,user,"i290036",count);
            break;
        }
        case 41:
        {
            PutItem(jssystem,self,user,"i290039",count);
            break;
        }
        case 42:
        {
            PutItem(jssystem,self,user,"i290061",count);
            break;
        }
        case 43:
        {
            PutItem(jssystem,self,user,"i290063",count);
            break;
        }
        case 44:
        {
            PutItem(jssystem,self,user,"i290065",count);
            break;
        }
        case 45:
        {
            PutItem(jssystem,self,user,"i290028",count);
            break;
        }
        case 46:
        {
            PutItem(jssystem,self,user,"i290060",count);
            break;
        }
        case 47:
        {
            PutItem(jssystem,self,user,"i290062",count);
            break;
        }
        case 48:
        {
            PutItem(jssystem,self,user,"i290064",count);
            break;
        }
        case 49:
        {
            PutItem(jssystem,self,user,"i290066",count);
            break;
        }
        case 50:
        {
            PutItem(jssystem,self,user,"i290069",count);
            break;
        }
        case 51:
        {
            PutItem(jssystem,self,user,"i290027",count);
            break;
        }
        case 52:
        {
            PutItem(jssystem,self,user,"i290029",count);
            break;
        }
        case 53:
        {
            PutItem(jssystem,self,user,"i290035",count);
            break;
        }
        case 54:
        {
            PutItem(jssystem,self,user,"i290037",count);
            break;
        }
        case 55:
        {
            PutItem(jssystem,self,user,"i290058",count);
            break;
        }
        case 56:
        {
            PutItem(jssystem,self,user,"i290072",count);
            break;
        }
        case 57:
        {
            PutItem(jssystem,self,user,"i290074",count);
            break;
        }
        case 58:
        {
            PutItem(jssystem,self,user,"i290085",count);
            break;
        }
        case 59:
        {
            PutItem(jssystem,self,user,"i290090",count);
            break;
        }
        case 60:
        {
            PutItem(jssystem,self,user,"i290087",count);
            break;
        }
        case 61:
        {
            PutItem(jssystem,self,user,"i290088",count);
            break;
        }
        case 62:
        {
            PutItem(jssystem,self,user,"i290086",count);
            break;
        }
        case 63:
        {
            PutItem(jssystem,self,user,"i290089",count);
            break;
        }
		case 64:
        {
            PutItem(jssystem,self,user,"i2927010",count);
            break;
        }
		case 65:
        {
            PutItem(jssystem,self,user,"i2927040",count);
            break;
        }
		case 66:
        {
            PutItem(jssystem,self,user,"i2927050",count);
            break;
        }
		case 67:
        {
            PutItem(jssystem,self,user,"i2927080",count);
            break;
        }
		case 68:
        {
            PutItem(jssystem,self,user,"i2927450",count);
            break;
        }
		case 69:
        {
            PutItem(jssystem,self,user,"i2927460",count);
            break;
        }
		case 70:
        {
            PutItem(jssystem,self,user,"i2927470",count);
            break;
        }
		case 71:
        {
            PutItem(jssystem,self,user,"i2927480",count);
            break;
        }
		case 72:
        {
            PutItem(jssystem,self,user,"i2927490",count);
            break;
        }
		case 73:
        {
            PutItem(jssystem,self,user,"i2927510",count);
            break;
        }
		case 74:
        {
            PutItem(jssystem,self,user,"i2927560",count);
            break;
        }
		case 75:
        {
            PutItem(jssystem,self,user,"i2927550",count);
            break;
        }
		case 76:
        {
            PutItem(jssystem,self,user,"i2927840",count);
            break;
        }
		case 77:
        {
            PutItem(jssystem,self,user,"i2927570",count);
            break;
        }
		case 78:
        {
            PutItem(jssystem,self,user,"i2927580",count);
            break;
        }
		case 79:
        {
            PutItem(jssystem,self,user,"i2927290",count);
            break;
        }
		 case 80:
        {
            PutItem(jssystem,self,user,"i2927270",count);
            break;
        }
		case 81:
        {
            PutItem(jssystem,self,user,"i2927370",count);
            break;
        }
		case 82:
        {
            PutItem(jssystem,self,user,"i2927350",count);
            break;
        }
		case 83:
        {
            PutItem(jssystem,self,user,"i2927720",count);
            break;
        }
		case 84:
        {
            PutItem(jssystem,self,user,"i2927740",count);
            break;
        }
		case 85:
        {
            PutItem(jssystem,self,user,"i2927850",count);
            break;
        }
		case 86:
        {
            PutItem(jssystem,self,user,"i2927900",count);
            break;
        }
		case 87:
        {
            PutItem(jssystem,self,user,"i291801",count);
            break;
        }
		case 88:
        {
            PutItem(jssystem,self,user,"i291804",count);
            break;
        }
		case 89:
        {
            PutItem(jssystem,self,user,"i291805",count);
            break;
        }
		case 90:
        {
            PutItem(jssystem,self,user,"i291808",count);
            break;
        }
		case 91:
        {
            PutItem(jssystem,self,user,"i291845",count);
            break;
        }
		case 92:
        {
            PutItem(jssystem,self,user,"i291846",count);
            break;
        }
	    case 93:
        {
            PutItem(jssystem,self,user,"i291847",count);
            break;
        }
		case 94:
        {
            PutItem(jssystem,self,user,"i291848",count);
            break;
        }
		case 95:
        {
            PutItem(jssystem,self,user,"i291849",count);
            break;
        }
		case 96:
        {
            PutItem(jssystem,self,user,"i291851",count);
            break;
        }
		case 97:
        {
            PutItem(jssystem,self,user,"i291856",count);
            break;
        }
		case 98:
        {
            PutItem(jssystem,self,user,"i291855",count);
            break;
        }
		case 99:
        {
            PutItem(jssystem,self,user,"i291884",count);
            break;
        }
		case 100:
        {
            PutItem(jssystem,self,user,"i291857",count);
            break;
        }
		case 101:
        {
            PutItem(jssystem,self,user,"i291858",count);
            break;
        }
		case 102:
        {
            PutItem(jssystem,self,user,"i291829",count);
            break;
        }
		case 103:
        {
            PutItem(jssystem,self,user,"i291827",count);
            break;
        }
		case 104:
        {
            PutItem(jssystem,self,user,"i291837",count);
            break;
        }
		case 105:
        {
            PutItem(jssystem,self,user,"i291835",count);
            break;
        }
		case 106:
        {
            PutItem(jssystem,self,user,"i291872",count);
            break;
        }
		case 107:
        {
            PutItem(jssystem,self,user,"i291874",count);
            break;
        }
		case 108:
        {
            PutItem(jssystem,self,user,"i291874",count);
            break;
        }
		case 109:
        {
            PutItem(jssystem,self,user,"i291890",count);
            break;
        }
		case 110:
        {
            PutItem(jssystem,self,user,"i28300218",count);
            break;
        }
		case 111:
        {
            PutItem(jssystem,self,user,"i28300318",count);
            break;
        }
		case 112:
        {
            PutItem(jssystem,self,user,"i28300618",count);
            break;
        }
		case 113:
        {
            PutItem(jssystem,self,user,"i28301618",count);
            break;
        }
		case 114:
        {
            PutItem(jssystem,self,user,"i28301818",count);
            break;
        }
		case 115:
        {
            PutItem(jssystem,self,user,"i28302518",count);
            break;
        }
		case 116:
        {
            PutItem(jssystem,self,user,"i28302618",count);
            break;
        }
		case 117:
        {
            PutItem(jssystem,self,user,"i28302718",count);
            break;
        }
		case 118:
        {
            PutItem(jssystem,self,user,"i28100818",count);
            break;
        }
		case 119:
        {
            PutItem(jssystem,self,user,"i28302818",count);
            break;
        }
		case 120:
        {
            PutItem(jssystem,self,user,"i28302918",count);
            break;
        }
		case 121:
        {
            PutItem(jssystem,self,user,"i28303018",count);
            break;
        }
		case 122:
        {
            PutItem(jssystem,self,user,"i28301518",count);
            break;
        }		
		case 123:
        {
            PutItem(jssystem,self,user,"i28301718",count);
            break;
        }
		case 124:
        {
            PutItem(jssystem,self,user,"i28301918",count);
            break;
        }
		case 125:
        {
            PutItem(jssystem,self,user,"i28303118",count);
            break;
        }
		case 126:
        {
            PutItem(jssystem,self,user,"i28300221",count);
            break;
        }		
		case 127:
        {
            PutItem(jssystem,self,user,"i28300321",count);
            break;
        }
		case 128:
        {
            PutItem(jssystem,self,user,"i28300621",count);
            break;
        }
		case 129:
        {
            PutItem(jssystem,self,user,"i28301621",count);
            break;
        }
		case 130:
        {
            PutItem(jssystem,self,user,"i28301821",count);
            break;
        }
		case 131:
        {
            PutItem(jssystem,self,user,"i28302521",count);
            break;
        }		
		case 132:
        {
            PutItem(jssystem,self,user,"i28302621",count);
            break;
        }
		case 133:
        {
            PutItem(jssystem,self,user,"i28302721",count);
            break;
        }
		case 134:
        {
            PutItem(jssystem,self,user,"i28100821",count);
            break;
        }
		case 135:
        {
            PutItem(jssystem,self,user,"i28302821",count);
            break;
        }
		case 136:
        {
            PutItem(jssystem,self,user,"i28302921",count);
            break;
        }
		case 137:
        {
            PutItem(jssystem,self,user,"i28303021",count);
            break;
        }
		case 138:
        {
            PutItem(jssystem,self,user,"i28301521",count);
            break;
        }
		case 139:
        {
            PutItem(jssystem,self,user,"i28301721",count);
            break;
        }
		case 140:
        {
            PutItem(jssystem,self,user,"i28301921",count);
            break;
        }
		case 141:
        {
            PutItem(jssystem,self,user,"i28303121",count);
            break;
        }
		case 142:
        {
            PutItem(jssystem,self,user,"i2940030",count);
            break;
        }
		case 143:
        {
            PutItem(jssystem,self,user,"i2940040",count);
            break;
        }
		case 144:
        {
            PutItem(jssystem,self,user,"i2940050",count);
            break;
        }
		case 145:
        {
            PutItem(jssystem,self,user,"i2940060",count);
            break;
        }
		case 146:
        {
            PutItem(jssystem,self,user,"i2940070",count);
            break;
        }
		case 147:
        {
            PutItem(jssystem,self,user,"i2940080",count);
            break;
        }
		case 148:
        {
            PutItem(jssystem,self,user,"i2940090",count);
            break;
        }
		case 149:
        {
            PutItem(jssystem,self,user,"i2940110",count);
            break;
        }
		case 150:
        {
            PutItem(jssystem,self,user,"i2940130",count);
            break;
        }
		case 151:
        {
            PutItem(jssystem,self,user,"i2940140",count);
            break;
        }
		case 152:
        {
            PutItem(jssystem,self,user,"i2945430",count);
            break;
        }
		case 153:
        {
            PutItem(jssystem,self,user,"i2945440",count);
            break;
        }
		case 154:
        {
            PutItem(jssystem,self,user,"i2945450",count);
            break;
        }
		case 155:
        {
            PutItem(jssystem,self,user,"i2945460",count);
            break;
        }
		case 156:
        {
            PutItem(jssystem,self,user,"i2945470",count);
            break;
        }
		case 157:
        {
            PutItem(jssystem,self,user,"i2945480",count);
            break;
        }
		case 158:
        {
            PutItem(jssystem,self,user,"i2945490",count);
            break;
        }
		case 159:
        {
            PutItem(jssystem,self,user,"i2945510",count);
            break;
        }
		case 160:
        {
            PutItem(jssystem,self,user,"i2945530",count);
            break;
        }
		case 161:
        {
            PutItem(jssystem,self,user,"i2945540",count);
            break;
        }
		case 162:
        {
            PutItem(jssystem,self,user,"i180030",count);
            break;
        }
		case 163:
        {
            PutItem(jssystem,self,user,"i180031",count);
            break;
        }
		case 164:
        {
            PutItem(jssystem,self,user,"i180032",count);
            break;
        }
		case 165:
        {
            PutItem(jssystem,self,user,"i180033",count);
            break;
        }
		case 166:
        {
            PutItem(jssystem,self,user,"i180034",count);
            break;
        }
	        default:
        {
            return;
        }
    }


}