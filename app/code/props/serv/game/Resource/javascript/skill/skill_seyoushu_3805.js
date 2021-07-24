importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//色诱术
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 2.4);
    var CharmTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            CharmTime = 1500;
            break;
        }
        case 2: 
        {
            CharmTime = 1500;
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
    CharmTime = CharmTime * (1+0.01*LogicTool.ToInt(self.SkillAdd8*0.01));
    var CheckBuff = fightsystem.GetRollBuff(target);
    if(!((CheckBuff != null)&&(CheckBuff.GetOverlying() == 0)))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var InitBuff = fightsystem.GetBuff(target,8888);
    if(InitBuff == null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(!(InitBuff.SaveData%10000000/1000000 < 1))
    {
        return UserSkillReturn.SKILL_LOSE;
    }                            
    if(self.MP < MPCost)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else 
    {
        var BuffCharm = fightsystem.GetBuff(target,11815);
        if(BuffCharm == null)
        {       
            fightsystem.AddBuff(target,11815,timer,fv,CharmTime,0);
            self.MP -= MPCost;
            fv.DecMP = MPCost;
            InitBuff.SaveData += 1000000;
            var BuffDrain = fightsystem.GetBuff(self, 11836);
            if(BuffDrain != null)
                fightsystem.RemoveBuff(self,11836,timer,fv); 
            return UserSkillReturn.SKILL_SUCCESS;
        }
        return UserSkillReturn.SKILL_LOSE;
    }
}