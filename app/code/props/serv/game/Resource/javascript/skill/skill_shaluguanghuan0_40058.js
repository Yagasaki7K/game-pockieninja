importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//杀戮光环
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BuffShaLuGuangHuan1 = fightsystem.GetBuff(self, 11854);
    var BuffShaLuGuangHuan2 = fightsystem.GetBuff(self, 11855);
    if((BuffShaLuGuangHuan1 != null)||(BuffShaLuGuangHuan2 != null))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    fightsystem.AddBuff(self,11853,timer,fv);  
    return UserSkillReturn.SKILL_SUCCESS;  
}