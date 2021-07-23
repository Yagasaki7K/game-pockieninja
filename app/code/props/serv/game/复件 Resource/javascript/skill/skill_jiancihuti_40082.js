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
        self.ReboundAttach += 3;
    }
    else if(BuffJingJiGuangHuan1 != null)
    {
        self.ReboundAttach += 4;
    }
    else if(BuffJingJiGuangHuan2 != null)
    {
        self.ReboundAttach += 5;
    }
    return UserSkillReturn.SKILL_LOSE;  
}