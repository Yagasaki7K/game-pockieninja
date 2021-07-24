importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Kernel.KernelPublic);

// 恢复体力
// self:道具
// user:玩家
function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();

    var HP_INC = kernel.QueryInt(self, PropertyIndex.ItemHP);
    var MP_INC = kernel.QueryInt(self, PropertyIndex.ItemMP);
    var SP_INC = kernel.QueryInt(self, PropertyIndex.ItemSP);
    var energysystem = jssystem.GetEnergySystem();

    var flag = 0;
    if (HP_INC > 0)
    {
        var maxHP = kernel.QueryInt(user, PropertyIndex.MaxHP);
        var chpMax = kernel.QueryInt(user, PropertyIndex.HPContainerMax);
        var hp = kernel.QueryInt(user, PropertyIndex.HP);
        var chp = kernel.QueryInt(user, PropertyIndex.HPContainerValue);

        if (hp < maxHP || chp < chpMax)
        {
            flag++;
        }
    }

    if (MP_INC > 0)
    {
        var maxMP = kernel.QueryInt(user, PropertyIndex.MaxMP);
        var cmpMax = kernel.QueryInt(user, PropertyIndex.MPContainerMax);
        var mp = kernel.QueryInt(user, PropertyIndex.MP);
        var cmp = kernel.QueryInt(user, PropertyIndex.MPContainerValue);

        if (mp < maxMP || cmp < cmpMax)
        {
            flag++;
        }
    }

    if (SP_INC > 0)
    {
//        if(!energysystem.CanUseEnergyItem(user, SP_INC))
//        {
//            //kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "Common_CantFullVP", null);
//            kernel.ShowMsgBox(user, MsgBoxDefine.MSGBOX_NORMAL, TypeDefine.MSGBOX_ID_OK, "Common_CantFullVP", null, null);
//            return;
//        }

        if (energysystem.CanIncEnergy(user))
        {
            flag++;
        }
    }

    if (flag == 0)
    {
        kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_122", null);
        return;
    }

    if (HP_INC > 0)
    {
        var newHp = hp + HP_INC;
        var resHP = newHp - maxHP;
        newHp = newHp > maxHP ? maxHP : newHp;
        kernel.SetInt(user, hpIndex, newHp);

        if (resHP > 0)
        {
            var newCHP = resHP + chp;
            newCHP = newCHP > chpMax ? chpMax : newCHP;
            kernel.SetInt(user, PropertyIndex.HPContainerValue, newCHP);
        }
    }

    if (MP_INC > 0)
    {
        var newMp = mp + MP_INC;
        var resMP = newMp - maxMP;
        newMp = newMp > maxMP ? maxMP : newMp;
        kernel.SetInt(user, mpIndex, newMp);

        if (resMP > 0)
        {
            var newCMP = resMP + cmp;
            newCMP = newCMP > cmpMax ? cmpMax : newCMP;
            kernel.SetInt(user, PropertyIndex.MPContainerValue, newCMP);
        }
    }

    if (SP_INC > 0)
    {
        energysystem.IncEnrgy(user, SP_INC);

        //kernel.IncInt(user, PropertyIndex.IncEnergyCount, SP_INC);
    }

    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);
}

// 批量使用道具
// self:道具
// user:玩家
// foldNum:使用数量
function OnBatchUse(jssystem, self, user, foldNum)
{
    var kernel = jssystem.GetKernel();
    if (!kernel.IsClass(self, ClassIndex.CLASS_PHARMACYITEM))
    {
        return;
    }

    var SP_INC = kernel.QueryInt(self, PropertyIndex.ItemSP);
    var energysystem = jssystem.GetEnergySystem();

    if (SP_INC > 0)
    {
        var canInc = energysystem.CanIncEnergy(user);

        if(canInc > 0)
        {
            var needCnt = canInc / SP_INC;
            if(canInc % SP_INC > 0)
            {
                needCnt++;
            }

            if(needCnt > foldNum)
            {
                needCnt = foldNum;
            }

            kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1 * needCnt);

            energysystem.IncEnrgy(user, SP_INC * needCnt);
        }
        else
        {
            kernel.SysInfo(user, SysInfoType.SYSINFO_TOP, "FeedBack_Common_122", null);
        }
    }   
}