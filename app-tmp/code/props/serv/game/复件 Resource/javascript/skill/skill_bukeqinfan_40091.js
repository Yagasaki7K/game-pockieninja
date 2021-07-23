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
        self.CounterMul += 6;
    }
    else if(BuffShenShengGuangHuan1 != null)
    {
        self.CounterMul += 8;
    }
    else if(BuffShenShengGuangHuan2 != null)
    {
        self.CounterMul += 10;
    }
    return UserSkillReturn.SKILL_LOSE;  
}