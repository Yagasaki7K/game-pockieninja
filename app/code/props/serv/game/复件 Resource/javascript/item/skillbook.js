/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);


//人物技能书(提升技能面板的技能)
// self :道具
// user: 玩家
function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();
    if (! kernel.Exists(self))
        return;

    if (! kernel.Exists(user))
        return;

    var rolebasesystem = jssystem.GetRoleBaseSystem();
    if(!rolebasesystem.LearnPrimarySkill(user, true))
    {
        kernel.SysInfo(user, 1, "Skill_Sysinfo_107", null);
        return;
    }

    //删除物品
    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);    

    //刷新技能
    var skillsystem = jssystem.GetSkillSysetm();
    skillsystem.RefreshPlayerSkill(user);

    var refsystem = jssystem.GetRefreshSystem();
    refsystem.RefreshRoleProperty(user, RefreshReason.PLAYER_SKILL);

//    var addSkillId = kernel.QueryInt(self, PropertyIndex.BookAddSkillId);
//    if (addSkillId <= 0)
//        return;
//
//    var row = kernel.FindRecordInt(user, RecordIndex.UpSkillRec, RecordClos.UPSKILLREC_SKILLSECONDID, addSkillId);
//    if (row == -1)
//    {
//        //技能面板无技能不能使用次物品
//        kernel.SysInfo(user, 1, "SkillBook_Sysinfo_001", null);
//        return;
//    }
//
//    //查看是否满级
//    var rolebasesystem = jssystem.GetRoleBaseSystem();
//    var upmaxlev = rolebasesystem.GetSkillUpMaxLev(addSkillId);
//    if (upmaxlev < 0)
//        return;
//
//    var curlev = kernel.QueryRecordInt(user, RecordIndex.UpSkillRec, row, RecordClos.UPSKILLREC_UPLEVEL);
//    if (curlev >= upmaxlev)
//    {
//        //此技能已达最大可升等级的最大上限
//        kernel.SysInfo(user, 1, "SkillBook_Sysinfo_002", null);
//        return;
//    }
//
//    //查看等级限制
//    var needlev = ary[curlev + 1]["needlev"];
//    var uselev = kernel.QueryInt(user, PropertyIndex.Level);
//    if (uselev < needlev)
//    {
//        var varlist = new VarList();
//        varlist.AddInt(needlev);
//        kernel.SysInfo(user, 1, "SkillBook_Sysinfo_003", varlist);
//        return;
//    }
//
//    //提升等级
//    kernel.SetRecordInt(user, RecordIndex.UpSkillRec, row, RecordClos.UPSKILLREC_UPLEVEL, curlev + 1);
//
//    var sV = new VarList();
//    sV.AddInt(addSkillId);
//    sV.AddInt(curlev + 1);
//    kernel.Custom(user, ServerCustomDefine.SERVER_CUSTOM_SKILL_LEARN, sV);
//
//    //同步使用技能表
//    row = kernel.FindRecordInt(user, RecordIndex.UseSkillRec, RecordClos.USESKILL_CLO_SID, addSkillId);
//    if (row != -1)
//    {
//        //var lev = kernel.QueryRecordInt(user, RecordIndex.UseSkillRec, row, RecordClos.USESKILL_CLO_LEV);
//        kernel.SetRecordInt(user, RecordIndex.UseSkillRec, row, RecordClos.USESKILL_CLO_LEV, curlev + 1);
//    }
//
//    //删除物品
//    kernel.DestroySelf(self);
//    //记录日志
//    //
//
//    //刷新技能
//    var skillsystem = jssystem.GetSkillSysetm();
//    skillsystem.RefreshPlayerSkill(user);
//
//    var refsystem = jssystem.GetRefreshSystem();
//    refsystem.RefreshRoleProperty(user, RefreshReason.PLAYER_SKILL);
//
//    var varlist = new VarList();
//    varlist.AddString("Skill_" + addSkillId);
//    kernel.SysInfo(user, 1, "Skill_Sysinfo_103", varlist);
}

