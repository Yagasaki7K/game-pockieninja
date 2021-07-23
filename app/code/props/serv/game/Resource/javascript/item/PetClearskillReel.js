/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);


//使用卷轴生成后天技能，上限4个
// self:道具
// user:玩家
function OnUse(jssystem,self,user){
    var kernel = jssystem.GetKernel();
    if ( ! kernel.Exists(self) )
        return;

    var petBoxIndex = parseInt(kernel.FindBoxIndex(user, "PetBox"));
    if ( -1 == petBoxIndex )
        return;

    var petBox = kernel.GetBox(user, petBoxIndex);
    if ( ! kernel.Exists(petBox) )
        return;

    var petItem = kernel.GetBoxItem(petBox, 0);
    if( ! kernel.Exists(petItem) )
    {
        var infoArg = new VarList();
        //没有装备宠物，不能进行此操作
        kernel.SysInfo(user, 2, "PET_NotExistsPet", infoArg);
        return;
    }

    var list = new VarList();
    var recRows = kernel.GetRecordRows(petItem, RecordIndex.PetLearnSkillRec);
    for ( var i = 0; i < recRows; i++ )
    {
        var skillId = kernel.QueryRecordInt(petItem, RecordIndex.PetLearnSkillRec, i, 0);
        if ( skillId > 0 )
        {
            //该位置有后天技能
            list.AddInt(i);
        }
    }

    var varSize = list.Size();
    if ( 0 == varSize )
    {
        //没有后天技能
        kernel.SysInfo(user, 2, "PET_NoLearnSkill", null);
        return;
    }

    var clearIndex = list.IntValue( LogicTool.RandInt(0, list.Size()-1) );
    var addSkillId = kernel.QueryRecordInt(petItem, RecordIndex.PetLearnSkillRec, clearIndex, 0);
    kernel.SetRecordInt(petItem, RecordIndex.PetLearnSkillRec, clearIndex, 0, 0);
    var skillsystem = jssystem.GetSkillSysetm();
    //skillsystem.RemoveSkill(user, addSkillId);
    //遗忘后天技能
    kernel.SysInfo(user, 2, "PET_ClearLearnSkill", null);
    //销毁卷轴
    kernel.DestroySelf(self);
    //记录日志
    //

}