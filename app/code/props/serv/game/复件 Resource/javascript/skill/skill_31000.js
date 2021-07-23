importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //扔飞镖
    var fd = 15;
   //看对方是否踢回扔飞镖
    if (LogicTool.RandInt(0, 100) < 80)    //target.CounterBombMul
    {
        fv.RoleIndex = target.Index;
        fv.Event = FightSavaDefine.BACK_THROWD_BOMB;
        fv.SkillId = 31000;
        fightsystem.Attack(target,self,fd,0,fv,timer);
    }
    else
    {
        fightsystem.Attack(self,target,fd,0,fv,timer);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}
