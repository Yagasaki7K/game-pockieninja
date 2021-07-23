importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//飞雷神，33%几率转移
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 3.8);
    //不会受天之咒印影响
    switch(skill.GetLevel())
    {
        case 1: 
        {
            break;
        }
        case 2: 
        {
            break;
        } 
        case 3: 
        {
            break;
        } 
        case 4: 
        {
            break;
        } 
        case 5: 
        {
            break;
        }
        case 6: 
        {
            break;
        }
        case 7: 
        {
            break;
        } 
        case 8: 
        {
            break;
        }
        case 9: 
        {
            break;
        } 
        case 10: 
        {
            break;
        }  
        case 11: 
        {
            break;
        }
        case 12: 
        {
            break;
        }
        case 13: 
        {
            break;
        }
        default: ;
    }
    var BuffSeal = fightsystem.GetBuff(self, 11812);
    if(BuffSeal != null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }     
    var BuffSelfCloud = fightsystem.GetBuff(self,11827);
    var BuffTargetCloud = fightsystem.GetBuff(target,11827);
    //两边都没，说明是开场
    if((BuffSelfCloud == null)&&(BuffTargetCloud == null))
    {   
        if(self.MP < MPCost)
        {
            return UserSkillReturn.SKILL_LOSE;
        } 
        fightsystem.AddBuff(target,11827,timer,fv,skill.GetLevel(),self.Level);
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
        {
            fightsystem.RemoveBuff(self,11836,timer,fv);
        }
        return UserSkillReturn.SKILL_SUCCESS;
    }
    //30%几率转移
    else if(LogicTool.RandInt(0, 99) < 30)
    {
        if(BuffSelfCloud == null)
        {
            fightsystem.RemoveBuff(target,11827,timer,fv);
            fightsystem.AddBuff(self,11827,timer,fv,skill.GetLevel(),self.Level);
        }
        else
        {
            fightsystem.RemoveBuff(self,11827,timer,fv);
            fightsystem.AddBuff(target,11827,timer,fv,skill.GetLevel(),self.Level);
        }
        return UserSkillReturn.SKILL_SUCCESS;
    }
    return UserSkillReturn.SKILL_LOSE; 
}