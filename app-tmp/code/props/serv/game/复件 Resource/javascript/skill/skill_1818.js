importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //扔飞镖，飞镖分裂成3个
    var script_damage = 15*3;   //SkillAdd6
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    fv.AttackCount = 3;
    return UserSkillReturn.SKILL_SUCCESS;
}