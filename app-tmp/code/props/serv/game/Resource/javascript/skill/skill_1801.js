importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //扔飞镖,30%几率被回扔
    var script_damage = 15;   //SkillAdd6
    //看对方是否踢回扔飞镖
    if (LogicTool.RandInt(0, 100) < 30)    //target.CounterBombMul
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