importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//招财猫作弊
function OnUser(fightsystem, self, target, skill, fv,timer)
{  
    fightsystem.AddBuff(target,99999,timer,fv);  
    fv.IsHit = 0;
    return UserSkillReturn.SKILL_SUCCESS;       
}