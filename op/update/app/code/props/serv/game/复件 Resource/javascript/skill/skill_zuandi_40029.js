importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//钻地, 概率是变化的，时机一样，和格挡类是共用概率的
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var MPCost = self.GetInitMaxMP()*0.19;
    if(!(LogicTool.RandInt(0, 100) < 8*self.MaxMP*target.AtkTime/18000))
        return UserSkillReturn.SKILL_LOSE;
    else if(self.MP < MPCost)
        return UserSkillReturn.SKILL_LOSE;   
    else 
    {
        //直接伤害
        var MPValue = 1;
        var direct_damage = MPCost*MPValue;
        fightsystem.Attack(self,target,direct_damage,0,fv,timer);
        //命中
        if(fv.IsHit == 1)
        {
            //检查重复状态
            var buff1 = fightsystem.GetBuff(target,11830);
            if(buff1 == null)
            {          
                fightsystem.AddBuff(target,11830,timer,fv);
            }  
        }
        self.MP -= MPCost;
        fv.DecMP = MPCost; 
        return UserSkillReturn.SKILL_SUCCESS;
    }
}