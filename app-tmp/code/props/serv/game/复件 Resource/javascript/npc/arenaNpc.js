importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);

function OnSelect(jssystem, self, send, type)
{
    var kernel = jssystem.GetKernel();
    //var sceneid = kernel.QueryInt(self,PropertyIndex.SwitchSceneID);
    //var scenesystem = jssystem.GetSceneSystem();
    //scenesystem.SwitchScene(send,sceneid);

    //var rolesystem = jssystem.GetRoleBaseSystem();
    //var capitalsystem = jssystem.GetCapitalSystem();

    if (type == 1)
    {
        kernel.BeginMenu(self);
        var v = new VarList();
        kernel.AddTitle(self, "NpcMenuTitle_Build_Arena", null);
        kernel.AddMenu(self, "NpcMenu_Arena_Enter", 10, null);
        kernel.AddMenu(self, "NpcMenu_LeiTai_Enter", 11, null);
        //kernel.AddMenu(self, "Skill_Sysinfo_105", 20, null);
        kernel.AddMenu(self, "close", 2, null);
        kernel.EndMenu(self, send);
    }
    else if (type == 2)
    {
        kernel.CloseMenu(send);
    }
    else if (type == 10)
    {
        kernel.CloseMenu(send);
        //kernel.OpenUI(send, "ArenaFrame");
        var competesys = jssystem.GetCompeteSystem();
        competesys.OpenCompete(send);
    }
    else if (type == 11)
    {
        kernel.CloseMenu(send);
        kernel.OpenUI(send,"UI_LeiTai_Xml");
        
        //kernel.OpenUI(send, "ArenaFrame");
        var arenaSystem = jssystem.GetArenaSystem();
        arenaSystem.OpenArena(send);
    }

//    else if (type == 20)
//    {
//        kernel.BeginMenu(self);
//
//        if (kernel.QueryInt(send, PropertyIndex.Level) < 2)
//        {
//            var v = new VarList();
//            v.AddInt(2)
//            kernel.AddTitle(self, "Skill_Sysinfo_112", v);
//            kernel.AddMenu(self, "close", 2, null);
//            kernel.EndMenu(self, send);
//            return;
//        }
//
//        if (rolesystem.CanLearnSkill(send))
//        {
//            //可以学
//            var cnt = kernel.QueryInt(send, PropertyIndex.SkillUpCount);
//            var needCapital = LogicTool.ToInt(100 * Math.pow(cnt, 0.5));
//            var needType = CapitalDefine.CAPITALTYPE_0;
//
//            var v = new VarList();
//            v.AddInt(needCapital)
//            v.AddString(CapitalDefine.SYSINFO_TYPE + needType);
//
//            kernel.AddTitle(self, "Skill_Sysinfo_106", v);
//            kernel.AddMenu(self, "Common_OK", 21, null);
//        }
//        else
//        {
//            //已学光了
//            kernel.AddTitle(self, "Skill_Sysinfo_107", null);
//        }
//
//        kernel.AddMenu(self, "close", 2, null);
//        kernel.EndMenu(self, send);
//    }
//    else if (type == 21)
//    {
//        kernel.BeginMenu(self);
//
//        //资金检查
//        var cnt = kernel.QueryInt(send, PropertyIndex.SkillUpCount);
//        var needCapital = LogicTool.ToInt(100 * Math.pow(cnt, 0.5));
//        var needType = CapitalDefine.CAPITALTYPE_0;
//
//        var v = new VarList();
//        v.AddInt(needCapital)
//        v.AddString(CapitalDefine.SYSINFO_TYPE + needType);
//
//        var canDec = capitalsystem.CanDecCapital(send, needType, needCapital, CapitalDefine.CAPITAL_REASON_SKILL_LEARN);
//
//        if (canDec < needCapital)
//        {
//
//
//            kernel.AddTitle(self, "Skill_Sysinfo_109", v);
//            kernel.AddMenu(self, "close", 2, null);
//            kernel.EndMenu(self, send);
//            return;
//        }
//
//        capitalsystem.DecCapital(send, needType, needCapital, CapitalDefine.CAPITAL_REASON_SKILL_LEARN, "");
//
//        kernel.SysInfo(send, SysInfoType.SYSINFO_CHAT, "Skill_Sysinfo_110", v);
//
//        var addSkillId = rolesystem.LearnSkill(send);
//        var curlev = 0;
//
//        //确定学习技能
//        if (addSkillId > 0)
//        {
//            //学习成功
//            var row = kernel.FindRecordInt(send, RecordIndex.UpSkillRec, RecordClos.UPSKILLREC_SKILLSECONDID, addSkillId);
//            if (row != -1)
//            {
//                curlev = kernel.QueryRecordInt(send, RecordIndex.UpSkillRec, row, RecordClos.UPSKILLREC_UPLEVEL);
//
//                var varlist = new VarList();
//                varlist.AddString("Skill_" + addSkillId);
//
//                if (curlev > 1)
//                {
//                    //升级了
//                    kernel.AddTitle(self, "Skill_Sysinfo_103", varlist);
//                }
//                else
//                {
//                    //新学的
//                    kernel.AddTitle(self, "Skill_Sysinfo_102", varlist);
//                }
//            }
//
//            // 新手任务
//            if (kernel.QueryInt(send, PropertyIndex.IsCompleteRookieTask) == CommonDefine.COMMAND_TASK_ROOKIESTATE)
//            {
//                  var msg = new VarList();
//                  msg.AddInt(RookieTaskCommandType.RookieCommand_LearnSkill);
//                  kernel.Command(send, CommandDefine.COMMAND_ROOKIECOMMAND, msg);
//            }
//        }
//        else
//        {
//            //学习失败
//            kernel.AddTitle(self, "Skill_Sysinfo_108", null);
//        }
//
//        kernel.AddMenu(self, "Skill_Sysinfo_111", 20, null);
//        kernel.AddMenu(self, "close", 2, null);
//        kernel.EndMenu(self, send);
//
//        if (curlev > 0)
//        {
//            var sV = new VarList();
//            sV.AddInt(addSkillId);
//            sV.AddInt(curlev);
//            kernel.Custom(send, ServerCustomDefine.SERVER_CUSTOM_SKILL_LEARN, sV);
//            kernel.CloseMenu(send);
//        }
//    }

}
