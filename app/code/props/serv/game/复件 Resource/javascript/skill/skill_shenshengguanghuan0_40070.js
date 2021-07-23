importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//神圣光环
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BuffShenShengGuangHuan1 = fightsystem.GetBuff(self, 11866);
    var BuffShenShengGuangHuan2 = fightsystem.GetBuff(self, 11867); 
    if((BuffShenShengGuangHuan1 != null)||(BuffShenShengGuangHuan2 != null))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    fightsystem.AddBuff(self,11865,timer,fv);  
    return UserSkillReturn.SKILL_SUCCESS;  
}