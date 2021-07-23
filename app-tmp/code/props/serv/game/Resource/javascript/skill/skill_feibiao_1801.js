importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = 17;   //SkillAdd6
    //看对方是否回扔飞镖且必须是CounterBombMul不为0的角色或人形怪
    if ((LogicTool.RandInt(0, 100) < 30)&&(target.CounterBombMul > 0))    //target.CounterBombMul
    {
        fv.RoleIndex = target.Index;
        fv.Event = FightSavaDefine.BACK_THROWD_BOMB;
        fv.SkillId = 1801;
        fightsystem.Attack(target,self,script_damage,0,fv,timer);
    }
    else
    {
        fightsystem.Attack(self,target,script_damage,0,fv,timer);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}