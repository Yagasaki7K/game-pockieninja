importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//替补大招，供调用
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_ulti = LogicTool.RandInt(300,500)/100*target.HP;
    fightsystem.Damage(target,script_ulti);
    fv.TargetLastDamage = script_ulti;
    return UserSkillReturn.SKILL_SUCCESS;      
}