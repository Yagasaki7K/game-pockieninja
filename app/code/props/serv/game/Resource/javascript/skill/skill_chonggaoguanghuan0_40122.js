importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//崇高光环
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BuffChongGaoGuangHuan1 = fightsystem.GetBuff(self, 11899);
    var BuffChongGaoGuangHuan2 = fightsystem.GetBuff(self, 11900); 
    if((BuffChongGaoGuangHuan1 != null)||(BuffChongGaoGuangHuan2 != null))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    fightsystem.AddBuff(self,11898,timer,fv);  
    return UserSkillReturn.SKILL_SUCCESS;  
}