importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//格挡
function OnUser(fightsystem, self, target, skill, fv,timer)
{ 
    var Chance = 0;
    var FinalParry = self.ParryMul - target.Pierce;
    if(FinalParry > 0)
    {
        Chance = FinalParry/16;
    }
    if(LogicTool.RandInt(0, 99) < Chance)
    {
        var BuffParry = fightsystem.GetBuff(self,11841);
        var DelayTime = target.GetInitAtkTime()*0.6;
        //仅当被清掉的时候，即非第一次加上的时候，给目标一个delaytime
        if(BuffParry == null)
        {
            fightsystem.AddBuff(self,11841,timer,fv,DelayTime,0);
        }
    }
    return UserSkillReturn.SKILL_LOSE;
}