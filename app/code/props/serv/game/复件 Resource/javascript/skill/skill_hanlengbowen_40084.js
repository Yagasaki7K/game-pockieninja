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
        self.SkillAdd1 += 300;
        target.SkillAdd0 += 300;
    }
    else if(BuffJingJiGuangHuan1 != null)
    {
        self.SkillAdd1 += 400;
        target.SkillAdd0 += 400;
    }
    else if(BuffJingJiGuangHuan2 != null)
    {
        self.SkillAdd1 += 500;
        target.SkillAdd0 += 500;
    }
    return UserSkillReturn.SKILL_LOSE;  
}