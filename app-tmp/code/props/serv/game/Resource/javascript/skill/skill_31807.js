importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//网，行动前，可以躲
function OnUser(fightsystem, self, target, skill, fv,timer) 
{
    if(LogicTool.RandInt(0, 100) < target.DodgeMul-self.HitMul) 
    {
        fv.IsHit = 0;
    }
    else
    {
        fightsystem.AddBuff(target,1816,timer,fv);   //SkillAdd6影响buff等级    
    }
    return UserSkillReturn.SKILL_SUCCESS;
}