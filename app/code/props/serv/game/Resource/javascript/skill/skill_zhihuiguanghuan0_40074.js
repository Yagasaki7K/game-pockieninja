importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//智慧光环
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BuffZhiHuiGuangHuan1 = fightsystem.GetBuff(self, 11870);
    var BuffZhiHuiGuangHuan2 = fightsystem.GetBuff(self, 11871);
    if((BuffZhiHuiGuangHuan1 != null)||(BuffZhiHuiGuangHuan2 != null))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    fightsystem.AddBuff(self,11869,timer,fv);  
    return UserSkillReturn.SKILL_SUCCESS;  
}