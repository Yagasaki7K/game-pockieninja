importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BuffZhiHuiGuangHuan0 = fightsystem.GetBuff(self,11869);
    var BuffZhiHuiGuangHuan1 = fightsystem.GetBuff(self,11870);
    var BuffZhiHuiGuangHuan2 = fightsystem.GetBuff(self,11871);
    if(BuffZhiHuiGuangHuan0 != null)
    {
        BuffZhiHuiGuangHuan0.SaveData1 += 12;
    }
    else if(BuffZhiHuiGuangHuan1 != null)
    {
        BuffZhiHuiGuangHuan1.SaveData1 += 16;
    }
    else if(BuffZhiHuiGuangHuan2 != null)
    {
        BuffZhiHuiGuangHuan2.SaveData1 += 20;
    }
    return UserSkillReturn.SKILL_LOSE;  
}