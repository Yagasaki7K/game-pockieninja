importPackage(com.d2.serv.game.Public);

// 查克拉便携包
// self:道具
// user:玩家
function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();
    var MP_INC = kernel.QueryInt(self, PropertyIndex.ItemMP);
    var HP_INC = kernel.QueryInt(self, PropertyIndex.ItemHP);

    var maxMP = kernel.QueryInt(user, PropertyIndex.MPContainerMax);
    var mp = kernel.QueryInt(user, PropertyIndex.MPContainerValue);

    var maxHP = kernel.QueryInt(user, PropertyIndex.HPContainerMax);
    var hp = kernel.QueryInt(user, PropertyIndex.HPContainerValue);

    if (MP_INC <= 0 && HP_INC <= 0)
    {
        return;
    }

    if (MP_INC > 0 && HP_INC <= 0)
    {
        if (mp >= maxMP)
        {
            kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_066", null);
            return;
        }
    }

    if (HP_INC > 0 && MP_INC <= 0)
    {
        if (hp >= maxHP)
        {
            kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_066", null);
            return;
        }
    }

    if (hp >= maxHP && mp >= maxMP)
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_066", null);
        return;
    }

    var newMp = mp + MP_INC;
    newMp = newMp > maxMP ? maxMP : newMp;
    kernel.SetInt(user, PropertyIndex.MPContainerValue, newMp);


    var newHp = hp + HP_INC;
    newHp = newHp > maxHP ? maxHP : newHp;
    kernel.SetInt(user, PropertyIndex.HPContainerValue, newHp);

    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);
}