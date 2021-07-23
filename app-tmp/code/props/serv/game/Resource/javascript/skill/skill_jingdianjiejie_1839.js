importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//静电结界，若干回合内所有技能概率提升
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 3);
    var CapHP = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            CapHP = 18;
            break;
        }
        case 2: 
        {
            CapHP = 18;
            break;
        } 
        case 3: 
        {
            CapHP = 19;
            break;
        } 
        case 4: 
        {
            CapHP = 25;
            break;
        } 
        case 5: 
        {
            CapHP = 31;
            break;
        }
        case 6: 
        {
            CapHP = 39;
            break;
        }
        case 7: 
        {
            CapHP = 47;
            break;
        } 
        case 8: 
        {
            CapHP = 56;
            break;
        }
        case 9: 
        {
            CapHP = 66;
            break;
        } 
        case 10: 
        {
            CapHP = 76;
            break;
        }
        case 11: 
        {
            CapHP = 87;
            break;
        }
        case 12: 
        {
            CapHP = 98;
            break;
        }
        case 13: 
        {
            CapHP = 111;
            break;
        }  
        default: ;
     }
     CapHP = CapHP * (1+0.01*LogicTool.ToInt(self.SkillAdd3*0.01));
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
     var InitBuff = fightsystem.GetBuff(self,8888);
     if(InitBuff == null)
     {
         return UserSkillReturn.SKILL_LOSE;
     }
     if(!(InitBuff.SaveData1%100000/10000 < 1))
     {
         return UserSkillReturn.SKILL_LOSE;
     }
     if(self.MP < MPCost)
     {
         return UserSkillReturn.SKILL_LOSE; 
     }     
     else 
     {
        var BuffCap = fightsystem.GetBuff(self,11831);
        if(BuffCap == null)
        {     
            fightsystem.AddBuff(self,11831,timer,fv,LogicTool.ToInt(CapHP*self.MaxHP*0.01),0);
            InitBuff.SaveData1 += 10000;
            self.MP -= MPCost;
            fv.DecMP = MPCost; 
            var BuffDrain = fightsystem.GetBuff(self, 11836);
            if(BuffDrain != null)
                fightsystem.RemoveBuff(self,11836,timer,fv); 
            return UserSkillReturn.SKILL_SUCCESS;            
        }
        else
        {
            return UserSkillReturn.SKILL_LOSE; 
        }
    }
}