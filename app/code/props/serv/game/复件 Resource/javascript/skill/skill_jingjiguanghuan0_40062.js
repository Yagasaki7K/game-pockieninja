importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//荆棘光环
function OnUser(fightsystem, self, target, skill, fv,timer)
{ 
    var BuffJingJiGuangHuan1 = fightsystem.GetBuff(self, 11858);
    var BuffJingJiGuangHuan2 = fightsystem.GetBuff(self, 11859);
    if((BuffJingJiGuangHuan1 != null)||(BuffJingJiGuangHuan2 != null))
    {
        return UserSkillReturn.SKILL_LOSE;
    }  
    fightsystem.AddBuff(self,11857,timer,fv);  
    return UserSkillReturn.SKILL_SUCCESS;  
}