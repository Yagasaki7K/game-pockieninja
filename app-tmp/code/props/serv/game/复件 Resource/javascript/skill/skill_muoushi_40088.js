importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BuffZaiShengGuangHuan0 = fightsystem.GetBuff(self,11861);
    var BuffZaiShengGuangHuan1 = fightsystem.GetBuff(self,11862);
    var BuffZaiShengGuangHuan2 = fightsystem.GetBuff(self,11863);
    if(BuffZaiShengGuangHuan0 != null)
    {
        self.SkillAdd6 += 300;
        BuffZaiShengGuangHuan0.SaveData += 1500;
    }
    else if(BuffZaiShengGuangHuan1 != null)
    {
        self.SkillAdd6 += 400;
        BuffZaiShengGuangHuan1.SaveData += 2000;
    }
    else if(BuffZaiShengGuangHuan2 != null)
    {
        self.SkillAdd6 += 500;
        BuffZaiShengGuangHuan2.SaveData += 2500;
    }
    return UserSkillReturn.SKILL_LOSE;  
}