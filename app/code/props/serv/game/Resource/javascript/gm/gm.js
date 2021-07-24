importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.ContainerModule);

//GM脚本

//setobj + 对象ID
function sel(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() == 2)
    {
        //两个参数 应该是 选中对象
        var objid = varlist.ObjectValue(1);
        if (kernel.Exists(objid))
        {
            kernel.SetObject(gm, PropertyIndex.GmObject, objid);
            kernel.SaveGmLog(kernel.GetAccount(gm), "sel", kernel.QueryString(objid, PropertyIndex.Name));
        }

        {
            var str = varlist.StringValue(1);
            if (str.equals("scene"))
            {
                var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
                if (kernel.Type(obj) != TypeDefine.TYPE_PLAYER)
                {
                    return;
                }

                var scene = kernel.GetScene(obj);
                kernel.SetObject(obj, PropertyIndex.GmObject, scene);
                kernel.SysInfo(obj, 10, "sel scene success!", null);
                return;
            }
        }
    }
    else
    {
        if (varlist.Size() < 2)
        {
            kernel.SetObject(gm, PropertyIndex.GmObject, gm);
            kernel.SaveGmLog(kernel.GetAccount(gm), "sel", "self");
        }
        else if (varlist.Size() == 2)
        {

        }
        else if (varlist.Size() == 3)
        {
            var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
            var str = varlist.StringValue(1);
            if (str.equals("box"))
            {
                var boxname = varlist.StringValue(2);
                var boxindex = kernel.FindBoxIndex(obj, boxname);
                if (boxindex == -1)
                {
                    kernel.SysInfo(gm, 10, "not find this box:" + boxname, null);
                    return;
                }
                var box = kernel.GetBox(obj, boxindex);
                kernel.SetObject(gm, PropertyIndex.GmObject, box);
                kernel.SaveGmLog(kernel.GetAccount(gm), "sel box", boxname);
                kernel.SysInfo(gm, 10, "sel box success!", null);
                return;
            }
            if (str.equals("index"))
            {
                var box = kernel.QueryObject(gm, PropertyIndex.GmObject);
                if (kernel.Type(box) != TypeDefine.TYPE_BOX)
                {
                    kernel.SysInfo(gm, 10, "please sel a box!", null);
                    return;
                }
                var itemindex = parseInt(varlist.StringValue(2));
                var item = kernel.GetBoxItem(box, itemindex);
                if (!kernel.Exists(item))
                {
                    kernel.SysInfo(gm, 10, "not find this item", null);
                    return;
                }

                kernel.SaveGmLog(kernel.GetAccount(gm), "sel item", kernel.GetConfig(item));
                kernel.SetObject(gm, PropertyIndex.GmObject, item);
                kernel.SysInfo(gm, 10, "sel item success!", null);
                return;
            }
        }
    }

    kernel.SysInfo(gm, 10, "sel object success!", null);
}

//setvalue 属性名 属性值
function setvalue(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 3)
    {
        kernel.SysInfo(gm, 10, "cmd err! (setvalue propertyname parpertyvalue)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var proname = varlist.StringValue(1);
    var proindex = kernel.FindPropertyIndex(obj, proname);
    if (proindex == -1)
    {
        kernel.SysInfo(gm, 10, "not find this property!", null);
        return;
    }

    var value = varlist.StringValue(2);
    switch (kernel.GetPropertyType(obj, proindex))
    {
        case TypeDefine.PROPERTY_TYPE_INT:
        {
            kernel.SetInt(obj, proindex, parseInt(value));
            break;
        }
        case TypeDefine.PROPERTY_TYPE_FLOAT:
        {
            kernel.SetFloat(obj, proindex, parseFloat(value));
            break;
        }
        case TypeDefine.PROPERTY_TYPE_STRING:
        {
            kernel.SetString(obj, proindex, value);
            break;
        }
        default:
        {
            return;
        }
    }

    kernel.SaveGmLog(kernel.GetAccount(gm), "setvalue ", proname + ":" + value);
    kernel.SysInfo(gm, 10, "setvalue " + proname + " success!", null);
}

//查询属性
function query(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 2)
    {
        kernel.SysInfo(gm, 10, "cmd err! (query propertyname)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var proname = varlist.StringValue(1);
    var proindex = kernel.FindPropertyIndex(obj, proname);
    if (proindex == -1)
    {
        kernel.SysInfo(gm, 10, "not find this property!", null);
        return;
    }

    var value = varlist.StringValue(2);
    var v;
    switch (kernel.GetPropertyType(obj, proindex))
    {
        case TypeDefine.PROPERTY_TYPE_INT:
        {
            v = kernel.QueryInt(obj, proindex);
            break;
        }
        case TypeDefine.PROPERTY_TYPE_FLOAT:
        {
            v = kernel.QueryFloat(obj, proindex);
            break;
        }
        case TypeDefine.PROPERTY_TYPE_STRING:
        {
            v = kernel.QueryString(obj, proindex);
            break;
        }
        default:
        {
            return;
        }
    }

    kernel.SysInfo(gm, 10, proname + " : " + v, null);
}

function queryrecord(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 2)
    {
        kernel.SysInfo(gm, 10, "cmd err! (queryrecord recordname)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var recname = varlist.StringValue(1);
    var recindex = kernel.FindRecordIndex(obj, recname);
    if (recindex == -1)
    {
        kernel.SysInfo(gm, 10, "not find this record!", null);
        return;
    }

    var rows = kernel.GetRecordRows(obj, recindex);
    kernel.SysInfo(gm, 10, "=============================", null);
    kernel.SysInfo(gm, 10, "========" + recname + "========", null);
    for (var i = 0; i < rows; i++)
    {
        var str = "";
        var varlist = new VarList();
        kernel.QueryRecordRowsValue(obj, recindex, i, varlist);

        for (var j = 0; j < varlist.Size(); j++)
        {
            switch (varlist.Type(j))
            {
                case TypeDefine.PROPERTY_TYPE_INT:
                {
                    str += varlist.IntValue(j);
                    str += " | ";
                    break;
                }
                case TypeDefine.PROPERTY_TYPE_FLOAT:
                {
                    str += varlist.FloatValue(j);
                    str += " | ";
                    break;
                }
                case TypeDefine.PROPERTY_TYPE_STRING:
                {
                    str += varlist.StringValue(j);
                    str += " | ";
                    break;
                }
                case TypeDefine.PROPERTY_TYPE_OBJECT:
                {
                    var objid = varlist.ObjectValue(j);
                    str += objid.m_Tier;
                    str += ":";
                    str += objid.m_Index;
                    str += ":";
                    str += objid.m_Serial;
                    str += " | ";
                    break;
                }
                default:
                {
                    return;
                }
            }
        }
        kernel.SysInfo(gm, 10, str, null);
    }

    kernel.SysInfo(gm, 10, "==============", null);
}

function setrecordvalue(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 5)
    {
        kernel.SysInfo(gm, 10, "cmd err! (setrecordvalue [recordname][row][clo][value])", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var recname = varlist.StringValue(1);
    var recindex = kernel.FindRecordIndex(obj, recname);
    if (recindex == -1)
    {
        kernel.SysInfo(gm, 10, "not find this record!", null);
        return;
    }

    var rows = kernel.GetRecordRows(obj, recindex);
    var clos = kernel.GetRecordClos(obj, recindex);
    var row = parseInt(varlist.StringValue(2));
    var clo = parseInt(varlist.StringValue(3));

    if (row < 0 || row >= rows)
    {
        kernel.SysInfo(gm, 10, "setrecordvalue row error!", null);
        return;
    }

    if (clo < 0 || clo >= clos)
    {
        kernel.SysInfo(gm, 10, "setrecordvalue clo error!", null);
        return;
    }

    var res = false;
    var clotype = kernel.GetRecordClosType(obj, recindex, clo);
    if (clotype == TypeDefine.PROPERTY_TYPE_INT)
    {
        res = kernel.SetRecordInt(obj, recindex, row, clo, parseInt(varlist.StringValue(4)));
    }
    else if (clotype == TypeDefine.PROPERTY_TYPE_FLOAT)
    {
        res = kernel.SetRecordFloat(obj, recindex, row, clo, parseFloat(varlist.StringValue(4)));
    }
    else if (clotype == TypeDefine.PROPERTY_TYPE_STRING)
    {
        res = kernel.SetRecordString(obj, recindex, row, clo, varlist.StringValue(4));
    }
    else
    {
        return;
    }

    if (res)
    {
        kernel.SysInfo(gm, 10, "setrecordvalue success!!!", null);
    }
    else
    {
        kernel.SysInfo(gm, 10, "setrecordvalue fail!!!", null);
    }
}

function addrecordrows(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 3)
    {
        kernel.SysInfo(gm, 10, "cmd err! (addrecordrows recordname value1 value2 .....)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var recname = varlist.StringValue(1);
    var recindex = kernel.FindRecordIndex(obj, recname);
    if (recindex == -1)
    {
        kernel.SysInfo(gm, 10, "not find this record!", null);
        return;
    }

    var rows = new VarList();

    var clos = kernel.GetRecordClos(obj, recindex);

    for (var i = 0; i < clos; i++)
    {
        switch (kernel.GetRecordClosType(obj, recindex, i))
        {
            case TypeDefine.PROPERTY_TYPE_INT:
            {
                rows.AddInt(parseInt(varlist.StringValue(2 + i)));
                break;
            }
            case TypeDefine.PROPERTY_TYPE_FLOAT:
            {
                rows.AddFloat(parseFloat(varlist.StringValue(2 + i)));
                break;
            }
            case TypeDefine.PROPERTY_TYPE_STRING:
            {
                rows.AddString(varlist.StringValue(2 + i));
                break;
            }
            case TypeDefine.PROPERTY_TYPE_OBJECT:
            {
                rows.AddObject(FIXEDNESSID_INIT.FIXEDNESSID_INIT());
                break;
            }
        }
    }

    if (kernel.AddRecordRows(obj, recindex, -1, rows))
    {
        kernel.SaveGmLog(kernel.GetAccount(gm), "addrecordrows", recname + "," + varlist.toString());
        kernel.SysInfo(gm, 10, "addrecordrows success", null);
    }
    else
    {
        kernel.SysInfo(gm, 10, "addrecordrows err!!(clos err!)", null);
    }
}

function delrecordrows(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 3)
    {
        kernel.SysInfo(gm, 10, "cmd err! (delrecordrows recordname row)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var recname = varlist.StringValue(1);
    var recindex = kernel.FindRecordIndex(obj, recname);
    if (recindex == -1)
    {
        kernel.SysInfo(gm, 10, "not find this record!", null);
        return;
    }

    var row = parseInt(varlist.StringValue(2));
    if (row <= 0 || row >= kernel.GetRecordRows(obj, recindex))
    {
        kernel.SysInfo(gm, 10, "row num err!", null);
        return;
    }

    kernel.DelRecordRows(obj, recindex, row);
    kernel.SaveGmLog(kernel.GetAccount(gm), "delrecordrows", recname + "," + row);
    kernel.SysInfo(gm, 10, "delrecordrows " + recname + " success", null);
}

function clearrecord(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 2)
    {
        kernel.SysInfo(gm, 10, "cmd err! (clearrecord recordname)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var recname = varlist.StringValue(1);
    var recindex = kernel.FindRecordIndex(obj, recname);
    if (recindex == -1)
    {
        kernel.SysInfo(gm, 10, "not find this record!", null);
        return;
    }

    kernel.ClearRecord(obj, recindex);
    kernel.SaveGmLog(kernel.GetAccount(gm), "clearrecord", recname);
    kernel.SysInfo(gm, 10, "clearrecord " + recname + " success", null);
}

//给某对象添加一个技能
function addskill(jssystem, gm, varlist)
{
    if (varlist.Size() < 4)
    {
        return;
    }

    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        return;
    }

    var skillid = parseInt(varlist.StringValue(1));
    if (skillid == 0)
    {
        return;
    }

    var skillsystem = jssystem.GetSkillSysetm();
    skillsystem.AddSkill(obj, skillid);
    kernel.SaveGmLog(kernel.GetAccount(gm), "addskill", "skillid:" + skillid);
    kernel.SysInfo(gm, 10, "addskill success!", null);
}

//删除所有技能
function clearskill(jssystem, gm, varlist)
{
    if (varlist.Size() < 1)
    {
        return;
    }

    var kernel = jssystem.GetKernel();

    kernel.ClearRecord(gm, RecordIndex.AttackSkill);
    kernel.ClearRecord(gm, RecordIndex.PassiveSkill);
    kernel.ClearRecord(gm, RecordIndex.TriggerSkill);
    kernel.SysInfo(gm, 10, "clearskill success!", null);
}

//切换到某场景
function ss(jssystem, gm, varlist)
{
    if (varlist.Size() < 2)
    {
        return;
    }

    var scenesystem = jssystem.GetSceneSystem();

    var sceneid = parseInt(varlist.StringValue(1));
    scenesystem.SwitchSceneUnCheck(gm, sceneid);
}

//查看当前服务器时间
function servertime(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var str = LogicTool.GetNowStr(kernel);
    var secTime = kernel.GetGameWorldNow();
    kernel.SysInfo(gm, 10, "servertime: " + str + "  (" + secTime + ")", null);
}

function pdtime(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var name = kernel.QueryString(gm, PropertyIndex.Name);
    var v = new VarList();
    v.AddString(name);

    kernel.SendToDomain(0, 1, v);
}

function showtaskinfo(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var tasksystem = jssystem.GetTaskSystem();

    var taskID = parseInt(varlist.StringValue(1));
    tasksystem.ShowTaskConfigInfo(gm, taskID);
    kernel.SaveGmLog(kernel.GetAccount(gm), "showtaskinfo", "taskID: " + taskID);
}

function cleartask(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var tasksystem = jssystem.GetTaskSystem();

    tasksystem.ClearTask(gm);
    kernel.SaveGmLog(kernel.GetAccount(gm), "cleartask", "");
}

function addtask(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var tasksystem = jssystem.GetTaskSystem();

    var taskID = parseInt(varlist.StringValue(1));
    tasksystem.AddTask(gm, taskID);
    kernel.SaveGmLog(kernel.GetAccount(gm), "addtask", "taskID: " + taskID);
}

// 查询任务表格
function printtaskrec(jssystem, gm, varList)
{
    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);

    var taskSystem = jssystem.GetTaskSystem();
    taskSystem.PrintTaskRec(obj);
    kernel.SaveGmLog(kernel.GetAccount(gm), "printtaskrec", "");
}


//查看对象
function see(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var selObj = kernel.QueryObject(gm, PropertyIndex.GmObject);

    if (! kernel.Exists(selObj))
        return;

    kernel.SysInfo(gm, 10, "config:" + kernel.GetConfig(selObj), null);
}

//创建对象
function cobj(jssystem, gm, varlist)
{
    if (varlist.Size() < 2)
        return;

    var kernel = jssystem.GetKernel();
    var box = kernel.QueryObject(gm, PropertyIndex.GmObject);

    if (kernel.Type(box) != TypeDefine.TYPE_BOX)
    {

    }
    else
    {
        if (! kernel.Exists(box))
            return;

        var id = varlist.StringValue(1);
        var containerSystem = jssystem.GetContainerSystem();
        var newItem = kernel.Create(id);
        if (!kernel.Exists(newItem))
        {
            kernel.SysInfo(gm, 10, "cobj item err!", null);
            return;
        }

        if (varlist.Size() == 3)
        {
            var count = parseInt(varlist.StringValue(2));
            var maxFold = kernel.QueryInt(newItem, PropertyIndex.ItemMaxFoldNum);

            if (count > maxFold)
            {
                count = maxFold;
            }

            kernel.SetInt(newItem, PropertyIndex.ItemFoldNum, count);
        }

        if (containerSystem.AutoPlaceItemToBox(box, newItem) > -1)
        {
            kernel.SaveGmLog(kernel.GetAccount(gm), "cobj", id);
            kernel.SysInfo(gm, 10, "create obj success!", null);
        }
        else
        {
            kernel.DestroySelf(newItem);
            kernel.SysInfo(gm, 10, "create obj fail!", null);
        }
    }
}

//创建对象
function cobjAtPos(jssystem, gm, varlist)
{
    if (varlist.Size() < 3)
        return;

    var kernel = jssystem.GetKernel();
    var selObj = kernel.QueryObject(gm, PropertyIndex.GmObject);

    if (! kernel.Exists(selObj))
        return;

    var id = varlist.StringValue(1);
    var pos = parseInt(varlist.StringValue(2));

    var containerSystem = jssystem.GetContainerSystem();

    var item = kernel.Create(id);
    kernel.SetInt(item, PropertyIndex.ItemFoldNum, 1);

    if (containerSystem.PlaceItemToPos(selObj, item, pos, false))
    {
        kernel.SaveGmLog(kernel.GetAccount(gm), "cobjAtPos", id);
        kernel.SysInfo(gm, 10, "create obj success!", null);
    }
    else
    {
        kernel.DestroySelf(newItem);
        kernel.SysInfo(gm, 10, "create obj fail!", null);
    }
}


//查找对象子对象
function getboxchild(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var selObj = kernel.QueryObject(gm, PropertyIndex.GmObject);

    if (! kernel.Exists(selObj))
        return;

    var objList = kernel.GetBoxItemPos(selObj);
    var size = objList.Size();

    if (0 == size)
    {
        kernel.SysInfo(gm, 10, "no obj!", null);
        return;
    }

    kernel.SysInfo(gm, 10, "----Obj List:-------", null);
    for (var i = 0; i < size; i++)
    {
        var pos = objList.IntValue(i);
        var obj = kernel.GetBoxItem(selObj, pos);
        if (kernel.Exists(obj))
        {
            var name = kernel.QueryString(obj, PropertyIndex.ItemName);
            kernel.SysInfo(gm, 10, "pos" + pos + ": " + name, null);
        }
    }

    kernel.SysInfo(gm, 10, "----------------------", null);
}

//增加宠物经验
function addpetexp(jssystem, gm, varlist)
{
    if (varlist.Size() < 2)
        return;

    var addExp = parseInt(varlist.StringValue(1));
    //JsDebugTool.debug(addExp);
    var kernel = jssystem.GetKernel();
    var petSystem = jssystem.GetPetSystem();
    var selObj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (petSystem.AddPetExp(selObj, addExp))
    {
        kernel.SaveGmLog(kernel.GetAccount(gm), "addpetexp", addExp);
        kernel.SysInfo(gm, 10, "add pet exp:" + addExp, null);
    }
    else
    {
        kernel.SysInfo(gm, 10, "add pet fail", null);
    }
}

function delobj(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var selObj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (kernel.DestroySelf(selObj))
    {
        kernel.SaveGmLog(kernel.GetAccount(gm), "delobj", "");
        kernel.SysInfo(gm, 10, "destroy self success!", null);
    }
    else
    {
        kernel.SysInfo(gm, 10, "destroy self fail!", null);
    }
}

function GetAllMail(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        return;
    }

    kernel.SaveGmLog(kernel.GetAccount(gm), "GetAllMail", "");

    var msg = new VarList();
    msg.AddString(kernel.QueryString(obj, PropertyIndex.Name));
    msg.AddInt(kernel.QueryInt(obj, PropertyIndex.Nation));
    kernel.SendToDomain(DomainDefine.SERVER_MIAL, DomainDefine.MAIL_MSG_GETMAILRECORD, msg);

    kernel.SaveGmLog(kernel.GetAccount(gm), "GetAllMail", "");
}

function SendUserMail(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        return;
    }

    var receiveName = varlist.StringValue(1);
    var title = varlist.StringValue(2);
    var content = varlist.StringValue(3);

    var MailSystem = jssystem.GetMailSystem();

    var args = new VarList();
    args.AddString(receiveName);
    args.AddString(title);
    args.AddString(content);

    MailSystem.SendUserMail(obj, args);
    kernel.SaveGmLog(kernel.GetAccount(gm), "SendUserMail", "receiveName:" + receiveName);
}

function SendAreanMail(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        return;
    }

    var receiveName = varlist.StringValue(1);
    var title = varlist.StringValue(2);
    var content = varlist.StringValue(3);

    var MailSystem = jssystem.GetMailSystem();

    var args = new VarList();
    args.AddString(receiveName);
    args.AddString(title);
    args.AddString(content);

    MailSystem.SendAreanMail(obj, args);
    kernel.SaveGmLog(kernel.GetAccount(gm), "SendAreanMail", "receiveName:" + receiveName);
}

function RemoveMail(jssystem, gm, varlist)
{
    var pos = parseInt(varlist.StringValue(1));
    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        return;
    }

    var MailSystem = jssystem.GetMailSystem();
    MailSystem.RemoveMail(obj, pos);
    kernel.SaveGmLog(kernel.GetAccount(gm), "RemoveMail", "Mail Index :" + pos);
}


function ClearMail(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        return;
    }

    var MailSystem = jssystem.GetMailSystem();
    MailSystem.ClearMail(obj);
    kernel.SaveGmLog(kernel.GetAccount(gm), "ClearMail", "");
}

function SendSystemMailBroad(jssystem, gm, varlist)
{
    if (varlist.Size() < 4)
    {
        return;
    }
    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        return;
    }

    var MailSystem = jssystem.GetMailSystem();
    var args = new VarList();
    args.AddString(varlist.StringValue(1));
    args.AddString(varlist.StringValue(2));
    args.AddString(varlist.StringValue(3));
    MailSystem.SendBroadCastMail(obj, args);

    kernel.SaveGmLog(kernel.GetAccount(gm), "SendSystemBroadCast", "");
}

// 查询玩家上次在线时间 
function QueryLastLoginTime(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();

    var QueryLastLoginTimeMail = new VarList();
    QueryLastLoginTimeMail.AddInt(1);
    QueryLastLoginTimeMail.AddString(kernel.QueryString(gm, PropertyIndex.Name));
    QueryLastLoginTimeMail.AddString(varlist.StringValue(1));
    kernel.SendToDomain(DomainDefine.SERVER_MIAL, DomainDefine.MAIL_MSG_DEBUG, QueryLastLoginTimeMail);

    kernel.SaveGmLog(kernel.GetAccount(gm), "QueryLastLoginTime", "");
}

// 设置玩家上次在线是时间
function SetLastLoginTime(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var SetLastLoginTimeMail = new VarList();
    SetLastLoginTimeMail.AddInt(2);
    SetLastLoginTimeMail.AddString(kernel.QueryString(gm, PropertyIndex.Name));
    SetLastLoginTimeMail.AddString(varlist.StringValue(1));
    SetLastLoginTimeMail.AddInt(parseInt(varlist.StringValue(2)));

    kernel.SendToDomain(DomainDefine.SERVER_MIAL, DomainDefine.MAIL_MSG_DEBUG, SetLastLoginTimeMail);
    kernel.SaveGmLog(kernel.GetAccount(gm), "SetLastLoginTime", "SetPlayerName:" + varlist.StringValue(1) + ",Days:" + varlist.StringValue(2));
}

// 设置玩家邮件时间
function SetPlayerMailDate(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var SetTimeMail = new VarList();
    SetTimeMail.AddInt(3);
    SetTimeMail.AddString(kernel.QueryString(gm, PropertyIndex.Name));
    SetTimeMail.AddInt(kernel.QueryInt(gm, PropertyIndex.Nation));
    SetTimeMail.AddInt(parseInt(varlist.StringValue(1)));
    kernel.SendToDomain(DomainDefine.SERVER_MIAL, DomainDefine.MAIL_MSG_DEBUG, SetTimeMail);
    kernel.SaveGmLog(kernel.GetAccount(gm), "SetPlayerMailDate", "Days:" + varlist.StringValue(1));
}

// 15天自动删除邮件
function DestroyPlayerMail(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var DelVar = new VarList();
    DelVar.AddInt(4);
    DelVar.AddString(kernel.QueryString(gm, PropertyIndex.Name));
    DelVar.AddString(varlist.StringValue(1));

    kernel.SendToDomain(DomainDefine.SERVER_MIAL, DomainDefine.MAIL_MSG_DEBUG, DelVar);
    kernel.SaveGmLog(kernel.GetAccount(gm), "DestroyPlayerMail", varlist.StringValue(1));
}

// 5天删除邮件
function OverTimeDelMail(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var DelVar = new VarList();
    DelVar.AddInt(5);
    DelVar.AddString(kernel.QueryString(gm, PropertyIndex.Name));
    DelVar.AddString(kernel.QueryInt(gm, PropertyIndex.Nation));
    kernel.SendToDomain(DomainDefine.SERVER_MIAL, DomainDefine.MAIL_MSG_DEBUG, DelVar);
    kernel.SaveGmLog(kernel.GetAccount(gm), "OverTimeDelMail", "");
}

//重新加载指定脚本
function reloadJS(jssystem, gm, varlist)
{
    if (varlist.Size() < 2)
        return;

    var jsrcipt = varlist.StringValue(1);
    var kernel = jssystem.GetKernel();
    kernel.ReLoadScript(jsrcipt);
    kernel.SaveGmLog(kernel.GetAccount(gm), "reloadJS", "");
}

//查询Domain表数据
function querydomainrec(jssystem, gm, varlist)
{
    if (varlist.Size() < 4)
        return;

    var domain = varlist.StringValue(1);
    var field = varlist.StringValue(2);
    var rec = varlist.StringValue(3);
    var kernel = jssystem.GetKernel();

    var domainIndex = kernel.FindDomain(domain);
    if (domainIndex == -1)
    {
        kernel.SysInfo(gm, 10, "Domain:" + domain + " is not exist! ", null);
        return;
    }

    var fieldIndex = kernel.FindDomainField(domainIndex, field);
    if (fieldIndex == -1)
    {
        kernel.SysInfo(gm, 10, "Field:" + field + " is not exist! ", null);
        return;
    }

    var recIndex = kernel.FindDomainRecordIndex(domainIndex, fieldIndex, rec);
    if (recIndex == -1)
    {
        kernel.SysInfo(gm, 10, "Record:" + rec + " is not exist! ", null);
        return;
    }

    kernel.SysInfo(gm, 10, domain + "|" + field + "|" + rec + ": rows list-----------", null);
    var rows = kernel.GetDomainRecordRows(domainIndex, fieldIndex, recIndex);
    if (rows > 0)
    {
        var start = 0;
        if (varlist.Size() == 5)
        {
            var queryrow = parseInt(varlist.StringValue(4));
            if (queryrow >= rows)
            {
                kernel.SysInfo(gm, 10, "rows end list----------------------------------", null);
                return;
            }

            start = queryrow;
            rows = queryrow + 1;
        }

        for (var i = start; i < rows; i++)
        {
            var varList = new VarList;
            kernel.QueryDomainRecordRowsValue(domainIndex, fieldIndex, recIndex, i, varList);
            var rowinfo = "";
            rowinfo += i;
            rowinfo += " |   ";
            for (var count = 0; count < varList.Size(); count++)
            {
                switch (varList.Type(count))
                {
                    case TypeDefine.PROPERTY_TYPE_INT:
                    {
                        rowinfo += varList.IntValue(count);
                        rowinfo += " | ";
                        break;
                    }
                    case TypeDefine.PROPERTY_TYPE_FLOAT:
                    {
                        rowinfo += varList.FloatValue(count);
                        rowinfo += " | ";
                        break;
                    }
                    case TypeDefine.PROPERTY_TYPE_STRING:
                    {
                        rowinfo += varList.StringValue(count);
                        rowinfo += " | ";
                        break;
                    }
                    case TypeDefine.PROPERTY_TYPE_OBJECT:
                    {
                        var objid = varList.ObjectValue(count);
                        rowinfo += objid.m_Tier;
                        rowinfo += ":";
                        rowinfo += objid.m_Index;
                        rowinfo += ":";
                        rowinfo += objid.m_Serial;
                        rowinfo += " | ";
                        break;
                    }
                    default:
                    {
                        return;
                    }
                }
            }
            kernel.SysInfo(gm, 10, rowinfo, null);
        }


    }

    kernel.SysInfo(gm, 10, "rows end list----------------------------------", null);
}

function cleardomainrec(jssystem, gm, varlist)
{
    if (varlist.Size() != 4)
    {
        return;
    }

    var domain = varlist.StringValue(1);
    var field = varlist.StringValue(2);
    var rec = varlist.StringValue(3);
    var kernel = jssystem.GetKernel();

    var domainIndex = kernel.FindDomain(domain);
    if (domainIndex == -1)
    {
        kernel.SysInfo(gm, 10, "Domain:" + domain + " is not exist! ", null);
        return;
    }

    var vars = new VarList();
    vars.AddString(kernel.QueryString(gm, PropertyIndex.Name));
    vars.AddString(field);
    vars.AddString(rec);

    kernel.SendToDomain(domainIndex, DomainDefine.DOMAIN_CLEAR_REC, vars);
}

function querydomainUnVrec(jssystem, gm, varlist)
{
    if (varlist.Size() < 4)
        return;

    var domain = varlist.StringValue(1);
    var field = varlist.StringValue(2);
    var rec = varlist.StringValue(3);
    var kernel = jssystem.GetKernel();

    var domainIndex = kernel.FindDomain(domain);
    if (domainIndex == -1)
    {
        kernel.SysInfo(gm, 10, "Domain:" + domain + " is not exist! ", null);
        return;
    }

    var varlist = new VarList();
    varlist.AddString(kernel.QueryString(gm, PropertyIndex.Name));
    varlist.AddString(field);
    varlist.AddString(rec);

    kernel.SendToDomain(domainIndex, DomainDefine.DOMAIN_QUERY_REC, varlist);
}

function setdomainrecvalue(jssystem, gm, varlist)
{
    if (varlist.Size() < 7)
        return;

    var domain = varlist.StringValue(1);
    var field = varlist.StringValue(2);
    var rec = varlist.StringValue(3);
    var row = parseInt(varlist.StringValue(4));
    var clo = parseInt(varlist.StringValue(5));
    var value = varlist.StringValue(6);
    var kernel = jssystem.GetKernel();

    if (clo < 0 || row < 0)
    {
        kernel.SysInfo(gm, 10, "set err! ", null);
        return;
    }

    var domainIndex = kernel.FindDomain(domain);
    if (domainIndex == -1)
    {
        kernel.SysInfo(gm, 10, "Domain:" + domain + " is not exist! ", null);
        return;
    }

    var varlist = new VarList();
    varlist.AddString(field);
    varlist.AddString(rec);
    varlist.AddInt(row);
    varlist.AddInt(clo);
    varlist.AddString(value);

    kernel.SendToDomain(domainIndex, DomainDefine.DOMAIN_SET_RECVALUE, varlist);
    kernel.SysInfo(gm, 10, "set success!", null);
}

//添加经验
function addexp(jssystem, gm, varlist)
{
    if (varlist.Size() < 2)
        return;
    var kernel = jssystem.GetKernel();
    var exp = parseInt(varlist.StringValue(1));

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    var levSystem = jssystem.GetLevelSystem();
    levSystem.AddExp(obj, exp);
    kernel.SaveGmLog(kernel.GetAccount(gm), "addexp:", exp);
    kernel.SysInfo(gm, 10, "add exp:" + exp, null);
}

// 清空Box
function clearbox(jssystem, gm, varList)
{
    if (varList.Size() < 2)
        return;

    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);

    var containerSystem = jssystem.GetContainerSystem();
    var BoxName = varList.StringValue(1);
    var Box = containerSystem.GetBox(obj, BoxName);

    var cap = kernel.GetBoxCapacity(Box);
    for (var i = 0; i < cap; i++)
    {
        var curItem = kernel.GetBoxItem(Box, i);
        if (kernel.Exists(curItem))
        {
            var itemConfig = kernel.GetConfig(curItem);
            kernel.SaveGmLog(kernel.GetAccount(gm), "clearbox", "BoxName:" + BoxName + ",ItemConfig:" + itemConfig);
            kernel.DestroySelf(curItem);
        }
    }
}

//增加宠物经验
function addhomeexp(jssystem, gm, varlist)
{
    if (varlist.Size() < 2)
        return;

    var addExp = parseInt(varlist.StringValue(1));
    var kernel = jssystem.GetKernel();
    var homeSystem = jssystem.GetHomeSystem();
    var selObj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (homeSystem.AddHomeExp(selObj, addExp))
    {
        kernel.SysInfo(gm, 10, "add home exp:" + addExp, null);
    }
    else
    {
        kernel.SysInfo(gm, 10, "add home fail", null);
    }

    kernel.SaveGmLog(kernel.GetAccount(gm), "addhomeexp", "exp:" + addExp);
}

function AddBuff(jssystem, gm, varlist)
{
    if (varlist.Size() < 2)
        return;

    var buffId = parseInt(varlist.StringValue(1));
    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);

    var buffSystem = jssystem.GetBuffSystem();
    buffSystem.AddBuff(obj, buffId);
    kernel.SaveGmLog(kernel.GetAccount(gm), "AddBuff", "buffId:" + buffId);
}

function setdomainprop(jssystem, gm, varlist)
{
    if (varlist.Size() < 4)
        return;

    var domain = varlist.StringValue(1);
    var field = varlist.StringValue(2);
    var prop = varlist.StringValue(3);
    var value = varlist.StringValue(4);
    var kernel = jssystem.GetKernel();

    var domainIndex = kernel.FindDomain(domain);
    if (domainIndex == -1)
    {
        kernel.SysInfo(gm, 10, "Domain:" + domain + " is not exist! ", null);
        return;
    }

    var varTemp = new VarList();
    varTemp.AddString(field);
    varTemp.AddString(prop);
    varTemp.AddString(value);

    kernel.SendToDomain(domainIndex, DomainDefine.DOMAIN_SET_PROP, varTemp);

    kernel.SaveGmLog(kernel.GetAccount(gm), "setdomainprop", domain + "|" + field + "|" + prop + ": " + value);

    kernel.SysInfo(gm, 10, "setdomainprop " + domain + "|" + field + "|" + prop + "|" + value, null);
}

function querydomainprop(jssystem, gm, varlist)
{
    if (varlist.Size() < 3)
        return;

    var domain = varlist.StringValue(1);
    var field = varlist.StringValue(2);
    var prop = varlist.StringValue(3);

    var kernel = jssystem.GetKernel();

    var domainIndex = kernel.FindDomain(domain);
    if (domainIndex == -1)
    {
        kernel.SysInfo(gm, 10, "Domain:" + domain + " is not exist! ", null);
        return;
    }

    var fieldIndex = kernel.FindDomainField(domainIndex, field);
    if (fieldIndex == -1)
    {
        kernel.SysInfo(gm, 10, "Field:" + field + " is not exist! ", null);
        return;
    }

    var propIndex = kernel.FindDomainPropertyIndex(domainIndex, fieldIndex, prop);
    if (propIndex == -1)
    {
        kernel.SysInfo(gm, 10, "Prop:" + prop + " is not exist! ", null);
        return;
    }

    var value = kernel.QueryDomainInt(domainIndex, fieldIndex, propIndex);


    kernel.SysInfo(gm, 10, domain + "|" + field + "|" + prop + ": " + value, null);

    kernel.SaveGmLog(kernel.GetAccount(gm), "querydomainprop", domain + "|" + field + "|" + prop + ": " + value);
}

function addcompeteplayer(jssystem, gm, varlist)
{
    if (varlist.Size() < 3)
        return;

    var prename = varlist.StringValue(1);
    var rank = parseInt(varlist.StringValue(2));
    var nation = parseInt(varlist.StringValue(3));
    var count = parseInt(varlist.StringValue(4));

    //var kernel = jssystem.GetKernel();
    var competesystem = jssystem.GetCompeteSystem();

    for (var i = 0; i < count; i++)
    {
        competesystem.AddCompetePlayer(gm, prename + i, rank, nation);
    }

    var kernel = jssystem.GetKernel();
    kernel.SaveGmLog(kernel.GetAccount(gm), "addcompeteplayer", "name:" + prename + ",rank:" + rank + ",nation:" + nation);
}

function addworldcupplayer(jssystem, gm, varlist)
{
    if (varlist.Size() < 2)
        return;

    var count = parseInt(varlist.StringValue(1));
    var kernel = jssystem.GetKernel();
    var worldcupsystem = jssystem.GetWorldCupSystem();

    var name = kernel.QueryString(gm, PropertyIndex.Name);

    for (var i = 0; i < count; i++)
    {
        worldcupsystem.AddPlayerToDomain(gm, name + i);
    }

    kernel.SysInfo(gm, 10, "add success!", null);
}

function TestFun(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var selObj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    jssystem.TestFun(selObj);
    kernel.SaveGmLog(kernel.GetAccount(gm), "TestFun", "");

}

function shutfreshguide(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var selObj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    kernel.SetInt(selObj, PropertyIndex.IsCompleteRookieTask, CommonDefine.COMMAND_TASK_MAINSTATE);
    kernel.SaveGmLog(kernel.GetAccount(gm), "shutfreshguide", "");
}

function startNM(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 2)
        return;

    var type = parseInt(varlist.StringValue(1));
    var nmsystem = jssystem.GetNationMatchSystem();

    if (nmsystem.StartNationMatch(type))
    {
        kernel.SysInfo(gm, 10, "set success!", null);
    }
    else
    {
        kernel.SysInfo(gm, 10, "set fail!", null);
    }

    kernel.SaveGmLog(kernel.GetAccount(gm), "startNM ", "type:" + type);
}

function systemmsg(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 2)
        return;

    var value = varlist.StringValue(1);

    kernel.SysInfo(gm, 10, "systemmsg success!", null);
    kernel.SysInfoByWorld(SysInfoType.SYSINFO_PLATFORM, value, null);

    kernel.SaveGmLog(kernel.GetAccount(gm), "systemmsg ", "value:" + value);
}

function setworldexpmul(jssystem, gm, varlist)
{
    if (varlist.Size() < 2)
        return;

    var mul = varlist.StringValue(1);

    var kernel = jssystem.GetKernel();

    var vlist = new VarList();
    vlist.AddString("worldconfig");
    vlist.AddString("WorldExpMul");
    vlist.AddString(mul);


    if (kernel.SendToDomain(DomainDefine.SERVER_MIXINFO, DomainDefine.DOMAIN_SET_PROP, vlist))
    {
        kernel.SysInfo(gm, 10, "set world exp mul:" + mul + "% success!", null);
    }
    else
    {
        kernel.SysInfo(gm, 10, "set world exp fail!!!", null);
    }
}

// 创建一个带鉴定属性的装备，参数 ： String equipConfig ,int PropCount;
function createIdentifyPropEquip(jssystem, gm, varlist)
{
    if (varlist.Size() < 3)
        return;

    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var equipConfig = varlist.StringValue(1);
    var idnentifyPropCount = parseInt(varlist.StringValue(2));

    if (idnentifyPropCount < 0 || idnentifyPropCount > 4)
    {
        return;
    }

    var equip = kernel.Create(equipConfig);
    kernel.SetInt(equip, PropertyIndex.ItemFoldNum, 1);

    var PackSystem = jssystem.GetPackSystem();
    var IdentifySystem = jssystem.GetIdentifySystem();

    var IdentifyVar = new VarList();
    IdentifyVar.AddInt(LogicTool.ToInt(idnentifyPropCount));
    IdentifySystem.SetEquipIdentifyPropCount(equip, IdentifyVar);
    IdentifySystem.FlushEquipIdentifyProp(equip);
    PackSystem.AutoPlaceItemToBox(obj, equip);

    kernel.SaveItemLog(equip, LogDefine.LOG_TYPE_CREATEIDENTIFYEQUIP, kernel.QueryString(obj, PropertyIndex.Name), "createIdentifyPropEquip", "");
    kernel.SaveGmLog(kernel.GetAccount(gm), "createIdentifyPropEquip  ", "itemConfig:" + equipConfig + " ;IdentifyProp:" + idnentifyPropCount);
}

// 拉摇杆 参数 ： String MonsterCfg1 ,String MonsterCfg2,String MonsterCfg3;
function PullRocker(jssystem, gm, varlist)
{
    if (varlist.Size() < 4)
        return;

    var kernel = jssystem.GetKernel();

    var PubMonsterFightSystem = jssystem.GetPubMonsterFightSystem();
    var RewardID = PubMonsterFightSystem.PullRocker(gm, varlist.StringValue(1), varlist.StringValue(2), varlist.StringValue(3));
    if (RewardID > 0)
    {
        kernel.SysInfo(gm, 10, "Monster1:" + varlist.StringValue(1) + " | Monster2:" + varlist.StringValue(2) + " | Monster3:" + varlist.StringValue(3) + " |=>" + "RewardID:" + RewardID, null);
    }
    else
    {
        kernel.SysInfo(gm, 10, "No Any RewardID", null);
    }

    kernel.SaveGmLog(kernel.GetAccount(gm), "PullRocker  ", "MonsterCfg1:" + varlist.StringValue(1) + "MonsterCfg2:" + varlist.StringValue(2) + "MonsterCfg3:" + varlist.StringValue(3) + "RewardID:" + RewardID);
}

// 从某盒子移动物品到某盒子     MoveItemBox SrcBoxName SrcItemPos DestBoxName DestItemPos
function MoveItemBox(jssystem, gm, varlist)
{
    if (varlist.Size() < 5)
    {
        return;
    }

    var containerSystem = jssystem.GetContainerSystem();
    var kernel = jssystem.GetKernel();
    var SrcBoxName = varlist.StringValue(1);
    var SrcItemPos = parseInt(varlist.StringValue(2));
    var DestBoxName = varlist.StringValue(3);
    var DestItemPos = parseInt(varlist.StringValue(4));

    var SrcBox = containerSystem.GetBox(gm, SrcBoxName);
    var SrcItem = kernel.GetBoxItem(SrcBox, SrcItemPos);

    var DestBox = containerSystem.GetBox(gm, DestBoxName);

    containerSystem.PlaceItemToPos(DestBox, SrcItem, DestItemPos, false);

    kernel.SaveGmLog(kernel.GetAccount(gm), "MoveItemBox  ", "SrcBoxName:" + varlist.StringValue(1) + ",SrcItemPos:" + varlist.StringValue(2) + ",DestBoxName:" + varlist.StringValue(3) + ",MoveDestPos:" + varlist.StringValue(3));
}

//function TestReturnValue(jssystem, gm, varlist)
//{
//    varlist.AddString("sdfasfdas");
//    varlist.AddInt(1);
//}

function clearworldexpmul(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() != 2)
    {
        kernel.SysInfo(gm, 10, "clearworldexpmul type[1,2,3]", null);
        return;
    }

    var type = parseInt(varlist.StringValue(1));
    if (type != 1 && type != 2 && type != 3)
    {
        kernel.SysInfo(gm, 10, "clearworldexpmul type[1,2,3]", null);
        return;
    }

    var vars = new VarList();
    vars.AddString(varlist.StringValue(0));
    vars.AddString("mixinfo");
    vars.AddString("worldconfig");
    vars.AddString("AddEpType" + type);
    cleardomainrec(jssystem, gm, vars);
}

function addworldexpmul(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var addtype = parseInt(varlist.StringValue(1));
    if (addtype != 1 && addtype != 2 && addtype != 3)
    {
        kernel.SysInfo(gm, 10, "addworldexpmul type[1,2,3]", null);
        return;
    }

    if (addtype == 1)
    {
        if (varlist.Size() != 5)
        {
            kernel.SysInfo(gm, 10, "addworldexpmul 1 expmul begTime endTime", null);
            return;
        }
    }
    else if (addtype == 2)
    {
        if (varlist.Size() != 7)
        {
            kernel.SysInfo(gm, 10, "addworldexpmul 2 expmul begDate endDate begTime endTime", null);
            return;
        }
    }
    else if (addtype == 3)
    {
        if (varlist.Size() != 6)
        {
            kernel.SysInfo(gm, 10, "addworldexpmul 3 expmul datecnt begtime endtime	", null);
            return;
        }
    }

    varlist.PopFirst();

    varlist.AddString(0, kernel.QueryString(gm, PropertyIndex.Name));

    kernel.SendToDomain(DomainDefine.SERVER_MIXINFO, DomainDefine.GAMEWORLDCFG_MSG_ADDEXPMUL, varlist);
}

function queryworldexpmul(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();

    var vars1 = new VarList();
    vars1.AddString(varlist.StringValue(0));
    vars1.AddString("mixinfo");
    vars1.AddString("worldconfig");
    vars1.AddString("AddEpType1");
    querydomainrec(jssystem, gm, vars1);

    var vars2 = new VarList();
    vars2.AddString(varlist.StringValue(0));
    vars2.AddString("mixinfo");
    vars2.AddString("worldconfig");
    vars2.AddString("AddEpType2");
    querydomainrec(jssystem, gm, vars2);

    var vars3 = new VarList();
    vars3.AddString(varlist.StringValue(0));
    vars3.AddString("mixinfo");
    vars3.AddString("worldconfig");
    vars3.AddString("AddEpType3");
    querydomainrec(jssystem, gm, vars3);

    var expmul = kernel.QueryDomainInt(DomainDefine.SERVER_MIXINFO, DomainDefine.MINXINFO_FIELD_GAMEWORLDCFG, DomainRecordDefine.WORLD_EXPMUL);
    kernel.SysInfo(gm, 10, "EXPMUL:" + expmul, null);
}

function refreshplayerbox(jssystem, gm, varlist)
{
    if (varlist.Size() < 2)
        return;

    var kernel = jssystem.GetKernel();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var BoxName = varlist.StringValue(1);
    var containerSystem = jssystem.GetContainerSystem();
    if (containerSystem.RefreshBoxItemPosRecord(obj, BoxName) == 1)
    {
        var objName = kernel.QueryString(obj, PropertyIndex.Name);
        var box = containerSystem.GetBox(obj, BoxName);
        var MaxRow = kernel.QueryInt(box, PropertyIndex.BoxRowNum);
        var MaxCol = kernel.QueryInt(box, PropertyIndex.BoxColNum);

        kernel.SysInfo(gm, 10, objName + ": refresh " + BoxName + " Success!", null);
        for (var i = 0; i < MaxRow; ++i)
        {
            var tempStr = "";
            for (var j = 0; j < MaxCol; ++j)
            {
                var type = kernel.QueryRecordInt(box, RecordIndex.ItemPosRecord, i, j);
                tempStr += "   " + type;
            }
            kernel.SysInfo(gm, 10, tempStr, null);

        }
        kernel.SysInfo(gm, 10, "               ", null);
    }

    kernel.SaveGmLog(kernel.GetAccount(gm), "refreshplayerbox", "BoxName:" + BoxName);
}

function clearpack(jssystem, gm, varlist)
{
    if (varlist.Size() < 1)
        return;

    var kernel = jssystem.GetKernel();
    var box = kernel.QueryObject(gm, PropertyIndex.GmObject);

    if (kernel.Type(box) != TypeDefine.TYPE_BOX)
    {
        return;
    }

    if (! kernel.Exists(box))
        return;

    if (!kernel.IsClass(box, ClassIndex.CLASS_PACKBOX))
    {
        return;
    }

    var itemvars = kernel.GetBoxItemPos(box);
    if (itemvars.Size() <= 0)
        return;

    for (var i = 0; i < itemvars.Size(); i++)
    {
        var item = kernel.GetBoxItem(box, itemvars.IntValue(i));
        if (kernel.Exists(item))
        {
            kernel.DestroySelf(item);
        }
    }

    kernel.SysInfo(gm, 10, "clearpack success!!", null);

    kernel.SaveGmLog(kernel.GetAccount(gm), "clearpack", "");
}

function removeItem(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var PackSystem = jssystem.GetPackSystem();
    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    PackSystem.RemoveItemCount(obj, varlist.StringValue(1), parseInt(varlist.StringValue(2)));
    kernel.SysInfo(gm, SysInfoType.SYSINFO_CHAT, "删除物品成功", ConfigList);
}


function throwdice(jssystem, gm, varlist)
{
    if (varlist.Size() < 7)
        return;

    var kernel = jssystem.GetKernel();

    if (! kernel.Exists(gm))
        return;

    var dice1 = parseInt(varlist.StringValue(1));
    var dice2 = parseInt(varlist.StringValue(2));
    var dice3 = parseInt(varlist.StringValue(3));
    var dice4 = parseInt(varlist.StringValue(4));
    var dice5 = parseInt(varlist.StringValue(5));
    var dice6 = parseInt(varlist.StringValue(6));

    var msg = new VarList();
    var ThrowDices = "";
    var TotalDiceCnt = 0;

    ThrowDices = dice1 + "、" + dice2 + "、" + dice3 + "、" + dice4 + "、" + dice5 + "、" + dice6;
    TotalDiceCnt = dice1 + dice2 + dice3 + dice4 + dice5 + dice6;
    msg.AddString(ThrowDices);
    msg.AddInt(TotalDiceCnt);
    kernel.SysInfo(gm, SysInfoType.SYSINFO_CHAT, "SelfUseDiceItemResult", msg);

    kernel.ShowMsgBox(gm, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "SelfUseDiceItemResult", msg, null);

    var SelfName = kernel.QueryString(gm, PropertyIndex.Name);
    var rows = kernel.GetRecordRows(gm, RecordIndex.TeamRec);
    if (rows > 0)
    {
        var otherMsg = new VarList();
        otherMsg.AddString(SelfName);
        otherMsg.AddString(ThrowDices);
        otherMsg.AddInt(TotalDiceCnt);

        for (var j = 0; j < rows; ++j)
        {
            var MemberName = kernel.QueryRecordString(gm, RecordIndex.TeamRec, j, 0);
            if (!MemberName.equals(SelfName))
            {
                kernel.SysInfoByName(MemberName, SysInfoType.SYSINFO_TEAM, "OtherUseDiceItemResult", otherMsg);
            }
        }
    }

    kernel.SaveGmLog(kernel.GetAccount(gm), "throwdice", "TotalDiceCnt: " + TotalDiceCnt);

    if (TotalDiceCnt >= 36)
    {
        var EffortMsg = new VarList();
        EffortMsg.AddInt(CommonDefine.EffortSubType_UesItem);
        EffortMsg.AddInt(2);
        EffortMsg.AddInt(TotalDiceCnt);
        kernel.Command(gm, CommandDefine.COMMAND_EFFORT_REFRESH, EffortMsg);
    }
}

function IncComptetLastWin(jssystem, gm, varlist)
{
    if (varlist.Size() < 1)
        return;

    var kernel = jssystem.GetKernel();

    if (!kernel.Exists(gm))
        return;

    var atkname = (varlist.StringValue(1));

    var msg = new VarList();
    msg.AddString(kernel.QueryString(gm, PropertyIndex.Name));
    msg.AddString(atkname);
    msg.AddInt(1);
    msg.AddString("4555");
    msg.AddInt(kernel.QueryInt(gm, PropertyIndex.CompeteTime));
    msg.AddInt(1);
    kernel.SendToDomain(DomainDefine.SERVER_COMPETE, DomainDefine.COMPETE_MSG_FIGHTRESULT, msg);
}

//增加家园的属性值
function addHomeProp(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 3)
    {
        kernel.SysInfo(gm, 10, "cmd err! (addHomeProp propertyName parpertyValue)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var propName = varlist.StringValue(1);
    var propValue = varlist.StringValue(2);
    var roleName = kernel.QueryString(obj, PropertyIndex.Name);
    var msg = new VarList();
    msg.AddString(roleName);
    msg.AddString(propName);
    msg.AddString(propValue);
    kernel.SendToDomain(DomainDefine.SERVER_HOME, DomainDefine.HOME_MSG_GM_SET_PROP, msg);

    kernel.SaveGmLog(kernel.GetAccount(gm), "addHomeProp ", propName + ":" + propValue);
    kernel.SysInfo(gm, 10, "addHomeProp " + propName + " success!", null);
}

//减少建设消耗时间
function decBuildTime(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 3)
    {
        kernel.SysInfo(gm, 10, "cmd err! (decBuildTime buildId minutes)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var buildID = varlist.StringValue(1);
    var decMinutes = varlist.StringValue(2);
    var roleName = kernel.QueryString(obj, PropertyIndex.Name);
    var msg = new VarList();
    msg.AddString(roleName);
    msg.AddString(buildID);
    msg.AddString(decMinutes);
    kernel.SendToDomain(DomainDefine.SERVER_HOME, DomainDefine.BUILD_MSG_GM_DEC_BUILD_TIME, msg);

    kernel.SaveGmLog(kernel.GetAccount(gm), "decBuildTime ", buildID + ":" + decMinutes);
    kernel.SysInfo(gm, 10, "decBuildTime " + buildID + " success!", null);
}

//减少孵化屋时间
function decIncubateTime(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 3)
    {
        kernel.SysInfo(gm, 10, "cmd err! (decIncubateTime roomId minutes)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var roomId = varlist.StringValue(1);
    var decMinutes = varlist.StringValue(2);
    var roleName = kernel.QueryString(obj, PropertyIndex.Name);
    var msg = new VarList();
    msg.AddString(roleName);
    msg.AddString(roomId);
    msg.AddString(decMinutes);
    kernel.SendToDomain(DomainDefine.SERVER_HOME, DomainDefine.EGG_MSG_GM_DEC_INCU_TIME, msg);

    kernel.SaveGmLog(kernel.GetAccount(gm), "decIncubateTime ", roomId + ":" + decMinutes);
    kernel.SysInfo(gm, 10, "decIncubateTime " + roomId + " success!", null);
}

//将指定玩家切到指定场景
function SwitchScene(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 3)
    {
        kernel.SysInfo(gm, 10, "cmd err! (SwitchScene roleName sceneID)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var roleName = varlist.StringValue(1);
    var sceneID = parseInt(varlist.StringValue(2));

    if (!kernel.FindPlayerGameWorld(roleName))
    {
        kernel.SysInfo(gm, 10, "player '" + roleName + "'  isn't online!", null);
        return;
    }

    var args = new VarList();
    args.AddInt(sceneID);
    kernel.CommandByName(roleName, CommandDefine.COMMAND_SWITCH_SCENE, args);
}

//解决家园引导任务卡号的bug
function UnlockHomeTask(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 2)
    {
        kernel.SysInfo(gm, 10, "cmd err! (UnlockHomeTask roleName)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var roleName = varlist.StringValue(1);

    kernel.CommandByName(roleName, CommandDefine.COMMAND_GM_UNLOCK_HOME_TASK, null);
}
//宝箱测试方法
function testOpenBox(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 3)
    {
        kernel.SysInfo(gm, 10, "cmd err! (decIncubateTime roomId minutes)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var config = varlist.StringValue(1);
    var num = parseInt(varlist.StringValue(2));

    var boxItem = kernel.Create(config);
    if (!kernel.Exists(boxItem))
    {
        kernel.SysInfo(gm, 10, "not create object!", null);
        return;
    }
    var dropid = kernel.QueryInt(boxItem, PropertyIndex.BoxDropID);

    if (dropid != 0)
    {
        var boxName = kernel.QueryString(boxItem, PropertyIndex.ItemName);
        kernel.SysInfo(gm, 10, "===title===", null);
        kernel.SysInfo(gm, 10, boxName, null);
        kernel.SysInfo(gm, 10, num + "", null);
        kernel.SysInfo(gm, 10, "===测试开始===", null);
        var dropsystem = jssystem.GetDropSystem();
        for (var j = 0; j < num; j++)
        {
            var dropitemlist = dropsystem.GetDropItems(obj, dropid);

            var getItem = "";
            for (var i = 0; i < dropitemlist.size(); i++)
            {
                if (i > 0)
                {
                    getItem += ",";
                }
                var dItem = dropitemlist.get(i);
                var itemName = kernel.QueryString(dItem, PropertyIndex.ItemName);
                getItem += itemName;
            }
            kernel.SysInfo(gm, 10, getItem, null);

            for (var i = 0; i < dropitemlist.size(); i++)
            {
                kernel.DestroySelf(dropitemlist.get(i));
            }
        }
        kernel.SysInfo(gm, 10, "===测试结束===", null);
    }
    kernel.DestroySelf(boxItem);
}

function setTailInfo(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 4)
    {
        kernel.SysInfo(gm, 10, "cmd err! (setTailHP groupID HP)", null);
        return;
    }

    var groupID = parseInt(varlist.StringValue(1));
    var param = varlist.StringValue(2);
    var val = parseInt(varlist.StringValue(3));

    var cVar = new VarList();
    cVar.AddInt(groupID);
    cVar.AddString(param);
    cVar.AddInt(val);
    kernel.SendToDomain(DomainDefine.SERVER_TOLLGATE, DomainDefine.TAILBEAST_MSG_GM_SET_HP, cVar);

    kernel.SysInfo(gm, 10, "setTailInfo " + groupID + " " + param + " " + val, null);
}

function addTailTop(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() < 7)
    {
        kernel.SysInfo(gm, 10, "cmd err! (addTailTop player level sex nation weekHonour allHonour)", null);
        return;
    }

    var player = varlist.StringValue(1);
    var level = parseInt(varlist.StringValue(2));
    var sex = parseInt(varlist.StringValue(3)); //0, 男; 1,女; 2,不限
    var nation = parseInt(varlist.StringValue(4));  //0-4
    var weekHonour = parseInt(varlist.StringValue(5));
    var allHonour = parseInt(varlist.StringValue(6));

    var cVar = new VarList();
    cVar.AddString(player);
    cVar.AddInt(level);
    cVar.AddInt(sex);
    cVar.AddInt(nation);
    cVar.AddInt(weekHonour);
    cVar.AddInt(allHonour);
    kernel.SendToDomain(DomainDefine.SERVER_TOLLGATE, DomainDefine.TAILBEAST_MSG_GM_ADD_TOP, cVar);

    kernel.SysInfo(gm, 10, "addTailTop Process!", null);
}

function setTailHero(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() != 1)
    {
        kernel.SysInfo(gm, 10, "cmd err! (addTailTop player level sex nation weekHonour allHonour)", null);
        return;
    }

    var obj = kernel.QueryObject(gm, PropertyIndex.GmObject);
    if (!kernel.Exists(obj))
    {
        kernel.SysInfo(gm, 10, "not find sel object!", null);
        return;
    }

    var nation = kernel.QueryInt(obj, PropertyIndex.Nation);
    var player = kernel.QueryString(obj, PropertyIndex.Name);
    var weekHonour = kernel.QueryInt(obj, PropertyIndex.TailWeekHonour);
    var clothing = kernel.QueryInt(obj, PropertyIndex.Clothing);
    var level = kernel.QueryInt(obj, PropertyIndex.Level);

    var rowdata = new VarList();
    rowdata.AddInt(nation);
    rowdata.AddString(player);
    rowdata.AddInt(weekHonour);
    rowdata.AddInt(clothing);
    rowdata.AddInt(level);
    rowdata.AddInt(1);
    rowdata.AddInt(0);

    kernel.SendToDomain(DomainDefine.SERVER_TOLLGATE, DomainDefine.TAILBEAST_MSG_GM_SET_HERO, rowdata);

    kernel.SysInfo(gm, 10, "setTailHero Process!", null);
}

function JustBeatIt(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    if (varlist.Size() != 1)
    {
        kernel.SysInfo(gm, 10, "cmd error. JustBeatIt", null);
        return;
    }

    kernel.SendToDomain(DomainDefine.SERVER_TOLLGATE, DomainDefine.TAILBEAST_MSG_GM_START_NOW, null);

    kernel.SysInfo(gm, 10, "It's time TailBeast Now!(^_^)", null);
}

//删除任务
function deltask(jssystem, gm, varlist)
{
    var kernel = jssystem.GetKernel();
    var size = varlist.Size();
    if (size < 3)
    {
        kernel.SysInfo(gm, 10, "cmd error. deltask palyer task1 task2 task3...", null);
        return;
    }

    var player = varlist.StringValue(1);

    varlist.PopFirst();
    varlist.PopFirst();
    varlist.AddInt(0, size - 2);

    kernel.CommandByName(player, CommandDefine.COMMAND_TASK_GM_DELETE, varlist);
}