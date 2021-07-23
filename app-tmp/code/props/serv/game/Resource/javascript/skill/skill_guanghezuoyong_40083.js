importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BuffJingJiGuangHuan0 = fightsystem.GetBuff(self,11857);
    var BuffJingJiGuangHuan1 = fightsystem.GetBuff(self,11858);
    var BuffJingJiGuangHuan2 = fightsystem.GetBuff(self,11859);
    if(BuffJingJiGuangHuan0 != null)
    {
        BuffJingJiGuangHuan0.SaveData += 3;
    }
    else if(BuffJingJiGuangHuan1 != null)
    {
        BuffJingJiGuangHuan1.SaveData += 4;
    }
    else if(BuffJingJiGuangHuan2 != null)
    {
        BuffJingJiGuangHuan2.SaveData += 5;
    }
    return UserSkillReturn.SKILL_LOSE;  
}