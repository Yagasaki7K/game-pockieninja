importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//土流大河，减速
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(target,1810,timer,fv);   //SkillAdd2影响buff等级    
    return UserSkillReturn.SKILL_SUCCESS;
}