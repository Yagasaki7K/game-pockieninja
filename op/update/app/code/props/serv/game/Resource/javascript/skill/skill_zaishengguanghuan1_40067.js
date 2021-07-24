importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//再生光环
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BuffZaiShengGuangHuan2 = fightsystem.GetBuff(self, 11863);
    if(BuffZaiShengGuangHuan2 != null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    fightsystem.AddBuff(self,11862,timer,fv);  
    return UserSkillReturn.SKILL_SUCCESS;  
}