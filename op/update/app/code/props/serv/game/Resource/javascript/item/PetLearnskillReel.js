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
    if( !kernel.Exists(petItem) )
    {
        //使用卷轴时没有装备宠物
        kernel.SysInfo(user, 2, "PET_NotExistsPet", null);
        return;
    }

    var recRows = kernel.GetRecordRows(petItem, RecordIndex.PetLearnSkillRec);

    var addIndex = -1;
    for ( var i = 0; i < 4; i++ )
    {
        if( recRows < i || kernel.QueryRecordInt(petItem, RecordIndex.PetLearnSkillRec, i, 0) == 0 )
        {
            //该位置可以添加后天技能
            addIndex = i;
            break;
        }
    }
    
    if ( -1 == addIndex )
    {
        //后天技能已满
        kernel.SysInfo(user, 2, "PET_LearnSkillIsFull", null);
        return;
    }

    var addSkillId = kernel.QueryInt( self, PropertyIndex.PetReelAddSkill );
    if ( addSkillId > 0 )
    {
        for ( var i = 0; i < recRows; i++ )
        {
            if ( addSkillId == kernel.QueryRecordInt(petItem, RecordIndex.PetLearnSkillRec, i, 0) )
            {
                //已有此技能
                kernel.SysInfo(user, 2, "PET_SameLearnSkill", null);
                return;
            }
        }

        if ( addIndex >= recRows )
        {
            //新加一行
            var varlist = new VarList();
            varlist.AddInt(addSkillId);
            kernel.AddRecordRows(petItem, RecordIndex.PetLearnSkillRec, -1, varlist);
        }
        else
        {
            kernel.SetRecordInt(petItem, RecordIndex.PetLearnSkillRec, addIndex, 0, addSkillId);           
        }

        var skillsystem = jssystem.GetSkillSysetm();
        //skillsystem.AddSkill(user, addSkillId);
        //成功添加后天技能
        kernel.SysInfo(user, 2, "PET_AddLearnSkill", null);
        //销毁卷轴
        kernel.DestroySelf(self);
        //记录日志
        //
    }
}