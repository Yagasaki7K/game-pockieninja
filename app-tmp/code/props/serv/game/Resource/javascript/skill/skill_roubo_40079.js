importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BuffShaLuGuangHuan0 = fightsystem.GetBuff(self,11853);
    var BuffShaLuGuangHuan1 = fightsystem.GetBuff(self,11854);
    var BuffShaLuGuangHuan2 = fightsystem.GetBuff(self,11855);
    if(BuffShaLuGuangHuan0 != null)
    {
        self.SkillAdd5 += 300;
        target.SkillAdd8 += 300;
    }
    else if(BuffShaLuGuangHuan1 != null)
    {
        self.SkillAdd5 += 400;
        target.SkillAdd8 += 400;
    }
    else if(BuffShaLuGuangHuan2 != null)
    {
        self.SkillAdd5 += 500;
        target.SkillAdd8 += 500;
    }
    return UserSkillReturn.SKILL_LOSE;  
}