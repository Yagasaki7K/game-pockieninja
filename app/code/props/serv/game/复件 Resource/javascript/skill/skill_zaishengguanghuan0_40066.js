importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//再生光环
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BuffZaiShengGuangHuan1 = fightsystem.GetBuff(self, 11862);
    var BuffZaiShengGuangHuan2 = fightsystem.GetBuff(self, 11863);
    if((BuffZaiShengGuangHuan1 != null)||(BuffZaiShengGuangHuan2 != null))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    fightsystem.AddBuff(self,11861,timer,fv);  
    return UserSkillReturn.SKILL_SUCCESS;  
}