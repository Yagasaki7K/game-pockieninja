importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//砂之守护
function OnUser(fightsystem, self, target, skill, fv,timer)
{    
	var InitBuff = fightsystem.GetBuff(self,8888);
    if((LogicTool.RandInt(0, 99) > 30)&&(InitBuff.SaveData9 %100/10 >= 3))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else
    { 
        var HPRecover = self.GetInitMaxHP()*0.3
        self.HP = HPRecover;
        fv.IncHP = HPRecover;
		InitBuff.SaveData9 += 10;
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
            fightsystem.RemoveBuff(self,11836,timer,fv); 
        return UserSkillReturn.SKILL_SUCCESS;
    }
}