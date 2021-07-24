importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//自爆
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_zb = 50;            //SkillAdd2
    fightsystem.Attack(self,target,script_zb,0,fv,timer);
    return UserSkillReturn.SKILL_SUCCESS;
}