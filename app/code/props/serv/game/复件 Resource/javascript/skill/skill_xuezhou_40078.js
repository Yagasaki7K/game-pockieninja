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
        self.VampiricHP += 3;
    }
    else if(BuffShaLuGuangHuan1 != null)
    {
        self.VampiricHP += 4;
    }
    else if(BuffShaLuGuangHuan2 != null)
    {
        self.VampiricHP += 5;
    }
    return UserSkillReturn.SKILL_LOSE;  
}