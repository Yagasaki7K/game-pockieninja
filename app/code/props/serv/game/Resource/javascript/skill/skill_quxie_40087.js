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
        BuffZaiShengGuangHuan0.SaveData += 9;
    }
    else if(BuffZaiShengGuangHuan1 != null)
    {
        BuffZaiShengGuangHuan1.SaveData += 12;
    }
    else if(BuffZaiShengGuangHuan2 != null)
    {
        BuffZaiShengGuangHuan2.SaveData += 15;
    }
    return UserSkillReturn.SKILL_LOSE;  
}