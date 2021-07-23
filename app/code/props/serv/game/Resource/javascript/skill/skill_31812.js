importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//黏土炸弹，几率性爆炸，但拆掉的时候必然造成爆炸
function OnUser(fightsystem, self, target, skill, fv,timer)
{  
    fightsystem.AddBuff(target,1820,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}