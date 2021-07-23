importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//尸鬼封尽，全技能等级下降
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 3.1);
    var GhostTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            GhostTime = 2500;
            break;
        }
        case 2: 
        {
            GhostTime = 2500;
            break;
        } 
        case 3: 
        {
            GhostTime = 2.5;
            break;
        } 
        case 4: 
        {
            GhostTime = 2.7;
            break;
        } 
        case 5: 
        {
            GhostTime = 2.8;
            break;
        }
        case 6: 
        {
            GhostTime = 3;
            break;
        }
        case 7: 
        {
            GhostTime = 3.1;
            break;
        } 
        case 8: 
        {
            GhostTime = 3.2;
            break;
        }
        case 9: 
        {
            GhostTime = 3.4;
            break;
        } 
        case 10: 
        {
            GhostTime = 3.5;
            break;
        }
        case 11: 
        {
            GhostTime = 3.6;
            break;
        }
        case 12: 
        {
            GhostTime = 3.7;
            break;
        }
        case 13: 
        {
            GhostTime = 3.8;
            break;
        }   
        default: ;
    }
    GhostTime = GhostTime * (1+0.01*LogicTool.ToInt(self.SkillAdd7*0.01));
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var BuffCurse = fightsystem.GetBuff(target, 11823);
    if(BuffCurse != null)
    {
        GhostTime = GhostTime*0.5;
    }
    if(self.MP < MPCost)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    var InitBuff = fightsystem.GetBuff(target,8888);
    if(InitBuff == null)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    if(!(InitBuff.SaveData%100000/10000 < 1))
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else
    {
        var BuffPeg = fightsystem.GetBuff(target,11840);
        var AttackDamage = fightsystem.GetDamage(self);
        var BackDamage = 0;
        var BuffWarmBlooded = fightsystem.GetBuff(self,11814);
        if(BuffWarmBlooded != null)
        {
            BackDamage = AttackDamage*0.2;
        }
        fightsystem.Attack(self,target,AttackDamage,BackDamage,fv,timer);
        if((fv.IsHit == 1)&&(BuffPeg == null))
        {
            //检查重复状态
            var BuffGhost = fightsystem.GetBuff(target,11808);
            if(BuffGhost != null)
            {          
                fightsystem.RemoveBuff(target,11808,timer,fv);
            }
            fightsystem.AddBuff(target,11808,timer,fv,GhostTime,0);
            InitBuff.SaveData += 10000;
        }       
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
        {
            fightsystem.RemoveBuff(self,11836,timer,fv);
        }
        return UserSkillReturn.SKILL_SUCCESS;
    }
}