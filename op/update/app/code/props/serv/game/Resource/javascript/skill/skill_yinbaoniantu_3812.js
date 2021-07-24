importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//黏土炸弹，将敌方若干回合内的伤害复制，进行一次反馈
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 2);
    var NumerationTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            NumerationTime = 1100;
            break;
        }
        case 2: 
        {
            NumerationTime = 1100;
            break;
        } 
        case 3: 
        {
            NumerationTime = 1;
            break;
        } 
        case 4: 
        {
            NumerationTime = 1;
            break;
        } 
        case 5: 
        {
            NumerationTime = 1;
            break;
        }
        case 6: 
        {
            NumerationTime = 1;
            break;
        }
        case 7: 
        {
            NumerationTime = 1;
            break;
        } 
        case 8: 
        {
            NumerationTime = 1;
            break;
        }
        case 9: 
        {
            NumerationTime = 1;
            break;
        } 
        case 10: 
        {
            NumerationTime = 1;
            break;
        }
        case 11: 
        {
            NumerationTime = 1;
            break;
        }
        case 12: 
        {
            NumerationTime = 1;
            break;
        }
        case 13: 
        {
            NumerationTime = 1;
            break;
        }   
        default: ;
    }
    NumerationTime = NumerationTime * (1+0.01*LogicTool.ToInt(self.SkillAdd2*0.01));
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var BuffSeal = fightsystem.GetBuff(self, 11812);
    if(BuffSeal != null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(self.MP < MPCost)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    var InitBuff = fightsystem.GetBuff(self,8888);
    if(InitBuff == null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else 
    {
        if(InitBuff.SaveData1%10000/1000 < 1)
        {
            var BuffNumeration = fightsystem.GetBuff(target,11820);
            if(BuffNumeration == null)
            {
                fightsystem.AddBuff(target,11820,timer,fv,NumerationTime,0);
                InitBuff.SaveData1 += 1000;
                self.MP -= MPCost;
                fv.DecMP = MPCost;
                var BuffDrain = fightsystem.GetBuff(self, 11836);
                if(BuffDrain != null)
                    fightsystem.RemoveBuff(self,11836,timer,fv); 
                return UserSkillReturn.SKILL_SUCCESS;
            }
        }
        return UserSkillReturn.SKILL_LOSE;
    }
}