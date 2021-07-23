importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//与对方交换60%的当前血，转换结果必须大于自身总量的25%
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    if((target.HP-self.HP)*12 > self.MaxHP*5)
    {
        var script_m = target.HP*0.6 - self.HP*0.6;
        self.HP += script_m;
        target.HP -= script_m;
        fv.IncHP = script_m;
        fv.TargetLastDamage = script_m;
        return UserSkillReturn.SKILL_SUCCESS;
    }
    return UserSkillReturn.SKILL_LOSE;
}