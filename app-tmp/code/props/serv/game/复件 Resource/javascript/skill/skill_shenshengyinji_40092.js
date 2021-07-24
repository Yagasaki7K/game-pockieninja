importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BuffShenShengGuangHuan0 = fightsystem.GetBuff(self,11865);
    var BuffShenShengGuangHuan1 = fightsystem.GetBuff(self,11866);
    var BuffShenShengGuangHuan2 = fightsystem.GetBuff(self,11867);
    if(BuffShenShengGuangHuan0 != null)
    {
        self.SkillAdd7 += 300;
        BuffShenShengGuangHuan0.SaveData += 15;
    }
    else if(BuffShenShengGuangHuan1 != null)
    {
        self.SkillAdd7 += 400;
        BuffShenShengGuangHuan1.SaveData += 20;
    }
    else if(BuffShenShengGuangHuan1 != null)
    {
        self.SkillAdd7 += 500;
        BuffShenShengGuangHuan1.SaveData += 25;
    }
    return UserSkillReturn.SKILL_LOSE;
}