importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//土牢，控制，吸蓝，加防
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(target,1815,timer,fv);   //SkillAdd2影响buff等级    
    return UserSkillReturn.SKILL_SUCCESS;
}